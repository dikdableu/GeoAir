import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import ForecastView from './src/view/ForecastView';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { withAuthenticator, AmplifyTheme, Authenticator, SignUp, SignIn, ForgotPassword, ConfirmSignUp  } from 'aws-amplify-react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { config } from './config/config.js';

Amplify.configure(config.cognito);

const Home = createStackNavigator({
  Home: HomeView,
  Forecast: ForecastView,
})

const Search = createStackNavigator({
  Search: SearchView,
  Home: HomeView,
})

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Home,
    navigationOptions: {
         tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
           return <FontAwesome5 name={'list-alt'} style={focused ? styles.iconActive : styles.icon} brand />
         }
       }
     },
  Search: {screen: Search,
    navigationOptions: {
         tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
           return <FontAwesome5 name={'search'} style={focused ? styles.iconActive : styles.icon} brand />
         }
       }
     },
   },
    {
    tabBarOptions: {
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }},
)

const styles = StyleSheet.create({
  iconActive: {
    fontSize: 25,
  },
  icon: {
    fontSize: 18,
    color: "#B4B4B4"
  },
})



const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

Amplify.I18n.setLanguage('fr');

export default withAuthenticator(App, {
  signUpConfig: {
    defaultCountryCode: "33"
  },
})