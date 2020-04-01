import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';

import SoleilComponent from './Icones/01d.js'
import CouldsComponent from './Icones/02d.js'
import RainComponent from './Icones/09d.js'
import SnowComponent from './Icones/13d.js'


export default class City extends Component {

  constructor(props) {
      super(props);
      this.state = {
        condition: null,
        conditionWeather: [
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
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 301,
               weather: "Drizzle",
               description: "bruine",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 302,
               weather: "Drizzle",
               description: "bruine de forte intensité",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 310,
               weather: "Drizzle",
               description: "bruine d'intensité légère et pluie",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 311,
               weather: "Drizzle",
               description: "bruine et pluie",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 312,
               weather: "Drizzle",
               description: "forte bruine pluie forte",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 313,
               weather: "Drizzle",
               description: "brèves averses et bruine",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 314,
               weather: "Drizzle",
               description: "fortes averses pluie forte",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 321,
               weather: "Drizzle",
               description: "brèves bruine",
               icon: "09d",
               path: (<RainComponent/>)
             },
             {
               id: 500,
               weather: "Rain",
               description: "légère pluie",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 501,
               weather: "Rain",
               description: "pluie modéré",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 502,
               weather: "Rain",
               description: "pluie de forte intensité",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 503,
               weather: "Rain",
               description: "très forte pluie",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 504,
               weather: "Rain",
               description: "pluie extrème",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 511,
               weather: "Rain",
               description: "pluie verglaçante",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 520,
               weather: "520",
               description: "pluie légère par intermitence",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 521,
               weather: "Rain",
               description: "pluie par intermitence",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 522,
               weather: "Rain",
               description: "forte pluie par intermitence",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 531,
               weather: "Rain",
               description: "forte pluie par intermitence",
               icon: "10d",
               path: (<RainComponent/>)
             },
             {
               id: 600,
               weather: "Snow",
               description: "faible chute de neige",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 601,
               weather: "Snow",
               description: "neige",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 602,
               weather: "Snow",
               description: "forte chute de neige",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 611,
               weather: "Snow",
               description: "neige fondue",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 612,
               weather: "Snow",
               description: "faible chute de neige fondu",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 613,
               weather: "Snow",
               description: "brève chute de neige fondu",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 615,
               weather: "Snow",
               description: "légère plui et chute de neige",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 616,
               weather: "Snow",
               description: "neige et pluie",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 620,
               weather: "Snow",
               description: "brève chute de neige de faible intensité",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 621,
               weather: "Snow",
               description: "brève chute de neige",
               icon: "13d",
               path: (<SnowComponent/>)
             },
             {
               id: 622,
               weather: "Snow",
               description: "forte chute de neige par intermitence",
               icon: "13d",
               path: (<SnowComponent/>)
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
               icon: "01d",
               path:(<SoleilComponent/>)
             },
             {
               id: 801,
               weather: "Clouds",
               description: "entre 11-25% de nuage",
               icon: "02d",
               path: (<CouldsComponent/>)
             },
             {
               id: 802,
               weather: "Clouds",
               description: "entre 25-50% de nuage",
               icon: "03d",
               path: (<CouldsComponent/>)
             },
             {
               id: 803,
               weather: "Clouds",
               description: "entre 50-84% de nuage",
               icon: "04d",
               path: (<CouldsComponent/>)
             },
             {
               id: 804,
               weather: "Clouds",
               description: "entre 85-100% de nuage",
               icon: "04d",
               path: (<CouldsComponent/>)
             },
            ]
      }
  }

  _iconMeteo = () => {
    this.state.conditionWeather.forEach( value => {
        if(value == null){
          console.log('il y a un null ici')
        }
        if(this.props.responseApiMeteo.weather[0].id == value.id){
            var cond = {
                path: value.path
            }
        this.setState({condition: cond})
        }
    })
  }

  render() {

  const color = this.props.color
  const propsState = this.props
  console.log(this.props)
  if(this.state.condition == null){
    return (
      <View data-layer="c5ca152e-c30f-4771-8df6-e408d0aa3faf" style={styles.city}>
          <View data-layer="f2a47ae9-5fed-4240-9fd8-e104c8a17289" style={styles.city_city46e4674a}>
              <Text data-layer="34552563-2522-4d83-bd92-8d7a88c76a24" style={styles.city_city46e4674a_versailles}>{propsState.ville.length > 13 ? propsState.ville.slice(0,13) + '...' : propsState.ville}</Text>
              <Text data-layer="8886f830-eb72-4710-b7d4-ae68e93d3189" style={styles.city_city46e4674a_yvelinesFrance}>{propsState.pays}</Text>
              <Text data-layer="4762e86f-f9e5-48f7-9758-dff99395e172" style={styles.city_city46e4674a_x10c}>{propsState.temp}</Text>
              <Text data-layer="9479b0e7-648b-4243-b85f-91c4dd89bb12" style={styles.city_city46e4674a_x7c}>{propsState.tr}</Text>
              <View data-layer="b6dacb07-c87a-4261-a560-bf40cc71202f" style={styles.city_city46e4674a_airqualityindex}>
                  <View data-layer="2efb1a80-24d0-441c-b59e-42c3d1d2c484" style={[styles.city_city46e4674a_airqualityindex_rectangle190, {borderColor: color}]}></View>
                  <Text data-layer="659bb7cc-acc6-44f0-a23e-a75516eaeb70" style={[styles.city_city46e4674a_airqualityindex_x12, {color: color}]}>{propsState.aqi}</Text>
              </View>
              <View data-layer="9e69dbce-f97b-4370-b4d6-70f5f93b8469" style={styles.city_city46e4674a_x01d}>
                {this._iconMeteo()}
              </View>
          </View>
      </View>
      );
  }else{
    return (
      <View data-layer="c5ca152e-c30f-4771-8df6-e408d0aa3faf" style={styles.city}>
          <View data-layer="f2a47ae9-5fed-4240-9fd8-e104c8a17289" style={styles.city_city46e4674a}>
              <Text data-layer="34552563-2522-4d83-bd92-8d7a88c76a24" style={styles.city_city46e4674a_versailles}>{propsState.ville.length > 13 ? propsState.ville.slice(0,13) + '...' : propsState.ville}</Text>
              <Text data-layer="8886f830-eb72-4710-b7d4-ae68e93d3189" style={styles.city_city46e4674a_yvelinesFrance}>{propsState.pays}</Text>
              <Text data-layer="4762e86f-f9e5-48f7-9758-dff99395e172" style={styles.city_city46e4674a_x10c}>{propsState.temp}</Text>
              <Text data-layer="9479b0e7-648b-4243-b85f-91c4dd89bb12" style={styles.city_city46e4674a_x7c}>{propsState.tr}</Text>
              <View data-layer="b6dacb07-c87a-4261-a560-bf40cc71202f" style={styles.city_city46e4674a_airqualityindex}>
                  <View data-layer="2efb1a80-24d0-441c-b59e-42c3d1d2c484" style={[styles.city_city46e4674a_airqualityindex_rectangle190, {borderColor: color}]}></View>
                  <Text data-layer="659bb7cc-acc6-44f0-a23e-a75516eaeb70" style={[styles.city_city46e4674a_airqualityindex_x12, {color: color}]}>{propsState.aqi}</Text>
              </View>
              <View data-layer="9e69dbce-f97b-4370-b4d6-70f5f93b8469" style={styles.city_city46e4674a_x01d}>
                {this.state.condition.path}
              </View>
          </View>
      </View>
      );
  }

  }
}

