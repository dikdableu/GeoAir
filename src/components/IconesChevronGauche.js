import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesChevronGauche(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 14" style={styles.icoChevronGauche}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.41 7.00 L7.71 1.71 C8.10 1.32 8.10 0.68 7.71 0.29 C7.32 -0.10 6.68 -0.10 6.29 0.29 L0.29 6.29 C-0.10 6.68 -0.10 7.32 0.29 7.71 L6.29 13.71 C6.68 14.10 7.32 14.10 7.71 13.71 C8.10 13.32 8.10 12.68 7.71 12.29 L2.41 7.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icoChevronGauche: {
    height: 16,
    width: 9,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6,
    marginLeft: 9
  }
});

export default IconesChevronGauche;
