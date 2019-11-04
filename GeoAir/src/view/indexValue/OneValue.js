import React from 'react';
import {
  View,
  Text,
  } from 'react-native';
import { CardItem, Body } from 'native-base';
import { material, iOSUIKit } from 'react-native-typography'

export default class OneValue extends React.Component {
  render(){
    var today = new Date(Date.now())
    var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    var optionsHour = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
    return(
      <>
      <CardItem header style={{shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
        <View style={{ borderWidth: 1, borderRadius: 50, padding: '5%', borderColor: '#3DB82C', backgroundColor: '#3DB82C', marginRight: '6%', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>{this.props.value}</Text>
        </View>
        <View>
          <Text style={{fontSize: 20}}>{this.props.city}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Body style={{flex: 1}}>
          <Text style={material.title}>Polluant principale {this.props.dom}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body style={{flex: 1}}>
          <Text style={iOSUIKit.callout} >Pm10: {this.props.pm10}</Text>
          <Text style={iOSUIKit.callout} >O3: {this.props.o3}</Text>
          <Text style={iOSUIKit.callout} >NO2: {this.props.no2}</Text>
        </Body>
        <Body style={{flex: 1}}>
          <Text style={iOSUIKit.callout} >Température: {this.props.t}</Text>
          <Text style={iOSUIKit.callout} >Pression: {this.props.p}</Text>
          <Text style={iOSUIKit.callout} >Vent: {this.props.w}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text style={{color: '#9B9B9B'}}>{today.toLocaleDateString('fr-FR', optionsHour)}</Text>
      </CardItem>
    </>
    )
  }
}