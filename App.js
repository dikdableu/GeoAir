import React,{ useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import HomeView from './src/view/HomeView';
import SearchView from './src/view/SearchView';
import ForecastView from './src/view/ForecastView';
import IconTab from './src/view/IconTab.js'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { withAuthenticator, AmplifyTheme, Authenticator, SignUp, SignIn, ForgotPassword, ConfirmSignUp  } from 'aws-amplify-react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { config } from './config/config.js';

Amplify.configure(config.cognito);

const screenWidth = Math.round(Dimensions.get('window').width);

const Home = createStackNavigator(
  {
    Home: HomeView,
    Forecast: ForecastView,
  },
)

const Search = createStackNavigator({
  Search: SearchView,
  Home: HomeView,
})

const Favoris = createStackNavigator({
  Search: SearchView,
  Home: HomeView,
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
      tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return(focused ? (<IconTab active={true} text={"Accueil"}/>) : (<IconTab text={"Accueil"}/>))
       }
     }
  },
  Favoris: {screen: Favoris,
    navigationOptions: {
      tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return(focused ? (<IconTab active={true} text={"Favoris"}/>) : (<IconTab text={"Favoris"}/>))
      }
    }
  },
  Search: {screen: Search,
    navigationOptions: {
      tabBarIcon: ({focused}) => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return(focused ? (<IconTab flex={4} active={true} text={"+ Ajouter une ville"}/>) : (<IconTab flex={4} text={"+ Ajouter une ville"}/>))
      }
    }
  }
},
{
  tabBarOptions: {
    showLabel: false, // On masque les titres
    showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    style:{
      borderTopWidth: 0,
      left: "-4.8%"
    },
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

function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (<SafeAreaProvider><AppContainer /></SafeAreaProvider>);
}

Amplify.I18n.setLanguage('fr');

export default withAuthenticator(App, {
  signUpConfig: {
    defaultCountryCode: "33"
  },
})
