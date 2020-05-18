import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesCouvert(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.path6Stack}>
        <Svg viewBox="0 0 50.2 29.9" style={styles.path6}>
          <Path
            strokeWidth={0}
            fill="rgba(187,202,217,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M50.20 19.35 C50.20 25.17 39.62 29.90 39.62 29.90 L8.78 29.90 C8.78 29.90 0.00 25.98 0.00 21.16 C0.00 16.34 3.94 12.41 8.78 12.41 C8.80 12.41 8.81 12.41 8.83 12.41 C10.06 5.20 16.21 0.00 23.61 0.00 C29.55 0.00 35.03 3.62 37.38 9.04 C38.11 8.88 38.86 8.80 39.62 8.80 C45.45 8.80 50.20 13.53 50.20 19.35 Z M39.62 10.91 C38.75 10.91 37.05 11.31 37.05 11.31 L36.07 11.62 L35.73 10.65 C35.73 10.65 29.04 2.12 23.61 2.12 C16.98 2.12 10.81 13.64 10.81 13.64 L10.70 14.72 L9.62 14.58 C9.62 14.58 9.02 14.53 8.78 14.53 C5.11 14.53 2.13 17.50 2.13 21.16 C2.13 24.82 8.78 27.79 8.78 27.79 L39.62 27.79 C39.62 27.79 48.07 24.00 48.07 19.35 C48.07 14.70 44.28 10.91 39.62 10.91 Z"
          ></Path>
        </Svg>
        <Svg viewBox="0 0 44.44 42.8" style={styles.fill2}>
          <Path
            strokeWidth={0}
            fill="rgba(255,193,0,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M8.23 7.87 C8.23 7.87 7.86 6.68 8.33 6.27 C8.80 5.85 9.95 6.36 9.95 6.36 L16.72 13.88 C16.72 13.88 17.10 15.07 16.62 15.48 C16.15 15.90 15.00 15.39 15.00 15.39 M15.82 34.05 C16.25 34.50 15.76 35.65 15.76 35.65 L8.30 42.50 C8.30 42.50 7.10 42.90 6.67 42.44 C6.24 41.99 6.73 40.84 6.73 40.84 L14.19 33.99 M44.08 9.47 L36.62 16.32 C36.62 16.32 35.42 16.72 34.99 16.26 C34.56 15.80 35.05 14.66 35.05 14.66 L42.51 7.81 C42.51 7.81 43.71 7.41 44.14 7.86 M25.45 11.07 L26.25 1.05 C26.25 1.05 26.85 -0.05 27.48 0.00 C28.11 0.05 28.54 1.23 28.54 1.23 L27.75 11.25 C27.75 11.25 27.14 12.34 26.51 12.29 M11.19 25.13 L1.04 24.20 C1.04 24.20 -0.05 23.59 0.01 22.96 C0.06 22.34 1.26 21.94 1.26 21.94 L11.40 22.87 L12.44 24.11 M20.13 31.89 C19.56 32.47 19.13 33.06 18.81 33.60 C15.99 31.47 14.29 28.02 14.63 24.28 C15.16 18.49 20.35 14.21 26.22 14.73 C29.16 14.99 31.73 16.42 33.48 18.51 C32.88 18.94 32.32 19.41 31.82 19.90 C30.42 18.23 28.38 17.08 26.02 16.87 C21.36 16.46 17.22 19.87 16.80 24.47 "
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  path6: {
    position: "absolute",
    height: 17,
    width: 29,
    top: 11,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fill2: {
    position: "absolute",
    height: 24,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path6Stack: {
    width: 39,
    height: 28,
    marginTop: 5,
    marginLeft: 1
  }
});

export default IconesCouvert;
