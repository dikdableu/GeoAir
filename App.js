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
import IconesMenu from "./src/components/IconesMenu";
import GeoAirLogo from "./src/components/GeoAirLogo";

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
      navigationOptions:{
        headerTitle: (
          <GeoAirLogo/>
        ),
        headerStyle: {
          backgroundColor: 'transparent',
          zIndex: 100,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }
    },
  },
  {headerLayoutPreset: 'center'}
)

const Search = createStackNavigator({
  Search: {
    screen:SearchView,
    navigationOptions:{
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
      ),
      headerTitle: (
        <GeoAirLogo/>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    },
  },
  Detail: {
    screen:DetailView,
    navigationOptions:{
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,marginLeft: 20}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
      ),
      headerTitle: (
        <GeoAirLogo/>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }
  }
},
{headerLayoutPreset: 'center'}
)

const Favoris = createStackNavigator({
  Favorite: {
    screen:FavoriteView,
    navigationOptions:{
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
      ),
      headerTitle: (
        <GeoAirLogo/>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }
  },
  Detail: {
    screen:DetailView,
    navigationOptions:{
      headerBackTitle: null,
      headerBackImage: (<Svg data-layer="635d292b-a36d-476f-869e-ce3aa1193812" style={{opacity: 1,width: 12,height: 17,marginLeft: 20}} preserveAspectRatio="none" viewBox="-7893.37890625 -1843.37890625 9.3642578125 15.727783203125" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7886.57421875 -1828.08935546875 L -7892.939453125 -1834.454345703125 C -7893.232421875 -1834.74755859375 -7893.37890625 -1835.13134765625 -7893.37890625 -1835.515258789062 C -7893.37890625 -1835.899047851562 -7893.232421875 -1836.282836914062 -7892.939453125 -1836.576049804688 L -7886.576171875 -1842.939086914062 C -7885.98974609375 -1843.525512695312 -7885.041015625 -1843.525512695312 -7884.45458984375 -1842.939086914062 C -7883.8681640625 -1842.352661132812 -7883.8681640625 -1841.40380859375 -7884.45458984375 -1840.8173828125 L -7889.7568359375 -1835.515014648438 L -7884.45458984375 -1830.211059570312 C -7883.8681640625 -1829.624633789062 -7883.8681640625 -1828.67578125 -7884.45458984375 -1828.08935546875 C -7884.74658203125 -1827.797241210938 -7885.13037109375 -1827.651123046875 -7885.51416015625 -1827.651123046875 C -7885.8984375 -1827.651123046875 -7886.2822265625 -1827.797241210938 -7886.57421875 -1828.08935546875 Z"/></Svg>
      ),
      headerTitle: (
        <GeoAirLogo/>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }
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
