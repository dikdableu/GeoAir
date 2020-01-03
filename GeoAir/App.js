import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/view/HomeView';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { withAuthenticator, AmplifyTheme  } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import { config } from './config/config.js';

Amplify.configure(config.cognito);

const RootStack = createStackNavigator(
  {
    Home: HomeView,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

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