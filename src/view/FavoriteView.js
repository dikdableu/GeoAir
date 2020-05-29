import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, ScrollView, Dimensions, Image as ReactImage, TouchableOpacity, SafeAreaView, TouchableHighlight, PixelRatio} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import City from "./city.js"
import { AppLoading} from 'expo';
import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux'
import * as DBLocal from '../../db/DBLocal.js'
import * as SQLite from "expo-sqlite";
import Swipeout from 'react-native-swipeout';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';

import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesAjouter from "../components/IconesAjouter";
import IndiceAir from "../components/IndiceAir";
import Heure01 from "../components/Heure01";
import IconesActualiser from "../components/IconesActualiser";
import IconesMenu from "../components/IconesMenu";
import MenuHome from "../components/MenuHome";
import Interface from "../components/Interface";
import VilleFavoris from '../components/VilleFavoris'

import IconesCouvert from "../components/IconesCouvert";
import IconesNeige from "../components/IconesNeige";
import IconesOrage from "../components/IconesOrage";
import IconesBrume from "../components/IconesBrume";
import IconesPluie from "../components/IconesPluie";
import IconesSoleil from "../components/IconesSoleil";
import IconesNuages from "../components/IconesNuages";

const db = SQLite.openDatabase("db.db");

const FavoriteView = ({props, navigation}) => {

  const dispatch = useDispatch()
  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)


  const [listSearch, setListSearch] = useState([])
  const [responseApiAir, setResponseApiAir] = useState({})
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [color, setColor] = useState(null)
  const [errorFetch, setErrorFetch] = useState(null)
  const [tmpId, setTmpId] = useState(null)
  const [rowOpen, setRowOpen] = useState(null)

  useMemo(() => {
    if(typeof listFavorite != "undefined" && listFavorite.length > 0){
      listFavorite[0].map((value) => {
        searchByCity(value)
      })
    }
  }, [listFavorite])


  function searchByCity(all){
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+all.latitude+'&lon='+all.longitude+'&APPID=505c84426a182da1a7178151dccdb616', {
        method: 'GET'})
      .then((response) => response.json())
      .then((resultat) => {
        if(resultat.cod == 200) {
          fetch('https://api.waqi.info/feed/geo:'+resultat.coord.lat+';'+resultat.coord.lon+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
          .then((responsewaqi) => responsewaqi.json())
          .then((responseJsonWaqi) => {
          setResponseApiAir(responseJsonWaqi);
          setResponseApiMeteo(resultat)
          if (responseJsonWaqi.data.aqi >= 0 && responseJsonWaqi.data.aqi <= 50){
            var tmpColor = "#DCFFF9"
            var tmpTextColor = "#00EBD3"
          }else if (responseJsonWaqi.data.aqi >= 51 && responseJsonWaqi.data.aqi <= 150){
            var tmpColor = "#FFF3E3"
            var tmpTextColor = "#FFB553"
          }else if (responseJsonWaqi.data.aqi >= 151){
            var tmpColor = "#FFEDEC"
            var tmpTextColor = "#FF6B53"
          }
          var i = 0
          var line = {
            id: all.id,
            country: resultat.sys.country,
            aqi: responseJsonWaqi.data.aqi,
            temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
            temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
            idMeteo: 200,
            ville: resultat.name,
            color: tmpColor,
            textColor: tmpTextColor,
            responseApiAir: responseJsonWaqi,
            responseApiMeteo: resultat
          }
          listSearch.map((value) => {
            if(value.id == all.id){
              i++
            }
          })
          if(i == 0){
            setListSearch(listSearch => listSearch.concat(line))
          }
          return responseJsonWaqi
        }).catch (error => {
          setErrorFetch(error)
          console.error(error);
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
        }
          return resultat
      })
      .catch( error => {
        setErrorFetch(error)
        console.error(error);
      });
  }

  const deleteFav = () => {
    db.transaction(tx => {
      tx.executeSql(`delete from Favoris where id = ?;`, [rowOpen])
    }, db.transaction(txt => {
      txt.executeSql(`select * from Favoris;`, (_, { rows: { _array } }) => dispatch({type: "INIT_FAVORITE", data: _array }), (transaction, e) => console.log(e))
    }, (transaction, err) => console.log(err)),(transaction, err) => console.log(err))

    var index = listSearch.findIndex(x => x.id === rowOpen)
    setListSearch(listSearch.filter((_,i)=> i!== index))
  }



  if(listSearch && listSearch.length > 0){
    let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'black',
        onPress: () => { deleteFav() }
      }];

    return (
      <SafeAreaView style={{flex:1, borderWidth: 0}} forceInset={{ bottom: 'never'}}>
        <View style={styles.container}>
            <View style={styles.bgStack}>
              <Bg style={styles.bg}></Bg>
                <View style={styles.listeDesVilles}>
                    <FlatList
                      data={listSearch}
                      contentContainerStyle={{ paddingBottom: 20}}
                      style={{height: 500}}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) =>  <View><Swipeout onOpen={() => {setRowOpen(item.id)}}right={swipeBtns}
                      backgroundColor= 'transparent'
                      >
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {responseApiAir: item.responseApiAir, responseApiMeteo: item.responseApiMeteo, color: item.color})}><VilleFavoris icon={item.idMeteo} aqi={item.aqi} textColor={item.textColor} color={item.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country} style={styles.villeFavoris1} /></TouchableOpacity>
                      </Swipeout><AdMobBanner
                        style={{ marginBottom: 5, marginTop: 5}}
                        bannerSize="smartBannerPortrait"
                        adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
                        servePersonalizedAds={true}
                        setTestDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={error => console.log(error + 'error')}
                      /></View>
                    }/>
                    <View style={styles.ajouterUnLieu}>
                      <IconesAjouter style={styles.iconesAjouter}></IconesAjouter>
                      <Text style={styles.ajouterUnLieu1}>Ajouter un lieu</Text>
                    </View>
                </View>
            </View>
          </View>
        </SafeAreaView>

    )
  }else {
    return (
        <SafeAreaView style={styles.favoris}>

        </SafeAreaView>
      )
  }
}

FavoriteView.propTypes = {

}

FavoriteView.defaultProps = {

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
  ajouterUnLieu: {
    position: "relative",
    top: 10,
    left: 86,
    height: 76,
    width: 203,
    opacity: 1
  },
  iconesAjouter: {
    height: 38,
    width: 38,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 83
  },
  ajouterUnLieu1: {
    height: 28,
    width: 203,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 10
  },
  listeDesVilles: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 'auto',
    width: 353,
    opacity: 1,
  },
  villeFavoris1: {
    height: 93,
    width: 353,
    opacity: 1,
    backgroundColor: "transparent"
  },
  villeFavoris: {
    height: 93,
    width: 353,
    opacity: 1,
    backgroundColor: "transparent",
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
  text: {
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
  menuFavoris: {
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


export default FavoriteView;
