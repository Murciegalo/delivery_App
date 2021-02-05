import React, {useState,useEffect} from 'react'
import {Text, View} from 'react-native'
import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import {BarCodeScanner} from 'expo-barcode-scanner'
import styles from './editD.styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


const EditDelivery = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [displayQR, setDisplayQR] = useState('flex')
  const [displayForm, setDisplayForm] = useState('none')
  const [product, setProduct] = useState(null)
  const [location, setLocation] = useState(null)
  const [code, setCode] = useState(null)

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
    setDisplayForm('flex')
    setCode(data)
  }

  async function onSubmit(){

  }
  return <View>
    <MenuRestr_Area navigation={navigation} name={'Check Deliveries'}/>
    <BarCodeScanner 
      onBarCodeScanned={scanned ? undefined : value => handleBarCodeScanned(value)}
      style={styles.qrCode(displayQR)}
    />
    <View style={styles.qrForm(displayForm)}>
      <Text>Tracker: {code}</Text>
      <View>
        <TextInput
          placeholder="Product"
          onChangeText={e => setProduct(e)}
          value={product}
        />
      </View>
      <View>
        <TextInput
          placeholder="Location"
          onChangeText={e => setLocation(e)}
          value={location}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => onSubmit()}
      >
        <Text>Update Delivery</Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default EditDelivery;