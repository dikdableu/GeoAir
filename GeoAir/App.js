import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { withAuthenticator, AmplifyTheme  } from 'aws-amplify-react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Amplify from 'aws-amplify';
import { config } from './config/config.js';

Amplify.configure(config.cognito);


const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeView,
    navigationOptions: {
         tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
           return <FontAwesome5 name={'list-alt'} style={focused ? styles.iconActive : styles.icon} brand />
         }
       }
     },
  Search: {screen: SearchView,
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
    return <AppContainer />;
  }
}

Amplify.I18n.setLanguage('fr');

const Button = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#337ab7' })
const buttonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, { backgroundColor: '#337ab700' })
const Footer = Object.assign({}, AmplifyTheme.sectionFooterLink, { color: '#337ab7' })
const Theme = Object.assign({}, AmplifyTheme, {
  button: Button,
  buttonDisabled: buttonDisabled,
  sectionFooterLink: Footer
})

export default withAuthenticator(App, false, [], null, Theme )