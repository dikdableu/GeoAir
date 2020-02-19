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
    <View style={{ height: 50 }}>
      <View style={{ flex:1, flexDirection: 'row'}}>
        <View style={{flex:52, flexDirection: "column"}}>
          <View style={{flex: 1, justifyContent: "flex-end"}}>
            {propsState.ville.length > 13 ? (<Text style={{fontFamily: "roboto-bold",fontSize: 20}}>{propsState.ville.slice(0,13)}...</Text>) : <Text style={{fontFamily: "roboto-bold",fontSize: 20}}>{propsState.ville}</Text>}
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontFamily: "roboto-regular",fontSize: 14, color: "#2A2C35"}}>{propsState.pays}</Text>
          </View>
        </View>
        <View style={{flex:48, flexDirection: 'row'}}>
          <View style={{flex:58, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginLeft: "2.933%"}}>
            <View style={{flex: 49}}>
              <Image source={require("../../assets/01d.png")} style={{width: 35, height: 35, opacity:1, marginLeft: "2.93%"}} />
            </View>
            <View style={{flex:51, marginLeft: "2.13%", width: "25.786%", height: "100%"}}>
              <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                <Text style={{fontFamily: "roboto-bold",fontSize: 14}}>{propsState.temp}</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Text style={{fontFamily: "roboto-bold",fontSize: 13, color: "#2A2C35", opacity: 0.45}}>{propsState.tr}</Text>
              </View>
            </View>
          </View>
          <View style={{flex:42, alignItems: "flex-end", justifyContent: "center"}}>
            <View style={{width: "68.09%", flex: 82, color: color, borderWidth:2 ,borderRadius: 4, borderColor: color,  marginLeft: "6.125%"}}>
              <Text style={{fontFamily: "roboto-bold",fontSize: 16,color: color, paddingTop: "24.11%", paddingBottom: "21.98%", paddingRight: "35.33%", paddingLeft: "27.98%",}}>{propsState.aqi}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({

});

export default CardAccueil
