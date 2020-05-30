import { AppRegistry, Image, Platform, StatusBar, RefreshControl, Dimensions, ActivityIndicator, TouchableOpacity, Button, Alert, StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, PixelRatio, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import {Image as ReactImage} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

import PropTypes from "prop-types";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';
import Toast from 'react-native-root-toast';
import RefreshComponent from './Icones/Refresh.js'
import AddComponent from './Icones/Add.js'

import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesAjouter from "../components/IconesAjouter";
import IndiceAir from "../components/IndiceAir";
import Heure01 from "../components/Heure01";
import IconesActualiser from "../components/IconesActualiser";
import IconesMenu from "../components/IconesMenu";
import MenuHome from "../components/MenuHome";
import Interface from "../components/Interface";

import IconesCouvert from "../components/IconesCouvert";
import IconesNeige from "../components/IconesNeige";
import IconesOrage from "../components/IconesOrage";
import IconesBrume from "../components/IconesBrume";
import IconesPluie from "../components/IconesPluie";
import IconesSoleil from "../components/IconesSoleil";
import IconesNuages from "../components/IconesNuages";

import * as DBLocal from '../../db/DBLocal.js'
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

function HomeView() {

  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [responseApiAir, setResponseApiAir] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [dominant, setDominant] = useState('')
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [responseApiWeatherHour, setResponseApiWeatherHour] = useState({})
  const [color, setColor] = useState(null)
  const [colorPm10, setColorPm10] = useState(null)
  const [colorNo2, setColorNo2] = useState(null)
  const [colorO3, setColorO3] = useState(null)
  const [aqi, setAqi] = useState(null)
  const [condition, setCondition] = useState(null)
  const [textInside, setTextInside] = useState('')
  const [textColor, setTextColor] = useState('')
  const [conditionWeather, setConditionWeather] = useState(
    [
         {
           id: 200,
           weather: "Orage",
           description: "orage avec pluie légère",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 201,
           weather: "Orage",
           description: "orage avec pluie ",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 202,
           weather: "Orage",
           description: "orage avec forte pluie",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 210,
           weather: "Orage",
           description: "orage léger",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 211,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 212,
           weather: "Orage",
           description: "fort orage",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 221,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 230,
           weather: "Orage",
           description: "orage avec bruine légère",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 231,
           weather: "Orage",
           description: "orage avec bruine ",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 232,
           weather: "Orage",
           description: "orage avec forte bruine",
           icon: "11d",
           path: (<IconesOrage  />)
         },
         {
           id: 300,
           weather: "Drizzle",
           description: "bruine d'intensité légère",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 301,
           weather: "Drizzle",
           description: "bruine",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 302,
           weather: "Drizzle",
           description: "bruine de forte intensité",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 310,
           weather: "Drizzle",
           description: "bruine d'intensité légère et pluie",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 311,
           weather: "Drizzle",
           description: "bruine et pluie",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 312,
           weather: "Drizzle",
           description: "forte bruine pluie forte",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 313,
           weather: "Drizzle",
           description: "brèves averses et bruine",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 314,
           weather: "Drizzle",
           description: "fortes averses pluie forte",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 321,
           weather: "Drizzle",
           description: "brèves bruine",
           icon: "09d",
           path: (<IconesPluie  />)
         },
         {
           id: 500,
           weather: "Rain",
           description: "légère pluie",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 501,
           weather: "Rain",
           description: "pluie modéré",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 502,
           weather: "Rain",
           description: "pluie de forte intensité",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 503,
           weather: "Rain",
           description: "très forte pluie",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 504,
           weather: "Rain",
           description: "pluie extrème",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 511,
           weather: "Rain",
           description: "pluie verglaçante",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 520,
           weather: "520",
           description: "pluie légère par intermitence",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 521,
           weather: "Rain",
           description: "pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 522,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 531,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie  />)
         },
         {
           id: 600,
           weather: "Snow",
           description: "faible chute de neige",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 601,
           weather: "Snow",
           description: "neige",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 602,
           weather: "Snow",
           description: "forte chute de neige",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 611,
           weather: "Snow",
           description: "neige fondue",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 612,
           weather: "Snow",
           description: "faible chute de neige fondu",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 613,
           weather: "Snow",
           description: "brève chute de neige fondu",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 615,
           weather: "Snow",
           description: "légère plui et chute de neige",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 616,
           weather: "Snow",
           description: "neige et pluie",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 620,
           weather: "Snow",
           description: "brève chute de neige de faible intensité",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 621,
           weather: "Snow",
           description: "brève chute de neige",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 622,
           weather: "Snow",
           description: "forte chute de neige par intermitence",
           icon: "13d",
           path: (<IconesNeige  />)
         },
         {
           id: 701,
           weather: "Mist",
           description: "brouillard",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 711,
           weather: "Smoke",
           description: "fumée",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 721,
           weather: "Haze",
           description: "brume",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 731,
           weather: "Dust",
           description: "Sable/poussière",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 741,
           weather: "Fog",
           description: "brouillard",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 751,
           weather: "Sand",
           description: "sable",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 761,
           weather: "Dust",
           description: "poussière",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 701,
           weather: "Ash",
           description: "cendre volcanic/cendre",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 771,
           weather: "Squall",
           description: "bourrasque",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 781,
           weather: "Tornado",
           description: "tornade",
           icon: "50d",
           path: (<IconesBrume  />)
         },
         {
           id: 800,
           weather: "Clear",
           description: "ciel dégagé",
           icon: "01d",
           path:(<IconesSoleil/>)
         },
         {
           id: 801,
           weather: "Clouds",
           description: "entre 11-25% de nuage",
           icon: "02d",
           path: (<IconesCouvert  />)
         },
         {
           id: 802,
           weather: "Clouds",
           description: "entre 25-50% de nuage",
           icon: "03d",
           path: (<IconesNuages  />)
         },
         {
           id: 803,
           weather: "Clouds",
           description: "entre 50-84% de nuage",
           icon: "04d",
           path: (<IconesNuages  />)
         },
         {
           id: 804,
           weather: "Clouds",
           description: "entre 85-100% de nuage",
           icon: "04d",
           path: (<IconesNuages  />)
         },
        ]
  )

  useEffect(() => {
  _getLocationAsync()
    db.transaction(tx => {
      tx.executeSql(
        `select * from Favoris`,[],
        (_, { rows: { _array } }) => dispatch({type: "INIT_FAVORITE", data: _array }), (transaction, e) => console.log(e))
    });
  }, [])

  useEffect(() => {
    if(location || location != null){
      _apiAir(location.coords.latitude,location.coords.longitude)
    }
  }, [location])

  useEffect(() => {
    if(typeof responseApiMeteo != 'undefined' && Object.keys(responseApiMeteo).length !== 0 && responseApiMeteo && responseApiMeteo != null){
      conditionWeather.forEach( value => {
          if(responseApiMeteo.weather[0].id == value.id){
              var cond = {
                  description: value.description,
                  icon: "http://openweathermap.org/img/wn/"+ value.icon +"@2x.png",
                  id: value.id,
                  main: value.main,
                  path: value.path
              }
          setCondition(cond)
          }
      })
    }
  }, [responseApiMeteo])


  const _getLocationAsync = async () => {

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted'){
      console.log('Permission to access location was denied');
    }

    setLocation(await Location.getCurrentPositionAsync({}))
  };

  const _apiAir = (lat, long) => {
    fetch('https://api.waqi.info/feed/geo:'+lat+';'+long+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', {
      method: 'GET'})
    .then((responsewaqi) => responsewaqi.json())
    .then((responseJsonWaqi) => {
      setResponseApiAir(responseJsonWaqi)
      _colorIndex(responseJsonWaqi);
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'4&APPID=505c84426a182da1a7178151dccdb616', {
      method: 'GET'})
      .then((responseWeather) => responseWeather.json())
      .then((responseJsonWeather) => {
        if(responseJsonWeather.cod == 200) {
        setResponseApiMeteo(responseJsonWeather)
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&appid=505c84426a182da1a7178151dccdb616', {method: "GET"})
        .then((responsWeatherHour) => responsWeatherHour.json())
        .then((responseJsonWeatherHour) => {
          setResponseApiWeatherHour(responseJsonWeatherHour)
          setLoading(false)
          return responseJsonWeatherHour
        })
        return responseJsonWeather
        }else{
          Toast.show('Problème de connexion au serveur, veuillez ressayer dans quelques instants', {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }
      }).catch( error => {
        console.error(error);
      });
      return responseJsonWaqi;
    })
    .catch( error => {
      console.error(error);
    });
  }

  const _colorIndex = (response) => {
    if (response.data.aqi >= 0 && response.data.aqi <= 50){
      setColor("#DCFFF9")
      setTextColor("#00EBD3")
      setTextInside("La qualité de l'air est jugée satisfaisante, et la pollution de l'air pose peu ou pas de risque.")

    }else if (response.data.aqi >= 51 && response.data.aqi <= 150){
      setColor("#FFF3E3")
      setTextColor("#FFB553")
      setTextInside("La qualité de l'air est acceptable; Cependant, pour certains polluants, il peut y avoir un problème de santé modérée pour un très petit nombre de personnes qui sont particulièrement sensibles à la pollution de l'air.")
    }else if (response.data.aqi >= 151){
      setColor("#FFEDEC")
      setTextColor("#FF6B53")
      setTextInside("Avertissements de santé de conditions d'urgence. Toutes la population est plus susceptible d'être affecté.")
    }
  }

  const _convertDate = (dt) => {
    var date = new Date(dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2) ;
    return formattedTime
  }

  _addFavorite = () => {
    db.transaction(tx => {
        tx.executeSql(
          `select * from Favoris`,[],
          (_, { rows: { _array } }) => {
            var i = 0
            _array.map((item) => {
              if(_array.villes == responseApiMeteo.name){
                i++
              }
            })
            if(i == 0){
              tx.executeSql( `insert into Favoris(villes, pays, latitude, longitude) values(?, ?, ?, ?)`, [responseApiMeteo.name, responseApiMeteo.sys.country, responseApiMeteo.coord.lat, responseApiMeteo.coord.lon], db.transaction(tx => {
                tx.executeSql(
                  `select * from Favoris`,[],
                  (_, { rows: { _array } }) => {
                    dispatch({type: "INIT_FAVORITE", data: _array })
                    Toast.show('Ajouté aux favoris', {
                      duration: Toast.durations.SHORT,
                      position: Toast.positions.CENTER,
                      shadow: true,
                      animation: true,
                      hideOnPress: true,
                      delay: 0,
                    });
                  }, (transaction, e) => console.log(e))
              }), (transaction, e) => console.log(e, transaction))
            }else{
              Toast.show('Existe déjà dans les favoris', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            }
          }, (transaction, e) => console.log(e))
    })
  }

    if(loading){
      return (
      <View style={styles.container}>
        <View style={styles.bgStack}>
          <Bg style={styles.bg}></Bg>
          <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }} size="large" color="#0000ff" />
        </View>
      </View>
    );
    }else{
      return(
        <View style={styles.container}>
          <View style={styles.bgStack}>
            <Bg style={styles.bg}></Bg>
            <AdMobBanner
              style={styles.admob}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
              didFailToReceiveAdWithError={error => console.log(error + 'error')}
            />
            <View style={styles.cardContenu}>
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
            <View style={styles.aProximite}>
              <View style={styles.lieuxAProximiteRow}>
                <Text style={styles.lieuxAProximite}>LIEUX À PROXIMITÉ</Text>
                <View style={styles.btnActualiser}>
                  <View style={styles.rectangle1}>
                    <TouchableOpacity onPress={() => {_getLocationAsync()}} >
                      <View style={styles.actualiserRow}>
                        <Text style={styles.actualiser}>Actualiser</Text>
                        <IconesActualiser style={styles.iconesActualiser}></IconesActualiser>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
    }
}

