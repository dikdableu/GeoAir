import { AppRegistry,
  Image,
  Platform,
  StatusBar,
  RefreshControl,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  Alert
  } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import SafeAreaView from 'react-native-safe-area-view';

import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import * as data from '../../db/favorite.json';

import Amplify, { Auth } from 'aws-amplify';
import { config } from '../../config/config.js';

import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux'

import RefreshComponent from './Icones/Refresh.js'
import AddComponent from './Icones/Add.js'

import SoleilComponent from './Icones/01d.js'
import CouldsSunComponent from './Icones/02d.js'
import CloudComponent from './Icones/03d.js'
import CloudsComponent from './Icones/04d.js'
import RainComponent from './Icones/09d.js'
import LightRainComponent from './Icones/10d.js'
import ThunderComponent from './Icones/11d.js'
import SnowComponent from './Icones/13d.js'
import FogComponent from './Icones/50d.js'

import * as DBLocal from '../../db/DBLocal.js'

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
  const [color, setColor] = useState(null)
  const [colorPm10, setColorPm10] = useState(null)
  const [colorNo2, setColorNo2] = useState(null)
  const [colorO3, setColorO3] = useState(null)
  const [aqi, setAqi] = useState(null)
  const [condition, setCondition] = useState(null)
  const [textInside, setTextInside] = useState('')
  const [conditionWeather, setConditionWeather] = useState(
    [
         {
           id: 200,
           weather: "Orage",
           description: "orage avec pluie légère",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 201,
           weather: "Orage",
           description: "orage avec pluie ",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 202,
           weather: "Orage",
           description: "orage avec forte pluie",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 210,
           weather: "Orage",
           description: "orage léger",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 211,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 212,
           weather: "Orage",
           description: "fort orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 221,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 230,
           weather: "Orage",
           description: "orage avec bruine légère",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 231,
           weather: "Orage",
           description: "orage avec bruine ",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 232,
           weather: "Orage",
           description: "orage avec forte bruine",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 300,
           weather: "Drizzle",
           description: "bruine d'intensité légère",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 301,
           weather: "Drizzle",
           description: "bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 302,
           weather: "Drizzle",
           description: "bruine de forte intensité",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 310,
           weather: "Drizzle",
           description: "bruine d'intensité légère et pluie",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 311,
           weather: "Drizzle",
           description: "bruine et pluie",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 312,
           weather: "Drizzle",
           description: "forte bruine pluie forte",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 313,
           weather: "Drizzle",
           description: "brèves averses et bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 314,
           weather: "Drizzle",
           description: "fortes averses pluie forte",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 321,
           weather: "Drizzle",
           description: "brèves bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 500,
           weather: "Rain",
           description: "légère pluie",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 501,
           weather: "Rain",
           description: "pluie modéré",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 502,
           weather: "Rain",
           description: "pluie de forte intensité",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 503,
           weather: "Rain",
           description: "très forte pluie",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 504,
           weather: "Rain",
           description: "pluie extrème",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 511,
           weather: "Rain",
           description: "pluie verglaçante",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 520,
           weather: "520",
           description: "pluie légère par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 521,
           weather: "Rain",
           description: "pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 522,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 531,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 600,
           weather: "Snow",
           description: "faible chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 601,
           weather: "Snow",
           description: "neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 602,
           weather: "Snow",
           description: "forte chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 611,
           weather: "Snow",
           description: "neige fondue",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 612,
           weather: "Snow",
           description: "faible chute de neige fondu",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 613,
           weather: "Snow",
           description: "brève chute de neige fondu",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 615,
           weather: "Snow",
           description: "légère plui et chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 616,
           weather: "Snow",
           description: "neige et pluie",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 620,
           weather: "Snow",
           description: "brève chute de neige de faible intensité",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 621,
           weather: "Snow",
           description: "brève chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 622,
           weather: "Snow",
           description: "forte chute de neige par intermitence",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 701,
           weather: "Mist",
           description: "brouillard",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 711,
           weather: "Smoke",
           description: "fumée",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 721,
           weather: "Haze",
           description: "brume",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 731,
           weather: "Dust",
           description: "Sable/poussière",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 741,
           weather: "Fog",
           description: "brouillard",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 751,
           weather: "Sand",
           description: "sable",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 761,
           weather: "Dust",
           description: "poussière",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 701,
           weather: "Ash",
           description: "cendre volcanic/cendre",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 771,
           weather: "Squall",
           description: "bourrasque",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 781,
           weather: "Tornado",
           description: "tornade",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 800,
           weather: "Clear",
           description: "ciel dégagé",
           icon: "01d",
           path:(<SoleilComponent/>)
         },
         {
           id: 801,
           weather: "Clouds",
           description: "entre 11-25% de nuage",
           icon: "02d",
           path: (<CouldsSunComponent/>)
         },
         {
           id: 802,
           weather: "Clouds",
           description: "entre 25-50% de nuage",
           icon: "03d",
           path: (<CloudComponent/>)
         },
         {
           id: 803,
           weather: "Clouds",
           description: "entre 50-84% de nuage",
           icon: "04d",
           path: (<CloudsComponent/>)
         },
         {
           id: 804,
           weather: "Clouds",
           description: "entre 85-100% de nuage",
           icon: "04d",
           path: (<CloudsComponent/>)
         },
        ]
  )

  useEffect(() => {
    _getLocationAsync()
  }, [])

  useEffect(() => {
    console.log(user)
    if(user.length > 0){
      var userInfos = user.shift().idUsers

      fetch('http://3.126.246.233:3000/listFavoris?idFkUsers='+ userInfos, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        dispatch({type: "INIT_FAVORITE", data: resultat })
      })
      .catch( error => {
        setErrorFetch(error)
        console.error(error);
      });
    }
  }, [user])



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
        setLoading(false)
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
      setColor("#28D3B0")
      setTextInside("La qualité de l'air est jugée satisfaisante, et la pollution de l'air pose peu ou pas de risque.")

    }else if (response.data.aqi >= 51 && response.data.aqi <= 150){
      setColor("#FFBB00")
      setTextInside("La qualité de l'air est acceptable; Cependant, pour certains polluants, il peut y avoir un problème de santé modérée pour un très petit nombre de personnes qui sont particulièrement sensibles à la pollution de l'air.")
    }else if (response.data.aqi >= 151){
      setColor("#FF5656")
      setTextInside("Avertissements de santé de conditions d'urgence. Toutes la population est plus susceptible d'être affecté.")
    }
  }

  _addFavorite = () => {

      dispatch({type: "ADD_FAVORITE", listFavorite: DBLocal.insertFavoris(responseApiMeteo.name, responseApiMeteo.sys.country, responseApiMeteo.coord.lat, responseApiMeteo.coord.lon)})

      Toast.show('Ajouté aux favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }

    if(loading){
      return (
      <View style={{flex: 1}}>
        <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} size="large" color="#0000ff" />
      </View>
    );
    }else{
      return(
        <SafeAreaView style={{display: 'flex', flex: 1, position: 'relative'}}>
            <View data-layer="13614dff-3bb8-47ff-9a88-81264c364874" style={styles.home}>
                <View data-layer="ba686c87-cb59-4c46-baed-6f1eec515b14" style={styles.home_line8cf6fdea}></View>
                <View data-layer="f25280e4-4f48-4c2a-be2d-9ebe03c9ff61" style={styles.home_line}></View>
                <View data-layer="a26dc001-9ab5-4ffd-9f28-9301663a0804" style={styles.home_time}>
                    <Text data-layer="9a56958e-2d40-49f2-a8bc-c54a080d1c88" style={styles.home_time_x1200303d8887}>12 : 00</Text>
                    <Text data-layer="43a27cd7-422c-4aef-bf60-5d05a84dbfd4" style={styles.home_time_x1200cc93c759}>12 : 00</Text>
                    <Text data-layer="951d2dc7-9ece-4caa-9e99-a9583fdf0134" style={styles.home_time_x12005e70baf0}>12 : 00</Text>
                    <Text data-layer="608d07ce-0678-4ee1-8ae8-313ef306ab00" style={styles.home_time_x1200f9879df1}>12 : 00</Text>
                    <Text data-layer="1cdb565a-e3c7-46a1-913c-6772032fc806" style={styles.home_time_x1200}>12 : 00</Text>
                </View>
                <View data-layer="f24bcd06-3188-4e29-b0b8-1617ca1a5c65" style={styles.home_groupe205}>
                    <View data-layer="09af10b5-c90e-41a5-8022-88aa02b5cd5e" style={[styles.home_groupe205_rectangle, {borderWidth: 1 ,borderColor: color}]}>
                      <Text data-layer="7150d953-1902-4408-87cb-6ab655001bdc" style={[styles.home_groupe205_loremIpsumDolorSitAmetAdipiscingElitDonecVulputate, {color: color}]}>{textInside}</Text>
                    </View>
                </View>
                <View data-layer="17b224e8-ca18-4bb8-beeb-ef167bacb82d" style={styles.home_groupe209}>
                    <View data-layer="e97e27e2-2ba3-4663-9cf1-b8e6a87404ea" style={styles.home_groupe209_searchcity}>
                        <Text data-layer="0566535a-1279-4dc0-bf84-314d2bf4cbeb" style={styles.home_groupe209_searchcity_versailles}>{responseApiMeteo.name}</Text>
                        <Text data-layer="ec71f28a-dd55-4cb6-a52d-b7c93ad5c018" style={styles.home_groupe209_searchcity_yvelinesFrance}>{responseApiMeteo.sys.country}</Text>
                        <AddComponent style={styles.home_groupe213_groupe209_searchcity_iconadd}/>
                    </View>
                    <TouchableOpacity onPress={() => {_addFavorite()}} >
                      <View data-layer="3568ea33-fc37-4f12-96a5-1681fd4178a9" style={styles.home_groupe213_groupe209_rectangle280}></View>
                    </TouchableOpacity>
                </View>
                <View data-layer="adc02b6d-f8e4-4014-b787-5bcc88729d4f" style={styles.home_groupe207}>
                    <Text data-layer="8f879b30-4046-4eb3-b96e-277a55d04826" style={styles.home_groupe207_actualiser}>Actualiser</Text>
                    <Text data-layer="699344fd-f3c3-4637-91c6-9e22dabbc0b9" style={styles.home_groupe207_lieuxAProximite}>Lieux à proximité</Text>
                    <RefreshComponent style={styles.home_groupe214_groupe207_iconmonstrRefresh2}/>
                    <View data-layer="32f32dff-d3fc-4a50-8c29-42aad3939253" style={styles.home_groupe207_groupe206}>
                        <View data-layer="4dc4caac-6c61-4719-8b20-15042a4d6c8b" style={styles.home_groupe207_groupe206_rectanglea6da2d5c}></View>
                    </View>
                    <TouchableOpacity onPress={() => {_getLocationAsync()}} >
                      <View data-layer="b31d0d4d-c9e6-42b5-ae15-0f73e61b769c" style={styles.home_groupe214_groupe207_rectangle281}></View>
                    </TouchableOpacity>
                </View>
                <View data-layer="be86a2d7-3e32-4675-9c37-d5c8d629bdd9" style={styles.home_groupe212}>
                    <View data-layer="01c94066-2b12-48e5-9d3a-9620b1a4214c" style={styles.home_groupe212_airqualityindex}>
                        <View data-layer="e22a0d65-2293-4022-856e-4853fad7221f" style={[styles.home_groupe212_airqualityindex_rectangle190, {borderColor: color}]}></View>
                        <Text data-layer="65c2a307-84e5-488f-8d7f-4b6107009b76" style={[styles.home_groupe212_airqualityindex_x102, {color: color}]}>{responseApiAir.data.aqi}</Text>
                    </View>
                    <View data-layer="94a3af68-7070-4f53-849e-311c1edcc16f" style={styles.home_groupe212_groupe211}>
                        <Text data-layer="fcff8157-0898-4499-ba77-8c9c5c1399f4" style={styles.home_groupe212_groupe211_x10c}>{(responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"}</Text>
                        <Text data-layer="e3a238f9-d269-489b-abdc-16c159f8bdfd" style={styles.home_groupe212_groupe211_min}>MIN</Text>
                        <Text data-layer="aa2caedb-af91-4980-91db-1dea85c1ac6b" style={styles.home_groupe212_groupe211_max}>MAX</Text>
                        <Text data-layer="1aff345a-b725-49c3-9873-1a98823d7b24" style={styles.home_groupe212_groupe211_x8c}>{(responseApiMeteo.main.temp_min - 273.15).toFixed(1) + "°C"}</Text>
                        <Text data-layer="947b1b79-cf69-4852-adf7-d4ad1f9e5d19" style={styles.home_groupe212_groupe211_x13c}>{(responseApiMeteo.main.temp_max - 273.15).toFixed(1) + "°C"}</Text>
                        <Text data-layer="eaa8bd00-b2cf-4b94-8626-b80c9dfd7fb4" style={styles.home_groupe212_groupe211_temp}>Temp.</Text>
                        <View data-layer="d6d2d453-b0f3-4806-ad24-4344c723948f" style={styles.home_groupe212_groupe211_groupe210}>
                            <View data-layer="9d65069b-0dc9-420f-8ada-5928312e3310" style={styles.home_groupe212_groupe211_groupe210_groupe208325c65e5}>
                                <View data-layer="3ea825a4-c7e1-46cb-b30a-e31db441ca50" style={styles.home_groupe212_groupe211_groupe210_groupe208325c65e5_rectanglec24f8a8d}></View>
                            </View>
                        </View>
                        <View data-layer="edfed02e-1326-48d5-9935-25a9cb06b14c" style={styles.home_groupe212_groupe211_x09d}>
                            {condition.path}
                        </View>
                    </View>
                </View>
            </View>
      </SafeAreaView>
      )
    }

}

HomeView.propTypes = {

}

HomeView.defaultProps = {

}

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var indiceScreen = indiceWidth+indiceHeight >= 2 ? 1 : (indiceWidth + indiceHeight) - 0.2


const styles = StyleSheet.create({
  "home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": height,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
  },
  "home_line8cf6fdea": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 450,
    "right": 0,
  },
  "home_line": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 510,
    "right": 0
  },
  "home_time": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": -198.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 397,
    "height": 20,
    "left": "50%",
    "top": 472
  },
  "home_time_x1200303d8887": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 20,
    "left": 88,
    "top": 0
  },
  "home_time_x1200cc93c759": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 20,
    "left": 174,
    "top": 0
  },
  "home_groupe213_groupe209_rectangle280": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 27,
    "height": 25,
    "top": 5,
    "right": 0
  },
  "home_time_x12005e70baf0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 20,
    "left": 263,
    "top": 0
  },
  "home_time_x1200f9879df1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 20,
    "left": 351,
    "top": 0
  },
  "home_time_x1200": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 20,
    "left": 0,
    "top": 0
  },
  "home_groupe205": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 130,
    "left": 34,
    "top": 280,
    "right": 35
  },
  "home_groupe205_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": 'auto',
    "left": 0,
    "top": 0,
    "right": 0
  },
  "home_groupe205_loremIpsumDolorSitAmetAdipiscingElitDonecVulputate": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "color": "rgba(255, 187, 0, 1)",
    "fontSize": 12.4* indiceScreen,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "center",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 10,
    "marginBottom": 20,
    "marginLeft": 10,
    "paddingTop": 20,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "top": 0
  },
  "home_groupe209": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 31,
    "top": 120,
    "right": 34,
    "bottom": 395
  },
  "home_groupe209_searchcity": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 43,
    "left": 3,
    "top": 5,
    "right": 1
  },
  "home_groupe209_searchcity_versailles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 20* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 235,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "home_groupe209_searchcity_yvelinesFrance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 148,
    "height": 17,
    "left": 0,
    "bottom": 0
  },
  "home_groupe209_searchcity_iconadd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15,
    "height": "auto",
    "top": 4,
    "right": 0,
    "bottom": 24
  },
  "home_groupe209_groupe208": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 55,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "home_groupe209_groupe208_rectangle72e8c560": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe207": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 87,
    "left": 34,
    "top": 20,
    "right": 34
  },
  "home_groupe207_actualiser": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 36,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 41,
    "top": -8.5,
    "right": 25
  },
  "home_groupe207_lieuxAProximite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 30* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 215,
    "height": 90,
    "left": 0,
    "top": 4
  },
  "home_groupe207_iconmonstrRefresh2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 14,
    "height": 12.25,
    "top": 4.38,
    "right": 1
  },
  "home_groupe207_groupe206": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 306,
    "height": 85,
    "right": 0,
    "bottom": 0
  },
  "home_groupe207_groupe206_rectanglea6da2d5c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe212": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 55,
    "left": 33,
    "top": 200,
    "right": 32
  },
  "home_groupe212_airqualityindex": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 49.03,
    "height": 35.25,
    "top": 10,
    "right": 2.97
  },
  "home_groupe212_airqualityindex_rectangle190": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "home_groupe212_airqualityindex_x102": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 187, 0, 1)",
    "fontSize": 16* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 21,
    "left": 11,
    "top": 6.5,
    "right": 10.03
  },
  "home_groupe212_groupe211": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe212_groupe211_x10c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 17* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 23,
    "left": 56,
    "top": 6
  },
  "home_groupe212_groupe211_min": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "left": 120,
    "top": 27
  },
  "home_groupe212_groupe211_max": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "left": 120,
    "top": 10
  },
  "home_groupe212_groupe211_x8c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "left": 165,
    "top": 27
  },
  "home_groupe212_groupe211_x13c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "left": 165,
    "top": 10
  },
  "home_groupe212_groupe211_temp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14* indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "left": 56,
    "top": 27
  },
  "home_groupe212_groupe211_groupe210": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe212_groupe211_groupe210_groupe208325c65e5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe212_groupe211_groupe210_groupe208325c65e5_rectanglec24f8a8d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "home_groupe212_groupe211_x09d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32.36,
    "height": 35,
    "left": 1,
    "top": 8
  },
  "home_groupe212_groupe211_x09d_trace110": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 5,
    "height": 8.84,
    "left": 15.2,
    "top": 27.16
  },
  "home_groupe212_groupe211_x09d_trace111": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 5,
    "height": 8.84,
    "left": 5.97,
    "top": 27.16
  },
  "home_groupe212_groupe211_x09d_trace112": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 5,
    "height": 8.84,
    "left": 24.83,
    "top": 27.16
  },
  "home_groupe212_groupe211_x09d_groupe153": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32.36,
    "height": 24.2,
    "left": 0,
    "top": 0
  },
  "home_groupe212_groupe211_x09d_groupe153_trace113": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2.04,
    "height": 2,
    "left": 12.02,
    "top": 23.2
  },
  "home_groupe212_groupe211_x09d_groupe153_trace114": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34.36,
    "height": 25.16,
    "left": -1,
    "top": -1
  },
  "home_groupe214_groupe207_rectangle281": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 94,
    "height": 23,
    "top": 0,
    "right": 0
  },
  "home_groupe213_groupe209_searchcity_iconadd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15,
    "height": "auto",
    "top": 4,
    "right": 0,
    "bottom": 24
  },
  "home_groupe214_groupe207_iconmonstrRefresh2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 14,
    "height": 15,
    "top": 4.38,
    "right": 3
  },
});



export default HomeView;
