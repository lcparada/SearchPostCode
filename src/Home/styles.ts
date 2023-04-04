import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EAEB",
  },
  header: {
    marginTop: 80,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: "#274690",
    borderWidth: 1,
  },
  textProfile: {
    fontFamily: "Lexend_300Light",
    fontSize: 16,
    textAlign: "center",
  },
  location: {
    flexDirection: "column",
    marginLeft: 130,
    alignItems: "center",
    rowGap: 5,
  },
  title: {
    marginTop: 40,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontFamily: "Lexend_700Bold",
    color: "#333333",
  },
  body: {
    flex: 1,
    backgroundColor: "#274690",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 20,
    marginTop: 20,
    alignItems: "center",
  },
  textCEP: {
    color: "#E6EAEB",
    fontFamily: "Lexend_400Regular",
    marginTop: 40,
  },
  inputCEP: {
    width: 330,
    height: 40,
    borderColor: "#E6EAEB",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    fontFamily: "Lexend_300Light",
    color: "white",
  },
  error: {
    color: "#A20B15",
    fontFamily: "Lexend_400Regular",
  },
  containerButton: {
    marginTop: 30,
  },
  button: {
    width: 330,
    height: 60,
    borderColor: "#E6EAEB",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
    color: "#E6EAEB",
  },
  informations: {
    marginTop: 20,
    rowGap: 20,
    width: 330,
  },
  textInformations: {
    color: "#E6EAEB",
    fontFamily: "Lexend_400Regular",
  },
});

export default styles;