HomeView.propTypes = {

}

HomeView.defaultProps = {

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: -100,
    left: 0,
    height: 812,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  admob: {
    position: "absolute",
    top: 460,
    height: 170,
    width: 'auto',
    opacity: 1,
    backgroundColor: "transparent",
  },
  cardContenu: {
    position: "absolute",
    top: 100,
    left: 11,
    height: 348,
    width: 353,
    opacity: 1
  },
  rectangleBlanc: {
    height: 348,
    width: 353,
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
    width: 353,
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
    height: 65,
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
  aProximite: {
    position: "absolute",
    top: 30,
    left: 20,
    height: 38,
    width: 'auto',
    opacity: 1,
    flexDirection: "row"
  },
  lieuxAProximite: {
    height: 38,
    width: 167,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 35,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    letterSpacing: 1.788888888888888
  },
  btnActualiser: {
    height: 36,
    width: 130,
    opacity: 1,
    marginLeft: 38,
    marginTop: 1,
  },
  rectangle1: {
    height: 36,
    width: 130,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.206635974702381)",
    flexDirection: "row",
  },
  actualiser: {
    height: 27,
    width: 75,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
  },
  iconesActualiser: {
    height: 18,
    width: 25,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 0,
    marginTop: 0
  },
  actualiserRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 5,
  },
  lieuxAProximiteRow: {
    height: 38,
    flexDirection: "row",
    flex: 1
  },
  nav: {
    position: "absolute",
    top: 58,
    left: 113,
    height: 36,
    width: 242,
    opacity: 1,
    flexDirection: "row"
  },
  iconesMenu: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 68,
    marginTop: 6
  },
  geoAirRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  menuHome: {
    position: "absolute",
    top: 742,
    left: 0,
    height: 70,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  interface: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 44,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  bgStack: {
    width: 376,
    height: 812
  }
});

export default HomeView;
