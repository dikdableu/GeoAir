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

class CardAir extends React.Component {
  render() {
    const colorAqi = this.props.color
    return (
        <View style={{flex:1, margin: 15, flexDirection: "column", padding: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 6, }, shadowOpacity: 0.39, shadowRadius: 8.30, elevation: 13, backgroundColor: "#fff"}}>
            <View style={{flex:1, flexDirection: "column"}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 25}}>Qualité de l'air</Text>
                </View>
                <View style={{flex:4, alignItems: "center", marginTop: 25}}>
                    <View style={{ flex: 1, padding:10, alignItems: "space-around", borderRadius: 50, backgroundColor: colorAqi, borderColor: colorAqi, borderWidth: 1, color: "#FFF", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>{this.props.aqi}</Text>
                    </View>
                    <Text style={{color: "#777777", marginTop: 25}}>{this.props.ville}</Text>
                </View>
            </View>
            <View style={{flex:1, marginTop: 30, flexDirection: "column"}}>
              <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-around', alignItems: "center", height: 40}}><View ><Text>Polluant domiant</Text></View><View><Text>{this.props.dom}</Text></View></View>
            </View>
            <View style={{flex:4, marginTop: 30, flexDirection: "column"}}>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'circle'} color={this.props.colorNo2} brand /> No2 (Dioxyde d'azote) </Text></View><View><Text>{this.props.no2}</Text></View></View>  
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'circle'} color={this.props.colorO3} brand /> O3 (Ozone) </Text></View><View><Text>{this.props.o3}</Text></View></View>                 
                <View style={{flex:1, borderBottomColor: '#E3E3E3', borderBottomWidth: 1}}></View>
                <View style={{flex:1, color: "#4C4C4C", flexDirection: "row", justifyContent: 'space-between', alignItems: "center", height: 40}}><View><Text><FontAwesome5 name={'circle'} color={this.props.colorPm10} brand /> Pm10 (Particules en suspension 10 micromètre) </Text></View><View><Text>{this.props.pm10}</Text></View></View>
            </View>
        </View>
    );
  }
};




const styles = StyleSheet.create({
  
});

export default CardAir;
