import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  } from 'react-native';
import { CardItem, Body } from 'native-base';
import { material, iOSUIKit } from 'react-native-typography'
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import Icon from 'react-native-vector-icons/Ionicons';
import Hr from "react-native-hr-component";



export default class Value extends React.Component {
    
   colorNo2 = () => {
        if (this.props.no2 >= 0 && this.props.no2 <= 50){
          return "#3DB82C"
        }
        if (this.props.no2 >= 51 && this.props.no2 <= 100){
          return "#E3D71B"
        }
        if (this.props.no2 >= 101 && this.props.no2 <= 150){
          return "#ECA100"
        }
        if (this.props.no2 >= 151 && this.props.no2 <= 200){
          return "#F94B1C"
        }
        if (this.props.no2 >= 201 && this.props.no2 <= 299){
          return "#8900E8"
        }
        if (this.props.no2 >= 300){
          return "#7A0000"
        }   
    }
    
    colorPm10 = () => {
        if (this.props.pm10 >= 0 && this.props.pm10 <= 50){
          return "#3DB82C"
        }
        if (this.props.pm10 >= 51 && this.props.pm10 <= 100){
          return "#E3D71B"
        }
        if (this.props.pm10 >= 101 && this.props.pm10 <= 150){
          return "#ECA100"
        }
        if (this.props.pm10 >= 151 && this.props.pm10 <= 200){
          return "#F94B1C"
        }
        if (this.props.pm10 >= 201 && this.props.pm10 <= 299){
          return "#8900E8"
        }
        if (this.props.pm10 >= 300){
          return "#7A0000"
        }   
    }
    
    colorO3 = () => {
        if (this.props.o3 >= 0 && this.props.o3 <= 50){
          return "#3DB82C"
        }
        if (this.props.o3 >= 51 && this.props.o3 <= 100){
          return "#E3D71B"
        }
        if (this.props.o3 >= 101 && this.props.o3 <= 150){
          return "#ECA100"
        }
        if (this.props.o3 >= 151 && this.props.o3 <= 200){
          return "#F94B1C"
        }
        if (this.props.o3 >= 201 && this.props.o3 <= 299){
          return "#8900E8"
        }
        if (this.props.o3 >= 300){
          return "#7A0000"
        }   
    }
  render(){
    var today = new Date(Date.now())
    var optionsDay = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    var optionsHour = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
    const color = this.props.color
    
    return(
      <>
      <CardItem header style={{shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
        <AnimatedGaugeProgress
          size={200}
          width={15}
          fill={this.props.aqi}
          rotation={90}
          cropDegree={90}
          tintColor={this.props.color}
          delay={0}
          backgroundColor="#DFDFDF"
          stroke={[2, 2]} //For a equaly dashed line
          strokeCap="circle" 
          style={{flex:1, marginLeft: '2%', marginRight: '2%', alignItems : "center", }}>
          <View style={styles.textView}>
            <Text style={{fontSize: 50, alignItems: "center", justifyContent: "center", color: "#5D5D5D"}}>{this.props.aqi*3}</Text>
            <Text style={{color: "#B6B6B6"}}>{this.props.city}</Text>
          </View>
        </AnimatedGaugeProgress>
      </CardItem>
      <CardItem>
        <Body style={{flex: 1}}>
          <Text style={material.title}>Polluant principale {this.props.dom}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body style={{flex: 1}}>
          <Text style={iOSUIKit.callout} ><Icon name="md-cloud" size={14} color={this.colorPm10()} /> Pm10: {this.props.pm10}</Text>
          
          <Text style={iOSUIKit.callout} ><Icon name="md-cloud" size={14} color={this.colorO3()} /> O3: {this.props.o3}</Text>
          
          <Text style={iOSUIKit.callout} ><Icon name="md-cloud" size={14} color={this.colorNo2()} /> NO2: {this.props.no2}</Text>
          
        </Body>
        <Body style={{flex: 2}}>
          <Text style={iOSUIKit.callout} ><Icon name="md-thermometer" size={14} color="#B61111" /> Température: {this.props.t}</Text>
          <Text style={iOSUIKit.callout} ><Icon name="md-thermometer" size={14} color="#00B925" /> Température ressentie: {this.props.tr}</Text>
          <Text style={iOSUIKit.callout} ><Icon name="md-speedometer" size={14} color="#737373" /> Pression: {this.props.p}</Text>
          <Text style={iOSUIKit.callout} ><Icon name="md-water" size={14} color="#1C9DFC" /> humidité: {this.props.h + "%"}</Text>
          
        </Body>
      </CardItem>
      <CardItem footer>
        <Text style={{color: '#9B9B9B'}}>{today.toLocaleDateString('fr-FR', optionsHour)}</Text>
      </CardItem>
    </>
    )
  }
}

const size = 200; 
const cropDegree = 90;
const textOffset = 15;
const textWidth = size - (textOffset*2);
const textHeight = size*(1 - cropDegree/360) - (textOffset*2);

const styles = StyleSheet.create({
  textView: {
    position: 'absolute',
    top: 20,
    left: "23%",
    width: textWidth,
    height: textHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});