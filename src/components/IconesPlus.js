import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesPlus(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 16 16" style={styles.shape}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M8.00 0.00 C8.55 0.00 9.00 1.00 9.00 1.00 L9.00 7.00 L15.00 7.00 C15.00 7.00 16.00 7.45 16.00 8.00 C16.00 8.55 15.00 9.00 15.00 9.00 L9.00 9.00 L9.00 15.00 C9.00 15.00 8.55 16.00 8.00 16.00 C7.45 16.00 7.00 15.00 7.00 15.00 L7.00 9.00 L1.00 9.00 C1.00 9.00 0.00 8.55 0.00 8.00 C0.00 7.45 1.00 7.00 1.00 7.00 L7.00 7.00 L7.00 1.00 C7.00 1.00 7.45 0.00 8.00 0.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shape: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 4
  }
});

export default IconesPlus;
