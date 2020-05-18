import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function IndiceAir3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.indiceAir2}>
        <View style={styles.rectangle4}>
          <Text style={styles.style2}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indiceAir2: {
    height: 44,
    width: 34,
    opacity: 1
  },
  rectangle4: {
    height: 44,
    width: 34,
    borderRadius: 12,
    backgroundColor: "rgba(255,237,236,1)"
  },
  style2: {
    height: 22,
    width: 27,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,107,83,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 3
  }
});

export default IndiceAir3;
