import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Modal, Dimensions, PixelRatio} from 'react-native';
import {Image as ReactImage, TouchableOpacity, SafeAreaView} from 'react-native';
import Svg, {Defs, Pattern, Path} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import Toast from 'react-native-root-toast';
import * as data from '../../db/favorite.json';
import { connect } from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input'
import * as DBLocal from '../../db/DBLocal.js'
import ListComponent from './ListComponent.js'
import * as SQLite from "expo-sqlite";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesAjouter from "../components/IconesAjouter";
import IconesCouvert from "../components/IconesCouvert";
import IndiceAir from "../components/IndiceAir";
import Heure01 from "../components/Heure01";
import IconesActualiser from "../components/IconesActualiser";
import IconesMenu from "../components/IconesMenu";
import MenuHome from "../components/MenuHome";
import Interface from "../components/Interface";
import VilleFavoris from '../components/VilleFavoris'
import IconesPluie from "../components/IconesPluie";
import IconesLoupe from "../components/IconesLoupe";
import IconesLocaliser from "../components/IconesLocaliser";

import IconBag from "../components/IconBag";
import GeoAirLogo from "../components/GeoAirLogo";

const db = SQLite.openDatabase("db.db");

export default function SearchView({props, navigation}) {

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

  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const [listSearch, setListSearch] = useState({})
  const [search, setSearch] = useState('')
  const [responseApiAir, setResponseApiAir] = useState({})
  const [error, setError] = useState(null)
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [responseApiWeatherHour, setResponseApiWeatherHour] = useState({})
  const [listCity, setListCity] = useState([])
  const [vide, setVide] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [hide, setHide] = useState('')
  const [color, setColor] = useState('')
  const [colorText, setColorText] = useState('')
  const [text, setText] = useState('')
  const [charged, setCharged] = useState('')
  let [count, setCount] = useState(0)

    useEffect(() => {
      if(search){
        fetch('https://discover.search.hereapi.com/v1/geocode?q='+ search+'&?limit=5&apiKey=yN093DXh0b8DQHeIrjf2tSefHybxmX16RMDWqROw65M', {
          method: 'get'
        })
        .then((response) => response.json())
        .then((resultat) => {
          setListCity(resultat)
          return resultat
        })
      }
    }, [search])

    const _searchByCity = (city) => {
      toogleHide(false)
      setCharged(false)
      setVide(false)
      setListSearch({})
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=505c84426a182da1a7178151dccdb616', {
          method: 'GET'})
        .then((response) => response.json())
        .then((resultat) => {
          var id = 0
          var data = []
          var tmpTextColor
          var tmpColor
          var tmpText
          if(resultat.cod == 200) {
            fetch('https://api.waqi.info/feed/geo:'+resultat.coord.lat+';'+resultat.coord.lon+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
            .then((responsewaqi) => responsewaqi.json())
            .then((responseJsonWaqi) => {
            setResponseApiAir(responseJsonWaqi);
            setResponseApiMeteo(resultat)

            if (responseJsonWaqi.data.aqi >= 0 && responseJsonWaqi.data.aqi <= 50){
              setColor("#DCFFF9")
              setColorText("#00EBD3")
              setText("Bonne")
              tmpColor = "#DCFFF9"
              tmpTextColor = "#00EBD3"
              tmpText = "Bonne"

            }
            if (responseJsonWaqi.data.aqi >= 51 && responseJsonWaqi.data.aqi <= 150){
              setColor("#FFF3E3")
              setColorText("#FFB553")
              setText("Moyenne")
              tmpColor = "#FFF3E3"
              tmpTextColor = "#FFB553"
              tmpText = "Moyenne"
            }
            if (responseJsonWaqi.data.aqi >= 151){
              setColor("#FFEDEC")
              setColorText("#FF6B53")
              setText("Mauvaise")
              tmpColor = "#FFEDEC"
              tmpTextColor = "#FF6B53"
              tmpText = "Mauvaise"
            }

            data.push({
              id: id++,
              country: resultat.sys.country,
              aqi: responseJsonWaqi.data.aqi,
              temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
              temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
              idMeteo: resultat.weather[0].id,
              ville: resultat.name,
              color: tmpColor,
              textColor: tmpTextColor,
              text: tmpText
            })
            setListSearch(data)
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+resultat.coord.lat+'&lon='+resultat.coord.lon+'&appid=505c84426a182da1a7178151dccdb616', {method: "GET"})
            .then((responsWeatherHour) => responsWeatherHour.json())
            .then((responseJsonWeatherHour) => {
              setResponseApiWeatherHour(responseJsonWeatherHour)
              setCharged(true)
              return responseJsonWeatherHour
            })

            setError(false)
            return responseJsonWaqi;
            })
          }else {
            Toast.show('Problème de connexion au serveur, veuillez ressayer dans quelques instants', {
              duration: Toast.durations.LONG,
              position: Toast.positions.CENTER,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
            });
            setCharged(true)
            setError(true)
          }
          return resultat
        })
        .catch( error => {
          console.error(error);
        });


    }

  _addFavorite = () => {
    vider()
    db.transaction(tx => {
      tx.executeSql( `insert into Favoris(villes, pays, latitude, longitude) values(?, ?, ?, ?)`, [responseApiMeteo.name, responseApiMeteo.sys.country, responseApiMeteo.coord.lat, responseApiMeteo.coord.lon], db.transaction(tx => {
        tx.executeSql(
          `select * from Favoris`,[],
          (_, { rows: { _array } }) => dispatch({type: "INIT_FAVORITE", data: _array }), (transaction, e) => console.log(e))
      }), (transaction, e) => console.log(e, transaction))
    })


    Toast.show('Ajouté aux favoris', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });

  }

  const _setInput = (item) => {

    toogleHide(false)
    setSearch(item.address.city)
    _searchByCity(item.address.city)
  }

  const toogleHide = (set) => {
    if(set){
      setHide(hide)
    } else {
      setHide('none')
    }
  }

  const _searching = (text) => {
    setSearch(text)
    setCharged(false)
  }

  const vider = () => {
    setVide(true)
    setSearch('')
    setListSearch([])
  }

  const _pressAction = () => {
    if(count >= 2){
      setCount(0)
      navigation.navigate('Detail', {responseApiAir: responseApiAir, responseApiMeteo: responseApiMeteo, responseApiWeatherHour: responseApiWeatherHour, color: color, textColor: colorText, textIndex: text, count: 0})
    }else {
      var tmpCount = count + 1
      setCount(tmpCount);
      navigation.navigate('Detail', {responseApiAir: responseApiAir, responseApiMeteo: responseApiMeteo, responseApiWeatherHour: responseApiWeatherHour, color: color, textColor: colorText, textIndex: text, count: tmpCount})
    }
  }

  if(!vide && charged && listCity){
    if(error == false){
      return (
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
            /><View style={styles.resultatsDeRecherche}>
                <View style={styles.rectangleBlanc}>
                  <FlatList
                    bounces={false}
                    data={listSearch}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>   <TouchableOpacity onPress={() => _pressAction()}>
                        <VilleFavoris search={true} icon={item.idMeteo} aqi={item.aqi} textColor={item.textColor} color={item.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country} /></TouchableOpacity>}
                    initialNumToRender={5}
                  />
                </View>
              </View>
            <View style={styles.rect2}>
              <View style={styles.rectangle}>
                <View style={styles.iconesLoupeRow}>
                  <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
                  <View style={styles.verStack}>
                    <TextInput keyboardType={'web-search'} id={'searchbar'} onChange={() => vider()} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> toogleHide(true)} onSubmitEditing={() =>  _searchByCity(search)} value={search} placeholder={'Ville'}  style={styles.ver}/>
                  </View>

                </View>

              </View>
            </View>
          </View>
        </View>
      )
    }else{
      return (
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
              <FlatList
                bounces={false}
                data={listCity.items}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{height : 80}}
                renderItem={({item}) => (<TouchableOpacity onPress={() => {_setInput(item)}}><ListComponent aucun={true}/></TouchableOpacity>)}
                initialNumToRender={5}
              />
            <View style={styles.rect2}>
              <View style={styles.rectangle}>
                <View style={styles.iconesLoupeRow}>
                  <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
                  <View style={styles.verStack}>
                    <TextInput keyboardType={'web-search'} id={'searchbar'} autoFocus={true} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> toogleHide(true)} onSubmitEditing={() =>  _searchByCity(search)} value={search} placeholder={'Ville'}  style={styles.ver}/>
                  </View>

                </View>

              </View>
            </View>
          </View>
        </View>
      )
    }
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
            <FlatList
              bounces={false}
              data={listCity.items}
              style={{width: width}}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{height : 80}}
              renderItem={({item}) => (<TouchableOpacity onPress={() => {_setInput(item)}}><ListComponent name={item.address.city} admin2_code={item.address.postalCode} country_code={item.address.countryName}/></TouchableOpacity>)}
              initialNumToRender={5}
            />
          <View style={styles.rect2}>
            <View style={styles.rectangle}>
              <View style={styles.iconesLoupeRow}>
                <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
                <View style={styles.verStack}>
                  <TextInput keyboardType={'web-search'} id={'searchbar'} autoFocus={true} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> toogleHide(true)} onSubmitEditing={() =>  _searchByCity(search)} value={search} placeholder={'Ville'}  style={styles.ver}/>
                </View>

              </View>

            </View>
          </View>
        </View>
      </View>
    )
  }
}

