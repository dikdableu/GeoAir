import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import CardAir from "./CardAir";
import IndiceAir from "./IndiceAir";
import Svg, { Path } from "react-native-svg";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardAirStack}>
        <CardAir style={styles.cardAir}></CardAir>
        <View style={styles.details}>
          <View style={styles.qualiteDeLair}>
            <View style={styles.bonneStackRow}>
              <View style={styles.bonneStack}>
                <Text style={[styles.bonne, {color: props.textColor}]}>{props.text}</Text>
                <Text style={styles.qualiteDeLair1}>Qualité de l’air</Text>
              </View>
              <IndiceAir style={styles.indiceAir}></IndiceAir>
            </View>
          </View>
          <Svg viewBox="-0.5 -0.5 312 3" style={styles.line12}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(242,242,242,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.00 0.50 L310.00 0.50 "
            ></Path>
          </Svg>
          <View style={styles.infosDetails1}>
            <View style={styles.vitesseDuVentHumi1Row}>
              <Text style={styles.vitesseDuVentHumi1}>
                Vitesse du vent{"\n"}
                {"\n"}Humidité{"\n"}
                {"\n"}Pression{"\n"}
                {"\n"}Visibilité{"\n"}{"\n"}Indice UV{"\n"}{"\n"}Température ressentie{"\n"}{"\n"}Lever du soleil{"\n"}{"\n"}Coucher du soleil{"\n"}
              </Text>
              <Text style={styles.mS931027HPa1}>
                {(props.responseApiMeteo.wind.speed *3.6).toFixed(2)} km/h{"\n"}
                {"\n"}{props.responseApiMeteo.main.humidity}%{"\n"}
                {"\n"}{props.responseApiMeteo.main.pressure} hPa{"\n"}
                {"\n"}{props.responseApiWeatherHour.current.visibility ? props.responseApiWeatherHour.current.visibility + ' m' : 'N/A'}{"\n"}{"\n"}{props.responseApiWeatherHour.current.uvi.toFixed(0)}{"\n"}{"\n"}{(props.responseApiWeatherHour.current.feels_like - 273.15).toFixed(1)} °C{"\n"}{"\n"}{props.sunset}{"\n"}{"\n"}{props.sunrise}{"\n"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    opacity: 1
  },
  cardAir: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 390,
    width: width - 22,
  },
  details: {
    position: "absolute",
    top: 29,
    marginLeft: 20,
    height: 'auto',
    width: width - 42,
    opacity: 1,
  },
  qualiteDeLair: {
    height: 48,
    width: 311,
    opacity: 1,
    flexDirection: "row"
  },
  bonne: {
    position: "absolute",
    top: 22,
    left: 0,
    height: 26,
    width: 147,
    opacity: 1,
    backgroundColor: "transparent",
    fontSize: 20
  },
  qualiteDeLair1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 26,
    width: 147,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  bonneStack: {
    width: 147,
    height: 48
  },
  indiceAir: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 130,
    marginTop: 4
  },
  bonneStackRow: {
    height: 48,
    flexDirection: "row",
    flex: 1
  },
  line12: {
    height: 3,
    width: width / 1.2,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 18,
    marginLeft: 2
  },
  infosDetails1: {
    height: 'auto',
    width: 311,
    opacity: 1,
    flexDirection: "row",
    marginTop: 17
  },
  vitesseDuVentHumi1: {
    height: 'auto',
    width: width / 2.31,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  mS931027HPa1: {
    height: 'auto',
    width: width / 2.35,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  vitesseDuVentHumi1Row: {
    height: 'auto',
    flexDirection: "row",
    flex: 1
  },
  cardAirStack: {
    width: width - 22,
    height: 300,
  }
});

export default UntitledComponent;
