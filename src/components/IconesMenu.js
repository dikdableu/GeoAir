import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesMenu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 15 14" style={styles.shape1}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 1.00 C0.00 0.45 1.00 0.00 1.00 0.00 L14.00 0.00 C14.00 0.00 15.00 0.45 15.00 1.00 C15.00 1.55 14.00 2.00 14.00 2.00 L1.00 2.00 C1.00 2.00 0.00 1.55 0.00 1.00 Z M9.00 6.00 C9.00 6.00 10.00 6.00 10.00 7.00 C10.00 7.00 10.00 8.00 9.00 8.00 C9.00 8.00 1.00 8.00 1.00 8.00 C1.00 8.00 0.00 8.00 0.00 7.00 C0.00 7.00 0.00 6.00 1.00 6.00 Z M0.00 13.00 C0.00 12.45 1.00 12.00 1.00 12.00 L14.00 12.00 C14.00 12.00 15.00 12.45 15.00 13.00 C15.00 13.55 14.00 14.00 14.00 14.00 L1.00 14.00 C1.00 14.00 0.00 13.55 0.00 13.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shape1: {
    height: 14,
    width: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 5
  }
});

export default IconesMenu;
