import { AppRegistry, Image, Platform, StatusBar, RefreshControl, Dimensions, ActivityIndicator, TouchableOpacity, Button, Alert, StyleSheet, Text, Modal, View, TextInput, Vibration, FlatList, Picker, ScrollView, TouchableHighlight, PixelRatio, SafeAreaView, ImageBackground } from 'react-native';
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
import IconBag from "../components/IconBag";
import GeoAirLogo from "../components/GeoAirLogo";

import * as IntentLauncher from 'expo-intent-launcher';
import * as Linking from 'expo-linking';

import { Notifications } from 'expo';

import * as DBLocal from '../../db/DBLocal.js'
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

function HomeView({navigation}) {

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
  const [item, setItem] = useState(null)
  const [isModalVisible , setIsModalVisible] = useState(false)

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
    setLoading(true)

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      if (Platform.OS == 'ios') {
        Alert.alert("Vous n'avez pas les droits ?","L'application n'a pas les droits d'accès à votre position.",[{text: 'Fermer', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{ text: 'Paramètres', onPress: () => Linking.openURL('app-settings:')}]);
      } else {
        Alert.alert("Vous n'avez pas les droits ?","L'application n'a pas les droits d'accès à votre position.",[{text: 'Fermer', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{ text: 'Paramètres', onPress: () => IntentLauncher.startActivityAsync(IntentLauncher.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS)}]);
      }

    }else{
      try{
        setLocation(await Location.getCurrentPositionAsync({}))
        // do something with location
      }catch(e){
        console.log('Error while trying to get location: ', e);
        if (Platform.OS == 'ios') {
          Alert.alert("Mince une erreur est survenue !","L'application n'arrive pas à trouver votre position. \nVeuillez vérifier les autorisations et/ou si la localisation est bien activée.",[{text: 'Fermer', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{ text: 'Paramètres', onPress: () => Linking.openURL('app-settings:')}]);

        } else {
          Alert.alert("Mince une erreur est survenue !","L'application n'arrive pas à trouver votre position. \nVeuillez vérifier les autorisations et/ou si la localisation est bien activée.",[{text: 'Fermer', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{ text: 'Paramètres', onPress: () => IntentLauncher.startActivityAsync(IntentLauncher.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS)}]);
        }
      }
    }

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

  const setPurchaseListener = ({ responseCode, results, errorCode }) => {
    // Purchase was successful
    if (responseCode === IAPResponseCode.OK) {
      results.forEach(purchase => {
        console.log()
        if (!purchase.acknowledged) {
          console.log(`Successfully purchased ${purchase.productId}`);
          // Process transaction here and unlock content...

          // Then when you're done
          finishTransactionAsync(purchase, true);
        }
      });
    }

    // Else find out what went wrong
    if (responseCode === IAPResponseCode.USER_CANCELED) {
      console.log('User canceled the transaction');
    } else if (responseCode === IAPResponseCode.DEFERRED) {
      console.log('User does not have permissions to buy but requested parental approval (iOS only)');
    } else {
      console.warn(`Something went wrong with the purchase. Received errorCode ${errorCode}`);
    }
  };

    const _subscribe = async function(){
      await InAppPurchases.purchaseItemAsync('com.geoair.onemonth');
    }

    if(loading){
      return (
      <View style={styles.container}>
        <View style={styles.bgStack}>
          <Bg style={styles.bg}></Bg>
          <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" }} size="large" color="#0000ff" />
          <View style={styles.aProximite}>
            <View style={styles.lieuxAProximiteRow}>
              <Text style={styles.lieuxAProximite}>LIEUX À PROXIMITÉ</Text>
              <View style={styles.btnActualiser}>
                <View style={styles.rectangle1}>
                  <TouchableOpacity style={{width: 130}} onPress={() => {_getLocationAsync()}} >
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
    );
    }else{
      return(
        <View style={styles.container}>
          <View style={styles.bgStack}>
            <Bg style={styles.bg}></Bg>
            <ModalPurchase/>
            <AdMobBanner
              style={styles.admob}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}

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
                      <TouchableOpacity style={{width: 40, marginLeft: 122}} onPress={() => {_addFavorite()}} >
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
                      data={responseApiWeatherHour.hourly.slice(0,25)}
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
                    <TouchableOpacity style={{width: 130}} onPress={() => {_getLocationAsync()}} >
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

HomeView.navigationOptions = ({ navigation }) => {
    return {
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

HomeView.defaultProps = {

}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: -100,
    height: height,
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
    height: 348,
    width: width,
    opacity: 1,
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
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 11,
  },
  ville: {
    height: 93,
    width: 353,
    opacity: 1
  },
  rectangle: {
    height: 93,
    width: width - 22,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  ville1: {
    height: 46,
    width: width - 225,
    opacity: 1,
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
    marginTop: 4
  },
  ville1Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 20,
    marginTop: 24,
  },
  infos: {
    height: 65,
    width: width - 35,
    opacity: 1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 11,
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
    width: width - 22,
    opacity: 1,
    marginTop: 32
  },
  rectangleDegradeGris: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 34,
    width: width - 22,
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
    width: width - 22,
    height: 105
  },
  aProximite: {
    position: "absolute",
    top: 30,
    left: 20,
    height: 38,
    width: width -38,
    opacity: 1,
    flexDirection: "row",
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
    flex: 1,
    alignItems: 'flex-end',
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
    width: width,
    height: height
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

export default HomeView;
