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

class CardForecast extends React.Component {
  render() {
    return (
        <View style={{flex:1, margin: 15, flexDirection: "column", padding: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 6, }, shadowOpacity: 0.39, shadowRadius: 8.30, elevation: 13, backgroundColor: "#fff"}}>
            <View style={{flex:1, flexDirection: "column"}}>
                <View style={{flex:4, alignItems: "center"}}>
                  <Image source={{uri: this.props.condition.icon}} style={{width:60, height: 60}}/>
                  <Text>{this.props.condition.description}</Text>
                </View>
            </View>
            <View style={{flex:1, marginTop: 30, flexDirection: "column"}}>
              <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1, marginTop: 20}}></View>
            </View>
            <View style={{flex:4, marginTop: 30, flexDirection: "column"}}>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "column", justifyContent: 'space-between', alignItems: "center", height: 40}}><View ><Icon name="md-water" size={16} color="#1C9DFC" /></View><View><Text>{this.props.h + "%"}</Text></View></View>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><FontAwesome5 name={'thermometer-empty'} color="#4DD61E" brand /></View><View><Text>{this.props.tr}</Text></View></View>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><FontAwesome5 name={'thermometer-quarter'} color="#2A77FF" brand /></View><View><Text>{this.props.tmin}</Text></View></View>
              <View style={{flex:1, borderRightColor: '#E3E3E3', borderBottomWidth: 1}}></View>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><FontAwesome5 name={'cloud'} color="#B4B4B4" brand /></View><View><Text>{this.props.cloud + "%"}</Text></View></View>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><FontAwesome5 name={'wind'} color="#64D2FF" brand /></View><View><Text>{this.props.wind}</Text></View></View>  
            </View>
        </View>
    );
  }
};




const styles = StyleSheet.create({
  
});

export default CardForecast;
