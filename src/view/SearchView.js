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
  PanResponder,
  } from 'react-native';
import { Container, Header, Content, Thumbnail, Left, Body, Right } from 'native-base';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Value from './indexValue/Value'
import PTRView from 'react-native-pull-to-refresh';
import { material, iOSUIKit } from 'react-native-typography';
import { SearchBar } from 'react-native-elements';
import CardAccueil from './CardAccueil.js'
import SegmentedControlTab from "react-native-segmented-control-tab";
import * as Font from 'expo-font';
import { AppLoading, Svg } from 'expo';


class SearchView extends React.Component {
  constructor(props) {
    super(props)
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
     dataLoaded: false
   };
  }


  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: (
      <Text style={{fontFamily: "roboto-bold",fontSize: 20, color: "black"}}>GeoAir</Text>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => alert('Vous avez cliqué sur le menu')} style={{marginRight: 15}}>
        <Image source={require("../../assets/icon_setting.png")} style={{width: 12, height: 17, opacity:1,}} />
      </TouchableOpacity>
    ),
    headerStyle: {
      borderBottomWidth: 0,
    },
  })

  fetchFonts() {
    return Font.loadAsync({
    'roboto-bold': require('../../assets/Roboto-Bold.ttf'),
    'roboto-italic': require('../../assets/Roboto-Italic.ttf'),
    'roboto-regular': require('../../assets/Roboto-Regular.ttf')
    });
  };

  _handleIndexChange = index => {
    this.setState({search: ''})
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };


  _updateSearch = search => {
    this.setState({ timeout: clearTimeout(this.state.timeout)})
    this.setState({ search: search});
    this.setState({ timeout: setTimeout(() => {
        this._searchByCity(this.state.search)
      },2000)
    })
  };

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
      if(this.state.charged){
        if(this.state.error == false){
          return (
          <SafeAreaView style={{flex: 1, justifyContent: "space-around"}} forceInset={{ bottom: 'never' }}>
            <View style={{flex: 6, height: 60, borderWidth: 0, borderColor: "white", alignContent: 'center', justifyContent: 'center'}}>
              <SearchBar
                searchIcon={() => <Image source={require("../../assets/icon_search.png")} style={{width: 20, height: 23, opacity:1, right: 35, position: "absolute"}} />}
                onChangeText={this._updateSearch}
                value={this.state.search}
                inputStyle={{backgroundColor: 'white', borderWidth: 0, fontFamily: "roboto-bold",fontSize: 25, color: "black"}}
                containerStyle={{backgroundColor: 'white', borderWidth: 0,borderBottomColor: 'transparent',borderTopColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: 'white', borderWidth: 0}}
              />
            </View>
            <View style={{flex: 16, paddingTop: 30, marginRight: "9.33%", marginLeft: "9.4%"}}>
              <FlatList
                style={{flex:1}}
                data={this.state.listSearch}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CardAccueil aqi={item.aqi} color={this.state.color} temp={item.temperature} tr={item.temperatureFeel} ville={item.ville} pays={item.country}/>}
                initialNumToRender={10}
              />
            </View>
          </SafeAreaView>
          );
        }else{
          return (
          <SafeAreaView style={{flex: 1}} forceInset={{ bottom: 'never' }}>
            <View style={{flex: 6, height: 60, borderWidth: 0, borderColor: "white", alignContent: 'center', justifyContent: 'center'}}>
              <SearchBar
                searchIcon={() => <Image source={require("../../assets/icon_search.png")} style={{width: 20, height: 23, opacity:1, right: 35, position: "absolute"}} />}
                onChangeText={this._updateSearch}
                value={this.state.search}
                inputStyle={{backgroundColor: 'white', borderWidth: 0, fontFamily: "roboto-bold",fontSize: 25, color: "black"}}
                containerStyle={{backgroundColor: 'white', borderWidth: 0,borderBottomColor: 'transparent',borderTopColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: 'white', borderWidth: 0}}
              />
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
            <View style={{flex: 6, height: 60, borderWidth: 0, borderColor: "white", alignContent: 'center', justifyContent: 'center'}}>
              <SearchBar
                searchIcon={() => <Image source={require("../../assets/icon_search.png")} style={{width: 20, height: 23, opacity:1}} />}
                onChangeText={this._updateSearch}
                value={this.state.search}
                inputStyle={{backgroundColor: 'white', borderWidth: 0, fontFamily: "roboto-bold",fontSize: 25, color: "black"}}
                containerStyle={{backgroundColor: 'white', borderWidth: 0, borderBottomColor: 'transparent',borderTopColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: 'white', borderWidth: 0}}
              />
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
