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
  qrCode: (display ='flex') => ({
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    display: display
  }),
  qrForm: (display = 'none') => ({
    flex: .5,
    width: "80%",
    alignSelf: "center",
    display: display
  }),
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
