import React,{ useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import FavoriteView from './src/view/FavoriteView';
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


const screenWidth = Math.round(Dimensions.get('window').width);

const Home = createStackNavigator(
  {
    Home: {
      screen:HomeView,
      navigationOptions:{
        headerTitle: (
          <Text style={{fontFamily: "roboto-bold",fontSize: 20, color: "black"}}>GeoAir</Text>
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
  })

const Search = createStackNavigator({
  Search: {
    screen:SearchView,
    navigationOptions:{
      headerTitle: (
        <Text style={{fontFamily: "roboto-bold",fontSize: 20, color: "black"}}>GeoAir</Text>
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
})

const Favoris = createStackNavigator({
  Favorite: {
    screen:FavoriteView,
    navigationOptions:{
      headerTitle: (
        <Text style={{fontFamily: "roboto-bold",fontSize: 20, color: "black"}}>GeoAir</Text>
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
})

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
      fontSize: 15,
    },
    activeTintColor: '#2A2C35',
    inactiveTintColor: '#9FA0A4',
  }
})

const styles = StyleSheet.create({
  iconActive: {
    fontFamily: "roboto-bold",
    fontSize: 15,
    borderWidth: 5,

  },
  icon: {
    fontFamily: "roboto-bold",
    fontSize: 15,
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
