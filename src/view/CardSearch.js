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

class CardSearch extends React.Component {
  render() {
    const colorAqi = this.props.color
    return (
        <View style={{flex:1, flexDirection: "row", margin: 5, height: 90, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 6, }, shadowOpacity: 0.39, shadowRadius: 8.30, elevation: 13, backgroundColor: "#fff"}}>
            <View style={{flex:1, paddingLeft: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingTop: 5, paddingBottom: 5}}>
                <View style={{flex:5}}>
                    <Text style={{fontSize: 20}}>{this.props.temperature}</Text>
                </View>
                <View style={{flex:3, marginRight: 10, alignItems: "center", justifyContent: 'center', padding:10, borderRadius: 50, backgroundColor: colorAqi, borderColor: colorAqi, borderWidth: 1, color: "#FFF", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
                    <Text style={{ fontSize: 20, alignItems: "center", justifyContent: 'center', fontWeight: 'bold', color: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>{this.props.aqi}</Text>
                </View>
                <View style={{flex:11, alignItems: "center"}}>
                    <Text>{this.props.ville}</Text>
                </View>
            </View>
        </View>
    );
  }
};




const styles = StyleSheet.create({

});

export default CardSearch;
