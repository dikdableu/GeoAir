import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconesCouvert from "./IconesCouvert";
import IndiceAir from "./IndiceAir";

function VilleFavoris(props) {
  const color = props.color
  const propsState = props

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle5}>
          <View style={styles.villeRow}>
            <View style={styles.ville}>
              <Text style={styles.versailles}>{propsState.ville}</Text>
              <Text style={styles.yvelinesFrance}>{propsState.pays}</Text>
            </View>
            <IconesCouvert style={styles.iconesCouvert}></IconesCouvert>
            <View style={styles.temperatures}>
              <Text style={styles.cCopy}>{propsState.temp}</Text>
              <Text style={styles.cCopy1}>{propsState.tr}</Text>
            </View>
            <IndiceAir style={styles.indiceAir3} aqi={propsState.aqi} textColor={props.textColor} color={props.color} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 93,
    width: 353,
    opacity: 1
  },
  rectangle5: {
    height: 93,
    width: 353,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  ville: {
    height: 44,
    width: 154,
    opacity: 1
  },
  versailles: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  yvelinesFrance: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesCouvert: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 13,
    marginTop: 2
  },
  temperatures: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 5
  },
  cCopy: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy1: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir3: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  villeRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 25
  }
});

export default VilleFavoris;
