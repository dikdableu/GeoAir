import React from 'react';
import { AppRegistry,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
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
import CardAccueil from "./CardAccueil.js"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SafeAreaView from 'react-native-safe-area-view';


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
      this._apiAir(this.props.navigation.state.params.api.coord.lat,this.props.navigation.state.params.api.coord.lon)
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
          this.setState({responseApiMeteo: responseJsonWeather})
          this._iconMeteo()
          this.setState({loading: false, refreshing: false})
          return responseJsonWeather
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
      this.setState({color: "#28D3B0"})
    }
    if (this.state.responseApiAir.data.aqi >= 51 && this.state.responseApiAir.data.aqi <= 150){
      this.setState({color: "#FFBB00"})
    }
    if (this.state.responseApiAir.data.aqi >= 151){
      this.setState({color: "#FF5656"})
    }
  }

  render() {
    if(this.state.loading){
      return (
      <View style={styles.container}>
        <ActivityIndicator style={{flex:1, alignItems: "center", justifyContent: "center", backgroundColor: "white" }} size="large" color="#0000ff" />
      </View>
    );
    }else{
      if(typeof this.props.navigation.state.params == "undefined"){
        return (
          <SafeAreaView style={{flex: 1, marginLeft: "9.06%", marginRight: "9.06%"}} forceInset={{ bottom: 'never' }}>
              <ScrollView style={{flex: 1}}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => {this._getLocationAsync()}}
                />
               }
              >
              <CardAccueil ville={this.state.responseApiMeteo.name} pays={this.state.responseApiMeteo.sys.country} color={this.state.color} temp={(this.state.responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"} tr={(this.state.responseApiMeteo.main.feels_like - 273.15).toFixed(1) + "°C"}  aqi={this.state.responseApiAir.data.aqi}/>
            </ScrollView>
          </SafeAreaView>
        );
      }else{
        return (
          <SafeAreaView style={{flex: 1, marginLeft: "9.06%", marginRight: "9.06%"}} forceInset={{ bottom: 'never' }}>
            <StatusBar barStyle={'dark-content'}/>
            <ScrollView style={{flex: 1}}>
              <CardAccueil ville={this.state.responseApiMeteo.name} pays={this.state.responseApiMeteo.sys.country} color={this.state.color} temp={(this.state.responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"} tr={(this.state.responseApiMeteo.main.feels_like - 273.15).toFixed(1) + "°C"}  aqi={this.state.responseApiAir.data.aqi}/>
            </ScrollView>
          </SafeAreaView>
        );
      }
    }
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeView;
