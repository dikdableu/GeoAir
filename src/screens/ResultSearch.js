import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconesCouvert1 from "./components/IconesCouvert1";
import IndiceAir1 from "./components/IndiceAir1";

function ResultSearch(props) {
  return (
    <View style={styles.container}>
      <Svg viewBox="-0.5 -0.5 312 3" style={styles.line1}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(242,242,242,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.50 L310.00 0.50 "
        ></Path>
      </Svg>
      <View style={styles.ville2Row}>
        <View style={styles.ville2}>
          <Text style={styles.versaillesCopy}>Versailles</Text>
          <Text style={styles.yvelinesFranceCopy}>Yvelines, France</Text>
        </View>
        <IconesCouvert1 style={styles.iconesCouvert1}></IconesCouvert1>
        <View style={styles.temperatures2}>
          <Text style={styles.cCopy}>13°C</Text>
          <Text style={styles.cCopy1}>6°C</Text>
        </View>
        <IndiceAir1 style={styles.indiceAir1}></IndiceAir1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 1,
    width: 315,
    height: 69
  },
  line1: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 67,
    marginLeft: 4
  },
  ville2: {
    height: 44,
    width: 154,
    opacity: 1
  },
  versaillesCopy: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  yvelinesFranceCopy: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesCouvert1: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 16,
    marginTop: 2
  },
  temperatures2: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 2
  },
  cCopy: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy1: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir1: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  ville2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -70
  }
});

export default ResultSearch;