SearchView.navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
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

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    top: -110
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 812,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  admob: {
    position: "absolute",
    top: 608,
    left: 0,
    height: 116,
    width: 376,
    opacity: 1,
    backgroundColor: "transparent"
  },
  resultatsDeRecherche: {
    position: "absolute",
    top: 132,
    marginLeft: 11,
    height: 'auto',
    width: width-22,
    opacity: 1
  },
  rectangleBlanc: {
    height: 'auto',
    width: width-22,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,1)",
  },
  villeRecherche01: {
    height: 69,
    width: 315,
    opacity: 1,
    marginTop: 86,
    marginLeft: 18
  },
  ville2: {
    height: 44,
    width: 154,
    opacity: 1
  },
  versaillesCopy: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  yvelinesFranceCopy: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesCouvert: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 16,
    marginTop: 2
  },
  temperatures2: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 2
  },
  cCopy: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy1: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  ville2Row: {
    height: 44,
    flexDirection: "row"
  },
  line1: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 23,
    marginLeft: 4
  },
  villeRecherche02: {
    height: 69,
    width: 315,
    opacity: 1,
    marginTop: 22,
    marginLeft: 18
  },
  ville1: {
    height: 44,
    width: 154,
    opacity: 1
  },
  verone: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  veronaItalie: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesPluie: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 17,
    marginTop: 2
  },
  temperatures1: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 1
  },
  c2: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  c3: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir3: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  ville1Row: {
    height: 44,
    flexDirection: "row"
  },
  line: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 23,
    marginLeft: 4
  },
  villeRecherche03: {
    height: 44,
    width: 315,
    opacity: 1,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 18
  },
  ville: {
    height: 44,
    width: 154,
    opacity: 1
  },
  verdun: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  montrealQcCanada: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesSoleil: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 16,
    marginTop: 2
  },
  temperatures: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 2
  },
  c: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  c1: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir2: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  villeRow: {
    height: 44,
    flexDirection: "row",
    flex: 1
  },
  rect2: {
    position: "absolute",
    top: 132,
    marginLeft: 11,
    height: 63,
    width: width -22,
    opacity: 1
  },
  rectangle: {
    height: 63,
    width: width -22,
    borderRadius: 31.5,
    shadowColor: "rgba(0,0,0,0.06924715909090909)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconesLoupe: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 6
  },
  ver: {
    position: "absolute",
    top: 5,
    left: 0,
    height: 26,
    width: width/1.45,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 21,
  },
  line2: {
    position: "absolute",
    height: 38,
    width: 3,
    top: 0,
    left: 37,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  verStack: {
    width: 63,
    height: 38,
    marginLeft: 14
  },
  iconesLocaliser: {
    height: 38,
    width: 24,
    marginRight: 18,
    opacity: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconesLoupeRow: {
    alignItems: 'center',
    flexDirection: "row",
    flex: 6,
    marginRight: 26,
    marginLeft: 17,
  },
  nav: {
    position: "absolute",
    top: 58,
    left: 11,
    height: 36,
    width: 344,
    opacity: 1,
    flexDirection: "row"
  },
  iconesChevronGauche: {
    height: 28,
    width: 28,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 4
  },
  recherche1: {
    height: 36,
    width: 220,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 39
  },
  iconesMenu: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 33,
    marginTop: 6
  },
  iconesChevronGaucheRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  menuRecherche: {
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
})
