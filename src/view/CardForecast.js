import React from 'react';
import { AppRegistry,
  StyleSheet,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
  } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Timestamp from 'react-timestamp';

class CardForecast extends React.Component {
  render() {
    return (
      <View style={styles.jourSemaine21}>
        <View style={styles.jourSemaine13Row}>
          <View style={styles.jourSemaine13}>
            <View style={styles.jour13ColumnRow}>
              <View style={styles.jour13Column}>
                <Text style={styles.jour13}>Jeudi 21</Text>
                <Text style={styles.meteo13}>Nuageux</Text>
              </View>
              <IconesCouvert
                style={styles.iconesCouvert5}
              ></IconesCouvert>
              <View style={styles.temperatures13}>
                <Text style={styles.cCopy26}>13°C</Text>
                <Text style={styles.cCopy27}>6°C</Text>
              </View>
            </View>
          </View>
          <IconesChevronGauche
            style={styles.iconesChevronGauche13}
          ></IconesChevronGauche>
        </View>
        <View style={styles.infosDetails}>
          <ImageBackground
            style={styles.rectangleDegradeGris}
            imageStyle={styles.rectangleDegradeGris_imageStyle}
            source={require("../assets/images/Gradient_DhBx3n5.png")}
          >
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
          </ImageBackground>
        </View>
      </View>
    );
  }
};




const styles = StyleSheet.create({
  jourSemaine21: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 216,
    width: 353,
    opacity: 1
  },
  jourSemaine13: {
    height: 44,
    width: 264,
    opacity: 1
  },
  jour13: {
    height: 23,
    width: 154,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  meteo13: {
    height: 19,
    width: 150,
    opacity: 1,
    backgroundColor: "transparent",
    color: "rgba(132,154,165,1)",
    fontSize: 12
  },
  jour13Column: {
    width: 154,
    marginTop: 2
  },
  iconesCouvert5: {
    height: 40,
    width: 40,
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 11,
    marginTop: 2
  },
  temperatures13: {
    height: 44,
    width: 49,
    opacity: 1,
    marginLeft: 10
  },
  cCopy26: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(66,77,88,1)",
    fontSize: 16
  },
  cCopy27: {
    height: 22,
    width: 49,
    opacity: 1,
    backgroundColor: "transparent",
    textAlign: "right",
    color: "rgba(180,195,210,1)",
    fontSize: 16
  },
  jour13ColumnRow: {
    height: 44,
    flexDirection: "row"
  },
  iconesChevronGauche13: {
    height: 24,
    width: 24,
    transform: [
      {
        rotate: "-90deg"
      },
      {
        scaleY: -1
      }
    ],
    opacity: 1,
    backgroundColor: "transparent",
    marginLeft: 28,
    marginTop: 9
  },
  jourSemaine13Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 18,
    marginRight: 19
  },
  infosDetails: {
    height: 159,
    width: 353,
    opacity: 1,
    marginTop: 13
  },
  rectangleDegradeGris: {
    height: 159,
    width: 353,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  rectangleDegradeGris_imageStyle: {},
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
    flex: 1,
    marginRight: 22,
    marginLeft: 20,
    marginTop: 17
  },
});

export default CardForecast;
