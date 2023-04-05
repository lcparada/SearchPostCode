import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import receiveCEP from "../../services/api";
import EditProfileModal from "../EditProfileModal";

import { UserContextData } from "../../context/UserData";

type Cep = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
};

export default function Home() {
  const { nameUser, cepUser, imageUser } = useContext(UserContextData);

  const [getCEP, setGetCEP] = useState<string>("");
  const [result, setResult] = useState<Cep>();
  const [error, setError] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const [openModal, setOpenModal] = useState<boolean>(false);

  async function receiveDataCep(): Promise<Cep> {
    const response = await receiveCEP.get(
      `${getCEP}?token=3111|xg9cjiVjcHD0jjoc9zI2xyMnPoGI7kX5`
    );
    return response.data;
  }

  function openEditProfileScreen() {
    setOpenModal(!openModal);
  }

  async function searchCEP() {
    if (getCEP.length < 8 || getCEP.includes("-") === true) {
      setError("O cep está errado");
    } else {
      try {
        const value = await receiveDataCep();
        setError("");
        setResult(value);
        setShow(true);
        Keyboard.dismiss();
      } catch (error) {
        console.log("ERROR:" + error);
      }
    }
  }

  function clearAll() {
    setGetCEP("");
    setShow(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={openEditProfileScreen}>
            <Image
              source={{
                uri:
                  imageUser === null
                    ? "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    : imageUser,
              }}
              style={styles.img}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.textProfile}>
            {" "}
            Hello,{"\n"}
            <Text
              style={{
                fontFamily: "Lexend_600SemiBold",
                fontSize: 18,
                color: "#274690",
              }}
            >
              {nameUser}
            </Text>
          </Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="ios-location-outline" size={26} color="black" />
          <Text style={{ fontFamily: "Lexend_700Bold", color: "#274690" }}>
            {cepUser}
          </Text>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={styles.textTitle}>Buscador de CEP</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.textCEP}>CEP:</Text>
        <TextInput
          style={styles.inputCEP}
          cursorColor="white"
          keyboardType="numeric"
          placeholder="Ex: 23540003"
          value={getCEP}
          onChangeText={setGetCEP}
          placeholderTextColor="white"
          maxLength={8}
        ></TextInput>
        <Text style={styles.error}>{error}</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={searchCEP}>
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>
        </View>
        {show === true ? (
          <View style={styles.informations}>
            <Text style={styles.textInformations}>CEP: {result?.cep} </Text>
            <Text style={styles.textInformations}>Estado: {result?.state}</Text>
            <Text style={styles.textInformations}>Cidade: {result?.city}</Text>
            <Text style={styles.textInformations}>
              Bairro: {result?.neighborhood}{" "}
            </Text>
            <Text style={styles.textInformations}>Rua: {result?.street}</Text>
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={clearAll}
            >
              <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <EditProfileModal
        isEnabled={openModal}
        openEditProfileScreen={openEditProfileScreen}
      />
    </SafeAreaView>
  );
}
