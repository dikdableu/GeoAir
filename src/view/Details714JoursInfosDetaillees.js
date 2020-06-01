import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Bg from "../components/Bg";
import CardForeCast14D from "../components/CardForeCast14D";
import CardForeCast7D from "../components/CardForeCast7D";
import UntitledComponent from "../components/UntitledComponent";
import CardAccueil from "../components/CardAccueil";

function Details714JoursInfosDetaillees(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <Bg style={styles.bg}></Bg>
        <CardForeCast14D style={styles.cardForeCast14D}></CardForeCast14D>
        <CardForeCast7D style={styles.cardForeCast7D}></CardForeCast7D>
        <UntitledComponent style={styles.untitledComponent}></UntitledComponent>
        <CardAccueil style={styles.cardAccueil}></CardAccueil>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 1,
    backgroundColor: "transparent",
    right: 0,
    bottom: 0
  },
  cardForeCast14D: {
    position: "absolute",
    top: 1541,
    left: 11,
    height: 591,
    width: 353
  },
  cardForeCast7D: {
    position: "absolute",
    top: 773,
    left: 11,
    height: 752,
    width: 353
  },
  untitledComponent: {
    position: "absolute",
    top: 499,
    left: 11,
    height: 260,
    width: 353
  },
  cardAccueil: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 353,
    width: 353
  },
  bgStack: {
    flex: 1
  }
});

export default Details714JoursInfosDetaillees;
