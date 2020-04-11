import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import Toast from 'react-native-root-toast';

import AddComponent from './Icones/Add.js'

export default function ListComponent(props) {
  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

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

  return(
    <View data-layer="3d1674d8-b866-413a-b6f1-d4d4843c5c0b" style={styles.ville_searchcity}>
        <Text data-layer="35e40b9c-0c10-4b39-9378-5716d6ae6453" style={styles.ville_searchcity_versailles}>{props.name.length > 13 ? props.name.slice(0,13) + '...' : props.name}</Text>
        <Text data-layer="8a61130c-2565-4b9f-ba8c-cae5c64598dc" style={styles.ville_searchcity_yvelinesFrance}>{props.admin2_code}, {props.country_code}</Text>
        <View data-layer="f9ca6f36-e687-40d6-a4ff-81a741ff2ef3" style={styles.ville_searchcity_rectangle286}></View>
        <TouchableOpacity onPress={() => {_addFavorite()}}>
          <View data-layer="6f42dd39-c16b-4316-9787-f322c9cb308f" style={styles.ville_searchcity_rectangle287}></View>
        </TouchableOpacity>
    </View>
  )
}

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var indiceScreen = indiceWidth+indiceHeight >= 2 ? 1 : (indiceWidth + indiceHeight) - 0.2

const styles = StyleSheet.create({
  "ville_searchcity": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "transparent",
    "marginTop": 20,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 43,
    "left": 34,
    "top": 0,
    "right": 30
  },
  "ville_searchcity_versailles": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 20*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 24,
    "left": 0,
    "top": 0,
    "right": 76
  },
  "ville_searchcity_yvelinesFrance": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 17,
    "left": 0,
    "right": 163,
    "bottom": 0
  },
  "ville_searchcity_rectangle286": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 306,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "ville_searchcity_rectangle287": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 24,
    "height": 24,
    "top": 0,
    "right": 0
  },
})
