import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Modal, TouchableOpacity, Dimensions, PixelRatio, Button, Vibration,} from 'react-native';
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

import IconBag from "../components/IconBag";
import GeoAirLogo from "../components/GeoAirLogo";

export default function DetailView({props, navigation}) {

  const handleModale = () => {
    setIsModalVisible(true)
  }

  const ModalPurchase = () =>  {
    return (
        <Modal visible={isModalVisible} transparent={true} animationType="slide">
              <View style={styles.modalachat_modal}>
                <View data-layer="fdb5091c-7bb2-4410-845f-44f461bba635" style={styles.modalachat_modal_rectangleBlanc}></View>
                <View data-layer="268faeeb-7821-4fe1-afd7-2241d67ac6f0" style={styles.modalachat_modal_ville28a38cd4}>
                    <Text data-layer="6b417350-f0bc-45fc-ba6e-26f004e268d2" style={styles.modalachat_modal_ville28a38cd4_sansengagement}>sans engagement </Text>
                    <Text data-layer="527b0bd5-c54e-4d6c-9879-c5e468a86a31" style={styles.modalachat_modal_ville28a38cd4_prix}>1,49€ par mois</Text>
                    <Text data-layer="f1d79fa2-3e43-4854-a587-4c98493f9fd8" style={styles.modalachat_modal_ville28a38cd4_abonnement}>Abonnement 1 Mois</Text>
                </View>
                <Text data-layer="6d221eb4-466e-48a4-9fe5-0a23b187c0c4" style={styles.modalachat_modal_fonctionnalites1}>Plus de Pubs </Text>
                <Text data-layer="18dc93b0-9cf8-4af3-890e-5516c7b6c17e" style={styles.modalachat_modal_fonctionnalites2}>Prévisions à 14 jours</Text>
                <Text data-layer="220bc303-464a-498b-a41c-f8a67e944e13" style={styles.modalachat_modal_fonctionnalites3}>Notifications de météos (A venir)</Text>
                <Text data-layer="e6c79463-29b9-4cd0-a8ed-a4548d64a606" style={styles.modalachat_modal_fonctionnalites4}>Pleins d'autres fonctionnalités à venir </Text>
                <TouchableOpacity style={{ top: 330, height: 70}}>
                  <View data-layer="d2c47017-7064-4045-92e8-4a59d1a869e7" style={styles.modalachat_modal_restaurerachats}>
                      <View data-layer="69482e26-5f51-4c75-ac21-c700872bc12e" style={styles.modalachat_modal_restaurerachats_rectangle0838a8e4}></View>
                      <View data-layer="40fe2f4e-249b-4625-b557-2efd79be2fbb" style={styles.modalachat_modal_restaurerachats_ville66b938f6}>
                          <Text data-layer="50a918c5-682e-4926-89f1-7d46c9dd2a62" style={styles.modalachat_modal_restaurerachats_ville66b938f6_versailles6ac1c7c8}>Restaurer votre abonnement</Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ top: 340, height: 70}}>
                  <View data-layer="b8546e10-427d-487c-85c9-4934a67f97e7" style={styles.modalachat_modal_souscrire}>
                      <Svg data-layer="da8ff9f0-135a-4016-a8ed-486ee14e9ce9" style={styles.modalachat_modal_souscrire_rectangle} preserveAspectRatio="none" fill="rgba(103, 232, 211, 1)"><SvgPath d="M 28 0 L 215 0 C 230.4639739990234 0 243 14.90217781066895 243 33.28494644165039 L 243 35.05428314208984 C 243 53.43705368041992 230.4639739990234 68.3392333984375 215 68.3392333984375 L 28 68.3392333984375 C 12.53602600097656 68.3392333984375 0 53.43705368041992 0 35.05428314208984 L 0 33.28494644165039 C 0 14.90217781066895 12.53602600097656 0 28 0 Z"  /></Svg>
                      <View data-layer="c7161fac-45f3-46d8-a0b7-e1077ac870f2" style={styles.modalachat_modal_souscrire_ville}>
                          <Text data-layer="b8614d16-4980-45c2-b1c1-1f6d2f05ff96" style={styles.modalachat_modal_souscrire_ville_versailles}>Souscrire</Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsModalVisible(false)} style={{height: 33, width: 33, zIndex: 10, top: -224, left: -5}}>
                  <View style={styles.modalachat_modal_close}>
                      <Svg style={styles.modalachat_modal_close_ellipse1} preserveAspectRatio="none" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></Svg>
                      <Svg style={styles.modalachat_modal_close_iconMetroCross} preserveAspectRatio="none" fill="rgba(110, 110, 110, 1)"><SvgPath d="M 16.89064407348633 14.31955909729004 C 16.89058685302734 14.31949901580811 16.89053153991699 14.31943893432617 16.89047431945801 14.31940841674805 L 12.50637722015381 9.640172004699707 L 16.89048767089844 4.960936546325684 L 16.89065742492676 4.960785865783691 C 16.93625259399414 4.91206169128418 16.9714527130127 4.85340690612793 16.99385452270508 4.788829803466797 C 17.05377769470215 4.617475509643555 17.01959609985352 4.417051315307617 16.89048957824707 4.279257774353027 L 14.81945133209229 2.068862915039063 C 14.69034576416016 1.93109917640686 14.50261497497559 1.894647359848022 14.34203720092773 1.958603739738464 C 14.28153610229492 1.982528328895569 14.22657585144043 2.02008318901062 14.18089580535889 2.06871223449707 C 14.18089580535889 2.068772315979004 14.18083953857422 2.06880259513855 14.18078231811523 2.068862915039063 L 9.796615600585938 6.748129844665527 L 5.412447929382324 2.068892955780029 L 5.412306785583496 2.068742275238037 C 5.36665153503418 2.020108222961426 5.311707973480225 1.982552170753479 5.251221656799316 1.958633661270142 C 5.090615749359131 1.894647359848022 4.902884960174561 1.931129217147827 4.773779392242432 2.068892955780029 L 2.702728748321533 4.279318332672119 C 2.573623418807983 4.417111873626709 2.539469957351685 4.617506504058838 2.599393606185913 4.788860321044922 C 2.621817111968994 4.853425979614258 2.6570143699646 4.912075996398926 2.702587604522705 4.960816383361816 C 2.702644109725952 4.960846424102783 2.702672481536865 4.960906982421875 2.702728748321533 4.960967063903809 L 7.08692455291748 9.640172004699707 L 2.702728748321533 14.31943893432617 L 2.702615976333618 14.31958961486816 C 2.657050371170044 14.36833000183105 2.621846199035645 14.42696666717529 2.599393367767334 14.49151515960693 C 2.539441585540771 14.66286945343018 2.573623418807983 14.86329460144043 2.702728748321533 15.00108814239502 L 4.77377986907959 17.21148490905762 C 4.902913570404053 17.34927940368652 5.090644359588623 17.38572883605957 5.251221656799316 17.32177352905273 C 5.311712265014648 17.29783058166504 5.366662502288818 17.26026725769043 5.412334442138672 17.21163177490234 C 5.412363529205322 17.21157264709473 5.412420272827148 17.21154403686523 5.412476539611816 17.21148300170898 L 9.79664421081543 12.53224563598633 L 14.18081092834473 17.21148300170898 L 14.18098068237305 17.21160316467285 C 14.22663879394531 17.2602481842041 14.28157997131348 17.29782295227051 14.34206676483154 17.32176971435547 C 14.50264358520508 17.38572692871094 14.69043159484863 17.34927558898926 14.81948089599609 17.21148300170898 L 16.89050483703613 15.00105667114258 C 17.01960945129395 14.86326217651367 17.05379104614258 14.66283702850342 16.99386787414551 14.49148464202881 C 16.97143745422363 14.42692279815674 16.93622970581055 14.36828231811523 16.89064788818359 14.31955623626709 Z"  /></Svg>
                  </View>
                </TouchableOpacity>
              </View>
          </Modal>
    );
  }

  useEffect(() => {
    navigation.setParams({handleModale : handleModale});
  }, []);

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
  const [responseApiWeatherHour, setResponseApiWeatherHour] = useState({})
  const [responseApiMeteo, setResponseApiMeteo] = useState(navigation.state.params.responseApiMeteo)
  const [responseApiAir, setResponseApiAir] = useState(navigation.state.params.responseApiAir)
  const [count, setCount] = useState(navigation.state.params.count)
  const [charged, setCharged] = useState(false)
  const [color, setColor] = useState('')
  const [colorText, setColorText] = useState('')
  const [text, setText] = useState('')
  const [isModalVisible , setIsModalVisible] = useState(false)

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

