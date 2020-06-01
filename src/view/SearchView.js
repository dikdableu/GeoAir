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
        fetch('https://discover.search.hereapi.com/v1/geocode?q=Paris&?limit=5&apiKey=yN093DXh0b8DQHeIrjf2tSefHybxmX16RMDWqROw65M', {
          method: 'get'
        })
        .then((response) => response.json())
        .then((resultat) => {
          console.log(resultat.items.id)
          setListCity(resultat)
          return resultat
        })
      }else {
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
              idMeteo: 200,
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
                        <VilleFavoris search={true} icon={item.idMeteo} aqi={item.aqi} textColor={item.textColor} color={item.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country} style={styles.villeFavoris1} /></TouchableOpacity>}
                    initialNumToRender={5}
                  />
                </View>
              </View>
            <View style={styles.rect2}>
              <View style={styles.rectangle}>
                <View style={styles.iconesLoupeRow}>
                  <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
                  <View style={styles.verStack}>
                    <TextInput keyboardType={'web-search'} id={'searchbar'} onFocus={() => vider()} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> toogleHide(true)} onSubmitEditing={() =>  _searchByCity(search)} value={search} placeholder={'Ville'}  style={styles.ver}/>
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
        <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="smartBannerPortrait"
          adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
          servePersonalizedAds={true}
          setTestDeviceID="EMULATOR"
          didFailToReceiveAdWithError={error => console.log(error + 'error')}
        />
        <View data-layer="59cd9a49-e71f-4f3c-8add-6de16b43c754" style={styles.ajouterUnLieux_groupe215}>
          <TextInput keyboardType={'web-search'} id={'searchbar'} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> vider()} onSubmitEditing={() => setTimeout(() => {_searchByCity(search)}, 500)} value={search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" style={styles.ajouterUnLieux_groupe215_versa}/>
          <Svg data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
          <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
          <Text style={{color: '#BCBCBC', fontSize: 22, "width": 375,height: 131,left: '32%',top: 299}}>Aucun résultat</Text>
        </View>
        {search == '' ? null :
        (<FlatList
          bounces={false}
          style={styles.ajouterUnLieux_rectangle283}
          data={listCity}
          keyExtractor={(item) => item.idVilles.toString()}
          renderItem={({item}) => <TouchableOpacity onLonPress={() => {_setInput(item)}}><ListComponent name={item.name} admin2_code={item.admin2_code} country_code={item.country_code}/></TouchableOpacity>}
          initialNumToRender={10}
        />)
        }
      </SafeAreaView>
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
var ratio = PixelRatio.get()
var indiceScreen = ratio <= 3 ? 1 : ratio > 3 ? 1.2 : 0.2;

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
    left: 11,
    height: 'auto',
    width: 353,
    opacity: 1
  },
  rectangleBlanc: {
    height: 'auto',
    width: 353,
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
    left: 11,
    height: 63,
    width: 353,
    opacity: 1
  },
  rectangle: {
    height: 63,
    width: 353,
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
    width: 250,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 21
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
    marginLeft: 185,
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
