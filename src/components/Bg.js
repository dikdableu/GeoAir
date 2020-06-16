import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import Svg, { Path  } from "react-native-svg";


function Bg(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBleu}>
        <ImageBackground
          style={styles.mask}
          imageStyle={styles.mask_imageStyle}
          source={require("../assets/images/Gradient_rgrO0Qs.png")}
        >
          <View style={styles.oval3Stack}>
            <Svg viewBox="0 0 438 438" style={styles.oval3}>
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                fillOpacity={0.07942708333333333}
                strokeOpacity={0.07942708333333333}
                d="M219.00 438.00 C339.95 438.00 438.00 339.95 438.00 219.00 C438.00 98.05 339.95 0.00 219.00 0.00 C98.05 0.00 0.00 98.05 0.00 219.00 C0.00 339.95 98.05 438.00 219.00 438.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 416 416" style={styles.oval4}>
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                fillOpacity={0.07942708333333333}
                strokeOpacity={0.07942708333333333}
                d="M208.00 416.00 C322.88 416.00 416.00 322.88 416.00 208.00 C416.00 93.12 322.88 0.00 208.00 0.00 C93.12 0.00 0.00 93.12 0.00 208.00 C0.00 322.88 93.12 416.00 208.00 416.00 Z"
              ></Path>
            </Svg>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgBleu: {
    height: height + 110,
    width: width,
    opacity: 1
  },
  mask: {
    height: height + 110,
    width: width,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  mask_imageStyle: {
    opacity: 1
  },
  oval3: {
    position: "absolute",
    height: 438,
    width: 438,
    top: 0,
    left: 292,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval4: {
    position: "absolute",
    height: 416,
    width: 416,
    top: 182,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval3Stack: {
    width: 730,
    height: 598,
    marginTop: -138,
    marginLeft: -208
  }
});

export default Bg;
