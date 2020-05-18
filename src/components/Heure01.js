import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconesCouvert from "./IconesCouvert";

function Heure01(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle7}>
        <View style={styles.heure01}>
          <View style={styles.iconesCouvert11Stack}>
            <IconesCouvert style={styles.iconesCouvert11}></IconesCouvert>
            <Text style={styles.style3}>12:00</Text>
          </View>
          <Text style={styles.c4}>13°C</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle7: {
    height: 94,
    width: 41,
    borderRadius: 20.5,
    backgroundColor: "transparent"
  },
  heure01: {
    height: 82,
    width: 41,
    opacity: 1,
    marginTop: 12
  },
  iconesCouvert11: {
    position: "absolute",
    top: 16,
    left: 0,
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent"
  },
  style3: {
    position: "absolute",
    top: 0,
    left: 4,
    height: 26,
    width: 33,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 10
  },
  iconesCouvert11Stack: {
    width: 40,
    height: 56
  },
  c4: {
    height: 26,
    width: 33,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(127,141,154,1)",
    fontSize: 13,
    marginLeft: 4
  }
});

export default Heure01;
