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
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Timestamp from 'react-timestamp';

class CardMeteo extends React.Component {
  render() {
    const sun = new Date(this.props.sun*1000)
    const moon = new Date(this.props.moon*1000)
    return (
        <View style={{flex:1, margin: 15, flexDirection: "column", padding: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 6, }, shadowOpacity: 0.39, shadowRadius: 8.30, elevation: 13, backgroundColor: "#fff"}}>
            <View style={{flex:1, flexDirection: "column"}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 25}}>Météo</Text>
                </View>
                <View style={{flex:4, alignItems: "center"}}>
                    <Text style={{fontSize: 40}}>{this.props.temperature}</Text>
                    <Text style={{color: "#777777"}}>{this.props.ville}</Text>
                </View>
            </View>
            <View style={{flex:1, marginTop: 30, flexDirection: "column"}}>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-around', alignItems: "center", height: 40}}><View ><Text><FontAwesome5 name={'sun'} color="#F5AE14" solid />{" " + sun.toLocaleTimeString()}</Text></View><View><Text><FontAwesome5 name={'moon'} color="#001DAF" solid />{" " + moon.toLocaleTimeString()}</Text></View></View>
            </View>
            <View style={{flex:1, marginTop: 30, flexDirection: "column"}}>
              <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1, marginBottom: 20}}></View>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-around', alignItems: "center", height: 40}}><View ><Image source={{uri: this.props.condition.icon}} style={{width:60, height: 60}}/></View><View><Text>{this.props.condition.description}</Text></View></View>
              <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1, marginTop: 20}}></View>
            </View>
            <View style={{flex:4, marginTop: 30, flexDirection: "column"}}>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View ><Text><Icon name="md-water" size={16} color="#1C9DFC" /> Humidité </Text></View><View><Text>{this.props.h + "%"}</Text></View></View>
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><Icon name="md-speedometer" size={16} color="#737373" /> Pression </Text></View><View><Text>{this.props.p}</Text></View></View>  
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'wind'} color="#64D2FF" brand /> Vitesse du vent </Text></View><View><Text>{this.props.wind}</Text></View></View>  
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'eye'} brand /> Visibilité </Text></View><View><Text>{this.props.visibility}</Text></View></View>  
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'thermometer-empty'} color="#4DD61E" brand /> Température renssentie </Text></View><View><Text>{this.props.tr}</Text></View></View>
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'thermometer-quarter'} color="#2A77FF" brand /> Température minimale </Text></View><View><Text>{this.props.tmin}</Text></View></View>
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'thermometer-full'} color="#F14537" brand /> Température maximale </Text></View><View><Text>{this.props.tmax}</Text></View></View>
            </View>
        </View>
    );
  }
};




const styles = StyleSheet.create({
  
});

export default CardMeteo;