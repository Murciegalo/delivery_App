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
    width: '100%',
    display: display
  })
});
export default styles;
