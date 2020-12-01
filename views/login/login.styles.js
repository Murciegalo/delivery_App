import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  header:{
    width: '100%',
    alignItems:'center'
  },
  logo: {
    marginBottom: 10,
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    alignSelf:'center'
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
    flex: .5,
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
  },
});
export default styles;
