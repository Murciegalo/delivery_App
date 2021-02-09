import React, {useState,useEffect} from 'react'
import {Text, View} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Location from 'expo-location'
import Geocoder from 'react-native-geocoding'

import MenuRestr_Area from '../../components/menuRestr_Area/MenuRestr_Area';
import styles from './editD.styles';
import config from '../../config/config.json'

const EditDelivery = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [displayQR, setDisplayQR] = useState('flex')
  const [displayForm, setDisplayForm] = useState('none')
  const [product, setProduct] = useState(null)
  const [location, setLocation] = useState(null)
  const [code, setCode] = useState(null)

  // Request Permission to open camera
  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }
  , [])

  // Request permision to authorize gps use
  useEffect(() => {
    ( async() => {
      let {status} = await Location.requestPermissionsAsync()
      if(status !== 'granted'){
        return setErrorMsg('Permission to access location denied')
      }
    })
  }
  , [])

  async function handleBarCodeScanned({type, data}){
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
    setScanned(true)
    setDisplayQR('none')
    setDisplayForm('flex')
    setCode(data)
    await getLocation()
    await getProduct(data)
  }

  async function getProduct(data){
    let res = await fetch(`${config.urlRoot}delivery/getProduct`, {
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: data
      })
    })
    let json = await res.json()
    setProduct(json.Products[0].name)
  }

  async function getLocation(){
    let location = await Location.getCurrentPositionAsync()
    Geocoder.init(config.k)
    Geocoder.from( location.coords.latitude, location.coords.longitude)
      .then( json => {
        let number = json.results[0].address_components[0].short_name;
        let street = json.results[0].address_components[1].short_name;
        setLocation(`${street} - ${number}`)    
      })
      .catch( err => console.warn(err))
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
          style={styles.input} 
          placeholder="Product"
          onChangeText={e => setProduct(e)}
          value={product}
        />
      </View>
      <View>
        <TextInput
          style={styles.input} 
          placeholder="Location"
          onChangeText={e => setLocation(e)}
          value={location}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => onSubmit()}
      >
        <Text style={styles.btnText}>Update Delivery</Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default EditDelivery;