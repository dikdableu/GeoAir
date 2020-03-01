import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
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

class SearchView extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        search: '',
        listSearch: [],
        responseApiAir:{},
        responseApiMeteo: {},
        loading:false,
        charged: false,
        selectedIndex: 0,
        place: [0,0,0,0,0,0,0,0,0,0],
        error:false,
        timeout: null,
        dataLoaded: false,
        vide: true
      };

      this.fetchFonts()
  }


    _updateSearch = search => {
      this.setState({ search: search});
    }

    _colorIndex = () => {
      if (this.state.responseApiAir.data.aqi >= 0 && this.state.responseApiAir.data.aqi <= 50){
        this.setState({color: "#28D3B0"})
      }
      if (this.state.responseApiAir.data.aqi >= 51 && this.state.responseApiAir.data.aqi <= 150){
        this.setState({color: "#FFBB00"})
      }
      if (this.state.responseApiAir.data.aqi >= 151){
        this.setState({color: "#FF5656"})
      }
    }

    _searchByCity = (city) => {
      console.log(city)
      this.setState({loading: true, charged: false, vide: false, listSearch: {}})
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
          this.setState({responseApiAir: responseJsonWaqi});
          this._colorIndex();
          this.setState({responseApiMeteo: resultat})
          data.push({
            id: id++,
            country: resultat.sys.country,
            aqi: this.state.responseApiAir.data.aqi,
            temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
            temperatureFeel: (resultat.main.feels_like - 273.15).toFixed(1) + "°C",
            idMeteo: 200,
            ville: resultat.name
          })
          this.setState({listSearch: data})
          this.setState({charged: true})
          this.setState({loading: false})
          this.setState({error: false})
          return responseJsonWaqi;
          })
        }else {
          this.setState({charged: true,error: true})
        }
        return resultat
      })
      .catch( error => {
        console.error(error);
      });
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
      const platform = Platform.OS

        if(!this.state.vide && this.state.charged){
          if(this.state.error == false){
            return (
              <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
                  <TextInput keyboardType={'web-search'} id={'searchbar'} onChangeText={this._updateSearch} onSubmitEditing={() => this._searchByCity(this.state.search)} value={this.state.search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" style={styles.ajouterUnLieux_versa}/>
                  <Svg ref={"#searchbar"}data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
                  <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
                  <FlatList
                  bounces={false}
                    style={{top: 120}}
                    data={this.state.listSearch}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <City aqi={item.aqi} color={this.state.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country}/>}
                    initialNumToRender={10}
                  />
              </SafeAreaView>
            );
          }else{
            return (
              <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
              <TextInput keyboardType={'web-search'} id={'searchbar'} onChangeText={this._updateSearch} onSubmitEditing={() => this._searchByCity(this.state.search)} value={this.state.search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" style={styles.ajouterUnLieux_versa}/>
              <Svg ref={"#searchbar"} data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
              <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>
              <Text style={{color: '#BCBCBC', fontSize: 22, "width": 375,height: 131,left: '32%',top: 299}}>Aucun résultat</Text>
              </SafeAreaView>
            );
          }

        }else {
          return(
            <SafeAreaView data-layer="6dda1349-d279-47db-9d4c-e405c98361fa" style={styles.ajouterUnLieux}>
            <TextInput keyboardType={'web-search'} id={'searchbar'} autoFocus={true} onChangeText={this._updateSearch} onSubmitEditing={() => this._searchByCity(this.state.search)} value={this.state.search} data-layer="c8b80b3c-3337-47ae-ab3c-1dc6768f0807" placeholder={'Ville'}  style={styles.ajouterUnLieux_versa}/>
            <Svg ref={"#searchbar"} data-layer="1b6ce4e2-792b-46f8-8393-3cbcf340d2e7" style={styles.ajouterUnLieux_iconsearch} preserveAspectRatio="none" viewBox="-6682.8046875 1028.25 21.16064453125 24.499755859375" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6665.22265625 1051.338989257812 L -6668.296875 1047.379638671875 C -6668.78955078125 1046.677001953125 -6668.61865234375 1045.7060546875 -6667.91455078125 1045.213012695312 C -6667.2119140625 1044.719970703125 -6666.2421875 1044.890991210938 -6665.74951171875 1045.593627929688 L -6662.67529296875 1049.55126953125 C -6662.1826171875 1050.255615234375 -6662.353515625 1051.224975585938 -6663.0576171875 1051.718017578125 C -6663.32763671875 1051.9091796875 -6663.6396484375 1051.999755859375 -6663.9482421875 1051.999755859375 C -6664.43798828125 1051.999755859375 -6664.9208984375 1051.77001953125 -6665.22265625 1051.338989257812 Z M -6682.0546875 1037.18359375 C -6682.0546875 1032.6708984375 -6678.2626953125 1029 -6673.6044921875 1029 C -6668.94384765625 1029 -6665.15234375 1032.6708984375 -6665.15234375 1037.18359375 C -6665.15234375 1041.694702148438 -6668.94384765625 1045.365600585938 -6673.6044921875 1045.365600585938 C -6678.2626953125 1045.365600585938 -6682.0546875 1041.694702148438 -6682.0546875 1037.18359375 Z M -6678.84326171875 1037.18359375 C -6678.84326171875 1039.980834960938 -6676.4921875 1042.256469726562 -6673.6044921875 1042.256469726562 C -6670.71484375 1042.256469726562 -6668.36376953125 1039.980834960938 -6668.36376953125 1037.18359375 C -6668.36376953125 1034.386474609375 -6670.71484375 1032.11083984375 -6673.6044921875 1032.11083984375 C -6676.4921875 1032.11083984375 -6678.84326171875 1034.386474609375 -6678.84326171875 1037.18359375 Z"  /></Svg>
            <Svg data-layer="81b3ea8b-6811-47dc-bdd0-dea2bf5e0179" style={styles.ajouterUnLieux_iconlocalisation} preserveAspectRatio="none" viewBox="-6414.75048828125 1233.250732421875 29.9033203125 29.901611328125" fill="rgba(31, 33, 40, 1)"><SvgPath d="M -6401.4462890625 1260.881103515625 L -6401.4462890625 1259.139404296875 C -6401.4462890625 1258.299194335938 -6400.765625 1257.61669921875 -6399.92529296875 1257.61669921875 C -6399.0849609375 1257.61669921875 -6398.404296875 1258.299194335938 -6398.404296875 1259.139404296875 L -6398.404296875 1260.881103515625 C -6398.404296875 1261.7197265625 -6399.0849609375 1262.40234375 -6399.92529296875 1262.40234375 C -6400.765625 1262.40234375 -6401.4462890625 1261.7197265625 -6401.4462890625 1260.881103515625 Z M -6407.3798828125 1248.21923828125 C -6407.3798828125 1244.109619140625 -6404.03662109375 1240.766235351562 -6399.9267578125 1240.766235351562 C -6395.8173828125 1240.766235351562 -6392.47412109375 1244.109619140625 -6392.47412109375 1248.21923828125 C -6392.47412109375 1252.3271484375 -6395.8173828125 1255.670532226562 -6399.9267578125 1255.670532226562 C -6404.03662109375 1255.670532226562 -6407.3798828125 1252.3271484375 -6407.3798828125 1248.21923828125 Z M -6404.3359375 1248.21923828125 C -6404.3359375 1250.64990234375 -6402.359375 1252.628173828125 -6399.9267578125 1252.628173828125 C -6397.49609375 1252.628173828125 -6395.51611328125 1250.64990234375 -6395.51611328125 1248.21923828125 C -6395.51611328125 1245.78857421875 -6397.49609375 1243.810180664062 -6399.9267578125 1243.810180664062 C -6402.359375 1243.810180664062 -6404.3359375 1245.78857421875 -6404.3359375 1248.21923828125 Z M -6388.92626953125 1249.72265625 C -6389.7666015625 1249.72265625 -6390.447265625 1249.041748046875 -6390.447265625 1248.201538085938 C -6390.447265625 1247.361206054688 -6389.7666015625 1246.680297851562 -6388.92626953125 1246.680297851562 L -6387.1201171875 1246.680297851562 C -6386.27978515625 1246.680297851562 -6385.59716796875 1247.361206054688 -6385.59716796875 1248.201538085938 C -6385.59716796875 1249.041748046875 -6386.27978515625 1249.72265625 -6387.1201171875 1249.72265625 L -6388.92626953125 1249.72265625 Z M -6412.4775390625 1249.72265625 C -6413.31787109375 1249.72265625 -6414.00048828125 1249.041748046875 -6414.00048828125 1248.201538085938 C -6414.00048828125 1247.361206054688 -6413.31787109375 1246.680297851562 -6412.4775390625 1246.680297851562 L -6410.671875 1246.680297851562 C -6409.83154296875 1246.680297851562 -6409.150390625 1247.361206054688 -6409.150390625 1248.201538085938 C -6409.150390625 1249.041748046875 -6409.83154296875 1249.72265625 -6410.671875 1249.72265625 L -6412.4775390625 1249.72265625 Z M -6401.4462890625 1237.263549804688 L -6401.4462890625 1235.521850585938 C -6401.4462890625 1234.680053710938 -6400.765625 1234.000732421875 -6399.92529296875 1234.000732421875 C -6399.0849609375 1234.000732421875 -6398.404296875 1234.680053710938 -6398.404296875 1235.521850585938 L -6398.404296875 1237.263549804688 C -6398.404296875 1238.102172851562 -6399.0849609375 1238.784790039062 -6399.92529296875 1238.784790039062 C -6400.765625 1238.784790039062 -6401.4462890625 1238.102172851562 -6401.4462890625 1237.263549804688 Z"  /></Svg>

            </SafeAreaView>
          )
        }

    }
}


