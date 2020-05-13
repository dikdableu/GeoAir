import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Dimensions, PixelRatio} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';
import AddComponent from './Icones/Add.js'

import SoleilComponent from './Icones/01d.js'
import CouldsSunComponent from './Icones/02d.js'
import CloudComponent from './Icones/03d.js'
import CloudsComponent from './Icones/04d.js'
import RainComponent from './Icones/09d.js'
import LightRainComponent from './Icones/10d.js'
import ThunderComponent from './Icones/11d.js'
import SnowComponent from './Icones/13d.js'
import FogComponent from './Icones/50d.js'
import * as SQLite from "expo-sqlite";

export default function DetailView({props, navigation}) {

  const listFavorite = useSelector(state => state.listFavorite)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const [condition, setCondition] = useState(null)
  const [conditionWeather, setConditionWeather] = useState(
    [
         {
           id: 200,
           weather: "Orage",
           description: "orage avec pluie légère",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 201,
           weather: "Orage",
           description: "orage avec pluie ",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 202,
           weather: "Orage",
           description: "orage avec forte pluie",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 210,
           weather: "Orage",
           description: "orage léger",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 211,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 212,
           weather: "Orage",
           description: "fort orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 221,
           weather: "Orage",
           description: "orage",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 230,
           weather: "Orage",
           description: "orage avec bruine légère",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 231,
           weather: "Orage",
           description: "orage avec bruine ",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 232,
           weather: "Orage",
           description: "orage avec forte bruine",
           icon: "11d",
           path: (<ThunderComponent/>)
         },
         {
           id: 300,
           weather: "Drizzle",
           description: "bruine d'intensité légère",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 301,
           weather: "Drizzle",
           description: "bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 302,
           weather: "Drizzle",
           description: "bruine de forte intensité",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 310,
           weather: "Drizzle",
           description: "bruine d'intensité légère et pluie",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 311,
           weather: "Drizzle",
           description: "bruine et pluie",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 312,
           weather: "Drizzle",
           description: "forte bruine pluie forte",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 313,
           weather: "Drizzle",
           description: "brèves averses et bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 314,
           weather: "Drizzle",
           description: "fortes averses pluie forte",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 321,
           weather: "Drizzle",
           description: "brèves bruine",
           icon: "09d",
           path: (<RainComponent/>)
         },
         {
           id: 500,
           weather: "Rain",
           description: "légère pluie",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 501,
           weather: "Rain",
           description: "pluie modéré",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 502,
           weather: "Rain",
           description: "pluie de forte intensité",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 503,
           weather: "Rain",
           description: "très forte pluie",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 504,
           weather: "Rain",
           description: "pluie extrème",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 511,
           weather: "Rain",
           description: "pluie verglaçante",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 520,
           weather: "520",
           description: "pluie légère par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 521,
           weather: "Rain",
           description: "pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 522,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 531,
           weather: "Rain",
           description: "forte pluie par intermitence",
           icon: "10d",
           path: (<LightRainComponent/>)
         },
         {
           id: 600,
           weather: "Snow",
           description: "faible chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 601,
           weather: "Snow",
           description: "neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 602,
           weather: "Snow",
           description: "forte chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 611,
           weather: "Snow",
           description: "neige fondue",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 612,
           weather: "Snow",
           description: "faible chute de neige fondu",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 613,
           weather: "Snow",
           description: "brève chute de neige fondu",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 615,
           weather: "Snow",
           description: "légère plui et chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 616,
           weather: "Snow",
           description: "neige et pluie",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 620,
           weather: "Snow",
           description: "brève chute de neige de faible intensité",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 621,
           weather: "Snow",
           description: "brève chute de neige",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 622,
           weather: "Snow",
           description: "forte chute de neige par intermitence",
           icon: "13d",
           path: (<SnowComponent/>)
         },
         {
           id: 701,
           weather: "Mist",
           description: "brouillard",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 711,
           weather: "Smoke",
           description: "fumée",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 721,
           weather: "Haze",
           description: "brume",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 731,
           weather: "Dust",
           description: "Sable/poussière",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 741,
           weather: "Fog",
           description: "brouillard",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 751,
           weather: "Sand",
           description: "sable",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 761,
           weather: "Dust",
           description: "poussière",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 701,
           weather: "Ash",
           description: "cendre volcanic/cendre",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 771,
           weather: "Squall",
           description: "bourrasque",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 781,
           weather: "Tornado",
           description: "tornade",
           icon: "50d",
           path: (<FogComponent/>)
         },
         {
           id: 800,
           weather: "Clear",
           description: "ciel dégagé",
           icon: "01d",
           path:(<SoleilComponent/>)
         },
         {
           id: 801,
           weather: "Clouds",
           description: "entre 11-25% de nuage",
           icon: "02d",
           path: (<CouldsSunComponent/>)
         },
         {
           id: 802,
           weather: "Clouds",
           description: "entre 25-50% de nuage",
           icon: "03d",
           path: (<CloudComponent/>)
         },
         {
           id: 803,
           weather: "Clouds",
           description: "entre 50-84% de nuage",
           icon: "04d",
           path: (<CloudsComponent/>)
         },
         {
           id: 804,
           weather: "Clouds",
           description: "entre 85-100% de nuage",
           icon: "04d",
           path: (<CloudsComponent/>)
         },
        ]
  )

  const _iconMeteo = (responseApiMeteo) => {
    conditionWeather.forEach( value => {
        if(responseApiMeteo.weather[0].id == value.id){
            var cond = {
                description: value.description,
                id: value.id,
                main: value.main,
                path: value.path
            }
        setCondition(cond)
        }
    })
  }

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




    const color = navigation.state.params.color
    console.log(navigation.state.params.color)
    const responseApiAir = navigation.state.params.responseApiAir
    const responseApiMeteo = navigation.state.params.responseApiMeteo

    var dateSunSet = new Date(responseApiMeteo.sys.sunrise * 1000)
    var dateSunRise = new Date(responseApiMeteo.sys.sunset * 1000)
    const minuteSunRise = "0" + dateSunRise.getMinutes()
    const minuteSunSet = "0" + dateSunSet.getMinutes()

    const sunset = dateSunSet.getHours() + 'h' + minuteSunSet.substr(-2)
    const sunrise = dateSunRise.getHours() + 'h' + minuteSunRise.substr(-2)

    return (
    <View data-layer="4f1b034a-7282-4eb8-9a4f-fe1e74b0e35b" style={styles.ville}>
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID={Platform.OS === 'ios' ? "ca-app-pub-8614556057049331/5612210449" : "ca-app-pub-8614556057049331/8209974696"}
      servePersonalizedAds={true}
      setTestDeviceID="EMULATOR"
      didFailToReceiveAdWithError={error => console.log(error + 'error')}
    />
        <View data-layer="3d1674d8-b866-413a-b6f1-d4d4843c5c0b" style={styles.ville_searchcity}>
            <Text data-layer="35e40b9c-0c10-4b39-9378-5716d6ae6453" style={styles.ville_searchcity_versailles}>{responseApiMeteo.name.length > 23 ? responseApiMeteo.name.slice(0,23) + '...' : responseApiMeteo.name}</Text>
            <Text data-layer="8a61130c-2565-4b9f-ba8c-cae5c64598dc" style={styles.ville_searchcity_yvelinesFrance}>{responseApiMeteo.sys.country}</Text>
            <AddComponent style={styles.ville_searchcity_iconadd}/>
            <View data-layer="f9ca6f36-e687-40d6-a4ff-81a741ff2ef3" style={styles.ville_searchcity_rectangle286}></View>
            <TouchableOpacity onPress={() => {_addFavorite()}}>
              <View data-layer="6f42dd39-c16b-4316-9787-f322c9cb308f" style={styles.ville_searchcity_rectangle287}></View>
            </TouchableOpacity>
        </View>
        <View data-layer="24dcd44e-e852-4f05-962a-19ad1cf55bef" style={styles.ville_groupe192}>
            <View style={styles.ville_groupe192_groupe185}>
                <Text style={styles.ville_groupe192_groupe185_nuage}>Conditions météo</Text>
                <Text style={styles.ville_groupe192_groupe185_x43Ms}>{condition == null ? null : condition.description}</Text>
            </View>
            <View data-layer="cb85ea2d-4dc3-44fd-bcba-edbc6b2a71f1" style={styles.ville_groupe192_groupe186}>
                <Text data-layer="613b6418-8ae0-4a52-9140-b028ffc59683" style={styles.ville_groupe192_groupe186_vitesseDuVent}>Vitesse du vent</Text>
                <Text data-layer="5078d6dc-4f4c-43bf-b90b-6ef8e0ec1130" style={styles.ville_groupe192_groupe186_x43Ms}>{(responseApiMeteo.wind.speed)* 3.6 + ' km/h'}</Text>
            </View>
            <View data-layer="fdecae97-e068-4a14-ae6f-016f243f37c4" style={styles.ville_groupe192_groupe188}>
                <Text data-layer="c6eb792f-512d-45be-8993-d8d3b51a7902" style={styles.ville_groupe192_groupe188_humidite}>Humidité</Text>
                <Text data-layer="b006120f-50ac-471d-be43-3578347c5989" style={styles.ville_groupe192_groupe188_x93}>{responseApiMeteo.main.humidity + ' %'}</Text>
            </View>
            <View data-layer="44022b19-07db-4b91-8da0-cdc1f75f0160" style={styles.ville_groupe192_groupe189}>
                <Text data-layer="66f264dc-029c-4f11-a9ab-4a7c0f6a8743" style={styles.ville_groupe192_groupe189_visibilite}>Visibilité</Text>
                <Text data-layer="d123136e-3b2f-414e-8f3a-5cd9b8e20d87" style={styles.ville_groupe192_groupe189_x1900M}>{responseApiMeteo.visibility} m</Text>
            </View>
            <View data-layer="18942cd1-894a-4d20-b263-26c1326a2b79" style={styles.ville_groupe192_groupe217}>
                <Text data-layer="a33e5227-f855-406f-8a4b-cfbf91169ef9" style={styles.ville_groupe192_groupe217_coucherDuSoleil}>Coucher du soleil</Text>
                <Text data-layer="352c3782-fa0d-41f3-b440-09056d08639e" style={styles.ville_groupe192_groupe217_x18h43}>{sunrise}</Text>
            </View>
            <View data-layer="e8ba60da-aaea-409a-96d9-131f95028f8d" style={styles.ville_groupe192_groupe218}>
                <Text data-layer="7d7a7bdb-c69d-40a1-8c11-d098dd2b41b5" style={styles.ville_groupe192_groupe218_leverDuSoleil}>Lever du soleil</Text>
                <Text data-layer="7ddcaeb4-ce0e-4e30-a588-9e18cc128862" style={styles.ville_groupe192_groupe218_x8h32}>{sunset}</Text>
            </View>
            <View data-layer="ec474366-8a0f-4564-9c77-ade2c43feb6d" style={styles.ville_groupe192_groupe187}>
                <Text data-layer="3f2ec0a7-d07b-4b8b-b3db-3b0e3b05d001" style={styles.ville_groupe192_groupe187_pression}>Pression</Text>
                <Text data-layer="366dff06-b4ea-4672-9671-ee1a79d5c879" style={styles.ville_groupe192_groupe187_x1027Hpa}>{responseApiMeteo.main.pressure} hPa</Text>
            </View>
        </View>
        <View data-layer="9d43fb5a-789a-4a79-85a1-6b26e5ec9333" style={styles.ville_groupe221}>
            <View data-layer="2ef40511-e2d0-493c-b9b0-0c283ef71cea" style={[styles.ville_groupe221_rectangle275, {borderColor: color, borderWidth: 1, backgroundColor: 'white'}]}></View>
            <View data-layer="717627c5-613c-4e5f-8b51-12486e23b1e3" style={styles.ville_groupe221_airqualityindex}>
                <View data-layer="d23c7299-6f74-412b-a4ff-a392de3e20dc" style={[styles.ville_groupe221_airqualityindex_rectangle190, {borderColor: color}]}></View>
                <Text data-layer="9419f363-9d48-4e75-9a91-52c8f4e2cd20" style={[styles.ville_groupe221_airqualityindex_x2173dda066, {color: color}]}>{responseApiAir.data.aqi}</Text>
            </View>
            <View data-layer="2734aded-b111-4a02-ab1d-c30e26371ca4" style={styles.ville_groupe221_groupe203}>
                <View data-layer="9bfd5fe9-748f-4c69-ac78-7ebd0786039b" style={styles.ville_groupe221_groupe203_groupe222}>
                    <View data-layer="f2036ed2-b4e2-4f0b-960f-19745f4545db" style={styles.ville_groupe221_groupe203_groupe222_groupe200}>
                        <Text data-layer="e3da888e-eeba-44e7-89d3-48922666ccde" style={styles.ville_groupe221_groupe203_groupe222_groupe200_pm10}>PM10</Text>
                        <Text data-layer="82ee61a4-f1d0-49c8-b4da-d70f2811e5a0" style={[styles.ville_groupe221_groupe203_groupe222_groupe200_x132, { color: color}]}>{typeof responseApiAir.data.iaqi.pm10 === 'undefined' ? "--" : responseApiAir.data.iaqi.pm10.v}</Text>
                    </View>
                    <View data-layer="b81e02b9-4a42-43b7-9bb1-045a467ba591" style={styles.ville_groupe221_groupe203_groupe222_groupe201}>
                        <Text data-layer="df9b264a-b8e9-441d-8874-b97ece89075d" style={styles.ville_groupe221_groupe203_groupe222_groupe201_x03}>O3</Text>
                        <Text data-layer="be2d8d50-0c64-445e-a28d-30f2c044695e" style={[styles.ville_groupe221_groupe203_groupe222_groupe201_x21, { color: color}]}>{typeof responseApiAir.data.iaqi.o3 === 'undefined' ? "--" : responseApiAir.data.iaqi.o3.v}</Text>
                    </View>
                    <View data-layer="fcd17405-b9f8-4034-8495-1140b2c2562c" style={styles.ville_groupe221_groupe203_groupe222_rectangle291}></View>
                </View>
                <View data-layer="719c91a9-ecc6-40cd-861c-7156acf81213" style={styles.ville_groupe221_groupe203_groupe223}>
                    <View data-layer="4d466ca9-2b93-4c57-a6e6-3fafb0730908" style={styles.ville_groupe221_groupe203_groupe223_groupe199}>
                        <Text data-layer="3fc09ed9-b435-43c7-84a3-7cb0d19d43fe" style={styles.ville_groupe221_groupe203_groupe223_groupe199_no2}>NO2</Text>
                        <Text data-layer="6e874a53-5214-418e-a5c1-00864a1198ed" style={[styles.ville_groupe221_groupe203_groupe223_groupe199_x165, { color: color}]}>{typeof responseApiAir.data.iaqi.no2 === 'undefined' ? "--" : responseApiAir.data.iaqi.no2.v}</Text>
                    </View>
                    <View data-layer="97a0b00d-5104-48e9-81b7-83cf587fe90a" style={styles.ville_groupe221_groupe203_groupe223_groupe202}>
                        <Text data-layer="63321f72-08b8-41d0-a989-1cdaf68e5ce4" style={styles.ville_groupe221_groupe203_groupe223_groupe202_pm25}>PM2.5</Text>
                        <Text data-layer="b5fa323c-d169-4984-bdb8-387b90324f59" style={[styles.ville_groupe221_groupe203_groupe223_groupe202_x11, { color: color}]}>{typeof responseApiAir.data.iaqi.pm25 === 'undefined' ? "--" : responseApiAir.data.iaqi.pm25.v}</Text>
                    </View>
                    <View data-layer="e1745705-9ea5-4be9-a421-444cd57e496c" style={styles.ville_groupe221_groupe203_groupe223_rectangle290}></View>
                </View>
            </View>
        </View>
        <View data-layer="1d9af854-117d-4569-bd1c-382d8648a352" style={styles.ville_line713d4434}></View>
        <View data-layer="f8323eb0-ce31-4b3d-b8bf-5df4ab26af60" style={styles.ville_line}></View>
        <View data-layer="c4e395d8-e883-4da3-8fa2-95ff82f6742d" style={styles.ville_time}>
            <Text data-layer="fdf366e4-eec7-4adc-ad64-a0b8e5029805" style={styles.ville_time_x1200a8d3bbd1}>12 : 00</Text>
            <Text data-layer="fb5ee516-c6e3-4026-9cbe-623a78487820" style={styles.ville_time_x1200a2a59a04}>12 : 00</Text>
            <Text data-layer="f048b778-dc7e-4176-baa8-f7db3694bfa2" style={styles.ville_time_x12003504acc6}>12 : 00</Text>
            <Text data-layer="a4153b3d-df41-4e52-b162-f6ed4d71d883" style={styles.ville_time_x1200baa55a04}>12 : 00</Text>
            <Text data-layer="fc51e519-00c3-463a-8162-8b9264607aac" style={styles.ville_time_x1200}>12 : 00</Text>
        </View>
        <View data-layer="5f3e823b-ff4d-4966-b7f6-693d042b7522" style={styles.ville_groupe219}>
            <Text data-layer="01344ea0-c0e2-4edd-8743-c44f33a55d3a" style={styles.ville_groupe219_x17c}>{(responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="94dde90a-e2c8-418b-bfc3-93638dc3f882" style={styles.ville_groupe219_min}>MIN</Text>
            <Text data-layer="02f386d0-2c04-4f6f-b54b-5afd748bac1a" style={styles.ville_groupe219_max}>MAX</Text>
            <Text data-layer="f352e19c-9794-428c-a13a-76584e15af46" style={styles.ville_groupe219_x10c}>{(responseApiMeteo.main.temp_min - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="d619b2b2-857d-4bae-b000-74cf855a0ea6" style={styles.ville_groupe219_x18c}>{(responseApiMeteo.main.temp_max - 273.15).toFixed(1) + "°C"}</Text>
            {condition == null ? _iconMeteo(navigation.state.params.responseApiMeteo) : null}
            {condition == null ? null : condition.path}
            <View data-layer="8fbbd1ca-eba7-457d-a9dd-b0a0a1b079da" style={styles.ville_groupe219_rectangle288}></View>
        </View>
    </View>
    );

}

DetailView.propTypes = {

}

DetailView.defaultProps = {

}

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var ratio = PixelRatio.get()
var indiceScreen = ratio <= 3 ? 1 : ratio > 3 ? 1.2 : 0.2;


const styles = StyleSheet.create({
  "ville": {
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
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "ville_searchcity": {
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
    "width": "auto",
    "height": 43,
    "left": 34,
    "top": 80,
    "right": 30
  },
  "ville_searchcity_versailles": {
    "opacity": 1,
    "position": "absolute",
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
    "position": "absolute",
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
  "ville_searchcity_iconadd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15,
    "height": "auto",
    "top": 4,
    "right": 5,
    "bottom": 24
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
  "ville_groupe192": {
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
    "width": "auto",
    "height": 130,
    "left": 34,
    "top": 330,
    "right": 36
  },
  "ville_groupe192_groupe185": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe185_nuage": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe185_x43Ms": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe186": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 23,
    "right": 0
  },
  "ville_groupe192_groupe186_vitesseDuVent": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe186_x43Ms": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe188": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 69,
    "right": 0
  },
  "ville_groupe192_groupe188_humidite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe188_x93": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe189": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 92,
    "right": 0
  },
  "ville_groupe192_groupe189_visibilite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe189_x1900M": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe217": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 138,
    "right": 0
  },
  "ville_groupe192_groupe217_coucherDuSoleil": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe217_x18h43": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe218": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 115,
    "right": 0
  },
  "ville_groupe192_groupe218_leverDuSoleil": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe218_x8h32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe187": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 45,
    "right": 0
  },
  "ville_groupe192_groupe187_pression": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe187_x1027Hpa": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221": {
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
    "width": "auto",
    "height": 84,
    "left": 34,
    "top": 220,
    "right": 35
  },
  "ville_groupe221_rectangle275": {
    "opacity": 0.3,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": 84,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_airqualityindex": {
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
    "width": "auto",
    "height": 35,
    "left": 25,
    "top": 25,
    "right": 231
  },
  "ville_groupe221_airqualityindex_rectangle190": {
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
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 50,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_airqualityindex_x2173dda066": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 16*indiceScreen,
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
    "height": "auto",
    "left": 16,
    "top": 6,
    "right": 16,
    "bottom": 8
  },
  "ville_groupe221_groupe203": {
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
    "width": "auto",
    "height": "auto",
    "left": 92,
    "top": 20,
    "right": 11,
    "bottom": 21
  },
  "ville_groupe221_groupe203_groupe222": {
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
    "width": 96,
    "height": "auto",
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe200": {
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
    "width": 81,
    "height": 19,
    "top": 1,
    "right": 14
  },
  "ville_groupe221_groupe203_groupe222_groupe200_pm10": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe200_x132": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201": {
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
    "width": 81,
    "height": 19,
    "right": 14,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201_x03": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201_x21": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe222_rectangle291": {
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
    "width": "auto",
    "height": 43,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223": {
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
    "width": 96,
    "height": "auto",
    "left": 0,
    "top": 0,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe199": {
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
    "width": 81,
    "height": 19,
    "left": 1,
    "top": 1
  },
  "ville_groupe221_groupe203_groupe223_groupe199_no2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe199_x165": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202": {
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
    "width": 81,
    "height": 19,
    "left": 1,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202_pm25": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202_x11": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223_rectangle290": {
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
    "width": "auto",
    "height": 43,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_line713d4434": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
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
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 513,
    "right": 0
  },
  "ville_line": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
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
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 573,
    "right": 0
  },
  "ville_time": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": -198.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 397,
    "height": 20,
    "left": "50%",
    "top": 535
  },
  "ville_time_x1200a8d3bbd1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15*indiceScreen,
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
    "height": 20,
    "left": 88,
    "top": 0
  },
  "ville_time_x1200a2a59a04": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15*indiceScreen,
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
    "height": 20,
    "left": 174,
    "top": 0
  },
  "ville_time_x12003504acc6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15*indiceScreen,
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
    "height": 20,
    "left": 263,
    "top": 0
  },
  "ville_time_x1200baa55a04": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15*indiceScreen,
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
    "height": 20,
    "left": 351,
    "top": 0
  },
  "ville_time_x1200": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15*indiceScreen,
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
    "height": 20,
    "left": 0,
    "top": 0
  },
  "ville_groupe219": {
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
    "width": "auto",
    "height": 57,
    "left": 34,
    "top": 140,
    "right": 30
  },
  "ville_groupe219_x17c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 35*indiceScreen,
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
    "width": 'auto',
    "height": 46,
    "left": 56,
    "top": 1
  },
  "ville_groupe219_min": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-regular",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 15,
    "right": 56,
    "bottom": 13
  },
  "ville_groupe219_max": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
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
    "width": 'auto',
    "height": 17,
    "top": 9,
    "right": 52
  },
  "ville_groupe219_x10c": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-regular",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 15,
    "left": 'auto',
    "right": 5,
    "bottom": 13
  },
  "ville_groupe219_x18c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14*indiceScreen,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
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
    "left": 'auto',
    "top": 9,
    "right": 5
  },
  "ville_groupe219_trace122": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 33.63,
    "height": 37,
    "left": -1,
    "top": 8
  },
  "ville_groupe219_rectangle288": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  }
});
