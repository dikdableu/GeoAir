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
import SegmentedControlTab from "react-native-segmented-control-tab";

class SearchView extends React.Component {
  
   state = {
    search: '',
    listSearch: [],
    responseApiAir:{},
    responseApiMeteo: {},
    loading:false,
    charged: false,
    selectedIndex: 0,
    place: [0,0,0,0,0,0,0,0,0,0],
    error:false
  };

  _handleIndexChange = index => {
    this.setState({search: ''})
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  _search = search => {
    switch (this.state.selectedIndex) {
      case 0:
        this._searchByCity(this.state.search)
        break;

      case 1:
        this._searchByZipCode(this.state.search)
        break;

      default:
        this._searchByCity(this.state.search)
        break;
    }
  }
  
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
  
  _searchByCity = (city) => {
    this.setState({loading: true, charged: false, listSearch: {}})
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
          aqi: this.state.responseApiAir.data.aqi,
          temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
          ville: resultat.name + " , " + resultat.sys.country
        })
        this.setState({listSearch: data})
        this.setState({charged: true})
        this.setState({loading: false})
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
  
  _searchByZipCode = (zip) => {
    this.setState({loading: true, charged: false, listSearch: {}})
    fetch('https://api.openweathermap.org/data/2.5/weather?zip'+zip+'&APPID=505c84426a182da1a7178151dccdb616', {
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
          aqi: this.state.responseApiAir.data.aqi,
          temperature: (resultat.main.temp - 273.15).toFixed(1) + "°C",
          ville: resultat.name + " , " + resultat.sys.country,
          icon: 'http://openweathermap.org/img/wn/'+  +'@2x.png'
        })
        this.setState({listSearch: data})
        this.setState({charged: true})
        this.setState({loading: false})
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
  
  render() {
      const platform = Platform.OS
      if(this.state.charged){
        if(this.state.error == false){
          return (
          <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <SearchBar
                round
                lightTheme
                platform={platform}
                searchIcon={{ size: 24 }}
                placeholder='Ville,Pays ou CodePostal,Pays'
                onChangeText={this._updateSearch}
                value={this.state.search}
              />
            </View>
            <View style={{flex:2, justifyContent: 'space-around', paddingTop: 8, paddingLeft: 2, paddingRight: 2}}>
              <SegmentedControlTab
                values={['Ville', 'CodePostale']}
                selectedIndex={this.state.selectedIndex}
                tabsContainerStyle={{flex:1, borderColor: "#7E7E7E", marginLeft:2, marginRight:2}}
                borderRadius={25}
                tabStyle={{borderColor: "#AEAEAE",}}
                activeTabStyle={{borderColor: "#7E7E7E", backgroundColor: "none",borderWidth:2}}
                activeTabTextStyle={{color: "#7E7E7E",fontWeight: 'bold',}}
                tabTextStyle={{color: "#AEAEAE"}}
                onTabPress={this._handleIndexChange}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Button onPress={() => this._search()} title="Envoyer"></Button>
            </View>
            <View style={{flex: 16, paddingTop: 8}}>
              <FlatList
                style={{flex:1}}
                data={this.state.listSearch}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home', { api: this.state.responseApiMeteo})}}><CardSearch aqi={item.aqi} color={this.state.color} temperature={item.temperature} ville={item.ville}/></TouchableOpacity>}
                initialNumToRender={10}
              />
            </View>
          </SafeAreaView>
          );
        }else{
          return (
          <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <SearchBar
                round
                lightTheme
                platform={platform}
                searchIcon={{ size: 24 }}
                placeholder='Ville,Pays ou CodePostal,Pays'
                onChangeText={this._updateSearch}
                value={this.state.search}
              />
            </View>
            <View style={{flex:2, justifyContent: 'space-around', paddingTop: 8, paddingLeft: 2, paddingRight: 2}}>
              <SegmentedControlTab
                values={['Ville', 'CodePostale']}
                selectedIndex={this.state.selectedIndex}
                tabsContainerStyle={{flex:1, borderColor: "#7E7E7E", marginLeft:2, marginRight:2}}
                borderRadius={25}
                tabStyle={{borderColor: "#AEAEAE",}}
                activeTabStyle={{borderColor: "#7E7E7E", backgroundColor: "none",borderWidth:2}}
                activeTabTextStyle={{color: "#7E7E7E",fontWeight: 'bold',}}
                tabTextStyle={{color: "#AEAEAE"}}
                onTabPress={this._handleIndexChange}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Button onPress={() => this._search()} title="Envoyer"></Button>
            </View>
            <View style={{flex:16, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50}}>
              <Text style={{color: '#BCBCBC', fontSize: 22}}>Aucun résultat</Text>
            </View>
          </SafeAreaView>
          );
        }
        
      }else {
        return(
          <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <SearchBar
                round
                lightTheme
                platform={platform}
                searchIcon={{ size: 24 }}
                placeholder='Ville,Pays ou CodePostal,Pays'
                onChangeText={this._updateSearch}
                value={this.state.search}
              />
            </View>
            <View style={{flex:2, justifyContent: 'space-around', paddingTop: 8, paddingLeft: 2, paddingRight: 2}}>
              <SegmentedControlTab
                values={['Ville', 'CodePostale']}
                selectedIndex={this.state.selectedIndex}
                tabsContainerStyle={{flex:1, borderColor: "#7E7E7E", marginLeft:2, marginRight:2}}
                borderRadius={25}
                tabStyle={{borderColor: "#AEAEAE",}}
                activeTabStyle={{borderColor: "#7E7E7E", backgroundColor: "none",borderWidth:2}}
                activeTabTextStyle={{color: "#7E7E7E",fontWeight: 'bold',}}
                tabTextStyle={{color: "#AEAEAE"}}
                onTabPress={this._handleIndexChange}
              />
            </View>
             <View style={{flex: 2, justifyContent: 'center'}}>
              <Button onPress={() => this._search()} title="Envoyer"></Button>
            </View>
            <View style={{flex: 16, paddingTop: 8}}>
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
