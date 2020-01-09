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
import CardMeteo from "./CardMeteo.js"
import CardAir from "./CardAir.js"



const conditionWeather = [
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

class HomeView extends React.Component {
  
   state = {
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
  };

   
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
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
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'4&APPID=505c84426a182da1a7178151dccdb616', {
      method: 'GET'})
      .then((responseWeather) => responseWeather.json())
      .then((responseJsonWeather) => {
        this.setState({responseApiMeteo: responseJsonWeather})
        this._iconMeteo()
        this.setState({loading: false, refreshing: false})
        return responseJsonWeather
      })
      return responseJsonWaqi;
    })
    .catch( error => {
      console.error(error);
    });
  }
  
  _iconMeteo = () => {
    conditionWeather.forEach( value => {
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
    
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 0 && this.state.responseApiAir.data.iaqi.pm10.v <= 50){
      this.setState({colorPm10: "#3DB82C"})
    }
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 51 && this.state.responseApiAir.data.iaqi.pm10.v <= 100){
      this.setState({colorPm10: "#E3D71B"})
    }
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 101 && this.state.responseApiAir.data.iaqi.pm10.v <= 150){
      this.setState({colorPm10: "#ECA100"})
    }
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 151 && this.state.responseApiAir.data.iaqi.pm10.v <= 200){
      this.setState({colorPm10: "#F94B1C"})
    }
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 201 && this.state.responseApiAir.data.iaqi.pm10.v <= 299){
      this.setState({colorPm10: "#8900E8"})
    }
    if (this.state.responseApiAir.data.iaqi.pm10.v >= 300){
      this.setState({colorPm10: "#7A0000"})
    }
    
    if (this.state.responseApiAir.data.iaqi.o3.v >= 0 && this.state.responseApiAir.data.iaqi.o3.v <= 50){
      this.setState({colorO3: "#3DB82C"})
    }
    if (this.state.responseApiAir.data.iaqi.o3.v >= 51 && this.state.responseApiAir.data.iaqi.o3.v <= 100){
      this.setState({colorO3: "#E3D71B"})
    }
    if (this.state.responseApiAir.data.iaqi.o3.v >= 101 && this.state.responseApiAir.data.iaqi.o3.v <= 150){
      this.setState({colorO3: "#ECA100"})
    }
    if (this.state.responseApiAir.data.iaqi.o3.v >= 151 && this.state.responseApiAir.data.iaqi.o3.v <= 200){
      this.setState({colorO3: "#F94B1C"})
    }
    if (this.state.responseApiAir.data.iaqi.o3.v >= 201 && this.state.responseApiAir.data.iaqi.o3.v <= 299){
      this.setState({colorO3: "#8900E8"})
    }
    if (this.state.responseApiAir.data.iaqi.o3.v >= 300){
      this.setState({colorO3: "#7A0000"})
    }
    
    if (this.state.responseApiAir.data.iaqi.no2.v >= 0 && this.state.responseApiAir.data.iaqi.no2.v <= 50){
      this.setState({colorNo2: "#3DB82C"})
    }
    if (this.state.responseApiAir.data.iaqi.no2.v >= 51 && this.state.responseApiAir.data.iaqi.no2.v <= 100){
      this.setState({colorNo2: "#E3D71B"})
    }
    if (this.state.responseApiAir.data.iaqi.no2.v >= 101 && this.state.responseApiAir.data.iaqi.no2.v <= 150){
      this.setState({colorNo2: "#ECA100"})
    }
    if (this.state.responseApiAir.data.iaqi.no2.v >= 151 && this.state.responseApiAir.data.iaqi.no2.v <= 200){
      this.setState({colorNo2: "#F94B1C"})
    }
    if (this.state.responseApiAir.data.iaqi.no2.v >= 201 && this.state.responseApiAir.data.iaqi.no2.v <= 299){
      this.setState({colorNo2: "#8900E8"})
    }
    if (this.state.responseApiAir.data.iaqi.no2.v >= 300){
      this.setState({colorNo2: "#7A0000"})
    }
  }
  
  render() {
    if(this.state.loading){
      return (
      <View style={styles.container}>
        <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center"}} size="large" color="#0000ff" />
      </View>
    );
    }else{
      return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {this._getLocationAsync()}}
              />
             }
            >
            <CardMeteo ville={this.state.responseApiMeteo.name + " , " + this.state.responseApiMeteo.sys.country} color={this.state.color} temperature={(this.state.responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"} p={this.state.responseApiMeteo.main.pressure + " hPa"} tr={(this.state.responseApiMeteo.main.feels_like - 273.15).toFixed(1) + "°C"} tmin={(this.state.responseApiMeteo.main.temp_min - 273.15).toFixed(1) + "°C"} tmax={(this.state.responseApiMeteo.main.temp_max - 273.15).toFixed(1) + "°C"} h={this.state.responseApiMeteo.main.humidity} wind={this.state.responseApiMeteo.wind.speed + "  m/s"} visibility={this.state.responseApiMeteo.visibility + " m"} sun={this.state.responseApiMeteo.sys.sunrise} moon={this.state.responseApiMeteo.sys.sunset} condition={this.state.condition}
            />
            <CardAir aqi={this.state.responseApiAir.data.aqi} color={this.state.color} value={this.state.responseApiAir.data.aqi} ville={this.state.responseApiAir.data.city.name} dom={this.state.responseApiAir.data.dominentpol} pm10={this.state.responseApiAir.data.iaqi.pm10.v} o3={this.state.responseApiAir.data.iaqi.o3.v} no2={this.state.responseApiAir.data.iaqi.no2.v} colorPm10={this.state.colorPm10} colorO3={this.state.colorO3} colorNo2={this.state.colorNo2}
            />
          </ScrollView>
      </SafeAreaView>
    );
    }
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeView;
