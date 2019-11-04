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
import { Container, Header, Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import OneValue from './indexValue/OneValue'
import TwoValue from './indexValue/TwoValue'
import ThreeValue from './indexValue/ThreeValue'
import FourValue from './indexValue/FourValue'
import FiveValue from './indexValue/FiveValue'
import SixValue from './indexValue/SixValue'
import PTRView from 'react-native-pull-to-refresh';
import { material, iOSUIKit } from 'react-native-typography'


class HomeView extends React.Component {
   state = {
    location: null,
    loading: true,
    refreshing: true,
    responseApiAir: {},
    errorMessage: null,
    note: null,
    dominant: '',
    responseApiMeteo: {},
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
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    
   

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    this._apiAir(this.state.location.coords.latitude,this.state.location.coords.longitude)
    
  };

  _getNote = () => {
      var tab = {
        pm10: this.state.responseApiAir.measurements[2].value,
        o3: this.state.responseApiAir.measurements[1].value,
        no2: this.state.responseApiAir.measurements[0].value,
      }
     for(var index in tab){
        if (tab[index] > this.state.note){
          this.setState({note: tab[index]})
          this.setState({dominant: index})       
        }
      } 
    }

  _apiAir = (lat, long) => {
    this.setState({refreshing: true});
    fetch('https://api.openaq.org/v1/latest?coordinates='+lat.toFixed(4)+','+long.toFixed(4)+'&radius=15000', {
      method: 'GET'})
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({responseApiAir: responseJson.results[responseJson.results.length-1]});
      
      this._getNote()
      return responseJson;
    })
    .then(() => fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat.toFixed(4)+'&lon='+long.toFixed(4), {
      method: 'GET'}))
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({responseApiMeteo: responseJson});
      this.setState({loading: false});
      this.setState({refreshing: false});
      this._getNote()
      return responseJson;
    })
    .catch( error => {
      console.error(error);
    });
  }
  
   
  
  render() {
    if(this.state.loading){
      return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
    }else{
      return (
    
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => {this._apiAir(this.state.location.coords.latitude,this.state.location.coords.longitude)}}
          />
         }
        >
        <Card style={{flex:1, marginLeft: '2%', marginRight: '2%'}}>
            
                {(() => {
                  console.log(this.state.note)
                  if (this.state.note >= 0 && this.state.note <= 50){
                    return (
                      <OneValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                  if (this.state.note >= 51 && this.state.note <= 100){
                    return (
                      <TwoValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                  if (this.state.note >= 101 && this.state.note <= 150){
                    return (
                      <ThreeValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                  if (this.state.note >= 151 && this.state.note <= 200){
                    return (
                      <FourValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                  if (this.state.note >= 201 && this.state.note <= 299){
                    return (
                      <FiveValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                  if (this.state.note >= 300){
                    return (
                      <SixValue value={this.state.note} city={this.state.responseApiAir.city} dom={this.state.dominant.toUpperCase()} pm10={this.state.responseApiAir.measurements[2].value} o3={this.state.responseApiAir.measurements[1].value} no2={this.state.responseApiAir.measurements[0].value}/>
                    )
                  }
                })()}
            
            
         </Card>
      </ScrollView>
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
  bon: {
    
  }
});

export default HomeView;
