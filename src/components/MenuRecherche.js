import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import IconesHome from "./IconesHome";
import IconesFavoris from "./IconesFavoris";
import IconesLoupe from "./IconesLoupe";
import Svg, { Path  } from "react-native-svg";

function MenuRecherche(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.menuBas}>
        <View style={styles.fondMenu}>
          <View style={styles.iconesHomeRow}>
            <IconesHome style={styles.iconesHome}></IconesHome>
            <IconesFavoris style={styles.iconesFavoris}></IconesFavoris>
            <IconesLoupe style={styles.iconesLoupe}></IconesLoupe>
          </View>
          <Svg style={{width: '100%', height: '100%'}} viewBox="0 0 6 6" style={styles.oval}>
            <Path scale={props.scale}
              strokeWidth={0}
              fill="rgba(70,192,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M3.00 6.00 C4.66 6.00 6.00 4.66 6.00 3.00 C6.00 1.34 4.66 0.00 3.00 0.00 C1.34 0.00 0.00 1.34 0.00 3.00 C0.00 4.66 1.34 6.00 3.00 6.00 Z"
            > </Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuBas: {
    height: 70,
    width: 375,
    opacity: 1
  },
  fondMenu: {
    height: 70,
    width: 375,
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    shadowColor: "rgba(0,0,0,0.1115876311188811)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  iconesHome: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent"
  },
  iconesFavoris: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 92
  },
  iconesLoupe: {
    height: 24,
    width: 24,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 94
  },
  iconesHomeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 60,
    marginRight: 57
  },
  oval: {
    height: 6,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 302
  }
});

export default MenuRecherche;
