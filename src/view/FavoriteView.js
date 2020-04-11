import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import {Image as ReactImage, TouchableOpacity, SafeAreaView} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import City from "./city.js"
import * as Font from 'expo-font';
import { AppLoading} from 'expo';
import * as data from '../../db/favorite.json';
import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux'

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import * as DBLocal from '../../db/DBLocal.js'

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

  useEffect(() => {
<<<<<<< HEAD

    dispatch({type: "INIT_FAVORITE", data: DBLocal.listFavoris() })

=======
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
>>>>>>> 92c3a063746dcbacd92c4aae86a816299d3cd11f
    if(typeof listFavorite != "undefined" && listFavorite.length > 0){
      listFavorite.map((item) => {
        item.map((value) => {
          searchByCity(value)
        })
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
            var tmpColor = "#28D3B0"
          }else if (responseJsonWaqi.data.aqi >= 51 && responseJsonWaqi.data.aqi <= 150){
            var tmpColor = "#FFBB00"
          }else if (responseJsonWaqi.data.aqi >= 151){
            var tmpColor = "#FF5656"
          }
          var i = 0
          var line = {
            id: all.idFavoris,
            country: resultat.sys.country,
            aqi: responseJsonWaqi.data.aqi,
            temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
            temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
            idMeteo: 200,
            ville: resultat.name,
            color: tmpColor,
            responseApiAir: responseJsonWaqi,
            responseApiMeteo: resultat
          }
          listSearch.map((value) => {
            if(value.id == all.idFavoris){
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

  function callApi(ville){
    setTimeout(() => {
      searchByCity(ville)
    }, 1000)
  }

  if(listSearch && listSearch.length > 0){
    return (
        <SafeAreaView style={styles.favoris}>
          <FlatList
            bounces={false}
            data={listSearch}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) =>  <TouchableOpacity onPress={() => navigation.navigate('Detail', {responseApiAir: item.responseApiAir, responseApiMeteo: item.responseApiMeteo, color: item.color})}><City icon={item.idMeteo} icon={responseApiMeteo.weather[0].id} aqi={item.aqi} color={item.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country} /></TouchableOpacity>}
          />
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
var indiceScreen = indiceWidth+indiceHeight >= 2 ? 1 : (indiceWidth + indiceHeight) - 0.2

const styles = StyleSheet.create({
  "favoris": {
    "opacity": 1,
    "position": "relative",
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
    "height": 812,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "favoris_city215502f3": {
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
    "height": 44,
    "left": 35,
    "top": 199
  },
});


export default FavoriteView;
