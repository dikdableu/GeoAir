import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Bg from "../components/Bg";
import IndiceAir from "../components/IndiceAir";
import Svg, { Path } from "react-native-svg";
import IconesAjouter from "../components/IconesAjouter";
import IconesCouvert from "../components/IconesCouvert";
import Heure01 from "../components/Heure01";
import IconesMenu from "../components/IconesMenu";
import MenuHome from "../components/MenuHome";
import Interface from "../components/Interface";

function Details(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <Bg style={styles.bg}></Bg>
        <View style={styles.card02}>
          <View style={styles.rectangleBlanc}>
            <View style={styles.rect2}>
              <View style={styles.qualiteDeLair}>
                <View style={styles.bonneStackRow}>
                  <View style={styles.bonneStack}>
                    <Text style={styles.bonne}>Bonne</Text>
                    <Text style={styles.qualiteDeLair1}>Qualité de l’air</Text>
                  </View>
                  <IndiceAir style={styles.indiceAir}></IndiceAir>
                </View>
              </View>
              <Svg viewBox="-0.5 -0.5 312 3" style={styles.line}>
                <Path
                  strokeWidth={1}
                  fill="transparent"
                  stroke="rgba(242,242,242,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M0.00 0.50 L310.00 0.50 "
                ></Path>
              </Svg>
              <View style={styles.infosDetails}>
                <View style={styles.vitesseDuVentHumiRow}>
                  <Text style={styles.vitesseDuVentHumi}>
                    Vitesse du vent{"\n"}
                    {"\n"}Humidité{"\n"}
                    {"\n"}Pression{"\n"}
                    {"\n"}Visibilité
                  </Text>
                  <Text style={styles.mS931027HPa}>
                    4.3 m/s{"\n"}
                    {"\n"}93%{"\n"}
                    {"\n"}1027 hPa{"\n"}
                    {"\n"}1900 m
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card01}>
          <View style={styles.rectangleBlanc1}>
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
            <View style={styles.infosEcranDetails}>
              <View style={styles.temperatureRow}>
                <View style={styles.temperature}>
                  <View style={styles.styleStackStack}>
                    <View style={styles.styleStack}>
                      <Text style={styles.style}>10</Text>
                      <Text style={styles.style1}>°</Text>
                    </View>
                    <Text style={styles.c}>C</Text>
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
                <View style={styles.nuageaux}>
                  <View style={styles.nuageuxStack}>
                    <Text style={styles.nuageux}>Nuageux</Text>
                    <IconesCouvert style={styles.iconesCouvert}></IconesCouvert>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.journee}>
              <View style={styles.rectangleDegradeGrisStack}>
                <ImageBackground
                  style={styles.rectangleDegradeGris}
                  imageStyle={styles.rectangleDegradeGris_imageStyle}
                  source={require("../assets/images/Gradient_gymnUDe.png")}
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
        <View style={styles.nav}>
          <View style={styles.geoAirRow}>
            <Text style={styles.geoAir}>GeoAir</Text>
            <IconesMenu style={styles.iconesMenu}></IconesMenu>
          </View>
        </View>
        <View style={styles.admob}>
          <View style={styles.admob1}>
            <View style={styles.rectangleCopy9}>
              <Text style={styles.banniereAdMob}>Bannière AdMob</Text>
            </View>
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
  card02: {
    position: "absolute",
    top: 499,
    left: 11,
    height: 295,
    width: 353,
    opacity: 1
  },
  rectangleBlanc: {
    height: 295,
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
  rect2: {
    height: 218,
    width: 312,
    opacity: 1,
    marginTop: 29,
    marginLeft: 20
  },
  qualiteDeLair: {
    height: 48,
    width: 311,
    opacity: 1,
    flexDirection: "row"
  },
  bonne: {
    position: "absolute",
    top: 22,
    left: 0,
    height: 26,
    width: 147,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(0,221,185,1)",
    fontSize: 20
  },
  qualiteDeLair1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 26,
    width: 147,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  bonneStack: {
    width: 147,
    height: 48
  },
  indiceAir: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 130,
    marginTop: 4
  },
  bonneStackRow: {
    height: 48,
    flexDirection: "row",
    flex: 1
  },
  line: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 18,
    marginLeft: 2
  },
  infosDetails: {
    height: 132,
    width: 311,
    opacity: 1,
    flexDirection: "row",
    marginTop: 17
  },
  vitesseDuVentHumi: {
    height: 132,
    width: 157,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  mS931027HPa: {
    height: 132,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 16,
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  vitesseDuVentHumiRow: {
    height: 132,
    flexDirection: "row",
    flex: 1
  },
  card01: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 353,
    width: 353,
    opacity: 1
  },
  rectangleBlanc1: {
    height: 353,
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
  infosEcranDetails: {
    height: 94,
    width: 344,
    opacity: 1,
    flexDirection: "row",
    marginTop: 23
  },
  temperature: {
    height: 94,
    width: 128,
    opacity: 1
  },
  style: {
    position: "absolute",
    top: 31,
    left: 0,
    height: 63,
    width: 109,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    textAlign: "center",
    color: "rgba(66,77,88,1)",
    fontSize: 82,
    letterSpacing: -11.38888888888889
  },
  style1: {
    position: "absolute",
    top: 0,
    left: 100,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  styleStack: {
    top: 0,
    left: 0,
    width: 119,
    height: 94,
    position: "absolute"
  },
  c: {
    position: "absolute",
    top: 0,
    left: 109,
    height: 52,
    width: 19,
    opacity: 1,
    backgroundColor: "transparent",
    lineHeight: 39,
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  styleStackStack: {
    width: 128,
    height: 94
  },
  minMax: {
    height: 45,
    width: 61,
    opacity: 1,
    marginLeft: 4,
    marginTop: 30
  },
  maxCopy: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 33,
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
    height: 36,
    width: 46,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 13
  },
  minCopy: {
    position: "absolute",
    top: 24,
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
    top: 24,
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
    height: 45
  },
  nuageaux: {
    height: 80,
    width: 104,
    opacity: 1,
    marginLeft: 47,
    marginTop: 2
  },
  nuageux: {
    position: "absolute",
    top: 62,
    left: 0,
    height: 18,
    width: 104,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(127,141,154,1)",
    fontSize: 13
  },
  iconesCouvert: {
    position: "absolute",
    top: 0,
    left: 17,
    height: 70,
    width: 70,
    opacity: 1,
    backgroundColor: "transparent"
  },
  nuageuxStack: {
    width: 104,
    height: 80
  },
  temperatureRow: {
    height: 94,
    flexDirection: "row",
    flex: 1
  },
  journee: {
    height: 105,
    width: 353,
    opacity: 1,
    marginTop: 16
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
  admob: {
    position: "absolute",
    top: 608,
    left: 0,
    height: 116,
    width: 376,
    opacity: 1
  },
  admob1: {
    height: 116,
    width: 376,
    opacity: 1
  },
  rectangleCopy9: {
    height: 116,
    width: 376,
    backgroundColor: "rgba(27,113,156,1)"
  },
  banniereAdMob: {
    height: 86,
    width: 272,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    marginTop: 15,
    marginLeft: 51
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

export default Details;
