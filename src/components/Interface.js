import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path  } from "react-native-svg";

function Interface(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.barsStatusTimeWhite}>
        <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 25.13 10.81" style={styles.Path2}>
          <Path scale={props.scale}
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M0.92 10.00 C0.39 9.47 0.12 7.98 0.12 7.98 L1.46 7.98 C1.46 7.98 1.78 9.21 2.30 9.49 C2.57 9.64 2.87 9.71 3.21 9.71 C3.84 9.71 4.38 9.45 4.82 8.92 C5.26 8.40 5.58 7.33 5.76 5.73 C5.47 6.19 5.11 6.52 4.68 6.71 C4.24 6.89 3.78 6.99 3.28 6.99 C2.27 6.99 1.47 6.67 0.88 6.04 C0.29 5.41 0.00 4.60 0.00 3.61 C0.00 2.66 0.29 1.82 0.87 1.10 C1.45 0.38 2.31 0.01 3.44 0.01 C4.97 0.01 6.03 0.70 6.61 2.08 C6.93 2.84 7.09 3.78 7.09 4.92 C7.09 6.21 6.90 7.34 6.51 8.34 C5.87 9.99 4.79 10.81 3.26 10.81 C2.23 10.81 1.46 10.54 0.92 10.00 Z M4.89 5.31 C5.32 4.97 5.54 4.37 5.54 3.51 C5.54 2.74 5.34 2.16 4.95 1.78 C4.57 1.41 4.07 1.22 3.47 1.22 C2.83 1.22 2.32 1.43 1.94 1.86 C1.56 2.30 1.37 2.87 1.37 3.60 C1.37 4.28 1.54 4.82 1.87 5.23 C2.20 5.63 2.73 5.83 3.46 5.83 C3.98 5.83 4.46 5.66 4.89 5.31 Z M9.31 4.37 L9.31 2.78 L10.84 2.78 L10.84 4.37 Z M9.31 10.52 L9.31 8.92 L10.84 8.92 L10.84 10.52 Z M16.63 10.52 L16.63 7.95 L12.03 7.95 L12.03 6.67 L16.83 0.00 L17.94 0.00 L17.94 6.80 L19.49 6.80 L19.49 7.95 L17.94 7.95 L17.94 10.52 Z M16.60 2.05 L13.24 6.80 L16.60 6.80 Z M23.73 10.52 L23.73 3.09 L21.26 3.09 L21.26 2.08 C21.26 2.08 22.87 1.83 23.25 1.61 C23.63 1.40 24.09 0.07 24.09 0.07 L25.13 0.07 L25.13 10.52 Z"
          > </Path>
        </Svg>
      </View>
      <View style={styles.barsStatusTimeWhiteFiller}></View>
      <View style={styles.container}>
        <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 17.1 10.7" style={styles.rectangle2}>
          <Path scale={props.scale}
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M1.80 6.70 C1.80 6.70 3.00 6.70 3.00 7.90 C3.00 7.90 3.00 9.50 3.00 9.50 C3.00 9.50 3.00 10.70 1.80 10.70 C1.80 10.70 1.20 10.70 1.20 10.70 C1.20 10.70 0.00 10.70 0.00 9.50 C0.00 9.50 0.00 7.90 0.00 7.90 C0.00 7.90 0.00 6.70 1.20 6.70 Z M6.60 4.70 C6.60 4.70 7.80 4.70 7.80 5.90 C7.80 5.90 7.80 9.50 7.80 9.50 C7.80 9.50 7.80 10.70 6.60 10.70 C6.60 10.70 6.00 10.70 6.00 10.70 C6.00 10.70 4.80 10.70 4.80 9.50 C4.80 9.50 4.80 5.90 4.80 5.90 C4.80 5.90 4.80 4.70 6.00 4.70 Z M11.20 2.40 C11.20 2.40 12.40 2.40 12.40 3.60 C12.40 3.60 12.40 9.50 12.40 9.50 C12.40 9.50 12.40 10.70 11.20 10.70 C11.20 10.70 10.60 10.70 10.60 10.70 C10.60 10.70 9.40 10.70 9.40 9.50 C9.40 9.50 9.40 3.60 9.40 3.60 C9.40 3.60 9.40 2.40 10.60 2.40 Z M15.90 0.00 C15.90 0.00 17.10 0.00 17.10 1.20 C17.10 1.20 17.10 9.50 17.10 9.50 C17.10 9.50 17.10 10.70 15.90 10.70 C15.90 10.70 15.30 10.70 15.30 10.70 C15.30 10.70 14.10 10.70 14.10 9.50 C14.10 9.50 14.10 1.20 14.10 1.20 C14.10 1.20 14.10 0.00 15.30 0.00 Z"
          > </Path>
        </Svg>
        <View style={styles.rectangle2Filler}></View>
        <View style={styles.Path1Row}>
          <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 15.4 11.06" style={styles.Path1}>
            <Path scale={props.scale}
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M1.70 4.69 C1.58 4.81 1.26 4.69 1.26 4.69 L0.09 3.51 C0.09 3.51 -0.00 3.37 0.00 3.28 C0.00 3.20 0.04 3.12 0.10 3.06 C4.35 -1.02 11.05 -1.02 15.30 3.06 C15.36 3.12 15.40 3.20 15.40 3.28 C15.40 3.37 15.31 3.51 15.31 3.51 L14.14 4.69 C14.14 4.69 13.83 4.81 13.70 4.69 C12.08 3.16 9.93 2.30 7.70 2.30 C5.47 2.30 3.32 3.15 1.70 4.69 Z M4.38 7.40 C4.26 7.52 3.94 7.40 3.94 7.40 L2.78 6.22 C2.78 6.22 2.68 6.08 2.69 5.99 C2.69 5.90 2.72 5.82 2.78 5.76 C5.56 3.18 9.85 3.18 12.62 5.76 C12.68 5.82 12.72 5.90 12.72 5.99 C12.72 6.08 12.62 6.22 12.62 6.22 L11.46 7.40 C11.46 7.40 11.14 7.52 11.02 7.40 C10.11 6.58 8.93 6.12 7.70 6.12 C6.47 6.12 5.29 6.58 4.38 7.40 Z M7.92 10.96 C7.92 10.96 7.78 11.06 7.70 11.06 C7.62 11.06 7.48 10.96 7.48 10.96 L5.46 8.93 C5.46 8.93 5.37 8.79 5.37 8.70 C5.37 8.61 5.41 8.53 5.47 8.47 C6.76 7.38 8.64 7.38 9.93 8.47 C9.99 8.53 10.03 8.61 10.03 8.70 C10.03 8.79 9.94 8.93 9.94 8.93 L7.92 10.96 Z"
            > </Path>
          </Svg>
          <View style={styles.battery}>
            <View style={styles.PathStack}>
              <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 24.5 11.5" style={styles.Path}>
                <Path scale={props.scale}
                  strokeWidth={0}
                  fill="rgba(255,255,255,0.36)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M3.59 1.00 C3.59 1.00 2.26 1.07 1.90 1.26 C1.62 1.41 1.41 1.62 1.26 1.90 C1.07 2.26 1.00 3.59 1.00 3.59 L1.00 7.91 C1.00 7.91 1.07 9.24 1.26 9.60 C1.41 9.88 1.62 10.09 1.90 10.24 C2.26 10.43 3.59 10.50 3.59 10.50 L18.41 10.50 C18.41 10.50 19.74 10.43 20.10 10.24 C20.38 10.09 20.59 9.88 20.74 9.60 C20.93 9.24 21.00 7.91 21.00 7.91 L21.00 3.59 C21.00 3.59 20.93 2.26 20.74 1.90 C20.59 1.62 20.38 1.41 20.10 1.26 C19.74 1.07 18.41 1.00 18.41 1.00 Z M3.59 0.00 L18.41 0.00 C18.41 0.00 20.11 0.13 20.57 0.37 C21.02 0.62 21.38 0.98 21.63 1.43 C21.87 1.89 22.00 3.59 22.00 3.59 L22.00 7.91 C22.00 7.91 21.87 9.61 21.63 10.07 C21.38 10.52 21.02 10.88 20.57 11.13 C20.11 11.37 18.41 11.50 18.41 11.50 L3.59 11.50 C3.59 11.50 1.89 11.37 1.43 11.13 C0.98 10.88 0.62 10.52 0.37 10.07 C0.13 9.61 0.00 7.91 0.00 7.91 L0.00 3.59 C0.00 3.59 0.13 1.89 0.37 1.43 C0.62 0.98 0.98 0.62 1.43 0.37 C1.89 0.13 3.59 0.00 3.59 0.00 Z M24.50 5.69 C24.50 6.93 23.00 7.69 23.00 7.69 L23.00 3.69 C23.00 3.69 24.50 4.45 24.50 5.69 Z"
                > </Path>
              </Svg>
              <View style={styles.rectangle1}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 14,
    width: 68,
    opacity: 1,
    flexDirection: "row",
    marginRight: 14,
    marginTop: 16
  },
  barsStatusTimeWhite: {
    height: 18,
    width: 33,
    opacity: 1,
    marginLeft: 29,
    marginTop: 14
  },
  Path2: {
    height: 11,
    width: 25,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 3
  },
  barsStatusTimeWhiteFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rectangle2: {
    height: 11,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 2
  },
  rectangle2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  Path1: {
    height: 11,
    width: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5
  },
  battery: {
    height: 13,
    width: 25,
    opacity: 1
  },
  Path: {
    position: "absolute",
    height: 12,
    width: 25,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle1: {
    position: "absolute",
    top: 1,
    left: 2,
    height: 8,
    width: 18,
    opacity: 1,
    borderRadius: 1.600000023841858,
    backgroundColor: "rgba(255,255,255,1)"
  },
  PathStack: {
    width: 25,
    height: 12,
    marginTop: 1
  },
  Path1Row: {
    height: 13,
    flexDirection: "row",
    marginTop: 1
  }
});

export default Interface;
