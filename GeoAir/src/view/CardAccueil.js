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

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('../../assets/Roboto-Bold.ttf'),
  'roboto-italic': require('../../assets/Roboto-Italic.ttf'),
  'roboto-regular': require('../../assets/Roboto-Regular.ttf')
  });
};

const CardAccueil = props => {
   const [dataLoaded, setDataLoaded] = useState(false)
   const [propsState, setPropsState] = useState(props)
   const color = propsState.color
  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />  
    )
  }
  
  return (
    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height:130, marginRight: 5, marginLeft: 5}}>
      <View style={{flex:4, flexDirection: "column"}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Text style={{fontFamily: "roboto-bold",fontSize: 25}}>{propsState.ville}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Text style={{fontFamily: "roboto-regular",fontSize: 10, color: "#2A2C35"}}>{propsState.pays}</Text>
        </View>
      </View>
      <View style={{flex:5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <View style={{flex:2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
          <Image source={{uri: "https://geoair.s3.eu-central-1.amazonaws.com/Icon/01d.png"}} style={{width: 45, height: 45, opacity:1}} />
          <View style={{flex:1, marginLeft:8}}>
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
              <Text style={{fontFamily: "roboto-bold",fontSize: 20}}>{propsState.temp}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <Text style={{fontFamily: "roboto-bold",fontSize: 14, color: "#2A2C35", opacity: 0.45}}>{propsState.tr}</Text>
            </View>
          </View>
        </View>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', color: color, borderWidth:2 ,borderRadius: 4, borderColor: color, padding:5, marginLeft:15, marginRight:5}}>
          <Text style={{fontFamily: "roboto-regular",fontSize: 20,color: color}}>{propsState.aqi}</Text>
        </View>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  
});

export default CardAccueil