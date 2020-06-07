import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Dimensions, PixelRatio} from 'react-native';
import {Image as ReactImage, TouchableOpacity, SafeAreaView} from 'react-native';
import Svg, {Defs, Pattern, Path} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import City from "./city.js"
import Connexion from "./connexion.js"
import * as Font from 'expo-font';
import { AppLoading} from 'expo';
import { Auth } from 'aws-amplify';
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

const db = SQLite.openDatabase("db.db");

export default function SearchView({props, navigation}) {
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

    useEffect(() => {
      if(!search){
        fetch('https://discover.search.hereapi.com/v1/geocode?q='+ search+'&?limit=5&apiKey=yN093DXh0b8DQHeIrjf2tSefHybxmX16RMDWqROw65M', {
          method: 'get'
        })
        .then((response) => response.json())
        .then((resultat) => {
          console.log(resultat)
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
  }

  const vider = () => {
    setVide(true)
    setSearch('')
    setListSearch([])
  }
  if(!vide && charged && listCity){
    if(error == false){
      return (
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
            /><View style={styles.resultatsDeRecherche}>
                <View style={styles.rectangleBlanc}>
                  <FlatList
                    bounces={false}
                    data={listSearch}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>   <TouchableOpacity onPress={() => navigation.navigate('Detail', {responseApiAir: responseApiAir, responseApiMeteo: responseApiMeteo, responseApiWeatherHour: responseApiWeatherHour, color: color, textColor: colorText, textIndex: text})} onLongPress={() => {_addFavorite()}}>
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
                  <IconesLocaliser style={styles.iconesLocaliser}></IconesLocaliser>
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
            <AdMobBanner
              style={styles.admob}
              bannerSize="smartBannerPortrait"
              adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
              servePersonalizedAds={true}
              setTestDeviceID="EMULATOR"
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
                  <IconesLocaliser style={styles.iconesLocaliser}></IconesLocaliser>
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
          <AdMobBanner
            style={styles.admob}
            bannerSize="smartBannerPortrait"
            adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
            servePersonalizedAds={true}
            setTestDeviceID="EMULATOR"
            didFailToReceiveAdWithError={error => console.log(error + 'error')}
          />
            <FlatList
              bounces={false}
              data={listCity.items}
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
                <IconesLocaliser style={styles.iconesLocaliser}></IconesLocaliser>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
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
    backgroundColor: "rgba(255,255,255,1)"
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
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: width / 1.90,
    marginTop: 6
  },
  iconesLoupeRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 17,
    marginTop: 14
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
  }
})
