import React, { Component, useState, useEffect, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

import IconesCouvert from "./IconesCouvert";
import IconesNeige from "./IconesNeige";
import IconesOrage from "./IconesOrage";
import IconesBrume from "./IconesBrume";
import IconesPluie from "./IconesPluie";
import IconesSoleil from "./IconesSoleil";
import IconesNuages from "./IconesNuages";

export default function Heure01(props) {

  const [conditionWeather, setConditionWeather] = useState(
    [
         {
           id: 200,
           weather: "Orage",
           description: "orage avec pluie légère",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 201,
           weather: "Orage",
           description: "orage avec pluie ",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 202,
           weather: "Orage",
           description: "orage avec forte pluie",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 210,
           weather: "Orage",
           description: "orage léger",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 211,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 212,
           weather: "Orage",
           description: "fort orage",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 221,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 230,
           weather: "Orage",
           description: "orage avec bruine légère",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 231,
           weather: "Orage",
           description: "orage avec bruine ",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 232,
           weather: "Orage",
           description: "orage avec forte bruine",
           icon: "11d",
           path: (<IconesOrage style={styles.iconesCouvert11} />)
         },
         {
           id: 300,
           weather: "Drizzle",
           description: "bruine d'intensité légère",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 301,
           weather: "Drizzle",
           description: "bruine",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 302,
           weather: "Drizzle",
           description: "bruine de forte intensité",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 310,
           weather: "Drizzle",
           description: "bruine d'intensité légère et pluie",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 311,
           weather: "Drizzle",
           description: "bruine et pluie",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 312,
           weather: "Drizzle",
           description: "forte bruine pluie forte",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 313,
           weather: "Drizzle",
           description: "brèves averses et bruine",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 314,
           weather: "Drizzle",
           description: "fortes averses pluie forte",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 321,
           weather: "Drizzle",
           description: "brèves bruine",
           icon: "09d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 500,
           weather: "Rain",
           description: "légère pluie",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 501,
           weather: "Rain",
           description: "pluie modéré",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 502,
           weather: "Rain",
           description: "pluie de forte intensité",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 503,
           weather: "Rain",
           description: "très forte pluie",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 504,
           weather: "Rain",
           description: "pluie extrème",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 511,
           weather: "Rain",
           description: "pluie verglaçante",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 520,
           weather: "520",
           description: "pluie légère par intermitence",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 521,
           weather: "Rain",
           description: "pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 522,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 531,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<IconesPluie style={styles.iconesCouvert11} />)
         },
         {
           id: 600,
           weather: "Snow",
           description: "faible chute de neige",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 601,
           weather: "Snow",
           description: "neige",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 602,
           weather: "Snow",
           description: "forte chute de neige",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 611,
           weather: "Snow",
           description: "neige fondue",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 612,
           weather: "Snow",
           description: "faible chute de neige fondu",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 613,
           weather: "Snow",
           description: "brève chute de neige fondu",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 615,
           weather: "Snow",
           description: "légère plui et chute de neige",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 616,
           weather: "Snow",
           description: "neige et pluie",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 620,
           weather: "Snow",
           description: "brève chute de neige de faible intensité",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 621,
           weather: "Snow",
           description: "brève chute de neige",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 622,
           weather: "Snow",
           description: "forte chute de neige par intermitence",
           icon: "13d",
           path: (<IconesNeige style={styles.iconesCouvert11} />)
         },
         {
           id: 701,
           weather: "Mist",
           description: "brouillard",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 711,
           weather: "Smoke",
           description: "fumée",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 721,
           weather: "Haze",
           description: "brume",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 731,
           weather: "Dust",
           description: "Sable/poussière",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 741,
           weather: "Fog",
           description: "brouillard",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 751,
           weather: "Sand",
           description: "sable",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 761,
           weather: "Dust",
           description: "poussière",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 701,
           weather: "Ash",
           description: "cendre volcanic/cendre",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 771,
           weather: "Squall",
           description: "bourrasque",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 781,
           weather: "Tornado",
           description: "tornade",
           icon: "50d",
           path: (<IconesBrume style={styles.iconesCouvert11} />)
         },
         {
           id: 800,
           weather: "Clear",
           description: "ciel dégagé",
           icon: "01d",
           path:(<IconesSoleil style={styles.iconesCouvert11} />)
         },
         {
           id: 801,
           weather: "Clouds",
           description: "entre 11-25% de nuage",
           icon: "02d",
           path: (<IconesCouvert style={styles.iconesCouvert11} />)
         },
         {
           id: 802,
           weather: "Clouds",
           description: "entre 25-50% de nuage",
           icon: "03d",
           path: (<IconesNuages style={styles.iconesCouvert11} />)
         },
         {
           id: 803,
           weather: "Clouds",
           description: "entre 50-84% de nuage",
           icon: "04d",
           path: (<IconesNuages style={styles.iconesCouvert11} />)
         },
         {
           id: 804,
           weather: "Clouds",
           description: "entre 85-100% de nuage",
           icon: "04d",
           path: (<IconesNuages style={styles.iconesCouvert11} />)
         },
        ]
  )
  const [path, setPath] = useState(null)

  useEffect(() => {
    conditionWeather.forEach( value => {
        if(props.id == value.id){
        setPath(value.path)
        }
    })
  })

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle7}>
        <View style={styles.heure01}>
          <View style={styles.iconesCouvert11Stack}>
            {path}
            <Text style={styles.style3}>{props.time}</Text>
          </View>
          <Text style={styles.c4}>{props.temp}°C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle7: {
    height: 94,
    width: 41,
    borderRadius: 20.5,
    backgroundColor: "transparent"
  },
  heure01: {
    height: 82,
    width: 41,
    opacity: 1,
    marginTop: 12
  },
  iconesCouvert11: {
    position: "absolute",
    top: 16,
    left: 0,
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent"
  },
  style3: {
    position: "absolute",
    top: 0,
    left: 4,
    height: 26,
    width: 33,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 10
  },
  iconesCouvert11Stack: {
    width: 40,
    height: 56
  },
  c4: {
    height: 26,
    width: 45,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(127,141,154,1)",
    fontSize: 13,
    marginLeft: -2
  }
});
