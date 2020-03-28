import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';

import * as Font from 'expo-font';
import { AppLoading} from 'expo';


export default class City extends Component {

  constructor(props) {
      super(props);
  }

  render() {
  const color = this.props.color
  const propsState = this.props
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
            <ReactImage data-layer="9e69dbce-f97b-4370-b4d6-70f5f93b8469" source={require('../../assets/x01d.png')} style={styles.city_city46e4674a_x01d} />
        </View>
    </View>
    );
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
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
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
    "width": 18,
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
