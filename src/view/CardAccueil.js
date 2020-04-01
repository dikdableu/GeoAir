import React,{ useState } from 'react';
import { AppRegistry,
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Timestamp from 'react-timestamp';
import * as Font from 'expo-font';
import { AppLoading, Svg } from 'expo';
import { Auth } from 'aws-amplify';

const CardAccueil = props => {

   const [propsState, setPropsState] = useState(props)
   const color = propsState.color



  return (
    <View style={styles.city}>
        {propsState.ville.length > 13 ? (<Text style={styles.versailles}>{propsState.ville.slice(0,13)}...</Text>) : <Text style={{fontFamily: "roboto-bold",fontSize: 20}}>{propsState.ville}</Text>}


        <Text style={styles.yvelinesFrance}>{propsState.pays}</Text>


        <Image source={require("../../assets/01d.png")} style={styles.d} />


        <Text style={styles.c}>{propsState.temp}</Text>

        <Text style={styles.cFeel}>{propsState.tr}</Text>

      <View style={styles.rectangle190}>
        <Text style={styles.layer12}>{propsState.aqi}</Text>
      </View>
    </View>
  );
}




// Style for "city"
const styles = StyleSheet.create({
  city: {
   width: "100%",
   height: 174.66,
   backgroundColor: '#ffffff',
   flexDirection: 'column',
   flex: 1
 },
  versailles: {
    position: 'relative',
    top: 58.66,
    left: 46.66,
   width: 147,
   height: 24,
   color: '#2a2c35',
   fontFamily: "roboto-bold",
   fontSize: 20,
   fontWeight: '700',
 },
 yvelinesFrance: {
   position: 'relative',
   width: 147,
   height: 17,
   color: '#2a2c35',
   fontFamily: "roboto-regular",
   fontSize: 14,
   fontWeight: '500',
   top: 93.33,
   left: 46.66
 },
 d: {
    position: 'relative',
    top: 74.66,
    left: 268,
    width: 35,
    height: 35,
  },
  c: {
    width: 32,
    height: 21,
    color: '#2a2c35',
    fontFamily: "roboto-bold",
    fontSize: 17,
    fontWeight: '700',
  },
  cFeel: {
    position: 'relative',
   width: 49,
   height: 36,
   opacity: 0.45,
   color: '#2a2c35',
   fontFamily: "roboto-regular",
   fontSize: 16,
   fontWeight: '700',
 },
 rectangle190: {
   position: 'relative',
   width: 49,
   height: 36,
   borderRadius: 3,
   borderColor: '#28d3b0',
   borderStyle: 'solid',
   borderWidth: 2,
 },
 layer12: {
   position: 'relative',
    width: 20,
    height: 20,
    color: '#28d3b0',
    fontFamily: "roboto-bold",
    fontSize: 16,
    fontWeight: '700',
  },
})

export default CardAccueil
