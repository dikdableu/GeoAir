import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Admob(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangleCopy9}>
          <Text style={styles.banniereAdMob}>Bannière AdMob</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  rect: {
    height: 116,
    width: 376,
    opacity: 1
  },
  rectangleCopy9: {
    height: 116,
    width: 376,
    backgroundColor: "rgba(255,255,255,0.23291015625)"
  },
  banniereAdMob: {
    height: 86,
    width: 272,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    marginTop: 15,
    marginLeft: 51
  }
});

export default Admob;
