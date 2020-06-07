import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList, Dimensions } from "react-native";
import IconesChevronGauche from "./IconesChevronGauche";
import Fade from "react-native-fade";
import IconesCouvert from "./IconesCouvert";
import IconesNeige from "./IconesNeige";
import IconesOrage from "./IconesOrage";
import IconesBrume from "./IconesBrume";
import IconesPluie from "./IconesPluie";
import IconesSoleil from "./IconesSoleil";
import IconesNuages from "./IconesNuages";
import IconesAjouter from "./IconesAjouter";

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

function CardForeCast7d(props) {

  const [responseApiWeather7d , setResponseApiWeather7d] = useState({})
  const [charged, setCharged] = useState(false)
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

  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&lon=' + props.responseApiMeteo.coord.lon + '&lat=' + props.responseApiMeteo.coord.lat + '&appid=505c84426a182da1a7178151dccdb616', {method: "GET"})
    .then(responsWeather7d => responsWeather7d.json())
    .then((responseJsonWeather7d) => {
      setResponseApiWeather7d(responseJsonWeather7d)
      setCharged(true)
      return responseJsonWeather7d
    })
  }, [])

  const _convertDate = (dt) => {
    var date = new Date(dt * 1000);
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var month = date.getMonth()+1
    var monthformat = month < 10 ? "0" + month : month;
    var formattedTime = day + '/' + monthformat ;
    return formattedTime
  }

  const _identifyDescription = (response) => {
    var description
    conditionWeather.forEach( value => {
        if(response.weather[0].id == value.id){
          description = value.description
        }
    })
    return description
  }
  const _identifyIcon = (response) => {
    var path
    conditionWeather.forEach( value => {
        if(response.weather[0].id == value.id){
          path = value.path
        }
    })
    return path
  }

  const _identifySunset = (reponse) => {

    var dateSunSet = new Date(reponse * 1000)
    const minuteSunSet = "0" + dateSunSet.getMinutes()
    const sunset = dateSunSet.getHours() + 'h' + minuteSunSet.substr(-2)

    return sunset
  }

  const _identifySunrise = (reponse) => {

    var dateSunRise = new Date(reponse * 1000)
    const minuteSunRise = "0" + dateSunRise.getMinutes()
    const sunrise = dateSunRise.getHours() + 'h' + minuteSunRise.substr(-2)

    return sunrise
  }



  if(charged){
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.rectangleBlanc1}>
          <View style={styles.previsions1Stack}>
            <Text style={styles.previsions1}>Prévisions sur 7 jours</Text>
            <Text style={styles.cetteSemaine}>Cette semaine</Text>
          </View>
          <View style={styles.previsionsJours1}>
            <FlatList
              data={responseApiWeather7d.list}
              keyExtractor={(item, index) => index.toString()}
              backgroundColor= 'transparent'
              renderItem={({item}) => (
                <View style={styles.jourSemaine21}>
                  <Collapse>
                    <CollapseHeader>
                      <View style={styles.jourSemaine13Row}>
                        <View style={styles.jourSemaine13}>
                          <View style={styles.jour13ColumnRow}>
                            <View style={styles.jour13Column}>
                              <Text style={styles.jour13}>{_convertDate(item.dt)}</Text>
                              <Text style={styles.meteo13}>{_identifyDescription(item)}</Text>
                            </View>
                            <View style={styles.iconesCouvert5}>
                              {_identifyIcon(item)}
                            </View>
                            <View style={styles.temperatures13}>
                              <Text style={styles.cCopy26}>{(item.temp.max - 273.15).toFixed(1)}°C</Text>
                              <Text style={styles.cCopy27}>{(item.temp.min - 273.15).toFixed(1)}°C</Text>
                            </View>
                          </View>
                        </View>
                        <IconesChevronGauche
                          style={styles.iconesChevronGauche13}
                        ></IconesChevronGauche>
                      </View>
                    </CollapseHeader>
                    <CollapseBody>
                      <View style={styles.infosDetails}>
                        <ImageBackground
                          style={styles.rectangleDegradeGris}
                          imageStyle={styles.rectangleDegradeGris_imageStyle}
                          source={require("../assets/images/Gradient_DhBx3n5.png")}
                        >
                          <View style={styles.vitesseDuVentHumiRow}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <Text style={styles.vitesseDuVentHumi}>Vitesse du vent</Text>
                              <Text style={styles.mS931027HPa}>{(item.speed *3.6).toFixed(2)} km/h</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <Text style={styles.vitesseDuVentHumi}>Humidité</Text>
                              <Text style={styles.mS931027HPa}>{item.humidity}%</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <Text style={styles.vitesseDuVentHumi}>Pression</Text>
                              <Text style={styles.mS931027HPa}>{item.pressure} hPa</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <Text style={styles.vitesseDuVentHumi}>Lever du soleil</Text>
                              <Text style={styles.mS931027HPa}>{_identifySunset(item.sunrise)}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                              <Text style={styles.vitesseDuVentHumi}>Coucher du soleil</Text>
                              <Text style={styles.mS931027HPa}>{_identifySunrise(item.sunset)}</Text>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    </CollapseBody>
                  </Collapse>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }else {
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.rectangleBlanc1}>
        
        </View>
      </View>
    )
  }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    opacity: 1
  },
  rectangleBlanc1: {
    height: 'auto',
    width: width - 22,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    paddingBottom: 30
  },
  previsions1: {
    position: "absolute",
    top: 27,
    left: 0,
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 14
  },
  cetteSemaine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  previsions1Stack: {
    width: 150,
    height: 46,
    marginTop: 24,
    marginLeft: 20
  },
  previsionsJours1: {
    height: 'auto',
    opacity: 1,
    marginTop: 28
  },
  jourSemaine21: {
    position: 'relative',
    height: "auto",
    width: width - 22,
    opacity: 1
  },
  jourSemaine13: {
    height: 44,
    width: width / 1.375,
    opacity: 1
  },
  jour13: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo13: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour13Column: {
    width: width / 2.35,
    marginTop: 2
  },
  iconesCouvert5: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures13: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy26: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy27: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour13ColumnRow: {
    height: 44,
    flexDirection: "row"
  },
  iconesChevronGauche13: {
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      },
      {
        scaleY: -1
      }
    ],
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 28,
    marginTop: 9
  },
  jourSemaine13Row: {
    height: 60,
    flexDirection: "row",
    marginLeft: 18,
    marginRight: 19
  },
  infosDetails: {
    height: 'auto',
    width: width - 22,
    opacity: 1,
    marginTop: 13,
  },
  rectangleDegradeGris: {
    height: 159,
    width: width - 22,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  rectangleDegradeGris_imageStyle: {},
  vitesseDuVentHumi: {
    height: 'auto',
    width: 157,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  mS931027HPa: {
    height: 'auto',
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  vitesseDuVentHumiRow: {
    height: 'auto',
    flex: 1,
    marginRight: 22,
    marginLeft: 20,
    marginTop: 17
  }
});

export default CardForeCast7d;
