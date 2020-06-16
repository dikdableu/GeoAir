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
import CardForecast from './CardForecast'

class ForecastView extends React.Component {

   state = {
    search: '',
    listSearch: [],
    responseApi:{},
    loading:false,
    charged: false
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
    this._apiForecast(this.state.location.coords.latitude,this.state.location.coords.longitude)

  };

  _apiForecast = (lat, long) => {
    this.setState({loading: true, charged: false, listSearch: {}})
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ long +'&APPID=505c84426a182da1a7178151dccdb616', {
      method: 'GET'})
    .then((response) => response.json())
    .then((resultat) => {
      this.setState({responseApi: resultat})
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
          <Text>Météo à 5 jours</Text>
            <FlatList
              style={{flex:1}}
              data={this.state.listSearch}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <TouchableOpacity onPress={() => {}}><CardForecast temperature={item.temperature} ville={item.ville}/></TouchableOpacity>}
              initialNumToRender={10}
            />
          </SafeAreaView>
      );
      }else {
        return(
          <SafeAreaView style={{flex: 1}}>

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

export default ForecastView;
