import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  logo: {
    marginBottom: 10,
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  error: (text = "none") => ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 5,
    marginBottom: 15,
    textAlign: "center",
    display: text,
  }),
  form: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    borderRadius: 2,
  },
  btn: {
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf: "center",
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
  },
});
export default styles;
