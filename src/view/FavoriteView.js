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

export default function FavoriteView(props) {

  const [dataLoaded, setDataLoaded] = useState(false)
  const [listSearch, setListSearch] = useState([])
  const [responseApiAir, setResponseApiAir] = useState({})
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [color, setColor] = useState(null)

  useEffect(() => {
    async() => {return Font.loadAsync({
    'roboto-bold': require('../../assets/Roboto-Bold.ttf'),
    'roboto-italic': require('../../assets/Roboto-Italic.ttf'),
    'roboto-regular': require('../../assets/Roboto-Regular.ttf')
  })}})

  useEffect(() => {
    var list = []
    data.favorite.map((item) => list.push({
      id: item.id,
      ville: item.ville
    }))
    setListSearch(list)
  })

  function colorIndex(responseApiAir){
    if (responseApiAir.data.aqi >= 0 && responseApiAir.data.aqi <= 50){
      setColor("#28D3B0")
    }
    if (responseApiAir.data.aqi >= 51 && responseApiAir.data.aqi <= 150){
      setColor("#FFBB00")
    }
    if (responseApiAir.data.aqi >= 151){
      setColor("#FF5656")
    }
  }

  function searchByCity(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=505c84426a182da1a7178151dccdb616', {
      method: 'GET'})
    .then((response) => response.json())
    .then((resultat) => {
      var id = 0
      var data = []
      if(resultat.cod == 200) {
        fetch('https://api.waqi.info/feed/geo:'+resultat.coord.lat+';'+resultat.coord.lon+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
        .then((responsewaqi) => responsewaqi.json())
        .then((responseJsonWaqi) => {
        setResponseApiAir(responseJsonWaqi);
        setResponseApiMeteo(resultat)
        data.push({
          id: id++,
          country: resultat.sys.country,
          aqi: responseJsonWaqi.data.aqi,
          temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
          temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
          idMeteo: 200,
          ville: resultat.name
        })
        colorIndex(responseJsonWaqi);
        return (<City aqi={responseJsonWaqi.data.aqi} color={color} temp={(resultat.main.temp - 273.15).toFixed(1) + "°C"} tr={(resultat.main.feels_like - 273.15).toFixed(1) + "°C"} ville={resultat.name} pays={resultat.sys.country}/>)
        })
      }else {
        setCharged(true)
      }
      return true
    })
    .catch( error => {
      console.error(error);
    });
  }

  if(listSearch.length > 0){
    console.log(listSearch)
    return (
        <SafeAreaView style={styles.favoris}>
          <FlatList
            bounces={false}
            data={listSearch}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => searchByCity(item.ville)}
            initialNumToRender={10}
          />
        </SafeAreaView>
    )
  } else {
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
