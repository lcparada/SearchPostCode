import {
  View,
  Modal,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { useState, useContext, useEffect } from "react";

import * as ImagePicker from "expo-image-picker";

import { BlurView } from "expo-blur";

import styles from "./styles";

import { UserContextData } from "../context/UserData";

import * as Location from "expo-location";

import { firstName } from "../helpers";

type Props = {
  isEnabled: boolean;
  openEditProfileScreen: () => void;
};

export default function EditProfileModal(props: Props) {
  const { saveData } = useContext(UserContextData);

  const [name, setName] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [street, setStreet] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);

  async function getPermissions(): Promise<void> {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        console.log("Please granted location permissions");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        let adress = await Location.reverseGeocodeAsync(location.coords);
        console.log(adress);
        setCep(adress[0]?.postalCode ?? "");
        setCity(adress[0]?.subregion ?? "");
        setState(adress[0].region ?? "");
        setNeighborhood(adress[0]?.district ?? "");
        setStreet(adress[0]?.street ?? "");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    saveData(firstName(name), cep, image);
  }, [name, cep, image]);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  // useEffect(() => {
  //   async function saveData() {
  //     await AsyncStorage.setItem("photo", image);
  //     await AsyncStorage.setItem("name", name);
  //     await AsyncStorage.setItem("cep", cep as string);
  //     await AsyncStorage.setItem("city", city as string);
  //     await AsyncStorage.setItem("neighborhood", neighborhood as string);
  //     await AsyncStorage.setItem("street", street as string);
  //   }
  //   saveData();
  // }, [image, name, cep, city, neighborhood, street]);

  // useEffect(() => {
  //   async function setData() {
  //     const photoData = await AsyncStorage.getItem("photo");
  //     const nameData = await AsyncStorage.getItem("name");
  //     const cepData = await AsyncStorage.getItem("cep");
  //     const cityData = await AsyncStorage.getItem("cityData");
  //     const neighborhoodData = await AsyncStorage.getItem("neighborhood");
  //     const streetData = await AsyncStorage.getItem("street");
  //     if (photoData !== null) {
  //       setName(photoData);
  //       setName(nameData as string);
  //       setCep(cepData);
  //       setCity(cityData);
  //       setNeighborhood(neighborhoodData);
  //       setStreet(streetData);
  //     }
  //   }
  //   setData();
  // }, []);

  return (
    <Modal animationType="slide" visible={props.isEnabled} transparent={true}>
      <BlurView intensity={122} tint="light" style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.headerText}>
            <Text style={styles.textHeader}>Editar perfil</Text>
          </View>

          <View style={styles.changePhoto}>
            <Image
              source={{
                uri:
                  image === null
                    ? "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    : image,
              }}
              style={styles.img}
            ></Image>
            <TouchableOpacity onPress={() => pickImage()}>
              <Text style={styles.textChangePhoto}>Mudar foto+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.name}>
              <Text style={styles.textName}>Nome completo:</Text>
              <TextInput
                style={styles.inputName}
                placeholder="Digite seu nome aqui!"
                placeholderTextColor="white"
                value={name}
                onChangeText={setName}
              ></TextInput>
            </View>

            <View style={styles.rest}>
              <Text style={styles.textRest}>CEP:</Text>
              <TextInput
                style={styles.inputRest}
                placeholder="Digite seu cep aqui!"
                placeholderTextColor="white"
                value={cep as string}
                onChangeText={setCep}
              ></TextInput>
              <View style={styles.unknowCep}>
                <Text style={styles.textUnknowCep}>Não sabe qual seu cep?</Text>
                <TouchableOpacity onPress={getPermissions}>
                  <Text
                    style={{
                      color: "#274690",
                      fontFamily: "Lexend_700Bold",
                      textAlign: "center",
                    }}
                  >
                    Toque aqui!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rest}>
              <Text style={styles.textRest}>Cidade:</Text>
              <TextInput
                style={styles.inputRest}
                placeholder="Digite sua cidade aqui!"
                placeholderTextColor="white"
                value={city as string}
                onChangeText={setCity}
              ></TextInput>
            </View>

            <View style={styles.rest}>
              <Text style={styles.textRest}>Estado:</Text>
              <TextInput
                style={styles.inputRest}
                placeholder="Digite seu estado aqui!"
                placeholderTextColor="white"
                value={state as string}
                onChangeText={setState}
              ></TextInput>
            </View>

            <View style={styles.rest}>
              <Text style={styles.textRest}>Bairro:</Text>
              <TextInput
                style={styles.inputRest}
                placeholder="Digite seu bairro aqui!"
                placeholderTextColor="white"
                value={neighborhood as string}
                onChangeText={setNeighborhood}
              ></TextInput>
            </View>

            <View style={styles.rest}>
              <Text style={styles.textRest}>Rua com número:</Text>
              <TextInput
                style={styles.inputRest}
                placeholder="Digite seu bairro aqui!"
                placeholderTextColor="white"
                value={street as string}
                onChangeText={setStreet}
              ></TextInput>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.openEditProfileScreen()}
              >
                <Text style={styles.textButton}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </BlurView>
    </Modal>
  );
}
