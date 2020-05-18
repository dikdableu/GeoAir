import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesAjouter from "../components/IconesAjouter";
import IconesCouvert from "../components/IconesCouvert";
import IndiceAir from "../components/IndiceAir";
import Heure01 from "../components/Heure01";
import IconesActualiser from "../components/IconesActualiser";
import IconesMenu from "../components/IconesMenu";
import MenuHome from "../components/MenuHome";
import Interface from "../components/Interface";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <Bg style={styles.bg}></Bg>
        <Admob style={styles.admob}></Admob>
        <View style={styles.cardContenu}>
          <View style={styles.rectangleBlanc}>
            <View style={styles.ville}>
              <View style={styles.rectangle}>
                <View style={styles.ville1Row}>
                  <View style={styles.ville1}>
                    <View style={styles.yvelinesFranceStack}>
                      <Text style={styles.yvelinesFrance}>
                        Yvelines, France
                      </Text>
                      <Text style={styles.versailles}>Versailles</Text>
                    </View>
                  </View>
                  <IconesAjouter style={styles.iconesAjouter}></IconesAjouter>
                </View>
              </View>
            </View>
            <View style={styles.infos}>
              <View style={styles.nuageuxRow}>
                <View style={styles.nuageux}>
                  <IconesCouvert style={styles.iconesCouvert}></IconesCouvert>
                  <Text style={styles.nuageux1}>Nuageux</Text>
                </View>
                <View style={styles.temperature}>
                  <View style={styles.styleRow}>
                    <Text style={styles.style}>10</Text>
                    <View style={styles.cStack}>
                      <Text style={styles.c}>C</Text>
                      <Text style={styles.style1}>°</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.minMax}>
                  <View style={styles.maxCopyStack}>
                    <Text style={styles.maxCopy}>MAX</Text>
                    <Text style={styles.cCopy}>13°C</Text>
                    <Text style={styles.minCopy}>MIN</Text>
                    <Text style={styles.cCopy1}>6°C</Text>
                  </View>
                </View>
                <IndiceAir style={styles.indiceAir}></IndiceAir>
              </View>
            </View>
            <View style={styles.journee}>
              <View style={styles.rectangleDegradeGrisStack}>
                <ImageBackground
                  style={styles.rectangleDegradeGris}
                  imageStyle={styles.rectangleDegradeGris_imageStyle}
                  source={require("../assets/images/Gradient_XefJXP1.png")}
                ></ImageBackground>
                <Heure01 style={styles.heure01}></Heure01>
                <Heure01 style={styles.heure011}></Heure01>
                <Heure01 style={styles.heure012}></Heure01>
                <Heure01 style={styles.heure013}></Heure01>
                <Heure01 style={styles.heure014}></Heure01>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aProximite}>
          <View style={styles.lieuxAProximiteRow}>
            <Text style={styles.lieuxAProximite}>LIEUX À PROXIMITÉ</Text>
            <View style={styles.btnActualiser}>
              <View style={styles.rectangle1}>
                <View style={styles.actualiserRow}>
                  <Text style={styles.actualiser}>Actualiser</Text>
                  <IconesActualiser
                    style={styles.iconesActualiser}
                  ></IconesActualiser>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.nav}>
          <View style={styles.geoAirRow}>
            <Text style={styles.geoAir}>GeoAir</Text>
            <IconesMenu style={styles.iconesMenu}></IconesMenu>
          </View>
        </View>
        <MenuHome style={styles.menuHome}></MenuHome>
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
  cardContenu: {
    position: "absolute",
    top: 195,
    left: 11,
    height: 348,
    width: 353,
    opacity: 1
  },
  rectangleBlanc: {
    height: 348,
    width: 353,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  ville: {
    height: 93,
    width: 353,
    opacity: 1
  },
  rectangle: {
    height: 93,
    width: 353,
    borderRadius: 28,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  ville1: {
    height: 46,
    width: 150,
    opacity: 1
  },
  yvelinesFrance: {
    position: "absolute",
    top: 27,
    left: 0,
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 14
  },
  versailles: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  yvelinesFranceStack: {
    width: 150,
    height: 46
  },
  iconesAjouter: {
    height: 38,
    width: 38,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 122,
    marginTop: 4
  },
  ville1Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 23,
    marginLeft: 20,
    marginTop: 24
  },
  infos: {
    height: 65,
    width: 319,
    opacity: 1,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 11
  },
  nuageux: {
    height: 58,
    width: 76,
    opacity: 1,
    marginTop: 4
  },
  iconesCouvert: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 18
  },
  nuageux1: {
    height: 18,
    width: 76,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  temperature: {
    height: 65,
    width: 86,
    opacity: 1,
    flexDirection: "row",
    marginLeft: 14
  },
  style: {
    height: 45,
    width: 56,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    textAlign: "center",
    color: "rgba(66,77,88,1)",
    fontSize: 64,
    letterSpacing: -8.88888888888889,
    marginTop: 20
  },
  c: {
    position: "absolute",
    top: 0,
    left: 9,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  style1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  cStack: {
    width: 28,
    height: 52,
    marginLeft: 2
  },
  styleRow: {
    height: 65,
    flexDirection: "row",
    flex: 1
  },
  minMax: {
    height: 40,
    width: 61,
    opacity: 1,
    marginLeft: 8,
    marginTop: 17
  },
  maxCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 22,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  cCopy: {
    position: "absolute",
    top: 0,
    left: 15,
    height: 24,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  minCopy: {
    position: "absolute",
    top: 19,
    left: 0,
    height: 19,
    width: 52,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  cCopy1: {
    position: "absolute",
    top: 19,
    left: 15,
    height: 21,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  maxCopyStack: {
    width: 61,
    height: 40
  },
  indiceAir: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 40,
    marginTop: 13
  },
  nuageuxRow: {
    height: 65,
    flexDirection: "row",
    flex: 1
  },
  journee: {
    height: 105,
    width: 353,
    opacity: 1,
    marginTop: 32
  },
  rectangleDegradeGris: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 34,
    width: 353,
    backgroundColor: "transparent"
  },
  rectangleDegradeGris_imageStyle: {
    opacity: 1
  },
  heure01: {
    position: "absolute",
    top: 11,
    left: 293,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure011: {
    position: "absolute",
    top: 11,
    left: 224,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure012: {
    position: "absolute",
    top: 11,
    left: 155,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure013: {
    position: "absolute",
    top: 11,
    left: 87,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  heure014: {
    position: "absolute",
    top: 11,
    left: 18,
    height: 94,
    width: 41,
    opacity: 1,
    backgroundColor: "transparent"
  },
  rectangleDegradeGrisStack: {
    width: 353,
    height: 105
  },
  aProximite: {
    position: "absolute",
    top: 132,
    left: 20,
    height: 38,
    width: 335,
    opacity: 1,
    flexDirection: "row"
  },
  lieuxAProximite: {
    height: 38,
    width: 167,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 35,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    letterSpacing: 1.788888888888888
  },
  btnActualiser: {
    height: 36,
    width: 130,
    opacity: 1,
    marginLeft: 38,
    marginTop: 1
  },
  rectangle1: {
    height: 36,
    width: 130,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.206635974702381)",
    flexDirection: "row"
  },
  actualiser: {
    height: 27,
    width: 75,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  iconesActualiser: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 4,
    marginTop: 1
  },
  actualiserRow: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 17,
    marginTop: 5
  },
  lieuxAProximiteRow: {
    height: 38,
    flexDirection: "row",
    flex: 1
  },
  nav: {
    position: "absolute",
    top: 58,
    left: 113,
    height: 36,
    width: 242,
    opacity: 1,
    flexDirection: "row"
  },
  geoAir: {
    height: 36,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  iconesMenu: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 68,
    marginTop: 6
  },
  geoAirRow: {
    height: 36,
    flexDirection: "row",
    flex: 1
  },
  menuHome: {
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

export default Home;