async function inter() {
  if(count === 2){
    var capp = Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/2396540078" : "ca-app-pub-8614556057049331/6805191398"
    await AdMobInterstitial.setAdUnitID(capp); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync()
  }
}

    useMemo(()=>{
      inter()
      if(typeof navigation.state.params.responseApiWeatherHour == 'undefined' || !navigation.state.params.responseApiWeatherHour ){
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+responseApiMeteo.coord.lat+'&lon='+responseApiMeteo.coord.lon+'&appid=505c84426a182da1a7178151dccdb616', {method: "GET"})
        .then((responsWeatherHour) => responsWeatherHour.json())
        .then((responseJsonWeatherHour) => {
          var tmpTextColor
          var tmpColor
          var tmpText
          if (responseApiAir.data.aqi >= 0 && responseApiAir.data.aqi <= 50){
            setColor("#DCFFF9")
            setColorText("#00EBD3")
            setText("Bonne")
            tmpColor = "#DCFFF9"
            tmpTextColor = "#00EBD3"
            tmpText = "Bonne"

          }
          if (responseApiAir.data.aqi >= 51 && responseApiAir.data.aqi <= 150){
            setColor("#FFF3E3")
            setColorText("#FFB553")
            setText("Moyenne")
            tmpColor = "#FFF3E3"
            tmpTextColor = "#FFB553"
            tmpText = "Moyenne"
          }
          if (responseApiAir.data.aqi >= 151){
            setColor("#FFEDEC")
            setColorText("#FF6B53")
            setText("Mauvaise")
            tmpColor = "#FFEDEC"
            tmpTextColor = "#FF6B53"
            tmpText = "Mauvaise"
          }

          setResponseApiWeatherHour(responseJsonWeatherHour)
          setCharged(true)
          return responseJsonWeatherHour
        })
      }else {
        setCharged(true)
        setColor(navigation.state.params.color)
        setColorText(navigation.state.params.textColor)
        setText(navigation.state.params.textIndex)
        setResponseApiWeatherHour(navigation.state.params.responseApiWeatherHour)
      }
    }, [])

    var dateSunSet = new Date(responseApiMeteo.sys.sunrise * 1000)
    var dateSunRise = new Date(responseApiMeteo.sys.sunset * 1000)
    const minuteSunRise = "0" + dateSunRise.getMinutes()
    const minuteSunSet = "0" + dateSunSet.getMinutes()

    const sunset = dateSunSet.getHours() + 'h' + minuteSunSet.substr(-2)
    const sunrise = dateSunRise.getHours() + 'h' + minuteSunRise.substr(-2)

    if(charged){
      return (
        <View style={styles.container}>
          <View style={styles.bgStack}>
            <Bg style={styles.bg}></Bg>
            <ModalPurchase/>
            <ScrollView style={{ top: 70, height: height/1.35}} >
              <CardAccueil responseApiMeteo={responseApiMeteo}  responseApiAir={responseApiAir} responseApiWeatherHour={responseApiWeatherHour} style={styles.cardAccueil}></CardAccueil>
              <AdMobBanner
                style={{marginTop: 5, marginBottom: 5}}
                bannerSize="smartBannerPortrait"
                adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
                servePersonalizedAds={true}

                didFailToReceiveAdWithError={error => console.log(error + 'error')}
              />
              <UntitledComponent responseApiMeteo={responseApiMeteo} sunset={sunset} sunrise={sunrise} responseApiWeatherHour={responseApiWeatherHour} responseApiAir={responseApiAir} responseApiWeatherHour={responseApiWeatherHour} textColor={colorText} text={text} style={styles.untitledComponent}></UntitledComponent>
              <AdMobBanner
                style={{marginTop: 95, marginBottom: 5}}
                bannerSize="smartBannerPortrait"
                adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
                servePersonalizedAds={true}

                didFailToReceiveAdWithError={error => console.log(error + 'error')}
              />
              <CardForeCast7d responseApiMeteo={responseApiMeteo} style={styles.cardForeCast7D}></CardForeCast7d>
              <AdMobBanner
                style={{marginTop: 5, marginBottom: 5}}
                bannerSize="smartBannerPortrait"
                adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
                servePersonalizedAds={true}

                didFailToReceiveAdWithError={error => console.log(error + 'error')}
              />
              <CardForeCast14d responseApiMeteo={responseApiMeteo} style={styles.cardForeCast14D}></CardForeCast14d>
              <AdMobBanner
                style={{marginTop: 5, marginBottom: 20}}
                bannerSize="smartBannerPortrait"
                adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
                servePersonalizedAds={true}

                didFailToReceiveAdWithError={error => console.log(error + 'error')}
              />
            </ScrollView>
          </View>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <View style={styles.bgStack}>
            <Bg style={styles.bg}></Bg>

          </View>
        </View>
      )
    }


}

