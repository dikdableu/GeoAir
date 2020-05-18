import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function IndiceAir(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle2}>
          <Text style={styles.style}>7</Text>
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
    width: 34,
    opacity: 1
  },
  rectangle2: {
    height: 44,
    width: 34,
    borderRadius: 12,
    backgroundColor: "rgba(220,255,249,1)"
  },
  style: {
    height: 22,
    width: 27,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,235,211,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 3
  }
});

export default IndiceAir;
