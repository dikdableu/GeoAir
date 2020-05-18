import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import { withAuthenticator, AmplifyTheme, Authenticator, SignUp, SignIn, ForgotPassword, ConfirmSignUp  } from 'aws-amplify-react-native';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';

export default class Connexion extends SignIn {

  constructor(props) {
      super(props);
      this.state = {
      };
      this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }
  fetchFonts() {
    return Font.loadAsync({
    'roboto-bold': require('../assets/Roboto-Bold.ttf'),
    'roboto-italic': require('../assets/Roboto-Italic.ttf'),
    'roboto-regular': require('../assets/Roboto-Regular.ttf')
    });
  };

  showComponent(theme) {
    if(!this.state.dataLoaded){
      return(
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({dataLoaded: true})}
        />
      )
    }
    return (
    <ScrollView data-layer="b9c33181-5771-4608-b96a-0a678fb3f752" style={styles.connexion}>
      <form>
        <Text data-layer="20d36c2f-6fd1-449f-9c66-bbff0993be91" style={styles.connexion_seConnecter}>Se connecter</Text>
        <View data-layer="5404f2f4-4000-4c34-879c-d16ac3d0a065" style={styles.connexion_linee7e892ad}></View>
        <View data-layer="cdcccd3b-ec76-451f-aa30-d865163ef1aa" style={styles.connexion_line2e6cb4a3}></View>
        <View data-layer="bfe74e3b-d6f2-4a59-920c-2b9d7149e1d7" style={styles.connexion_line}></View>
        <TextInput data-layer="360c76e7-f6aa-4f4f-98c8-b636b0b20790" onChange={this.handleInputChangeUsername} placeholder={"login"} id="username" key="username" name="username" style={styles.connexion_username}></TextInput>
        <TextInput data-layer="cd980685-8a7c-45fa-a149-3a630615c71f" onChange={this.handleInputChangePassword} id="password" key="password" name="password"secureTextEntry={true} id={'Password'} placeholder={"mot de passe"}style={styles.connexion_password}>password</TextInput>
        <TouchableOpacity onPress={() => super.changeState("signUp")}>
          <Text data-layer="91e1e040-2993-4ec3-a29e-6d616e70acca" style={styles.connexion_creerUnCompte}>Créer un compte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => super.changeState("forgotPassword")}>
          <Text data-layer="85acac61-c1e2-4b95-93aa-c59e962ce9d8" style={styles.connexion_motsDePasseOublie}>mots de passe oublié ?</Text>
        </TouchableOpacity>
        <View data-layer="ad4b5c8a-f52d-4b5e-adcd-db7439526542" style={styles.connexion_iconselect}></View>
        <TouchableOpacity onPress={() => super.signIn()}>
          <View data-layer="e3f25267-c20c-42e9-99f7-9db5abf09ab1" style={styles.connexion_bttconnexion}>
              <View data-layer="f120c82f-1047-40f6-bf08-89a5c855b89a" style={styles.connexion_bttconnexion_rectangle}></View>
              <Text data-layer="86b9e82e-ea76-4e7d-9e5c-147392554a0c" style={styles.connexion_bttconnexion_connexion4d411e08}>connexion</Text>
          </View>
        </TouchableOpacity>
        <View data-layer="e2f219eb-e8e6-467f-abcc-350aae1d3a86" style={styles.connexion_split}></View>
        <ReactImage data-layer="08375958-26f5-45af-a0ce-717782219803" source={require('../assets/icongoogle.png')} style={styles.connexion_icongoogle} />
        <ReactImage data-layer="c25e316e-85ad-4e63-9aac-f6eb957bb10f" source={require('../assets/iconapple.png')} style={styles.connexion_iconapple} />
        <ReactImage data-layer="0776e6f5-96f3-4e4f-83be-46a0b4d1873a" source={require('../assets/iconfacebook.png')} style={styles.connexion_iconfacebook} />
        <Svg data-layer="624d74d7-427d-4da9-896d-4ec33929edd7" style={styles.connexion_iconadd} preserveAspectRatio="none" viewBox="-5944.99951171875 -2494.0009765625 15 15" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -5938.65380859375 -2480.15478515625 L -5938.65380859375 -2485.3466796875 L -5943.845703125 -2485.3466796875 C -5944.4833984375 -2485.3466796875 -5944.99951171875 -2485.86376953125 -5944.99951171875 -2486.500732421875 C -5944.99951171875 -2487.137939453125 -5944.4833984375 -2487.654541015625 -5943.845703125 -2487.654541015625 L -5938.65380859375 -2487.654541015625 L -5938.65380859375 -2492.846923828125 C -5938.65380859375 -2493.48388671875 -5938.13623046875 -2494.0009765625 -5937.49951171875 -2494.0009765625 C -5936.8623046875 -2494.0009765625 -5936.345703125 -2493.48388671875 -5936.345703125 -2492.846923828125 L -5936.345703125 -2487.654541015625 L -5931.15380859375 -2487.654541015625 C -5930.51611328125 -2487.654541015625 -5929.99951171875 -2487.137939453125 -5929.99951171875 -2486.500732421875 C -5929.99951171875 -2485.86376953125 -5930.51611328125 -2485.3466796875 -5931.15380859375 -2485.3466796875 L -5936.345703125 -2485.3466796875 L -5936.345703125 -2480.15478515625 C -5936.345703125 -2479.517333984375 -5936.8623046875 -2479.0009765625 -5937.49951171875 -2479.0009765625 C -5938.13623046875 -2479.0009765625 -5938.65380859375 -2479.517333984375 -5938.65380859375 -2480.15478515625 Z"  /></Svg>
      </form>
    </ScrollView>
    );
  }
}

