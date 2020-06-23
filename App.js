import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, PixelRatio } from 'react-native';

import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import FavoriteView from './src/view/FavoriteView';
import DetailView from './src/view/DetailView'
import IconTab from './src/view/IconTab.js'
import IconesHome from "./src/components/IconesHome";
import IconesFavoris from "./src/components/IconesFavoris";
import IconesLoupe from "./src/components/IconesLoupe";
import IconBag from "./src/components/IconBag";
import GeoAirLogo from "./src/components/GeoAirLogo";
import ModalPurchase from './src/components/ModalPurchase'


import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Notifications } from 'expo';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import { Provider } from 'react-redux'
import Store from './store/configureStore'

import * as DBLocal from './db/DBLocal.js'
import * as SQLite from "expo-sqlite";

var {height, width} = Dimensions.get('window');
var ratio = PixelRatio.get()
var indiceScreen = ratio <= 3 ? 1 : ratio > 3 ? 1.2 : 0.2;



const Home = createStackNavigator(
  {
    Home: {
      screen:HomeView,
    },
  },
  {headerLayoutPreset: 'center'}
)

const Search = createStackNavigator({
  Search: {
    screen:SearchView,
  },
  Detail: {
    screen:DetailView,
  }
},
{headerLayoutPreset: 'center'}
)

const Favoris = createStackNavigator({
  Favorite: {
    screen:FavoriteView,
  },
  Detail: {
    screen:DetailView,
  },
},
{headerLayoutPreset: 'center'}
)

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions: {
      tabBarIcon: ({focused}) => { return (focused ? (<IconesHome active={true} />) : (<IconesHome />))},
     }
  },
  Favoris: {screen: Favoris,
    navigationOptions: {
      tabBarIcon: ({focused}) => { return (focused ? (<IconesFavoris active={true} />) : (<IconesFavoris />))},
    }
  },
  Search: {screen: Search,
    navigationOptions: {
      tabBarIcon: ({focused}) => { return (focused ? (<IconesLoupe active={true} />) : (<IconesLoupe />))},
    }
  }
},
{
  tabBarOptions: {
    showLabel: false, // On masque les titres
    showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    tabStyle: {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    style:{
      height: height / 14,
      width: 'auto',
      flexDirection:'row',
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      position: "absolute",
      backgroundColor: "rgba(255,255,255,1)",
      borderTopWidth: 0,
      shadowColor: "rgba(0,0,0,0.1115876311188811)",
      shadowOffset: {
        height: 2,
        width: 0
      },
      shadowRadius: 32,
      shadowOpacity: 1,
    },
  }
})

const fetchFonts = () => {
  return Font.loadAsync({
  'OpenSans-Bold': require('./src/assets/OpenSans-Bold.ttf'),
  'OpenSans-BoldItalic': require('./src/assets/OpenSans-BoldItalic.ttf'),
  'OpenSans-ExtraBold': require('./src/assets/OpenSans-ExtraBold.ttf'),
  'OpenSans-ExtraBoldItalic': require('./src/assets/OpenSans-ExtraBoldItalic.ttf'),
  'OpenSans-Italic': require('./src/assets/OpenSans-Italic.ttf'),
  'OpenSans-Light': require('./src/assets/OpenSans-Light.ttf'),
  'OpenSans-LightItalic': require('./src/assets/OpenSans-LightItalic.ttf'),
  'OpenSans-Regular': require('./src/assets/OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('./src/assets/OpenSans-Semibold.ttf'),
  'OpenSans-SemiBoldItalic': require('./src/assets/OpenSans-SemiboldItalic.ttf'),
  });
};


const AppContainer = createAppContainer(TabNavigator);

const App = (props) => {

  const [dataLoaded, setDataLoaded] = useState(false)

  useMemo(() => {
    DBLocal.createDB()
  }, [])

  if(!dataLoaded){
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataLoaded(true)}
        />
      );
    }
  return (
    <Provider store={Store}>
      <SafeAreaProvider><AppContainer /></SafeAreaProvider>
    </Provider>
    )
}


export default App
