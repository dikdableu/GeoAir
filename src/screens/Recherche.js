import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Bg from "../components/Bg";
import Admob from "../components/Admob";
import IconesCouvert from "../components/IconesCouvert";
import IndiceAir from "../components/IndiceAir";
import Svg, { Path } from "react-native-svg";
import IconesPluie from "../components/IconesPluie";
import IndiceAir3 from "../components/IndiceAir3";
import IconesSoleil from "../components/IconesSoleil";
import IndiceAir2 from "../components/IndiceAir2";
import IconesLoupe from "../components/IconesLoupe";
import IconesLocaliser from "../components/IconesLocaliser";
import IconesChevronGauche from "../components/IconesChevronGauche";
import IconesMenu from "../components/IconesMenu";
import MenuRecherche from "../components/MenuRecherche";
import Interface from "../components/Interface";

function Recherche(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bgStack}>
        <Bg style={styles.bg}></Bg>
        <Admob style={styles.admob}></Admob>
        <View style={styles.resultatsDeRecherche}>
          <View style={styles.rectangleBlanc}>
            <View style={styles.villeRecherche01}>
              <View style={styles.ville2Row}>
                <View style={styles.ville2}>
                  <Text style={styles.versaillesCopy}>Versailles</Text>
                  <Text style={styles.yvelinesFranceCopy}>
                    Yvelines, France
                  </Text>
                </View>
                <IconesCouvert style={styles.iconesCouvert}></IconesCouvert>
                <View style={styles.temperatures2}>
                  <Text style={styles.cCopy}>13°C</Text>
                  <Text style={styles.cCopy1}>6°C</Text>
                </View>
                <IndiceAir style={styles.indiceAir}></IndiceAir>
              </View>
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
            </View>
            <View style={styles.villeRecherche02}>
              <View style={styles.ville1Row}>
                <View style={styles.ville1}>
                  <Text style={styles.verone}>Vérone</Text>
                  <Text style={styles.veronaItalie}>Verona, Italie</Text>
                </View>
                <IconesPluie style={styles.iconesPluie}></IconesPluie>
                <View style={styles.temperatures1}>
                  <Text style={styles.c2}>12°C</Text>
                  <Text style={styles.c3}>4°C</Text>
                </View>
                <IndiceAir3 style={styles.indiceAir3}></IndiceAir3>
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
            </View>
            <View style={styles.villeRecherche03}>
              <View style={styles.villeRow}>
                <View style={styles.ville}>
                  <Text style={styles.verdun}>Verdun</Text>
                  <Text style={styles.montrealQcCanada}>
                    Montréal, QC, Canada
                  </Text>
                </View>
                <IconesSoleil style={styles.iconesSoleil}></IconesSoleil>
                <View style={styles.temperatures}>
                  <Text style={styles.c}>17°C</Text>
                  <Text style={styles.c1}>8°C</Text>
                </View>
                <IndiceAir2 style={styles.indiceAir2}></IndiceAir2>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.rectangle}>
            <View style={styles.iconesLoupeRow}>
              <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
              <View style={styles.verStack}>
                <Text style={styles.ver}>Ver</Text>
                <Svg viewBox="-0.5 -0.5 3 38" style={styles.line2}>
                  <Path
                    strokeWidth={1}
                    fill="transparent"
                    stroke="rgba(151,151,151,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.50 0.45 L0.50 35.55 "
                  ></Path>
                </Svg>
              </View>
              <IconesLocaliser style={styles.iconesLocaliser}></IconesLocaliser>
            </View>
          </View>
        </View>
        <View style={styles.nav}>
          <View style={styles.iconesChevronGaucheRow}>
            <IconesChevronGauche
              style={styles.iconesChevronGauche}
            ></IconesChevronGauche>
            <Text style={styles.recherche1}>Recherche</Text>
            <IconesMenu style={styles.iconesMenu}></IconesMenu>
          </View>
        </View>
        <MenuRecherche style={styles.menuRecherche}></MenuRecherche>
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
  resultatsDeRecherche: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 337,
    width: 353,
    opacity: 1
  },
  rectangleBlanc: {
    height: 337,
    width: 353,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,1)"
  },
  villeRecherche01: {
    height: 69,
    width: 315,
    opacity: 1,
    marginTop: 86,
    marginLeft: 18
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
  iconesCouvert: {
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
  indiceAir: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  ville2Row: {
    height: 44,
    flexDirection: "row"
  },
  line1: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 23,
    marginLeft: 4
  },
  villeRecherche02: {
    height: 69,
    width: 315,
    opacity: 1,
    marginTop: 22,
    marginLeft: 18
  },
  ville1: {
    height: 44,
    width: 154,
    opacity: 1
  },
  verone: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  veronaItalie: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesPluie: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 17,
    marginTop: 2
  },
  temperatures1: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 1
  },
  c2: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  c3: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir3: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  ville1Row: {
    height: 44,
    flexDirection: "row"
  },
  line: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 23,
    marginLeft: 4
  },
  villeRecherche03: {
    height: 44,
    width: 315,
    opacity: 1,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 18
  },
  ville: {
    height: 44,
    width: 154,
    opacity: 1
  },
  verdun: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 18
  },
  montrealQcCanada: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(127,141,154,1)",
    fontSize: 12,
    marginTop: 2
  },
  iconesSoleil: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 16,
    marginTop: 2
  },
  temperatures: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 2
  },
  c: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  c1: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  indiceAir2: {
    height: 44,
    width: 34,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 20
  },
  villeRow: {
    height: 44,
    flexDirection: "row",
    flex: 1
  },
  rect2: {
    position: "absolute",
    top: 132,
    left: 11,
    height: 63,
    width: 353,
    opacity: 1
  },
  rectangle: {
    height: 63,
    width: 353,
    borderRadius: 31.5,
    shadowColor: "rgba(0,0,0,0.06924715909090909)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconesLoupe: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginTop: 6
  },
  ver: {
    position: "absolute",
    top: 5,
    left: 0,
    height: 26,
    width: 63,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 21
  },
  line2: {
    position: "absolute",
    height: 38,
    width: 3,
    top: 0,
    left: 37,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  verStack: {
    width: 63,
    height: 38,
    marginLeft: 14
  },
  iconesLocaliser: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 185,
    marginTop: 6
  },
  iconesLoupeRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 17,
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
  recherche1: {
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
  menuRecherche: {
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

export default Recherche;