DetailView.navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,marginLeft: 20}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
      ),
      headerTitle: (
        <GeoAirLogo/>
      ),
      headerRight: (
          <TouchableOpacity onPress={() => navigation.getParam("handleModale")()} style={{left: -15}} >
            <IconBag />
          </TouchableOpacity>
        ),
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    };
  };

DetailView.defaultProps = {

}

var {height, width} = Dimensions.get('window');


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
  },
  modalachat: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "100.00%",
    height: "auto",
    left: 0,
    top: 0
  },
  modalachat_bg: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: "auto",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  modalachat_bg_bgBleue4641984: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 375,
    height: 812,
    left: 0,
    top: 0
  },
  modalachat_bg_bgBleue4641984_mask5a3bc501: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 812,
    left: 0,
    top: 0
  },
  modalachat_bg_bgBleue4641984_bgBleu: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: 375,
    height: 812,
    left: 0,
    top: 0
  },
  modalachat_bg_bgBleue4641984_bgBleu_oval47ce63c9: {
    opacity: 0.0794270858168602,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 438,
    height: 438,
    left: 84,
    top: -138
  },
  modalachat_bg_bgBleue4641984_bgBleu_oval: {
    opacity: 0.0794270858168602,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 416,
    height: 416,
    left: -208,
    top: 44
  },
  modalachat_bg_bgBleue4641984_bgBleu_mask: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 375,
    height: 812,
    left: 0,
    top: 0
  },
  modalachat_modal: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: width - 22,
    height: 593,
    top: '14%',
    left: 11,
    right: 36
  },
  modalachat_modal_rectangleBlanc: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.10980392156862745,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 32,
    width: width - 22,
    height: 584,
    top: 9
  },
  modalachat_modal_ville28a38cd4: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 207,
    height: 92,
    left: 27.5,
    top: 38
  },
  modalachat_modal_ville28a38cd4_sansengagement: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(127, 141, 154, 1)",
    fontSize: 14,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 150,
    height: 19,
    left: 0,
    top: 73
  },
  modalachat_modal_ville28a38cd4_prix: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(75, 84, 93, 1)",
    fontSize: 21,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 165,
    height: 25,
    left: 0,
    top: 36
  },
  modalachat_modal_ville28a38cd4_abonnement: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(66, 77, 88, 1)",
    fontSize: 20,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 207,
    height: 36,
    left: 0,
    top: 0
  },
  modalachat_modal_fonctionnalites1: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 104,
    height: 22,
    left: 27.5,
    top: 187
  },
  modalachat_modal_fonctionnalites2: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 150,
    height: 22,
    left: 27.5,
    top: 221
  },
  modalachat_modal_fonctionnalites3: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 232,
    height: 22,
    left: 27.5,
    top: 255
  },
  modalachat_modal_fonctionnalites4: {
    opacity: 1,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    textAlign: "left",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 256,
    height: 22,
    left: 27.5,
    top: 289
  },
  modalachat_modal_restaurerachats: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 67.47,
    left: "15%",
    top: 0,
    right: 29.5
  },
  modalachat_modal_restaurerachats_rectangle0838a8e4: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.10980392156862745,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 30,
    width: 243,
    height: 67.47,
    left: 0,
    top: 0
  },
  modalachat_modal_restaurerachats_ville66b938f6: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 230,
    height: 36,
    left: 5,
    top: 21.1
  },
  modalachat_modal_restaurerachats_ville66b938f6_versailles6ac1c7c8: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(66, 77, 88, 1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 230,
    height: 36,
    left: 0,
    top: 0
  },
  modalachat_modal_souscrire: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 68.34,
    left: "15%",
    top: 0,
    right: 29.5
  },
  modalachat_modal_souscrire_rectangle: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.10980392156862745,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 30,
    width: 243,
    height: 68.34,
    left: 0,
    top: 0
  },
  modalachat_modal_souscrire_ville: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 119.82,
    height: 36,
    left: 61,
    top: 16.74
  },
  modalachat_modal_souscrire_ville_versailles: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 119.82,
    height: 36,
    left: 0,
    top: 0
  },
  modalachat_modal_close: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 30,
    height: 30,
    left: 0,
    top: 0
  },
  modalachat_modal_close_ellipse1: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    width: "auto",
    height: "auto",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  modalachat_modal_close_iconMetroCross: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 18,
    height: 18,
    left: "18%",
    top: "18%"
  }
});