City.propTypes = {

}

City.defaultProps = {

}


const styles = StyleSheet.create({
  "city": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "white",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 300,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 99
  },
  "city_city46e4674a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 44,
    "left": 35,
    "top": 43,
    "right": 34
  },
  "city_city46e4674a_versailles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 147,
    "height": 24,
    "left": 0,
    "top": 1
  },
  "city_city46e4674a_yvelinesFrance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 147,
    "height": 17,
    "left": 0,
    "bottom": 0
  },
  "city_city46e4674a_x10c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 23,
    "left": 201,
    "top": 0
  },
  "city_city46e4674a_x7c": {
    "opacity": 0.44999998807907104,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-regular",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 21,
    "left": 201,
    "bottom": 1
  },
  "city_city46e4674a_airqualityindex": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 49.03,
    "height": "auto",
    "top": 4.5,
    "right": 0,
    "bottom": 4.25
  },
  "city_city46e4674a_airqualityindex_rectangle190": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 49.03,
    "height": 35.25,
    "left": 0,
    "top": 0
  },
  "city_city46e4674a_airqualityindex_x12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(40, 211, 176, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": "auto",
    "top": 6.5,
    "right": 17.32,
    "bottom": 7.75
  },
  "city_city46e4674a_x01d": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 35,
    "height": "auto",
    "left": 158,
    "top": 5,
    "bottom": 4
  },
  "city_city46e4674a_x01d_trace94": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.83,
    "height": 19.72,
    "left": 7.56,
    "top": 7.25
  },
  "city_city46e4674a_x01d_trace95": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 3.79
  },
  "city_city46e4674a_x01d_trace96": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 7.57,
    "height": 4.44,
    "left": 28.43,
    "top": 15.28
  },
  "city_city46e4674a_x01d_trace97": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6.66,
    "height": 6.66,
    "left": 24.56,
    "top": 24.56
  },
  "city_city46e4674a_x01d_trace98": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": 28.43
  },
  "city_city46e4674a_x01d_trace99": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 24.56
  },
  "city_city46e4674a_x01d_trace100": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 7.57,
    "height": 4.44,
    "left": -1,
    "top": 15.28
  },
  "city_city46e4674a_x01d_trace101": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6.66,
    "height": 6.66,
    "left": 3.79,
    "top": 3.79
  },
  "city_city46e4674a_x01d_trace102": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 4.44,
    "height": 7.57,
    "left": 15.28,
    "top": -1
  }
});
