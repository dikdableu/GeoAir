import React from 'react';
import { AppRegistry,
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  } from 'react-native';
import { Container, Header, Content, Thumbnail, Left, Body, Right } from 'native-base';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Value from './indexValue/Value'
import PTRView from 'react-native-pull-to-refresh';
import { material, iOSUIKit } from 'react-native-typography';
import { SearchBar } from 'react-native-elements';
import CardSearch from './CardSearch.js'

class SearchView extends React.Component {
  
   state = {
    search: '',
    listSearch: [],
    responseApiAir:{},
    responseApiMeteo: {},
    loading:false,
    charged: false
  };

  
  _updateSearch = search => {
    this.setState({ search: search});
  };
  
  _colorIndex = () => {
    if (this.state.responseApiAir.data.aqi >= 0 && this.state.responseApiAir.data.aqi <= 50){
      this.setState({color: "#3DB82C"})
    }
    if (this.state.responseApiAir.data.aqi >= 51 && this.state.responseApiAir.data.aqi <= 100){
      this.setState({color: "#E3D71B"})
    }
    if (this.state.responseApiAir.data.aqi >= 101 && this.state.responseApiAir.data.aqi <= 150){
      this.setState({color: "#ECA100"})
    }
    if (this.state.responseApiAir.data.aqi >= 151 && this.state.responseApiAir.data.aqi <= 200){
      this.setState({color: "#F94B1C"})
    }
    if (this.state.responseApiAir.data.aqi >= 201 && this.state.responseApiAir.data.aqi <= 299){
      this.setState({color: "#8900E8"})
    }
    if (this.state.responseApiAir.data.aqi >= 300){
      this.setState({color: "#7A0000"})
    }
  }
  
  _searchCity = () => {
    this.setState({loading: true, charged: false, listSearch: {}})
    fetch('https://api.opencagedata.com/geocode/v1/json?q=' + this.state.search + '&key=d8f6685116b54a1dbbdf405b9bc0243b', {
      method: 'GET'})
    .then((response) => response.json())
    .then((resultat) => {
      var id = 0
      var data = []
      resultat.results.forEach((element) => {
        fetch('https://api.waqi.info/feed/geo:'+element.geometry.lat+';'+element.geometry.lng+'/?token=85ab63dee549b4825ea4e18973ba6076cbaf3dd4', { method: 'GET'})
        .then((responsewaqi) => responsewaqi.json())
        .then((responseJsonWaqi) => {
          this.setState({responseApiAir: responseJsonWaqi});
          fetch('https://api.openweathermap.org/data/2.5/weather?lat='+element.geometry.lat+'&lon='+element.geometry.lng+'4&APPID=505c84426a182da1a7178151dccdb616', {
          method: 'GET'})
          .then((responseWeather) => responseWeather.json())
          .then((responseJsonWeather) => {
            this._colorIndex();
            this.setState({responseApiMeteo: responseJsonWeather})
            this.setState({loading: false})
            data.push({
              id: id++,
              aqi: this.state.responseApiAir.data.aqi,
              temperature: (this.state.responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C",
              ville: this.state.responseApiMeteo.name + " , " + this.state.responseApiMeteo.sys.country
            })
            this.setState({listSearch: data})
            this.setState({charged: true})
            this.setState({loading: false})
            return responseJsonWeather
          })
          return responseJsonWaqi;
        })
      })
      return resultat
    })
    .catch( error => {
      console.error(error);
    });
  }
  
  render() {
      const platform = Platform.OS
      if(this.state.charged){
        return (
          <SafeAreaView style={{flex: 1}}>
            <View>
              <SearchBar
                round
                lightTheme
                platform={platform}
                searchIcon={{ size: 24 }}
                placeholder="Adresse, Code postale, Ville"
                onChangeText={this._updateSearch}
                value={this.state.search}
              />
              <Button onPress={() => this._searchCity()} title="Envoyer"></Button>
            </View>
              <FlatList
                style={{flex:1}}
                data={this.state.listSearch}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <TouchableOpacity onPress={() => {}}><CardSearch aqi={item.aqi} color={this.state.color} temperature={item.temperature} ville={item.ville}/></TouchableOpacity>}
                initialNumToRender={10}
              />
          </SafeAreaView>
      );
      }else {
        return(
          <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1}}>
              <SearchBar
                round
                lightTheme
                platform={platform}
                searchIcon={{ size: 24 }}
                placeholder="Adresse, Code postale, Ville"
                onChangeText={this._updateSearch}
                value={this.state.search}
                style={{flex:8}}
              />
              <Button onPress={() => this._searchCity()} title="Envoyer"></Button>
            </View>
          </SafeAreaView>
        )
      }
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SearchView;
