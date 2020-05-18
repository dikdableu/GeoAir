import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesAjouter from "../components/IconesAjouter";
import VilleFavoris from "../components/VilleFavoris";
import IconesChevronGauche from "../components/IconesChevronGauche";
import IconesMenu from "../components/IconesMenu";
import MenuFavoris from "../components/MenuFavoris";
import Interface from "../components/Interface";

function Favoris(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <Bg style={styles.bg}></Bg>
        <Admob style={styles.admob}></Admob>
        <View style={styles.ajouterUnLieu}>
          <IconesAjouter style={styles.iconesAjouter}></IconesAjouter>
          <Text style={styles.ajouterUnLieu1}>Ajouter un lieu</Text>
        </View>
        <View style={styles.listeDesVilles}>
          <VilleFavoris style={styles.villeFavoris1}></VilleFavoris>
          <VilleFavoris style={styles.villeFavoris}></VilleFavoris>
        </View>
        <View style={styles.nav}>
          <View style={styles.iconesChevronGaucheRow}>
            <IconesChevronGauche
              style={styles.iconesChevronGauche}
            ></IconesChevronGauche>
            <Text style={styles.text}>Favoris</Text>
            <IconesMenu style={styles.iconesMenu}></IconesMenu>
          </View>
        </View>
        <MenuFavoris style={styles.menuFavoris}></MenuFavoris>
        <Interface style={styles.interface}></Interface>
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
    height: 812,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  admob: {
    position: "absolute",
    top: 608,
    left: 0,
    height: 116,
    width: 376,
    opacity: 1,
    backgroundColor: "transparent"
  },
  ajouterUnLieu: {
    position: "absolute",
    top: 400,
    left: 86,
    height: 76,
    width: 203,
    opacity: 1
  },
  iconesAjouter: {
    height: 38,
    width: 38,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 83
  },
  ajouterUnLieu1: {
    height: 28,
    width: 203,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 10
  },
  listeDesVilles: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 200,
    width: 353,
    opacity: 1
  },
  villeFavoris1: {
    height: 93,
    width: 353,
    opacity: 1,
    backgroundColor: "transparent"
  },
  villeFavoris: {
    height: 93,
    width: 353,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 14
  },
  nav: {
    position: "absolute",
    top: 58,
    left: 11,
    height: 36,
    width: 344,
    opacity: 1,
    flexDirection: "row"
  },
  iconesChevronGauche: {
    height: 28,
    width: 28,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 4
  },
  text: {
    height: 36,
    width: 220,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 39
  },
  iconesMenu: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 33,
    marginTop: 6
  },
  iconesChevronGaucheRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  menuFavoris: {
    position: "absolute",
    top: 742,
    left: 0,
    height: 70,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  interface: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 44,
    width: 375,
    opacity: 1,
    backgroundColor: "transparent"
  },
  bgStack: {
    width: 376,
    height: 812
  }
});

export default Favoris;
