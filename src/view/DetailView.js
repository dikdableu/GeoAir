import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions, PixelRatio} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
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
import * as SQLite from "expo-sqlite";
import Bg from "../components/Bg";
import CardForeCast14d from "../components/CardForeCast14d";
import CardForeCast7d from "../components/CardForeCast7d";
import UntitledComponent from "../components/UntitledComponent";
import CardAccueil from "../components/CardAccueil";

export default function DetailView({props, navigation}) {

  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const [condition, setCondition] = useState(null)
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

  const _iconMeteo = (responseApiMeteo) => {
    conditionWeather.forEach( value => {
        if(responseApiMeteo.weather[0].id == value.id){
            var cond = {
                description: value.description,
                id: value.id,
                main: value.main,
                path: value.path
            }
        setCondition(cond)
        }
    })
  }

  const _addFavorite = () => {
    if(user.length > 0){
      var userInfos = user[0].username

      fetch('http:/3.126.246.233:3000/addFavorite?username='+ userInfos+'&villes='+responseApiMeteo.name+'&latitude='+responseApiMeteo.coord.lat+'&longitude='+responseApiMeteo.coord.lon+'&pays='+ responseApiMeteo.sys.country, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        dispatch({type: "ADD_FAVORITE", listFavorite: resultat})
        return resultat
      })
      .catch( error => {
        setErrorFetch(error)
        console.error(error);
      });

      Toast.show('Ajouté aux favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  }




    const color = navigation.state.params.color
    const responseApiAir = navigation.state.params.responseApiAir
    const responseApiMeteo = navigation.state.params.responseApiMeteo
    const responseApiWeatherHour = navigation.state.params.responseApiWeatherHour
    const textColor = navigation.state.params.textColor
    const text = navigation.state.params.textIndex

    var dateSunSet = new Date(responseApiMeteo.sys.sunrise * 1000)
    var dateSunRise = new Date(responseApiMeteo.sys.sunset * 1000)
    const minuteSunRise = "0" + dateSunRise.getMinutes()
    const minuteSunSet = "0" + dateSunSet.getMinutes()

    const sunset = dateSunSet.getHours() + 'h' + minuteSunSet.substr(-2)
    const sunrise = dateSunRise.getHours() + 'h' + minuteSunRise.substr(-2)

    return (
      <View style={styles.container}>
        <View style={styles.bgStack}>
          <Bg style={styles.bg}></Bg>
          <ScrollView style={{ top: 40, height: height-250}}>
            <CardAccueil responseApiMeteo={responseApiMeteo}  responseApiAir={responseApiAir} responseApiWeatherHour={responseApiWeatherHour} style={styles.cardAccueil}></CardAccueil>
            <AdMobBanner
              style={{marginTop: 5, marginBottom: 5}}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
              didFailToReceiveAdWithError={error => console.log(error + 'error')}
            />
            <UntitledComponent responseApiMeteo={responseApiMeteo} sunset={sunset} sunrise={sunrise} responseApiAir={responseApiAir} responseApiWeatherHour={responseApiWeatherHour} textColor={textColor} text={text} style={styles.untitledComponent}></UntitledComponent>
            <AdMobBanner
              style={{marginTop: 5, marginBottom: 5}}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
              didFailToReceiveAdWithError={error => console.log(error + 'error')}
            />
            <CardForeCast7d style={styles.cardForeCast7D}></CardForeCast7d>
            <AdMobBanner
              style={{marginTop: 5, marginBottom: 5}}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
              didFailToReceiveAdWithError={error => console.log(error + 'error')}
            />
            <CardForeCast14d style={styles.cardForeCast14D}></CardForeCast14d>
            <AdMobBanner
              style={{marginTop: 5, marginBottom: 20}}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
              didFailToReceiveAdWithError={error => console.log(error + 'error')}
            />
          </ScrollView>
        </View>
      </View>
    );

}

DetailView.propTypes = {

}

DetailView.defaultProps = {

}

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var ratio = PixelRatio.get()
var indiceScreen = ratio <= 3 ? 1 : ratio > 3 ? 1.2 : 0.2;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    top: -110
  },
  bg: {
    position: "relative",
    top: 0,
    left: 0,
    height: 500,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  cardForeCast14D: {
    position: "relative",
    top: 0,
    left: 11,
    height: 'auto',
    width: 353
  },
  cardForeCast7D: {
    position: "relative",
    top: 0,
    left: 11,
    height: 'auto',
    width: 353,
  },
  untitledComponent: {
    position: "relative",
    top: 0,
    left: 11,
    height: 'auto',
    width: 353,
  },
  cardAccueil: {
    position: "relative",
    top: 0,
    left: 11,
    height: 'auto',
    width: 353
  },
  bgStack: {
    flex: 1
  }
});
