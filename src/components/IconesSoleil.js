import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesSoleil(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 52.65 50.57" style={styles.fill13}>
        <Path
          strokeWidth={0}
          fill="rgba(70,192,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M43.71 42.54 L36.10 35.66 C36.10 35.66 35.60 34.51 36.05 34.05 C36.49 33.60 37.72 34.00 37.72 34.00 L45.33 40.89 C45.33 40.89 45.83 42.04 45.38 42.49 M14.62 16.41 L7.01 9.52 C7.01 9.52 6.51 8.37 6.96 7.92 C7.40 7.46 8.63 7.87 8.63 7.87 L16.24 14.76 C16.24 14.76 16.74 15.91 16.29 16.36 M8.54 42.46 L15.52 34.98 C15.52 34.98 16.71 34.48 17.19 34.90 C17.68 35.32 17.28 36.50 17.28 36.50 L10.29 43.97 C10.29 43.97 9.11 44.48 8.63 44.06 M35.06 13.91 L42.04 6.44 C42.04 6.44 43.23 5.94 43.71 6.35 C44.20 6.77 43.80 7.96 43.80 7.96 L36.81 15.43 C36.81 15.43 35.63 15.93 35.15 15.51 M25.49 49.45 L25.37 39.41 C25.37 39.41 25.89 38.26 26.54 38.26 C27.19 38.25 27.74 39.38 27.74 39.38 L27.86 49.42 C27.86 49.42 27.34 50.56 26.69 50.57 M24.91 11.19 L24.79 1.15 C24.79 1.15 25.31 0.01 25.96 0.00 C26.61 -0.01 27.15 1.12 27.15 1.12 L27.27 11.17 C27.27 11.17 26.75 12.31 26.10 12.31 M1.19 24.14 L11.64 24.17 C11.64 24.17 12.82 24.68 12.82 25.31 C12.82 25.93 11.63 26.44 11.63 26.44 L1.18 26.41 C1.18 26.41 -0.00 25.89 0.00 25.27 M41.01 24.13 L51.47 24.17 C51.47 24.17 52.65 24.68 52.65 25.30 C52.64 25.93 51.46 26.44 51.46 26.44 L41.01 26.40 C41.01 26.40 39.83 25.89 39.83 25.27 M0.00 0.00 L0.00 0.00 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill13: {
    height: 29,
    width: 30,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6,
    marginLeft: 5
  }
});

export default IconesSoleil;
