import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path  } from "react-native-svg";

function IconesActualiser(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 20 18.18" style={styles.shape2}>
        <Path scale={props.scale}
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.89 10.95 C3.36 10.79 3.88 11.03 4.05 11.51 C5.12 14.56 8.09 16.54 11.33 16.35 C14.56 16.17 17.28 13.86 18.00 10.70 C18.72 7.55 17.26 4.29 14.43 2.73 C11.59 1.16 5.75 3.96 5.75 3.96 L3.20 6.36 L6.36 6.36 C6.36 6.36 7.27 6.76 7.27 7.26 C7.27 7.77 6.36 8.17 6.36 8.17 L0.91 8.17 C0.91 8.17 0.80 8.06 0.80 8.06 C0.58 8.06 0.37 8.02 0.25 7.89 C0.13 7.76 0.10 7.57 0.11 7.37 C0.11 7.37 0.00 7.26 0.00 7.26 L0.00 1.81 C0.00 1.81 0.41 0.90 0.91 0.90 C1.41 0.90 1.82 1.81 1.82 1.81 L1.82 5.16 L4.49 2.66 C4.49 2.66 11.76 -0.82 15.31 1.14 C18.85 3.09 20.67 7.16 19.77 11.11 C18.87 15.06 15.47 17.93 11.43 18.17 C7.39 18.40 3.68 15.93 2.33 12.11 C2.17 11.64 2.42 11.12 2.89 10.95 Z"
        > </Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shape2: {
    height: 18,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3,
    marginLeft: 2
  }
});

export default IconesActualiser;
