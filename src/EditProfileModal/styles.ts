import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    marginTop: 40,
    alignItems: "center",
    color: "#333333",
  },
  textHeader: {
    fontSize: 26,
    fontFamily: "Lexend_700Bold",
    color: "#333333",
  },
  changePhoto: {
    marginTop: 40,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  textChangePhoto: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#274690",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: "#274690",
    borderWidth: 1,
  },
  body: {
    alignItems: "center",
    flex: 1,
  },
  name: {
    marginTop: 20,
  },
  textName: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
    color: "#333333",
  },
  inputName: {
    width: 330,
    height: 50,
    backgroundColor: "#274690",
    borderRadius: 10,
    color: "white",
    paddingLeft: 25,
    fontFamily: "Lexend_300Light",
  },
  rest: {
    marginTop: 10,
  },
  textRest: {
    color: "#333333",
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
  },
  inputRest: {
    width: 330,
    height: 50,
    backgroundColor: "#274690",
    borderRadius: 10,
    color: "white",
    paddingLeft: 25,
    fontFamily: "Lexend_300Light",
  },
  unknowCep: {
    flexDirection: "row",
    columnGap: 4,
    marginTop: 2,
  },
  textUnknowCep: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#333333",
  },
  containerButton: {
    margin: 40,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#274690",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontFamily: "Lexend_700Bold",
  },
});

export default styles;
