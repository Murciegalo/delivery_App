import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  form: {
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 17,
    padding: 7,
    marginBottom: 15,
  },
  btn: {
    padding: 15,
    backgroundColor: "#685",
    alignSelf: "center",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
    alignSelf:'center'
  },
});
export default styles;
