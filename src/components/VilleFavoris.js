import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconesCouvert from "./IconesCouvert";
import IconesNeige from "./IconesNeige";
import IconesOrage from "./IconesOrage";
import IconesBrume from "./IconesBrume";
import IconesPluie from "./IconesPluie";
import IconesSoleil from "./IconesSoleil";
import IconesNuages from "./IconesNuages";
import IconesAjouter from "./IconesAjouter";
import IndiceAir from "./IndiceAir";
import {TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';

function VilleFavoris(props, navigation) {
  const propsState = props

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
  const [condition, setCondition] = useState(null)

  useEffect(()=>{
    conditionWeather.forEach( value => {
        if(props.icon == value.id){
            var cond = {
                description: value.description,
                id: value.id,
                main: value.main,
                path: value.path
            }
        setCondition(cond)
        }
    })
  },[])

  if(propsState.search){
    return(
      <View style={styles.villeRecherche01}>
        <View style={styles.villeRow1}>
          <View style={styles.ville}>
            <Text style={styles.versailles1}>{propsState.ville}</Text>
            <Text style={styles.yvelinesFrance}>{propsState.pays}</Text>
          </View>
          <View style={styles.iconesCouvert}>
            {condition ? condition.path : null}
          </View>
          <View style={styles.temperatures}>
            <Text style={styles.cCopy}>{propsState.temp}</Text>
            <Text style={styles.cCopy1}>{propsState.tr}</Text>
          </View>
          <IndiceAir style={styles.indiceAir3} aqi={propsState.aqi} textColor={propsState.textColor} color={propsState.color} />
        </View>
      </View>
    )
  }else{
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.rect}>
          <View style={styles.rectangle5}>
            <View style={styles.villeRow}>
              <View style={styles.ville}>
                <Text style={styles.versailles1}>{propsState.ville}</Text>
                <Text style={styles.yvelinesFrance1}>{propsState.pays}</Text>
              </View>
              <View style={styles.iconesCouvert}>
                {condition ? condition.path : null}
              </View>
              <View style={styles.temperatures1}>
                <Text style={styles.cCopy2}>{propsState.temp}</Text>
                <Text style={styles.cCopy3}>{propsState.tr}</Text>
              </View>
              <IndiceAir style={styles.indiceAir4} aqi={propsState.aqi} textColor={props.textColor} color={props.color} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0
  },
  rect: {
    height: 93,
    width: 'auto',
    opacity: 1
  },
  rectangle5: {
    height: 93,
    width: 'auto',
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  ville: {
    height: 44,
    width: 154,
    opacity: 1
  },
  versailles1: {
    height: 23,
    width: width / 2.8,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  yvelinesFrance1: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesCouvert: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 13,
    marginTop: 2
  },
  temperatures1: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: width / 65
  },
  cCopy2: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy3: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir4: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: width /11
  },
  villeRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 25
  },
  resultatsDeRecherche: {
    position: "absolute",
    top: 130,
    left: 10,
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
    width: width / 10.67,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: width / 10
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
  villeRow1: {
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
});

export default VilleFavoris;
