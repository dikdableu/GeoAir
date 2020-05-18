import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconesPlus from "./IconesPlus";

function IconesAjouter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconesAjouter}>
        <View style={styles.oval5Stack}>
          <Svg viewBox="0 0 38 38" style={styles.oval5}>
            <Path
              strokeWidth={0}
              fill="rgba(103,232,211,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M19.00 38.00 C29.49 38.00 38.00 29.49 38.00 19.00 C38.00 8.51 29.49 0.00 19.00 0.00 C8.51 0.00 0.00 8.51 0.00 19.00 C0.00 29.49 8.51 38.00 19.00 38.00 Z"
            ></Path>
          </Svg>
          <IconesPlus style={styles.iconesPlus1}></IconesPlus>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconesAjouter: {
    height: 38,
    width: 38,
    opacity: 1
  },
  oval5: {
    position: "absolute",
    height: 38,
    width: 38,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  iconesPlus1: {
    position: "absolute",
    top: 7,
    left: 7,
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent"
  },
  oval5Stack: {
    width: 38,
    height: 38
  }
});

export default IconesAjouter;
