import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnHome:{
    textAlign: 'left'
  },
  title:{
    width: '80%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  btnLogout:{
    textAlign: 'right'
  }
})
