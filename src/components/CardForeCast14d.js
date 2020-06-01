import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconesCouvert from "./IconesCouvert";
import Svg, { Path } from "react-native-svg";
import IconesChevronGauche from "./IconesChevronGauche";
import IconesSoleil from "./IconesSoleil";

function CardForeCast14d(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangleBlanc}>
        <View style={styles.previsionsStack}>
          <Text style={styles.previsions}>Prévisions sur 14 jours</Text>
          <Text style={styles.leSemaineProchaine}>La semaine prochaine</Text>
        </View>
        <View style={styles.previsionsJours}>
          <View style={styles.jourSemaine28}>
            <View style={styles.jourSemaine6Stack}>
              <View style={styles.jourSemaine6}>
                <View style={styles.jour6ColumnRow}>
                  <View style={styles.jour6Column}>
                    <Text style={styles.jour6}>Jeudi 28</Text>
                    <Text style={styles.meteo6}>Nuageux</Text>
                  </View>
                  <IconesCouvert style={styles.iconesCouvert2}></IconesCouvert>
                  <View style={styles.temperatures6}>
                    <Text style={styles.cCopy12}>13°C</Text>
                    <Text style={styles.cCopy13}>6°C</Text>
                  </View>
                </View>
                <Svg viewBox="-0.5 -0.5 312 3" style={styles.line5}>
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
              <IconesChevronGauche
                style={styles.iconesChevronGauche6}
              ></IconesChevronGauche>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 1
  },
  rectangleBlanc: {
    height: 'auto',
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
  previsions: {
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
  leSemaineProchaine: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 36,
    width: 228,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 20
  },
  previsionsStack: {
    width: 228,
    height: 46,
    marginTop: 24,
    marginLeft: 20
  },
  previsionsJours: {
    height: 'auto',
    width: 316,
    opacity: 1,
    marginTop: 28,
    marginBottom: 10,
    marginLeft: 18,
  },
  jourSemaine28: {
    height: 58,
    width: 316,
    opacity: 1
  },
  jourSemaine6: {
    position: "relative",
    top: 0,
    left: 0,
    height: 58,
    width: 314,
    opacity: 1
  },
  jour6: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo6: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour6Column: {
    width: 154,
    marginTop: 2
  },
  iconesCouvert2: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures6: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy12: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy13: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour6ColumnRow: {
    height: 44,
    flexDirection: "row",
    marginRight: 50
  },
  line5: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 3
  },
  iconesChevronGauche6: {
    position: "absolute",
    top: 8,
    left: 292,
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent"
  },
  jourSemaine6Stack: {
    width: 316,
    height: 58
  },
  jourSemaine30: {
    height: 58,
    opacity: 1,
    marginTop: 14
  },
  jourSemaine4: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 58,
    width: 314,
    opacity: 1
  },
  jour4: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo4: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour4Column: {
    width: 154,
    marginTop: 2
  },
  iconesSoleil2: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures4: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy8: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy9: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour4ColumnRow: {
    height: 44,
    flexDirection: "row",
    marginRight: 50
  },
  line3: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 12,
    marginLeft: 3
  },
  iconesChevronGauche4: {
    position: "absolute",
    top: 8,
    left: 292,
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent"
  },
  jourSemaine4Stack: {
    width: 316,
    height: 58
  },
  jourSemaine31: {
    height: 58,
    opacity: 1,
    marginTop: 14
  },
  jourSemaine3: {
    height: 44,
    opacity: 1,
    flexDirection: "row",
    marginTop: 14
  },
  jour3: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo3: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour3Column: {
    width: 154,
    marginTop: 2
  },
  iconesSoleil1: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures3: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy6: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy7: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour3ColumnRow: {
    height: 44,
    flexDirection: "row",
    marginRight: 50
  },
  line2: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 12,
    marginLeft: 3
  },
  iconesChevronGauche3: {
    position: "absolute",
    top: 9,
    left: 292,
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent"
  },
  jourSemaine3Stack: {
    width: 316,
    height: 58
  },
  jourSemaine1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 58,
    width: 314,
    opacity: 1
  },
  jourSemaine2: {
    height: 58,
    opacity: 1,
    marginTop: 14
  },
  jour2: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo2: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour2Column: {
    width: 154,
    marginTop: 2
  },
  iconesCouvert1: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures2: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy4: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy5: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour2ColumnRow: {
    height: 44,
    flexDirection: "row",
    marginRight: 50
  },
  line1: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 12,
    marginLeft: 3
  },
  iconesChevronGauche2: {
    position: "absolute",
    top: 9,
    left: 292,
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent"
  },
  jourSemaine2Stack: {
    width: 316,
    height: 58
  },
  jour1: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo1: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour1Column: {
    width: 154,
    marginTop: 2
  },
  iconesSoleil: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures1: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy2: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy3: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour1ColumnRow: {
    height: 44,
    flexDirection: "row",
    marginRight: 50
  },
  line: {
    height: 3,
    width: 312,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 12,
    marginLeft: 3
  },
  iconesChevronGauche1: {
    position: "absolute",
    top: 9,
    left: 292,
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent"
  },
  jourSemaine1Stack: {
    width: 316,
    height: 58
  },
  jourSemaine: {
    height: 44,
    width: 264,
    opacity: 1
  },
  jour: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jourColumn: {
    width: 154,
    marginTop: 2
  },
  iconesCouvert: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
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
  jourColumnRow: {
    height: 44,
    flexDirection: "row"
  },
  iconesChevronGauche: {
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      }
    ],
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 28,
    marginTop: 9
  },
  jourSemaineRow: {
    height: 44,
    flexDirection: "row",
    flex: 1
  }
});

export default CardForeCast14d;
