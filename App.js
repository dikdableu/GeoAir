import React,{ useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import FavoriteView from './src/view/FavoriteView';
import DetailView from './src/view/DetailView'
import IconTab from './src/view/IconTab.js'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { withAuthenticator } from 'aws-amplify-react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { config } from './config/config.js';

import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

import { Provider } from 'react-redux'
import Store from './store/configureStore'

Amplify.configure(config.cognito);

var {height, width} = Dimensions.get('window');
var indiceHeight = width < height ? 812/height : 375/height
var indiceWidth = width < height ? 375/width : 812/width
var indiceScreen = indiceWidth+indiceHeight >= 2 ? 1 : (indiceWidth + indiceHeight) - 0.2

const screenWidth = Math.round(Dimensions.get('window').width);


const Home = createStackNavigator(
  {
    Home: {
      screen:HomeView,
      navigationOptions:{
        headerTitle: (
          <Text style={{fontFamily: "roboto-bold",fontSize: 20 * indiceScreen, color: "black", textAlign: 'center'}}>GeoAir</Text>
        ),
        headerRight: (
          <TouchableOpacity onPress={() => alert('test')} style={{width: 15, marginRight: 20}}>
            <Svg data-layer="ff60b171-b3c7-492d-a6b3-34630845296c" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7879 -1844.000732421875 12.0009765625 16.9993896484375" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7877.4990234375 -1827.001342773438 C -7878.32958984375 -1827.001342773438 -7879 -1827.671630859375 -7879 -1828.500122070312 C -7879 -1829.32861328125 -7878.32958984375 -1830.0009765625 -7877.4990234375 -1830.0009765625 L -7868.5 -1830.0009765625 C -7867.67138671875 -1830.0009765625 -7866.9990234375 -1829.32861328125 -7866.9990234375 -1828.500122070312 C -7866.9990234375 -1827.671630859375 -7867.67138671875 -1827.001342773438 -7868.5 -1827.001342773438 L -7877.4990234375 -1827.001342773438 Z M -7877.4990234375 -1834.001220703125 C -7878.32958984375 -1834.001220703125 -7879 -1834.671508789062 -7879 -1835.5 C -7879 -1836.328491210938 -7878.32958984375 -1837.000854492188 -7877.4990234375 -1837.000854492188 L -7868.5 -1837.000854492188 C -7867.67138671875 -1837.000854492188 -7866.9990234375 -1836.328491210938 -7866.9990234375 -1835.5 C -7866.9990234375 -1834.671508789062 -7867.67138671875 -1834.001220703125 -7868.5 -1834.001220703125 L -7877.4990234375 -1834.001220703125 Z M -7877.4990234375 -1841.001098632812 C -7878.32958984375 -1841.001098632812 -7879 -1841.67138671875 -7879 -1842.499877929688 C -7879 -1843.328369140625 -7878.32958984375 -1844.000732421875 -7877.4990234375 -1844.000732421875 L -7868.5 -1844.000732421875 C -7867.67138671875 -1844.000732421875 -7866.9990234375 -1843.328369140625 -7866.9990234375 -1842.499877929688 C -7866.9990234375 -1841.67138671875 -7867.67138671875 -1841.001098632812 -7868.5 -1841.001098632812 L -7877.4990234375 -1841.001098632812 Z"  /></Svg>
          </TouchableOpacity>
        ),
        headerStyle: {
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
        <Text style={{fontFamily: "roboto-bold",fontSize: 20 * indiceScreen, color: "black"}}>GeoAir</Text>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => alert('test')} style={{width: 15, marginRight: 20}}>
          <Svg data-layer="ff60b171-b3c7-492d-a6b3-34630845296c" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7879 -1844.000732421875 12.0009765625 16.9993896484375" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7877.4990234375 -1827.001342773438 C -7878.32958984375 -1827.001342773438 -7879 -1827.671630859375 -7879 -1828.500122070312 C -7879 -1829.32861328125 -7878.32958984375 -1830.0009765625 -7877.4990234375 -1830.0009765625 L -7868.5 -1830.0009765625 C -7867.67138671875 -1830.0009765625 -7866.9990234375 -1829.32861328125 -7866.9990234375 -1828.500122070312 C -7866.9990234375 -1827.671630859375 -7867.67138671875 -1827.001342773438 -7868.5 -1827.001342773438 L -7877.4990234375 -1827.001342773438 Z M -7877.4990234375 -1834.001220703125 C -7878.32958984375 -1834.001220703125 -7879 -1834.671508789062 -7879 -1835.5 C -7879 -1836.328491210938 -7878.32958984375 -1837.000854492188 -7877.4990234375 -1837.000854492188 L -7868.5 -1837.000854492188 C -7867.67138671875 -1837.000854492188 -7866.9990234375 -1836.328491210938 -7866.9990234375 -1835.5 C -7866.9990234375 -1834.671508789062 -7867.67138671875 -1834.001220703125 -7868.5 -1834.001220703125 L -7877.4990234375 -1834.001220703125 Z M -7877.4990234375 -1841.001098632812 C -7878.32958984375 -1841.001098632812 -7879 -1841.67138671875 -7879 -1842.499877929688 C -7879 -1843.328369140625 -7878.32958984375 -1844.000732421875 -7877.4990234375 -1844.000732421875 L -7868.5 -1844.000732421875 C -7867.67138671875 -1844.000732421875 -7866.9990234375 -1843.328369140625 -7866.9990234375 -1842.499877929688 C -7866.9990234375 -1841.67138671875 -7867.67138671875 -1841.001098632812 -7868.5 -1841.001098632812 L -7877.4990234375 -1841.001098632812 Z"  /></Svg>
        </TouchableOpacity>
      ),
      headerStyle: {
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
        <Text style={{fontFamily: "roboto-bold",fontSize: 20* indiceScreen, color: "black"}}>GeoAir</Text>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => alert('test')} style={{width: 15, marginRight: 20}}>
          <Svg data-layer="ff60b171-b3c7-492d-a6b3-34630845296c" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7879 -1844.000732421875 12.0009765625 16.9993896484375" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7877.4990234375 -1827.001342773438 C -7878.32958984375 -1827.001342773438 -7879 -1827.671630859375 -7879 -1828.500122070312 C -7879 -1829.32861328125 -7878.32958984375 -1830.0009765625 -7877.4990234375 -1830.0009765625 L -7868.5 -1830.0009765625 C -7867.67138671875 -1830.0009765625 -7866.9990234375 -1829.32861328125 -7866.9990234375 -1828.500122070312 C -7866.9990234375 -1827.671630859375 -7867.67138671875 -1827.001342773438 -7868.5 -1827.001342773438 L -7877.4990234375 -1827.001342773438 Z M -7877.4990234375 -1834.001220703125 C -7878.32958984375 -1834.001220703125 -7879 -1834.671508789062 -7879 -1835.5 C -7879 -1836.328491210938 -7878.32958984375 -1837.000854492188 -7877.4990234375 -1837.000854492188 L -7868.5 -1837.000854492188 C -7867.67138671875 -1837.000854492188 -7866.9990234375 -1836.328491210938 -7866.9990234375 -1835.5 C -7866.9990234375 -1834.671508789062 -7867.67138671875 -1834.001220703125 -7868.5 -1834.001220703125 L -7877.4990234375 -1834.001220703125 Z M -7877.4990234375 -1841.001098632812 C -7878.32958984375 -1841.001098632812 -7879 -1841.67138671875 -7879 -1842.499877929688 C -7879 -1843.328369140625 -7878.32958984375 -1844.000732421875 -7877.4990234375 -1844.000732421875 L -7868.5 -1844.000732421875 C -7867.67138671875 -1844.000732421875 -7866.9990234375 -1843.328369140625 -7866.9990234375 -1842.499877929688 C -7866.9990234375 -1841.67138671875 -7867.67138671875 -1841.001098632812 -7868.5 -1841.001098632812 L -7877.4990234375 -1841.001098632812 Z"  /></Svg>
        </TouchableOpacity>
      ),
      headerStyle: {
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
        <Text style={{fontFamily: "roboto-bold",fontSize: 20* indiceScreen, color: "black"}}>GeoAir</Text>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => alert('test')} style={{width: 15, marginRight: 20}}>
          <Svg data-layer="ff60b171-b3c7-492d-a6b3-34630845296c" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7879 -1844.000732421875 12.0009765625 16.9993896484375" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7877.4990234375 -1827.001342773438 C -7878.32958984375 -1827.001342773438 -7879 -1827.671630859375 -7879 -1828.500122070312 C -7879 -1829.32861328125 -7878.32958984375 -1830.0009765625 -7877.4990234375 -1830.0009765625 L -7868.5 -1830.0009765625 C -7867.67138671875 -1830.0009765625 -7866.9990234375 -1829.32861328125 -7866.9990234375 -1828.500122070312 C -7866.9990234375 -1827.671630859375 -7867.67138671875 -1827.001342773438 -7868.5 -1827.001342773438 L -7877.4990234375 -1827.001342773438 Z M -7877.4990234375 -1834.001220703125 C -7878.32958984375 -1834.001220703125 -7879 -1834.671508789062 -7879 -1835.5 C -7879 -1836.328491210938 -7878.32958984375 -1837.000854492188 -7877.4990234375 -1837.000854492188 L -7868.5 -1837.000854492188 C -7867.67138671875 -1837.000854492188 -7866.9990234375 -1836.328491210938 -7866.9990234375 -1835.5 C -7866.9990234375 -1834.671508789062 -7867.67138671875 -1834.001220703125 -7868.5 -1834.001220703125 L -7877.4990234375 -1834.001220703125 Z M -7877.4990234375 -1841.001098632812 C -7878.32958984375 -1841.001098632812 -7879 -1841.67138671875 -7879 -1842.499877929688 C -7879 -1843.328369140625 -7878.32958984375 -1844.000732421875 -7877.4990234375 -1844.000732421875 L -7868.5 -1844.000732421875 C -7867.67138671875 -1844.000732421875 -7866.9990234375 -1843.328369140625 -7866.9990234375 -1842.499877929688 C -7866.9990234375 -1841.67138671875 -7867.67138671875 -1841.001098632812 -7868.5 -1841.001098632812 L -7877.4990234375 -1841.001098632812 Z"  /></Svg>
        </TouchableOpacity>
      ),
      headerStyle: {
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
        <Text style={{fontFamily: "roboto-bold",fontSize: 20* indiceScreen, color: "black"}}>GeoAir</Text>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => alert('test')} style={{width: 15, marginRight: 20}}>
          <Svg data-layer="ff60b171-b3c7-492d-a6b3-34630845296c" style={{opacity: 1,width: 12,height: 17,}} preserveAspectRatio="none" viewBox="-7879 -1844.000732421875 12.0009765625 16.9993896484375" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -7877.4990234375 -1827.001342773438 C -7878.32958984375 -1827.001342773438 -7879 -1827.671630859375 -7879 -1828.500122070312 C -7879 -1829.32861328125 -7878.32958984375 -1830.0009765625 -7877.4990234375 -1830.0009765625 L -7868.5 -1830.0009765625 C -7867.67138671875 -1830.0009765625 -7866.9990234375 -1829.32861328125 -7866.9990234375 -1828.500122070312 C -7866.9990234375 -1827.671630859375 -7867.67138671875 -1827.001342773438 -7868.5 -1827.001342773438 L -7877.4990234375 -1827.001342773438 Z M -7877.4990234375 -1834.001220703125 C -7878.32958984375 -1834.001220703125 -7879 -1834.671508789062 -7879 -1835.5 C -7879 -1836.328491210938 -7878.32958984375 -1837.000854492188 -7877.4990234375 -1837.000854492188 L -7868.5 -1837.000854492188 C -7867.67138671875 -1837.000854492188 -7866.9990234375 -1836.328491210938 -7866.9990234375 -1835.5 C -7866.9990234375 -1834.671508789062 -7867.67138671875 -1834.001220703125 -7868.5 -1834.001220703125 L -7877.4990234375 -1834.001220703125 Z M -7877.4990234375 -1841.001098632812 C -7878.32958984375 -1841.001098632812 -7879 -1841.67138671875 -7879 -1842.499877929688 C -7879 -1843.328369140625 -7878.32958984375 -1844.000732421875 -7877.4990234375 -1844.000732421875 L -7868.5 -1844.000732421875 C -7867.67138671875 -1844.000732421875 -7866.9990234375 -1843.328369140625 -7866.9990234375 -1842.499877929688 C -7866.9990234375 -1841.67138671875 -7867.67138671875 -1841.001098632812 -7868.5 -1841.001098632812 L -7877.4990234375 -1841.001098632812 Z"  /></Svg>
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomWidth: 0,
      },
    }
  },
},
{headerLayoutPreset: 'center'}
)

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('./assets/Roboto-Bold.ttf'),
  'roboto-italic': require('./assets/Roboto-Italic.ttf'),
  'roboto-regular': require('./assets/Roboto-Regular.ttf')
  });
};

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions: {
      tabBarLabel: 'Accueil',
     }
  },
  Favoris: {screen: Favoris,
    navigationOptions: {
      tabBarLabel: 'Favoris',
    }
  },
  Search: {screen: Search,
    navigationOptions: {
      tabBarLabel: '+ Ajouter une ville',
    }
  }
},
{
  tabBarOptions: {
    showLabel: true, // On masque les titres
    showIcon: false, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    style:{
      borderTopWidth: 0,
    },
    labelStyle: {
      fontFamily: "roboto-bold",
      fontSize: 13.5 * indiceScreen,
      left: -10
    },
    activeTintColor: '#2A2C35',
    inactiveTintColor: '#9FA0A4',
  }
})

const styles = StyleSheet.create({
  iconActive: {
    fontFamily: "roboto-bold",
    fontSize: 15 * indiceScreen,
    borderWidth: 5,

  },
  icon: {
    fontFamily: "roboto-bold",
    fontSize: 15* indiceScreen,
    opacity: 0.25,
  },
})



const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dataLoaded: false
    }

  }

render(){
  if(!this.state.dataLoaded){
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => this.setState({dataLoaded: true})}
        />
      );
    }
  return (
    <Provider store={Store}>
      <SafeAreaProvider><AppContainer /></SafeAreaProvider>
    </Provider>
    )
  }
}

Amplify.I18n.setLanguage('fr');

export default withAuthenticator(App, {
  signUpConfig: {
    defaultCountryCode: "33"
  },
})