Connexion.propTypes = {

}

Connexion.defaultProps = {

}


const styles = StyleSheet.create({
  "connexion": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "connexion_seConnecter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 30,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 177,
    "height": 44,
    "left": 99,
    "top": 200
  },
  "connexion_linee7e892ad": {
    "opacity": 0.05000000074505806,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 2,
    "left": 0,
    "top": 373
  },
  "connexion_line2e6cb4a3": {
    "opacity": 0.05000000074505806,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 2,
    "left": 0,
    "top": 299
  },
  "connexion_line": {
    "opacity": 0.05000000074505806,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 2,
    "left": 0,
    "top": 447
  },
  "connexion_username": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "center",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 68,
    "height": 40,
    "left": 153.5,
    "top": 318.5
  },
  "connexion_password": {
    "opacity": 0.15000000596046448,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "center",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 40,
    "left": 154.5,
    "top": 392.5
  },
  "connexion_creerUnCompte": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 112,
    "height": 20,
    "left": 192,
    "top": 58
  },
  "connexion_motsDePasseOublie": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 144,
    "height": 19,
    "left": 116,
    "top": 742
  },
  "connexion_iconselect": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 10,
    "height": 3,
    "left": 183,
    "top": 779
  },
  "connexion_bttconnexion": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 206,
    "height": 51,
    "left": 85,
    "top": 507
  },
  "connexion_bttconnexion_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 206,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "connexion_bttconnexion_connexion4d411e08": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 20,
    "left": 68,
    "top": 14.63
  },
  "connexion_split": {
    "opacity": 0.15000000596046448,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 20,
    "height": 3,
    "left": 179,
    "top": 588
  },
  "connexion_icongoogle": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 66,
    "height": 51,
    "left": 225,
    "top": 618
  },
  "connexion_icongoogle_rectangle264ea878ca3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 86, 86, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 66,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "connexion_icongoogle_iconmonstrGooglePlus11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16.89,
    "height": 17.23,
    "left": 24.42,
    "top": 17
  },
  "connexion_iconapple": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 66,
    "height": 51,
    "left": 85,
    "top": 618
  },
  "connexion_iconapple_rectangle264ff67f75f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 66,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "connexion_iconapple_iconmonstrAppleOs11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15.92,
    "height": 19.1,
    "left": 24.72,
    "top": 16
  },
  "connexion_iconfacebook": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 66,
    "height": 51,
    "left": 155,
    "top": 618
  },
  "connexion_iconfacebook_rectangle264": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(71, 127, 223, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 66,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "connexion_iconfacebook_iconmonstrFacebook11": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 9,
    "height": 18,
    "left": 29,
    "top": 17
  },
  "connexion_iconadd": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 15,
    "height": 15,
    "left": 325,
    "top": 60
  }
});
