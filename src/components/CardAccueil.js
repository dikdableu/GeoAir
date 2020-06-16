import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity, Dimensions } from "react-native";

import IconesCouvert from "../components/IconesCouvert";
import IconesNeige from "../components/IconesNeige";
import IconesOrage from "../components/IconesOrage";
import IconesBrume from "../components/IconesBrume";
import IconesPluie from "../components/IconesPluie";
import IconesSoleil from "../components/IconesSoleil";
import IconesNuages from "../components/IconesNuages";
import IconesAjouter from "../components/IconesAjouter";
import Heure01 from "./Heure01";
import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux'

import * as DBLocal from '../../db/DBLocal.js'
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

function CardAccueil(props) {

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
  const dispatch = useDispatch()

  useEffect(() => {
    if(typeof props.responseApiMeteo != 'undefined' && Object.keys(props.responseApiMeteo).length !== 0 && props.responseApiMeteo && props.responseApiMeteo != null){
      conditionWeather.forEach( value => {
        if(props.responseApiMeteo.weather[0].id == value.id){
          var cond = {
              description: value.description,
              icon: "http://openweathermap.org/img/wn/"+ value.icon +"@2x.png",
              id: value.id,
              main: value.main,
              path: value.path
          }
          setCondition(cond)
        }
      })
    }
  }, [])


    _addFavorite = () => {
      db.transaction(tx => {
          tx.executeSql(
            `select * from Favoris`,[],
            (_, { rows: { _array } }) => {
              var i = 0
              _array.map((item) => {
                if(_array.villes == props.responseApiMeteo.name){
                  i++
                }
              })
              if(i == 0){
                tx.executeSql( `insert into Favoris(villes, pays, latitude, longitude) values(?, ?, ?, ?)`, [props.responseApiMeteo.name, props.responseApiMeteo.sys.country, props.responseApiMeteo.coord.lat, props.responseApiMeteo.coord.lon], db.transaction(tx => {
                  tx.executeSql(
                    `select * from Favoris`,[],
                    (_, { rows: { _array } }) => {
                      dispatch({type: "INIT_FAVORITE", data: _array })
                      Toast.show('Ajouté aux favoris', {
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.CENTER,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                      });
                    }, (transaction, e) => console.log(e))
                }), (transaction, e) => console.log(e, transaction))
              }else{
                Toast.show('Existe déjà dans les favoris', {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.CENTER,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                });
              }
            }, (transaction, e) => console.log(e))
      })
    }

  const _convertDate = (dt) => {
    var date = new Date(dt * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2) ;
    return formattedTime
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangleBlanc3}>
        <View style={styles.ville}>
          <View style={styles.rectangle}>
            <View style={styles.ville1Row}>
              <View style={styles.ville1}>
                <View style={styles.yvelinesFranceStack}>
                  <Text style={styles.versailles}>{props.responseApiMeteo.name}</Text>
                  <Text style={styles.yvelinesFrance}>{props.responseApiMeteo.sys.country}</Text>
                </View>
              </View>
              <TouchableOpacity style={{flex: 1, marginRight: 10}} onPress={() => {_addFavorite()}} >
                <IconesAjouter style={styles.iconesAjouter}></IconesAjouter>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.infosEcranDetails}>
          <View style={styles.temperatureRow}>
            <View style={styles.temperature}>
              <View style={styles.styleStackStack}>
                <View style={styles.styleStack}>
                  <Text style={styles.style}>{(props.responseApiMeteo.main.temp - 273.15).toFixed(1)}</Text>
                  <Text style={styles.style1}>°</Text>
                </View>
                <Text style={styles.c}>C</Text>
              </View>
            </View>
            <View style={styles.minMax}>
              <View style={styles.maxCopyStack}>
                <Text style={styles.maxCopy}>MAX</Text>
                <Text style={styles.cCopy28}>{(props.responseApiMeteo.main.temp_max - 273.15).toFixed(1)}°C</Text>
                <Text style={styles.minCopy}>MIN</Text>
                <Text style={styles.cCopy29}>{(props.responseApiMeteo.main.temp_min - 273.15).toFixed(1)}°C</Text>
              </View>
            </View>
            <View style={styles.nuageaux}>
              <View style={styles.nuageuxStack}>
                <Text style={styles.nuageux}>{condition ? condition.description : null}</Text>
                <View style={styles.iconesCouvert6}>
                  {condition ? condition.path : null}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.journee}>
          <View style={styles.rectangleDegradeGris1Stack}>
            <ImageBackground
              style={styles.rectangleDegradeGris1}
              imageStyle={styles.rectangleDegradeGris1_imageStyle}
              source={require("../assets/images/Gradient_bUR8JZa.png")}
            ></ImageBackground>
            <FlatList
              horizontal={true}
              data={props.responseApiWeatherHour.hourly.slice(0,25)}
              renderItem={({item}) => (<Heure01 style={styles.heure01} time={_convertDate(item.dt)} id={item.weather[0].id} temp={(item.temp - 273.15).toFixed(1)}/>)}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    opacity: 1
  },
  rectangleBlanc3: {
    height: 353,
    width: width - 22,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  ville: {
    flex: 1,
    height: 93,
    opacity: 1,
  },
  rectangle: {
    flex: 1,
    height: 93,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  ville1: {
    flex: 5,
    opacity: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  yvelinesFrance: {
    flex: 1,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 14,
  },
  versailles: {
    flex: 1,
    height: 36,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 20,
  },
  yvelinesFranceStack: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 25,
    marginTop: 25,
  },
  iconesAjouter: {
    opacity: 1,
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
  },
  ville1Row: {
    height: 93,
    flexDirection: "row",
    flex: 1,
  },
  infosEcranDetails: {
    height: 94,
    width: width / 1.05,
    opacity: 1,
    flexDirection: "row",
    marginTop: 23
  },
  temperature: {
    height: 94,
    width: width / 2.83,
    opacity: 1
  },
  style: {
    position: "absolute",
    left: 0,
    top: 12,
    height: 94,
    width: width / 3.1,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(66,77,88,1)",
    fontSize: 58,
    letterSpacing: -7
  },
  style1: {
    position: "absolute",
    top: 12,
    left: 104,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  styleStack: {
    top: 5,
    left: 0,
    width: width / 3.05,
    height: 94,
    position: "absolute"
  },
  c: {
    position: "absolute",
    top: 17,
    left: 112,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  styleStackStack: {
    width: width / 2.83,
    height: 94
  },
  minMax: {
    height: 45,
    width: 61,
    opacity: 1,
    marginLeft: width / 16,
    marginTop: 30
  },
  maxCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 33,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  cCopy28: {
    position: "absolute",
    top: 0,
    left: 34,
    height: 36,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  minCopy: {
    position: "absolute",
    top: 24,
    left: 0,
    height: 19,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  cCopy29: {
    position: "absolute",
    top: 24,
    left: 34,
    height: 21,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  maxCopyStack: {
    width: 61,
    height: 45
  },
  nuageaux: {
    height: 80,
    width: width / 3.49,
    opacity: 1,
    marginLeft: width / 10,
    marginTop: 0
  },
  nuageux: {
    position: "relative",
    top: 62,
    left: 0,
    height: 30,
    width: 104,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 11,
  },
  iconesCouvert6: {
    position: "relative",
    top: -10,
    left: '30%',
    height: 70,
    width: 70,
    opacity: 1,
    backgroundColor: "transparent",
  },
  nuageuxStack: {
    width: 104,
    height: 90
  },
  temperatureRow: {
    height: 94,
    flexDirection: "row",
    flex: 1
  },
  journee: {
    height: 105,
    width: width - 22,
    opacity: 1,
    marginTop: 16
  },
  rectangleDegradeGris1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 34,
    width: width - 22,
    backgroundColor: "transparent"
  },
  rectangleDegradeGris1_imageStyle: {
    opacity: 1
  },
  heure01: {
    position: "relative",
    top: 11,
    height: 94,
    width: 41,
    opacity: 1,
    marginLeft: 17,
    marginRight: 12,
    backgroundColor: "transparent"
  },
  heure011: {
    position: "absolute",
    top: 11,
    left: 224,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure012: {
    position: "absolute",
    top: 11,
    left: 155,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure013: {
    position: "absolute",
    top: 11,
    left: 87,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure014: {
    position: "absolute",
    top: 11,
    left: 18,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  rectangleDegradeGris1Stack: {
    width: width - 22,
    height: 105
  }
});

export default CardAccueil;
