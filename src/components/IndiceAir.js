import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function IndiceAir(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={[styles.rectangle2, {backgroundColor: props.color}]}>
          <Text style={[styles.style, {color: props.textColor}]}>{props.aqi}</Text>
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
    height: 44,
    width: 40,
    opacity: 1
  },
  rectangle2: {
    height: 44,
    width: 40,
    borderRadius: 12,

  },
  style: {
    height: 22,
    width: 35,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",

    fontSize: 18,
    marginTop: 11,
    marginLeft: 3
  }
});

export default IndiceAir;
