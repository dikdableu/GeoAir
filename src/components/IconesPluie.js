import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesPluie(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 54 44" style={styles.fill16}>
        <Path
          strokeWidth={0}
          fill="rgba(70,192,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L0.00 0.00 M11.00 37.50 C11.95 39.16 12.90 40.81 13.86 42.47 C14.52 43.62 12.67 44.65 12.00 43.50 C11.05 41.84 10.10 40.19 9.14 38.53 M22.00 37.50 C22.95 39.16 23.90 40.81 24.86 42.47 C25.52 43.62 23.67 44.65 23.00 43.50 C22.05 41.84 21.10 40.19 20.14 38.53 M33.00 37.50 C33.95 39.16 34.90 40.81 35.86 42.47 C36.52 43.62 34.67 44.65 34.00 43.50 C33.05 41.84 32.10 40.19 31.14 38.53 M44.00 37.50 C44.95 39.16 45.90 40.81 46.86 42.47 C47.52 43.62 45.67 44.65 45.00 43.50 C44.05 41.84 43.10 40.19 42.14 38.53 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill16: {
    height: 25,
    width: 31,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 7,
    marginLeft: 5
  }
});

export default IconesPluie;
