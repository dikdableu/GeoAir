import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern, Path} from 'react-native-svg';
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
  if(props.name && typeof props.name != 'undefined'){
    return(
      <View style={styles.resultatsDeRecherche}>
        <View style={styles.rectangleBlanc}>
          <TouchableOpacity onPress={() => {_addFavorite()}}>
            <View style={styles.villeRecherche01}>
              <View style={styles.ville2Row}>
                <View style={styles.ville2}>
                  <Text style={styles.versaillesCopy}>{props.name.length > 13 ? props.name.slice(0,13) + '...' : props.name}</Text>
                  <Text style={styles.yvelinesFranceCopy}>
                    {props.admin2_code}, {props.country_code}
                  </Text>
                </View>
              </View>
              <Svg viewBox="-0.5 -0.5 312 3" style={styles.line1}>
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(242,242,242,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 0.50 L310.00 0.50 "
                ></Path>
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }else {
    return null
  }

}

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var indiceScreen = indiceWidth+indiceHeight >= 2 ? 1 : (indiceWidth + indiceHeight) - 0.2

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
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
    height: 337,
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
    width: 63,
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
