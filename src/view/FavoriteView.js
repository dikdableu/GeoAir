import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
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

export const FavoriteView = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log(data.listFavorite)
  //   dispatch({type: "INIT_FAVORITE", listFavorite: data.favorite})
  // }, [])

  const listFavorite = useSelector(state => state.listFavorite)


  const [listSearch, setListSearch] = useState([])
  const [responseApiAir, setResponseApiAir] = useState({})
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [color, setColor] = useState(null)
  const [errorFetch, setErrorFetch] = useState(null)

  useEffect(() => {

    if(typeof listFavorite != "undefined"){
      listFavorite.map((item) => setTimeout(() => {
        searchByCity(item)
      }, 1000))
    }
  }, [listFavorite])



  function colorIndex(responseApiAir){
    if (responseApiAir.data.aqi >= 0 && responseApiAir.data.aqi <= 50){
      setColor("#28D3B0")
    }else if (responseApiAir.data.aqi >= 51 && responseApiAir.data.aqi <= 150){
      setColor("#FFBB00")
    }else if (responseApiAir.data.aqi >= 151){
      setColor("#FF5656")
    }
  }

  function searchByCity(all){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+all.ville+'&APPID=505c84426a182da1a7178151dccdb616', {
      method: 'GET'})
    .then((response) => response.json())
    .then((resultat) => {
      var id = all.id
      if(resultat.cod == 200) {
        fetch('https://api.waqi.info/feed/geo:'+resultat.coord.lat+';'+resultat.coord.lon+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
        .then((responsewaqi) => responsewaqi.json())
        .then((responseJsonWaqi) => {
        setResponseApiAir(responseJsonWaqi);
        setResponseApiMeteo(resultat)
        colorIndex(responseJsonWaqi);

        var line = {
          id: id,
          country: resultat.sys.country,
          aqi: responseJsonWaqi.data.aqi,
          temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
          temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
          idMeteo: 200,
          ville: resultat.name,
          color: color
        }

        setListSearch(listSearch => listSearch.concat(line))
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
            renderItem={({item}) =>  <City icon={item.idMeteo} aqi={item.aqi} color={item.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country} />}
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
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
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
