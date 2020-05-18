import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function IndiceAir2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.indiceAir1}>
        <View style={styles.rectangle3}>
          <Text style={styles.style1}>5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indiceAir1: {
    height: 44,
    width: 34,
    opacity: 1
  },
  rectangle3: {
    height: 44,
    width: 34,
    borderRadius: 12,
    backgroundColor: "rgba(255,243,227,1)"
  },
  style1: {
    height: 22,
    width: 27,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,181,83,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 3
  }
});

export default IndiceAir2;