SearchView.propTypes = {

}

SearchView.defaultProps = {

}


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
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "ajouterUnLieux_versa": {
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
    "width": 200,
    "height": 33,
    "left": 34,
    "top": 50
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
    "top": 100
  },
  "ajouterUnLieux_iconsearch": {
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
    "left": 267.05,
    "top": 50
  },
  "ajouterUnLieux_iconlocalisation": {
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
    "left": 310.6,
    "top": 46
  },
  "ajouterUnLieux_geoair": {
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
    "left": 153.6,
    "top": 61
  },
  "ajouterUnLieux_iconsetting": {
    "opacity": 1,
    "width": 12,
    "height": 17,
  },
  "ajouterUnLieux_iconarrow": {
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
    "width": 9.36,
    "height": 15.73,
    "left": 34,
    "top": 61
  },
  "ajouterUnLieux_city87ab4d87": {
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
    "left": 34,
    "top": 299
  },
  "ajouterUnLieux_city87ab4d87_versailles537328fa": {
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
    "width": 147,
    "height": 24,
    "left": 0,
    "top": 1
  },
  "ajouterUnLieux_city87ab4d87_yvelinesFrancefe9d0345": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 147,
    "height": 17,
    "left": 0,
    "top": 27
  },
  "ajouterUnLieux_city87ab4d87_x10c7ac3a258": {
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
    "width": 33,
    "height": 23,
    "left": 201,
    "top": 0
  },
  "ajouterUnLieux_city87ab4d87_x7c384e87e2": {
    "opacity": 0.44999998807907104,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
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
    "width": 21,
    "height": 21,
    "left": 201,
    "top": 22
  },
  "ajouterUnLieux_city87ab4d87_airqualityindex1dd5d331": {
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
    "left": 256.97,
    "top": 4.5
  },
  "ajouterUnLieux_city87ab4d87_airqualityindex1dd5d331_rectangle190081c0c2a": {
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
    "borderTopColor": "rgba(40, 211, 176, 1)",
    "borderRightWidth": 1.5,
    "borderRightColor": "rgba(40, 211, 176, 1)",
    "borderBottomWidth": 1.5,
    "borderBottomColor": "rgba(40, 211, 176, 1)",
    "borderLeftWidth": 1.5,
    "borderLeftColor": "rgba(40, 211, 176, 1)",
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "ajouterUnLieux_city87ab4d87_airqualityindex1dd5d331_x12e632df82": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(40, 211, 176, 1)",
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
    "width": 18,
    "height": 21,
    "left": 13.72,
    "top": 6.5
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35,
    "height": 35,
    "left": 158,
    "top": 5
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace940c5eb1ee": {
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
    "width": 19.83,
    "height": 19.72,
    "left": 7.56,
    "top": 7.25
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace95bea81293": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 3.79
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace964b5e61ff": {
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
    "width": 7.57,
    "height": 4.44,
    "left": 28.43,
    "top": 15.28
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace97f59a8880": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 24.56
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace98445d4f2b": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": 28.43
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace995768400b": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 24.56
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace1004336eb89": {
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
    "width": 7.57,
    "height": 4.44,
    "left": -1,
    "top": 15.28
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace1018ca55ba6": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 3.79
  },
  "ajouterUnLieux_city87ab4d87_x01db79f382b_trace10220bf8692": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": -1
  },
  "ajouterUnLieux_citybf64620f": {
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
    "left": 34,
    "top": 377
  },
  "ajouterUnLieux_citybf64620f_versaillesaea55687": {
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
    "width": 147,
    "height": 24,
    "left": 0,
    "top": 1
  },
  "ajouterUnLieux_citybf64620f_yvelinesFranceacac22e5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 147,
    "height": 17,
    "left": 0,
    "top": 27
  },
  "ajouterUnLieux_citybf64620f_x10cb2dcb441": {
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
    "width": 33,
    "height": 23,
    "left": 201,
    "top": 0
  },
  "ajouterUnLieux_citybf64620f_x7c785c6720": {
    "opacity": 0.44999998807907104,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
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
    "width": 21,
    "height": 21,
    "left": 201,
    "top": 22
  },
  "ajouterUnLieux_citybf64620f_airqualityindex1c2bfbf2": {
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
    "left": 256.97,
    "top": 4.5
  },
  "ajouterUnLieux_citybf64620f_airqualityindex1c2bfbf2_rectangle1908b129657": {
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
    "borderTopColor": "rgba(40, 211, 176, 1)",
    "borderRightWidth": 1.5,
    "borderRightColor": "rgba(40, 211, 176, 1)",
    "borderBottomWidth": 1.5,
    "borderBottomColor": "rgba(40, 211, 176, 1)",
    "borderLeftWidth": 1.5,
    "borderLeftColor": "rgba(40, 211, 176, 1)",
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "ajouterUnLieux_citybf64620f_airqualityindex1c2bfbf2_x1266726940": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(40, 211, 176, 1)",
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
    "width": 18,
    "height": 21,
    "left": 13.72,
    "top": 6.5
  },
  "ajouterUnLieux_citybf64620f_x01db8168719": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35,
    "height": 35,
    "left": 158,
    "top": 5
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace940822243e": {
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
    "width": 19.83,
    "height": 19.72,
    "left": 7.56,
    "top": 7.25
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace9599189789": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 3.79
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace96cb6c1f29": {
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
    "width": 7.57,
    "height": 4.44,
    "left": 28.43,
    "top": 15.28
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace97d7008833": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 24.56
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace98ee6c121a": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": 28.43
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace990412b0c0": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 24.56
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace100d83d2120": {
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
    "width": 7.57,
    "height": 4.44,
    "left": -1,
    "top": 15.28
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace101b7296794": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 3.79
  },
  "ajouterUnLieux_citybf64620f_x01db8168719_trace1022b164b87": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": -1
  },
  "ajouterUnLieux_city": {
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
    "left": 34,
    "top": 455
  },
  "ajouterUnLieux_city_versailles": {
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
    "width": 147,
    "height": 24,
    "left": 0,
    "top": 1
  },
  "ajouterUnLieux_city_yvelinesFrance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
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
    "width": 147,
    "height": 17,
    "left": 0,
    "top": 27
  },
  "ajouterUnLieux_city_x10c": {
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
    "width": 33,
    "height": 23,
    "left": 201,
    "top": 0
  },
  "ajouterUnLieux_city_x7c": {
    "opacity": 0.44999998807907104,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
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
    "width": 21,
    "height": 21,
    "left": 201,
    "top": 22
  },
  "ajouterUnLieux_city_airqualityindex": {
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
    "left": 256.97,
    "top": 4.5
  },
  "ajouterUnLieux_city_airqualityindex_rectangle190": {
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
    "borderTopColor": "rgba(40, 211, 176, 1)",
    "borderRightWidth": 1.5,
    "borderRightColor": "rgba(40, 211, 176, 1)",
    "borderBottomWidth": 1.5,
    "borderBottomColor": "rgba(40, 211, 176, 1)",
    "borderLeftWidth": 1.5,
    "borderLeftColor": "rgba(40, 211, 176, 1)",
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "ajouterUnLieux_city_airqualityindex_x12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(40, 211, 176, 1)",
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
    "width": 18,
    "height": 21,
    "left": 13.72,
    "top": 6.5
  },
  "ajouterUnLieux_city_x01d": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35,
    "height": 35,
    "left": 158,
    "top": 5
  },
  "ajouterUnLieux_city_x01d_trace94": {
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
    "width": 19.83,
    "height": 19.72,
    "left": 7.56,
    "top": 7.25
  },
  "ajouterUnLieux_city_x01d_trace95": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 3.79
  },
  "ajouterUnLieux_city_x01d_trace96": {
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
    "width": 7.57,
    "height": 4.44,
    "left": 28.43,
    "top": 15.28
  },
  "ajouterUnLieux_city_x01d_trace97": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 24.56
  },
  "ajouterUnLieux_city_x01d_trace98": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": 28.43
  },
  "ajouterUnLieux_city_x01d_trace99": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 24.56
  },
  "ajouterUnLieux_city_x01d_trace100": {
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
    "width": 7.57,
    "height": 4.44,
    "left": -1,
    "top": 15.28
  },
  "ajouterUnLieux_city_x01d_trace101": {
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
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 3.79
  },
  "ajouterUnLieux_city_x01d_trace102": {
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
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": -1
  }
});

export default SearchView;