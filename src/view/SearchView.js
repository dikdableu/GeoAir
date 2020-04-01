import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import {Image as ReactImage, TouchableOpacity, SafeAreaView} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import City from "./city.js"
import Connexion from "./connexion.js"
import * as Font from 'expo-font';
import { AppLoading} from 'expo';
import { Auth } from 'aws-amplify';
import Toast from 'react-native-root-toast';
import * as data from '../../db/favorite.json';
import { connect } from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input'


export default function SearchView({props, navigation}) {

  const [listSearch, setListSearch] = useState([])
  const [search, setSearch] = useState('')
  const [responseApiAir, setResponseApiAir] = useState({})
  const [error, setError] = useState(null)
  const [responseApiMeteo, setResponseApiMeteo] = useState({})
  const [listCity, setListCity] = useState([])
  const [vide, setVide] = useState(true)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [hide, setHide] = useState('')
  const [color, setColor] = useState('')
  const [charged, setCharged] = useState('')

    useEffect(() => {
      console.log(search)
      fetch('http://3.126.246.233:3000/autocomplete?villes='+ search, {
        method: 'get'
      })
      .then((response) => response.json())
      .then((resultat) => {
        setListCity(resultat)
        return resultat
      })
    }, [search])

    useEffect(() => {
      if(typeof responseApiAir != 'undefined' && responseApiAir && Object.keys(responseApiAir).length !== 0 && responseApiAir != 0){
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
    }, [responseApiAir])

    _searchByCity = (city) => {
      toogleHide(false)
      setCharged(false)
      setVide(false)
      setListSearch({})
      if(!latitude || !longitude){
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
            setListSearch(data)
            setCharged(true)
            setError(false)
            return responseJsonWaqi;
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
            setCharged(true)
            setError(true)
          }
          return resultat
        })
        .catch( error => {
          console.error(error);
        });
      } else {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&appid=505c84426a182da1a7178151dccdb616', {
          method: 'GET'})
        .then((response) => response.json())
        .then((resultat) => {

            var id = 0
            var data = []
            fetch('https://api.waqi.info/feed/geo:'+latitude+';'+longitude+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
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
            setListSearch(data)
            setCharged(true)
            setError(false)
            return responseJsonWaqi;
          })
          .catch( error => {
            console.error(error);
          });
        })
        .catch( error => {
          console.error(error);
        });
      }

    }

  _addFavorite = () => {
    var id = 0

    if (responseApiMeteo.name.length == 0){
      id = 0
    }else{
      for (i = 0; i < responseApiMeteo.name.length; i++) {
          var char = responseApiMeteo.name.charCodeAt(i);
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
        "ville": responseApiMeteo.name
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

  _setInput = (input) => {
    toogleHide(false)
    setSearch(input.name)
    setLatitude(input.latitude)
    setLongitude(input.longitude)
    setTimeout(() => {_searchByCity(search)}, 500)
  }

  toogleHide = (set) => {
    if(set){
      setHide(hide)
    } else {
      setHide('none')
    }
  }

  _searching = (text) => {
    setSearch(text)
  }

  vider = () => {
    setVide(true)
    setSearch('')
  }
  console.log(vide)
  console.log(charged)
  console.log(props)
  if(!vide && charged){
    if(error == false){
      return (
        <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>

          <View data-layer="59cd9a49-e71f-4f3c-8add-6de16b43c754" style={styles.ajouterUnLieux_groupe215}>
            <TextInput keyboardType={'web-search'} id={'searchbar'} onChangeText={text => _searching(text)} onFocus={()=> vider()} blurOnSubmit={true} onSubmitEditing={() => setTimeout(() => {_searchByCity(search)}, 500)} value={search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" style={styles.ajouterUnLieux_groupe215_versa}/>
            <Svg data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_groupe215_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
            <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_groupe215_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
          </View>
          <FlatList
            style={styles.ajouterUnLieux_rectangle283}
            data={listSearch}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Detail', {responseApiAir: responseApiAir, responseApiMeteo: responseApiMeteo, color: color})} onLongPress={() => _addFavorite()}><City aqi={item.aqi} color={color} responseApiMeteo={responseApiMeteo} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country}/></TouchableOpacity>}
            initialNumToRender={10}
          />
        </SafeAreaView>
      )
    }else{
      return (
        <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
        <View data-layer="59cd9a49-e71f-4f3c-8add-6de16b43c754" style={styles.ajouterUnLieux_groupe215}>
          <TextInput keyboardType={'web-search'} id={'searchbar'} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> vide()} onSubmitEditing={() => setTimeout(() => {_searchByCity(search)}, 500)} value={search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" style={styles.ajouterUnLieux_groupe215_versa}/>
          <Svg data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
          <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
          <Text style={{color: '#BCBCBC', fontSize: 22, "width": 375,height: 131,left: '32%',top: 299}}>Aucun résultat</Text>
        </View>
        <FlatList
        bounces={false}
          data={listCity}
          style={styles.ajouterUnLieux_rectangle283}
          keyExtractor={(item) => item.idVilles.toString()}
          renderItem={({item}) => <TouchableOpacity onPress={() => _setInput(item)}>
            <Text style= {{fontSize: 15,fontWeight: "200", fontStyle: "normal", fontFamily: "roboto-regular", textAlign: "left"}}>
              {item.name} - {item.admin2_code}, {item.country_code}
            </Text>
          </TouchableOpacity>
          }
          initialNumToRender={10}
        />
      </SafeAreaView>
      )
    }
  }else{
    return(
      <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
        <View data-layer="59cd9a49-e71f-4f3c-8add-6de16b43c754" style={styles.ajouterUnLieux_groupe215}>
          <TextInput keyboardType={'web-search'} id={'searchbar'} autoFocus={true} blurOnSubmit={true} onChangeText={text => _searching(text)} onFocus={()=> toogleHide(true)} onSubmitEditing={() =>  _searchByCity(search)} value={search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" placeholder={'Ville'}  style={styles.ajouterUnLieux_groupe215_versa}/>
          <Svg data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_groupe215_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
          <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_groupe215_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
        </View>
        <FlatList
          bounces={false}
          style={styles.ajouterUnLieux_rectangle283}
          data={listCity}
          keyExtractor={(item) => item.idVilles.toString()}
          renderItem={({item}) =>
          <TouchableOpacity style ={{borderBottomWidth: 1, width: 300, height: 60}}onPress={() => _setInput(item)}>
            <Text style= {{fontSize: 17,height: 60, top: 15,fontWeight: "200", fontStyle: "normal", fontFamily: "roboto-bold", textAlign: "left", justifyContent: 'center', color: "#65666A",}}>
              {item.name} - {item.admin2_code}, {item.country_code}
            </Text>
          </TouchableOpacity>}
          initialNumToRender={10}
        />
        <Svg data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
        <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
      </SafeAreaView>
    )
  }
}
var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  "ajouterUnLieux": {
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
    "height": 812,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ajouterUnLieux_typebar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(81, 185, 255, 1)",
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
    "width": 2,
    "height": 38,
    "left": 101,
    "top": 195
  },
  "ajouterUnLieux_groupe215": {
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
    "height": 58,
    "left": 34,
    "top": 80,
    "right": 35
  },
  "ajouterUnLieux_groupe215_versa": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 25,
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
    "width": "60%",
    "height": 33,
    "left": 0,
    "top": 9,
    "right": 241
  },
  "ajouterUnLieux_groupe215_iconsearch": {
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
    "width": 21.66,
    "height": 25,
    "top": 15,
    "right": 51.29
  },
  "ajouterUnLieux_groupe215_iconlocalisation": {
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
    "width": 30.4,
    "height": 30.4,
    "top": 11.8,
    "right": -1
  },
  "ajouterUnLieux_groupe215_rectangle282": {
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
    "height": 58,
    "left": 0,
    "top": 0
  },
  "ajouterUnLieux_rectangle283": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "white",
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
    "height": height - 337,
    "left": 0,
    "top": 160,
    "right": 0,
  }
})
