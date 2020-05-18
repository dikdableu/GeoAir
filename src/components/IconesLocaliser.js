import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconesLocaliser(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 22 22" style={styles.oval6}>
        <Path
          strokeWidth={0}
          fill="rgba(0,0,0,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M11.00 22.00 C4.92 22.00 0.00 17.08 0.00 11.00 C0.00 4.92 4.92 0.00 11.00 0.00 C17.08 0.00 22.00 4.92 22.00 11.00 C22.00 17.08 17.08 22.00 11.00 22.00 Z M19.95 12.00 C19.95 12.00 17.00 12.00 17.00 12.00 C17.00 12.00 16.00 11.55 16.00 11.00 C16.00 10.45 17.00 10.00 17.00 10.00 C17.00 10.00 19.95 10.00 19.95 10.00 C19.48 5.83 16.17 2.52 12.00 2.05 C12.00 2.05 12.00 5.00 12.00 5.00 C12.00 5.00 11.55 6.00 11.00 6.00 C10.45 6.00 10.00 5.00 10.00 5.00 C10.00 5.00 10.00 2.05 10.00 2.05 C5.83 2.52 2.52 5.83 2.05 10.00 C2.05 10.00 5.00 10.00 5.00 10.00 C5.00 10.00 6.00 10.45 6.00 11.00 C6.00 11.55 5.00 12.00 5.00 12.00 C5.00 12.00 2.05 12.00 2.05 12.00 C2.52 16.17 5.83 19.48 10.00 19.95 C10.00 19.95 10.00 17.00 10.00 17.00 C10.00 17.00 10.45 16.00 11.00 16.00 C11.55 16.00 12.00 17.00 12.00 17.00 C12.00 17.00 12.00 19.95 12.00 19.95 C16.17 19.48 19.48 16.17 19.95 12.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  oval6: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 1,
    marginLeft: 1
  }
});

export default IconesLocaliser;
