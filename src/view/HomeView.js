import { AppRegistry,
  Image,
  Platform,
  StatusBar,
  RefreshControl,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Value from './indexValue/Value'
import SafeAreaView from 'react-native-safe-area-view';

import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import * as data from '../../db/favorite.json';

import Toast from 'react-native-root-toast';



class HomeView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        location: null,
        loading: true,
        refreshing: true,
        responseApiAir: {},
        errorMessage: null,
        dominant: '',
        responseApiMeteo: {},
        color: null,
        colorPm10: null,
        colorNo2: null,
        colorO3: null,
        aqi: null,
        condition: null,
        dataLoaded: false,
        textInside: '',
        conditionWeather: [
             {
               id: 200,
               weather: "Orage",
               description: "orage avec pluie légère",
               icon: "11d"
             },
             {
               id: 201,
               weather: "Orage",
               description: "orage avec pluie ",
               icon: "11d"
             },
             {
               id: 202,
               weather: "Orage",
               description: "orage avec forte pluie",
               icon: "11d"
             },
             {
               id: 210,
               weather: "Orage",
               description: "orage léger",
               icon: "11d"
             },
             {
               id: 211,
               weather: "Orage",
               description: "orage",
               icon: "11d"
             },
             {
               id: 212,
               weather: "Orage",
               description: "fort orage",
               icon: "11d"
             },
             {
               id: 221,
               weather: "Orage",
               description: "orage",
               icon: "11d"
             },
             {
               id: 230,
               weather: "Orage",
               description: "orage avec bruine légère",
               icon: "11d"
             },
             {
               id: 231,
               weather: "Orage",
               description: "orage avec bruine ",
               icon: "11d"
             },
             {
               id: 232,
               weather: "Orage",
               description: "orage avec forte bruine",
               icon: "11d"
             },
             {
               id: 300,
               weather: "Drizzle",
               description: "bruine d'intensité légère",
               icon: "09d"
             },
             {
               id: 301,
               weather: "Drizzle",
               description: "bruine",
               icon: "09d"
             },
             {
               id: 302,
               weather: "Drizzle",
               description: "bruine de forte intensité",
               icon: "09d"
             },
             {
               id: 310,
               weather: "Drizzle",
               description: "bruine d'intensité légère et pluie",
               icon: "09d"
             },
             {
               id: 311,
               weather: "Drizzle",
               description: "bruine et pluie",
               icon: "09d"
             },
             {
               id: 312,
               weather: "Drizzle",
               description: "forte bruine pluie forte",
               icon: "09d"
             },
             {
               id: 313,
               weather: "Drizzle",
               description: "brèves averses et bruine",
               icon: "09d"
             },
             {
               id: 314,
               weather: "Drizzle",
               description: "fortes averses pluie forte",
               icon: "09d"
             },
             {
               id: 321,
               weather: "Drizzle",
               description: "brèves bruine",
               icon: "09d"
             },
             {
               id: 500,
               weather: "Rain",
               description: "légère pluie",
               icon: "10d"
             },
             {
               id: 501,
               weather: "Rain",
               description: "pluie modéré",
               icon: "10d"
             },
             {
               id: 502,
               weather: "Rain",
               description: "pluie de forte intensité",
               icon: "10d"
             },
             {
               id: 503,
               weather: "Rain",
               description: "très forte pluie",
               icon: "10d"
             },
             {
               id: 504,
               weather: "Rain",
               description: "pluie extrème",
               icon: "10d"
             },
             {
               id: 511,
               weather: "Rain",
               description: "pluie verglaçante",
               icon: "10d"
             },
             {
               id: 520,
               weather: "520",
               description: "pluie légère par intermitence",
               icon: "10d"
             },
             {
               id: 521,
               weather: "Rain",
               description: "pluie par intermitence",
               icon: "10d"
             },
             {
               id: 522,
               weather: "Rain",
               description: "forte pluie par intermitence",
               icon: "10d"
             },
             {
               id: 531,
               weather: "Rain",
               description: "forte pluie par intermitence",
               icon: "10d"
             },
             {
               id: 600,
               weather: "Snow",
               description: "faible chute de neige",
               icon: "13d"
             },
             {
               id: 601,
               weather: "Snow",
               description: "neige",
               icon: "13d"
             },
             {
               id: 602,
               weather: "Snow",
               description: "forte chute de neige",
               icon: "13d"
             },
             {
               id: 611,
               weather: "Snow",
               description: "neige fondue",
               icon: "13d"
             },
             {
               id: 612,
               weather: "Snow",
               description: "faible chute de neige fondu",
               icon: "13d"
             },
             {
               id: 613,
               weather: "Snow",
               description: "brève chute de neige fondu",
               icon: "13d"
             },
             {
               id: 615,
               weather: "Snow",
               description: "légère plui et chute de neige",
               icon: "13d"
             },
             {
               id: 616,
               weather: "Snow",
               description: "neige et pluie",
               icon: "13d"
             },
             {
               id: 620,
               weather: "Snow",
               description: "brève chute de neige de faible intensité",
               icon: "13d"
             },
             {
               id: 621,
               weather: "Snow",
               description: "brève chute de neige",
               icon: "13d"
             },
             {
               id: 622,
               weather: "Snow",
               description: "forte chute de neige par intermitence",
               icon: "13d"
             },
             {
               id: 701,
               weather: "Mist",
               description: "brouillard",
               icon: "50d"
             },
             {
               id: 711,
               weather: "Smoke",
               description: "fumée",
               icon: "50d"
             },
             {
               id: 721,
               weather: "Haze",
               description: "brume",
               icon: "50d"
             },
             {
               id: 731,
               weather: "Dust",
               description: "Sable/poussière",
               icon: "50d"
             },
             {
               id: 741,
               weather: "Fog",
               description: "brouillard",
               icon: "50d"
             },
             {
               id: 751,
               weather: "Sand",
               description: "sable",
               icon: "50d"
             },
             {
               id: 761,
               weather: "Dust",
               description: "poussière",
               icon: "50d"
             },
             {
               id: 701,
               weather: "Ash",
               description: "cendre volcanic/cendre",
               icon: "50d"
             },
             {
               id: 771,
               weather: "Squall",
               description: "bourrasque",
               icon: "50d"
             },
             {
               id: 781,
               weather: "Tornado",
               description: "tornade",
               icon: "50d"
             },
             {
               id: 800,
               weather: "Clear",
               description: "ciel dégagé",
               icon: "01d"
             },
             {
               id: 801,
               weather: "Clouds",
               description: "entre 11-25% de nuage",
               icon: "02d"
             },
             {
               id: 802,
               weather: "Clouds",
               description: "entre 25-50% de nuage",
               icon: "03d"
             },
             {
               id: 803,
               weather: "Clouds",
               description: "entre 50-84% de nuage",
               icon: "04d"
             },
             {
               id: 804,
               weather: "Clouds",
               description: "entre 85-100% de nuage",
               icon: "04d"
             },
            ]
      };
      this.fetchFonts()
  }

  componentWillMount() {
    if(typeof this.props.navigation.state.params == "undefined"){
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this._getLocationAsync();
      }
    }else{
      this.setState({responseApiMeteo: this.props.navigation.state.params.api})
      setTimeout(function () {
        this._apiAir(this.props.navigation.state.params.api.coord.lat,this.props.navigation.state.params.api.coord.lon)
      }, 1000);
    }
  }

  _getLocationAsync = async () => {
    this.setState({refreshing: true});
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }



    var location = await Location.getCurrentPositionAsync({});
    this.setState({ location: location });
    console.log(location)
    this._apiAir(this.state.location.coords.latitude,this.state.location.coords.longitude)

  };

  _apiAir = (lat, long) => {
    fetch('https://api.waqi.info/feed/geo:'+lat+';'+long+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', {
      method: 'GET'})
    .then((responsewaqi) => responsewaqi.json())
    .then((responseJsonWaqi) => {
      this.setState({responseApiAir: responseJsonWaqi});
      this._colorIndex();
      if(typeof this.props.navigation.state.params == "undefined"){
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'4&APPID=505c84426a182da1a7178151dccdb616', {
        method: 'GET'})
        .then((responseWeather) => responseWeather.json())
        .then((responseJsonWeather) => {
          if(responseJsonWeather.cod == 200) {
          this.setState({responseApiMeteo: responseJsonWeather})
          this._iconMeteo()
          this.setState({loading: false, refreshing: false})
          return responseJsonWeather

          }else{
            Toast.show('Problème de connexion au serveur, veuillez ressayer dans quelques instants', {
              duration: Toast.durations.LONG,
              position: Toast.positions.CENTER,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
            });
          }
        })
      }else{
        this._iconMeteo()
        this.setState({loading: false, refreshing: false})
      }
      return responseJsonWaqi;
    })
    .catch( error => {
      console.error(error);
    });
  }

  _iconMeteo = () => {
    this.state.conditionWeather.forEach( value => {
        if(this.state.responseApiMeteo.weather[0].id == value.id){
            var cond = {
                description: value.description,
                icon: "http://openweathermap.org/img/wn/"+ value.icon +"@2x.png",
                id: value.id,
                main: value.main
            }
        this.setState({condition: cond})
        }
    })
  }

  _colorIndex = () => {
    if (this.state.responseApiAir.data.aqi >= 0 && this.state.responseApiAir.data.aqi <= 50){
      this.setState({color: "#28D3B0"})
      this.setState({textInside: "La qualité de l'air est jugée satisfaisante, et la pollution de l'air pose peu ou pas de risque."})

    }
    if (this.state.responseApiAir.data.aqi >= 51 && this.state.responseApiAir.data.aqi <= 150){
      this.setState({color: "#FFBB00"})
      this.setState({textInside: "La qualité de l'ai est acceptable; Cependant, pour certains polluants, il peut y avoir un problème de santé modérée pour un très petit nombre de personnes qui sont particulièrement sensibles à la pollution de l'air."})
    }
    if (this.state.responseApiAir.data.aqi >= 151){
      this.setState({color: "#FF5656"})
      this.setState({textInside: "Avertissements de santé de conditions d'urgence. Toutes la population est plus susceptible d'être affecté."})
    }
  }

  _addFavorite = () => {
    var id = 0

    if (this.state.responseApiMeteo.name.length == 0){
      id = 0
    }else{
      for (i = 0; i < this.state.responseApiMeteo.name.length; i++) {
          var char = this.state.responseApiMeteo.name.charCodeAt(i);
          id = ((id << 5) - id) + char;
          id = id & id;
      }
    }

    var i = 0

    data.favorite.map((item) => {
      if(!typeof 'undefined' || !item.ville || item.id == id){
        i++
      }
    })
    if(i == 0){
      data.favorite.push({
        "id": id,
        "ville": this.state.responseApiMeteo.name
      })
      Toast.show('Ajouté aux favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }else{
      Toast.show('Existe déjà dans vos favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  }

  fetchFonts() {
    return Font.loadAsync({
    'roboto-bold': require('../../assets/Roboto-Bold.ttf'),
    'roboto-italic': require('../../assets/Roboto-Italic.ttf'),
    'roboto-regular': require('../../assets/Roboto-Regular.ttf')
    });
  };

  render() {
    if(!this.state.dataLoaded){
      return(
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({dataLoaded: true})}
        />
      )
    }
    if(this.state.loading){
      return (
      <View style={{flex: 1}}>
        <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} size="large" color="#0000ff" />
      </View>
    );
    }else{
      return(
      <SafeAreaView style={styles.safe}>
        <ScrollView data-layer="13614dff-3bb8-47ff-9a88-81264c364874" bounces={false} style={styles.home}>
            <View data-layer="e97e27e2-2ba3-4663-9cf1-b8e6a87404ea" style={styles.home_searchcity}>
                <Text data-layer="0566535a-1279-4dc0-bf84-314d2bf4cbeb" style={styles.home_searchcity_versailles}>{this.state.responseApiMeteo.name}</Text>
                <Text data-layer="ec71f28a-dd55-4cb6-a52d-b7c93ad5c018" style={styles.home_searchcity_yvelinesFrance}>{this.state.responseApiMeteo.sys.country}</Text>
                <TouchableOpacity onPress={() => {this._addFavorite()}} style={{width:25, height: 25, left: 289, top:2}}>
                  <Svg data-layer="2aa5bee4-19b5-4040-a681-18ebd092a169" style={styles.home_searchcity_iconadd} preserveAspectRatio="none" viewBox="-5944.99951171875 -2494.0009765625 15 15" fill="rgba(42, 44, 53, 1)"><SvgPath  d="M -5938.65380859375 -2480.15478515625 L -5938.65380859375 -2485.3466796875 L -5943.845703125 -2485.3466796875 C -5944.4833984375 -2485.3466796875 -5944.99951171875 -2485.86376953125 -5944.99951171875 -2486.500732421875 C -5944.99951171875 -2487.137939453125 -5944.4833984375 -2487.654541015625 -5943.845703125 -2487.654541015625 L -5938.65380859375 -2487.654541015625 L -5938.65380859375 -2492.846923828125 C -5938.65380859375 -2493.48388671875 -5938.13623046875 -2494.0009765625 -5937.49951171875 -2494.0009765625 C -5936.8623046875 -2494.0009765625 -5936.345703125 -2493.48388671875 -5936.345703125 -2492.846923828125 L -5936.345703125 -2487.654541015625 L -5931.15380859375 -2487.654541015625 C -5930.51611328125 -2487.654541015625 -5929.99951171875 -2487.137939453125 -5929.99951171875 -2486.500732421875 C -5929.99951171875 -2485.86376953125 -5930.51611328125 -2485.3466796875 -5931.15380859375 -2485.3466796875 L -5936.345703125 -2485.3466796875 L -5936.345703125 -2480.15478515625 C -5936.345703125 -2479.517333984375 -5936.8623046875 -2479.0009765625 -5937.49951171875 -2479.0009765625 C -5938.13623046875 -2479.0009765625 -5938.65380859375 -2479.517333984375 -5938.65380859375 -2480.15478515625 Z"  />
                  </Svg>
                </TouchableOpacity>
            </View>
            <Text data-layer="fcff8157-0898-4499-ba77-8c9c5c1399f4" style={styles.home_x10c}>{(this.state.responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="e3a238f9-d269-489b-abdc-16c159f8bdfd" style={styles.home_min}>MIN</Text>
            <Text data-layer="aa2caedb-af91-4980-91db-1dea85c1ac6b" style={styles.home_max}>MAX</Text>
            <Text data-layer="1aff345a-b725-49c3-9873-1a98823d7b24" style={styles.home_x8c}>{(this.state.responseApiMeteo.main.temp_min - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="947b1b79-cf69-4852-adf7-d4ad1f9e5d19" style={styles.home_x13c}>{(this.state.responseApiMeteo.main.temp_max - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="eaa8bd00-b2cf-4b94-8626-b80c9dfd7fb4" style={styles.home_temp}>Temp.</Text>
            <View data-layer="01c94066-2b12-48e5-9d3a-9620b1a4214c" style={styles.home_airqualityindex}>
                <View data-layer="e22a0d65-2293-4022-856e-4853fad7221f" style={[styles.home_airqualityindex_rectangle190, {borderColor: this.state.color}]}></View>
                <Text data-layer="65c2a307-84e5-488f-8d7f-4b6107009b76" style={[styles.home_airqualityindex_x102, {color: this.state.color}]}>{this.state.responseApiAir.data.aqi}</Text>
            </View>
            <View data-layer="ba686c87-cb59-4c46-baed-6f1eec515b14" style={styles.home_lineacb95fde}></View>
            <View data-layer="f25280e4-4f48-4c2a-be2d-9ebe03c9ff61" style={styles.home_line}></View>
            <View data-layer="a26dc001-9ab5-4ffd-9f28-9301663a0804" style={styles.home_time}>
                <Text data-layer="9a56958e-2d40-49f2-a8bc-c54a080d1c88" style={styles.home_time_x1200e2d3bdb2}>12 : 00</Text>
                <Text data-layer="43a27cd7-422c-4aef-bf60-5d05a84dbfd4" style={styles.home_time_x1200786e426d}>12 : 00</Text>
                <Text data-layer="951d2dc7-9ece-4caa-9e99-a9583fdf0134" style={styles.home_time_x1200b97e4199}>12 : 00</Text>
                <Text data-layer="608d07ce-0678-4ee1-8ae8-313ef306ab00" style={styles.home_time_x120061c83be0}>12 : 00</Text>
                <Text data-layer="1cdb565a-e3c7-46a1-913c-6772032fc806" style={styles.home_time_x1200}>12 : 00</Text>
            </View>
            <TouchableOpacity onPress={() => {this._getLocationAsync()}}>
              <Text data-layer="8f879b30-4046-4eb3-b96e-277a55d04826" style={styles.home_actualiser}>Actualiser</Text>
              <Svg data-layer="3d35f051-b5bb-4ad4-889b-6a0b430a96b0" style={styles.home_iconmonstrRefresh2} preserveAspectRatio="none" viewBox="-4.76837158203125e-7 2 14 12.25" fill="rgba(42, 44, 53, 1)"><SvgPath d="M 7.874999523162842 2 C 4.591416358947754 2 1.917999744415283 4.587666511535645 1.764582753181458 7.833333492279053 L -4.76837158203125e-07 7.833333492279053 L 2.646582841873169 11.28491592407227 L 5.25 7.833333492279053 L 3.514583110809326 7.833333492279053 C 3.666249513626099 5.557166576385498 5.560916423797607 3.75 7.874999523162842 3.75 C 10.28766632080078 3.75 12.25 5.712333679199219 12.25 8.125 C 12.25 10.53766536712646 10.28766632080078 12.49999904632568 7.874999523162842 12.49999904632568 C 6.486083030700684 12.49999904632568 5.248833179473877 11.84724998474121 4.447333335876465 10.83516597747803 L 3.369916200637817 12.26374912261963 C 4.489333152770996 13.48174858093262 6.090583324432373 14.24999904632568 7.874999523162842 14.24999904632568 C 11.25716686248779 14.24999904632568 14 11.50716590881348 14 8.125 C 14 4.742833137512207 11.25716686248779 2 7.874999523162842 2 Z"  /></Svg>
            </TouchableOpacity>
            <Text data-layer="699344fd-f3c3-4637-91c6-9e22dabbc0b9" style={styles.home_lieuxAProximite}>Lieux à proximité</Text>
            <View data-layer="09af10b5-c90e-41a5-8022-88aa02b5cd5e" style={[styles.home_rectangle, {borderWidth: 1 ,borderColor: this.state.color}]}></View>
            <Text data-layer="7150d953-1902-4408-87cb-6ab655001bdc" style={[styles.home_loremIpsumDolorSitAmetAdipiscingElitDonecVulputate, {color: this.state.color}]}>{this.state.textInside}</Text>
            <View data-layer="edfed02e-1326-48d5-9935-25a9cb06b14c" style={styles.home_x09d}>
                <Svg data-layer="e5d8674a-cb86-4b50-8c3a-1800bcde2d22" style={styles.home_x09d_trace110} preserveAspectRatio="none" viewBox="318.1409912109375 234.4969940185547 4.5 8.33599853515625" fill="rgba(31, 33, 40, 1)"><SvgPath d="M 320.3909912109375 242.0829925537109 C 319.56201171875 242.0829925537109 318.8909912109375 241.4109954833984 318.8909912109375 240.5829925537109 L 318.8909912109375 236.7469940185547 C 318.8909912109375 235.9190063476562 319.56201171875 235.2469940185547 320.3909912109375 235.2469940185547 C 321.218994140625 235.2469940185547 321.8909912109375 235.9190063476562 321.8909912109375 236.7469940185547 L 321.8909912109375 240.5829925537109 C 321.8909912109375 241.4109954833984 321.218994140625 242.0829925537109 320.3909912109375 242.0829925537109 Z"  /></Svg>
                <Svg data-layer="db15a781-cd92-41b4-a212-5f106969ed7e" style={styles.home_x09d_trace111} preserveAspectRatio="none" viewBox="309.0409851074219 234.4969940185547 4.5 8.33599853515625" fill="rgba(31, 33, 40, 1)"><SvgPath d="M 311.2909851074219 242.0829925537109 C 310.4630126953125 242.0829925537109 309.7909851074219 241.4109954833984 309.7909851074219 240.5829925537109 L 309.7909851074219 236.7469940185547 C 309.7909851074219 235.9190063476562 310.4630126953125 235.2469940185547 311.2909851074219 235.2469940185547 C 312.1189880371094 235.2469940185547 312.7909851074219 235.9190063476562 312.7909851074219 236.7469940185547 L 312.7909851074219 240.5829925537109 C 312.7909851074219 241.4109954833984 312.1189880371094 242.0829925537109 311.2909851074219 242.0829925537109 Z"  /></Svg>
                <Svg data-layer="62a14ac2-6fef-4683-8047-fa74272c0bb9" style={styles.home_x09d_trace112} preserveAspectRatio="none" viewBox="327.5769958496094 234.4969940185547 4.5 8.33599853515625" fill="rgba(31, 33, 40, 1)"><SvgPath d="M 329.8269958496094 242.0829925537109 C 328.9989929199219 242.0829925537109 328.3269958496094 241.4109954833984 328.3269958496094 240.5829925537109 L 328.3269958496094 236.7469940185547 C 328.3269958496094 235.9190063476562 328.9989929199219 235.2469940185547 329.8269958496094 235.2469940185547 C 330.6549987792969 235.2469940185547 331.3269958496094 235.9190063476562 331.3269958496094 236.7469940185547 L 331.3269958496094 240.5829925537109 C 331.3269958496094 241.4109954833984 330.6549987792969 242.0829925537109 329.8269958496094 242.0829925537109 Z"  /></Svg>
                <View data-layer="52f75473-749f-4ab7-a906-376742013ddb" style={styles.home_x09d_groupe153}>
                    <Svg data-layer="70448e54-618d-4821-909d-3730b9ac9077" style={styles.home_x09d_groupe153_trace113} preserveAspectRatio="none" viewBox="315.0220031738281 230.52999877929688 1.54296875 1.5030059814453125" fill="transparent"><SvgPath d="M 315.7720031738281 231.2799987792969 C 315.7860107421875 231.281005859375 315.7999877929688 231.2830047607422 315.8150024414062 231.2830047607422 L 315.8150024414062 231.2830047607422 L 315.8150024414062 231.2830047607422 C 315.8009948730469 231.2830047607422 315.7869873046875 231.2799987792969 315.7720031738281 231.2799987792969 Z"  /></Svg>
                    <Svg data-layer="cf251e54-cbd3-46b2-a091-6e4bb54a7796" style={styles.home_x09d_groupe153_trace114} preserveAspectRatio="none" viewBox="302.1735534667969 206.79098510742188 33.85693359375 24.658004760742188" fill="rgba(31, 33, 40, 1)"><SvgPath d="M 335.2793884277344 222.3498840332031 C 335.3513488769531 217.6692962646484 331.6438293457031 213.8171081542969 326.9970092773438 213.7385559082031 L 326.9878845214844 213.7385559082031 C 326.5704040527344 213.7385559082031 326.1610717773438 213.7691650390625 325.7608337402344 213.8293609619141 C 325.4598999023438 213.8752593994141 325.1650390625 213.9528045654297 324.8701782226562 214.0313568115234 C 324.77392578125 214.0568542480469 324.672607421875 214.0680694580078 324.578369140625 214.0976715087891 L 324.5773620605469 214.0966339111328 L 324.5773620605469 214.0966339111328 C 324.5570678710938 214.0527648925781 324.53173828125 214.0109405517578 324.5104675292969 213.9670715332031 C 323.7181091308594 212.35009765625 322.5670471191406 210.9483795166016 321.16064453125 209.8710632324219 C 321.1353149414062 209.8527221679688 321.1119995117188 209.8312835693359 321.0876770019531 209.8129272460938 C 320.9569702148438 209.7149810791016 320.8211975097656 209.6241760253906 320.6874389648438 209.5323638916016 C 320.5952453613281 209.4691162109375 320.5050354003906 209.4028015136719 320.4108276367188 209.3415985107422 C 320.3399047851562 209.2967071533203 320.2659301757812 209.2559051513672 320.1950073242188 209.2120361328125 C 320.0318908691406 209.112060546875 319.8697509765625 209.0120849609375 319.7025451660156 208.9212799072266 L 319.6832885742188 208.9110870361328 C 318.0610961914062 208.0316925048828 316.2209777832031 207.5450592041016 314.3059387207031 207.5409851074219 L 314.3038940429688 207.5420227050781 C 308.1088256835938 207.6083068847656 303.0790100097656 212.6031036376953 302.9270324707031 218.8394470214844 C 302.7730102539062 225.2186126708984 307.7724609375 230.5163726806641 314.1022644042969 230.6959381103516 C 314.1174621582031 230.6959381103516 314.1316528320312 230.6989898681641 314.1468505859375 230.6989898681641 L 314.1468505859375 230.6989898681641 L 326.9868774414062 230.6989898681641 C 331.5374145507812 230.6286010742188 335.20947265625 226.9314880371094 335.2793884277344 222.3498840332031 Z M 314.1883850097656 227.6384582519531 C 311.9866027832031 227.6078643798828 309.9195251464844 226.7121429443359 308.3682250976562 225.1155700683594 C 306.808837890625 223.5098114013672 305.9495849609375 221.3806915283203 305.9495849609375 219.1210021972656 C 305.9495849609375 214.423095703125 309.6986389160156 210.6015167236328 314.3059387207031 210.6015167236328 C 315.9058532714844 210.6015167236328 317.4581909179688 211.0626373291016 318.7976989746094 211.9348907470703 C 320.10888671875 212.7887725830078 321.1596069335938 213.9925842285156 321.8354797363281 215.416748046875 L 322.9612121582031 217.7906951904297 L 325.4619140625 217.0255737304688 C 325.953369140625 216.8745880126953 326.4670715332031 216.7990875244141 326.9878845214844 216.7990875244141 C 329.9141845703125 216.7990875244141 332.2943420410156 219.2301635742188 332.2943420410156 222.2203063964844 C 332.2943420410156 225.2084045410156 329.9141845703125 227.6394958496094 326.9878845214844 227.6394958496094 L 314.2451171875 227.6394958496094 L 314.1883850097656 227.6384582519531 Z"  /></Svg>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
      )
    }
  };
}

HomeView.propTypes = {

}

HomeView.defaultProps = {

}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  "home": {
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
    "height": height,
    "left": 0,
    "top": 0
  },
  "home_searchcity": {
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
    "height": 43,
    "left": 34,
    "top": 230
  },
  "home_searchcity_versailles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 20,
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
    "width": 235,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "home_searchcity_yvelinesFrance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "500",
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
    "width": 148,
    "height": 17,
    "left": 0,
    "top": 26
  },
  "home_searchcity_iconadd": {
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
    "height": 15,
    "left": 2,
    "top": 2
  },
  "home_x10c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 17,
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
    "width": 51,
    "height": 23,
    "left": 89,
    "top": 300
  },
  "home_min": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 26,
    "height": 19,
    "left": 153,
    "top": 321
  },
  "home_max": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 50,
    "height": 19,
    "left": 153,
    "top": 302
  },
  "home_x8c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 40,
    "height": 19,
    "left": 206,
    "top": 320
  },
  "home_x13c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 53,
    "height": 19,
    "left": 198,
    "top": 302
  },
  "home_temp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 40,
    "height": 19,
    "left": 89,
    "top": 320
  },
  "home_airqualityindex": {
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
    "width": 49.03,
    "height": 35.25,
    "left": 291,
    "top": 302
  },
  "home_airqualityindex_rectangle190": {
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
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "home_airqualityindex_x102": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 187, 0, 1)",
    "fontSize": 16,
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
    "width": 28,
    "height": 21,
    "left": 11,
    "top": 6.5
  },
  "home_lineacb95fde": {
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
    "width": 375,
    "height": 2,
    "left": 0,
    "top": 490
  },
  "home_line": {
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
    "width": 375,
    "height": 2,
    "left": 0,
    "top": 550
  },
  "home_time": {
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
    "width": 397,
    "height": 20,
    "left": -10,
    "top": 510
  },
  "home_time_x1200e2d3bdb2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
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
    "width": 46,
    "height": 20,
    "left": 88,
    "top": 0
  },
  "home_time_x1200786e426d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
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
    "width": 47,
    "height": 20,
    "left": 174,
    "top": 0
  },
  "home_time_x1200b97e4199": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
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
    "width": 46,
    "height": 20,
    "left": 263,
    "top": 0
  },
  "home_time_x120061c83be0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
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
    "width": 46,
    "height": 20,
    "left": 351,
    "top": 0
  },
  "home_time_x1200": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
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
    "width": 46,
    "height": 20,
    "left": 0,
    "top": 0
  },
  "home_actualiser": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 36,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 63,
    "height": 41,
    "left": 253,
    "top": 95
  },
  "home_lieuxAProximite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 30,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 215,
    "height": 117,
    "left": 34,
    "top": 100
  },
  "home_iconmonstrRefresh2": {
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
    "width": 14,
    "height": 12.25,
    "left": 326,
    "top": 108
  },
  "home_rectangle": {
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
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 306,
    "height": 100,
    "left": 34,
    "top": 370
  },
  "home_loremIpsumDolorSitAmetAdipiscingElitDonecVulputate": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 187, 0, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 250,
    "height": 60,
    "left": 63.5,
    "top": 390
  },
  "home_geoair": {
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
    "width": 63.01,
    "height": 15.53,
    "left": 34,
    "top": 61
  },
  "home_x09d": {
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
    "width": 32.36,
    "height": 35,
    "left": 34,
    "top": 300
  },
  "home_x09d_trace110": {
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
    "width": 5,
    "height": 8.84,
    "left": 15.2,
    "top": 27.16
  },
  "home_x09d_trace111": {
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
    "width": 5,
    "height": 8.84,
    "left": 5.97,
    "top": 27.16
  },
  "home_x09d_trace112": {
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
    "width": 5,
    "height": 8.84,
    "left": 24.83,
    "top": 27.16
  },
  "home_x09d_groupe153": {
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
    "width": 32.36,
    "height": 24.2,
    "left": 0,
    "top": 0
  },
  "home_x09d_groupe153_trace113": {
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
    "width": 2.04,
    "height": 2,
    "left": 12.02,
    "top": 23.2
  },
  "home_x09d_groupe153_trace114": {
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
    "width": 34.36,
    "height": 25.16,
    "left": -1,
    "top": -1
  }
});

export default HomeView;
