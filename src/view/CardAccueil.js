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


const CardAccueil = props => {

   const [propsState, setPropsState] = useState(props)
   const color = propsState.color
  return (
    <<View style={styles.cardContenu}>
      <View style={styles.rectangleBlanc}>
        <View style={styles.ville}>
          <View style={styles.rectangle}>
            <View style={styles.ville1Row}>
              <View style={styles.ville1}>
                <View style={styles.yvelinesFranceStack}>
                  <Text style={styles.yvelinesFrance}>
                    {responseApiMeteo.sys.country}
                  </Text>
                  <Text style={styles.versailles}>{responseApiMeteo.name}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => {_addFavorite()}} >
                <IconesAjouter style={styles.iconesAjouter}></IconesAjouter>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.infos}>
          <View style={styles.nuageuxRow}>
            <View style={styles.nuageux}>
              <View style={styles.iconesCouvert} >{condition ? condition.path : null}</View>
              <Text style={styles.nuageux1}>Nuageux</Text>
            </View>
            <View style={styles.temperature}>
              <View style={styles.styleRow}>
                <Text style={styles.style}>{(responseApiMeteo.main.temp - 273.15).toFixed(1)}</Text>
                <View style={styles.cStack}>
                  <Text style={styles.c}>C</Text>
                  <Text style={styles.style1}>°</Text>
                </View>
              </View>
            </View>
            <View style={styles.minMax}>
              <View style={styles.maxCopyStack}>
                <Text style={styles.maxCopy}>MAX</Text>
                <Text style={styles.cCopy}>{(responseApiMeteo.main.temp_max - 273.15).toFixed(1)}°C</Text>
                <Text style={styles.minCopy}>MIN</Text>
                <Text style={styles.cCopy1}>{(responseApiMeteo.main.temp_min - 273.15).toFixed(1)}°C</Text>
              </View>
            </View>
            <IndiceAir style={styles.indiceAir} aqi={responseApiAir.data.aqi} textColor={textColor} color={color}></IndiceAir>
          </View>
        </View>
        <View style={styles.journee}>
          <View style={styles.rectangleDegradeGrisStack}>
            <ImageBackground
              style={styles.rectangleDegradeGris}
              imageStyle={styles.rectangleDegradeGris_imageStyle}
              source={require("../assets/images/Gradient_XefJXP1.png")}
            ></ImageBackground>
            <FlatList
              horizontal={true}
              data={responseApiWeatherHour.hourly.slice(0,23)}
              renderItem={({item}) => (<Heure01 style={styles.heure01} time={_convertDate(item.dt)} id={item.weather[0].id} temp={(item.temp - 273.15).toFixed(1)}/>)}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContenu: {
    position: "absolute",
    top: 100,
    marginLeft: 11,
    height: 348,
    width: width - 22,
    opacity: 1
  },
  rectangleBlanc: {
    height: 348,
    width: width - 22,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  ville: {
    height: 93,
    width: width - 22,
    opacity: 1
  },
  rectangle: {
    height: 93,
    width: 353,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  ville1: {
    height: 46,
    width: 150,
    opacity: 1
  },
  yvelinesFrance: {
    position: "absolute",
    top: 27,
    left: 0,
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 14
  },
  versailles: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  yvelinesFranceStack: {
    width: 150,
    height: 46
  },
  iconesAjouter: {
    height: 38,
    width: 38,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 122,
    marginTop: 4
  },
  ville1Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 20,
    marginTop: 24
  },
  infos: {
    height: 65,
    width: 319,
    opacity: 1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 11
  },
  nuageux: {
    height: 58,
    opacity: 1,
    marginTop: 4,
    flex: 1
  },
  iconesCouvert: {
    height: 45,
    width: 45,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 18,
  },
  nuageux1: {
    height: 18,
    width: 76,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 13,
  },
  temperature: {
    height: 65,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 14,
    flex: 2
  },
  style: {
    height: 100,
    width: 55,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(66,77,88,1)",
    fontSize: 45,
    marginTop: 5,
    letterSpacing: -5,
    flex: 3
  },
  c: {
    position: "absolute",
    top: 0,
    left: 9,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  style1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  cStack: {
    width: 28,
    height: 52,
    marginLeft: 2,
    flex: 1
  },
  styleRow: {
    height: 65,
    flexDirection: "row",
    flex: 1,
  },
  minMax: {
    height: 40,
    opacity: 1,
    marginTop: 17,
    flex: 1,
  },
  maxCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 22,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  cCopy: {
    position: "absolute",
    top: 0,
    left: 35,
    height: 24,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  minCopy: {
    position: "absolute",
    top: 19,
    left: 0,
    height: 19,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  cCopy1: {
    position: "absolute",
    top: 19,
    left: 35,
    height: 21,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  maxCopyStack: {
    width: 65,
    height: 40
  },
  indiceAir: {
    height: 44,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 40,
    marginTop: 13,
    flex: 1
  },
  nuageuxRow: {
    height: 65,
    flexDirection: "row",
    justifyContent: 'space-between',
    flex: 1
  },
  journee: {
    height: 105,
    width: 353,
    opacity: 1,
    marginTop: 32
  },
  rectangleDegradeGris: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 34,
    width: 353,
    backgroundColor: "transparent"
  },
  rectangleDegradeGris_imageStyle: {
    opacity: 1
  },
  heure01: {
    position: "relative",
    top: 11,
    height: 94,
    width: 41,
    opacity: 1,
    marginLeft: 17,
    marginRight: 12,
    backgroundColor: "transparent"
  },
  rectangleDegradeGrisStack: {
    width: 353,
    height: 105
  },
})

export default CardAccueil
