import React, {useState,useEffect} from 'react'
import {View} from 'react-native'
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import {BarCodeScanner} from 'expo-barcode-scanner'
import styles from './editD.styles';


const EditDelivery = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [displayQR, setDisplayQR] = useState('flex')

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }
  , [])

  async function handleBarCodeScanned({type, data}){
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    setScanned(true)
    setDisplayQR('none')
  }

  return <View>
    <MenuRestr_Area navigation={navigation} name={'Check Deliveries'}/>
    <BarCodeScanner 
      onBarCodeScanned={scanned ? undefined : value => handleBarCodeScanned(value)}
      style={styles.qrCode(displayQR)}
    />
  </View>
}

export default EditDelivery;