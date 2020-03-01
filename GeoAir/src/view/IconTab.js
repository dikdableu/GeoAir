import React, { useState } from 'react';
import { 
  View,
  Text,
  } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('../../assets/Roboto-Bold.ttf'),
  'roboto-italic': require('../../assets/Roboto-Italic.ttf'),
  'roboto-regular': require('../../assets/Roboto-Regular.ttf')
  });
};

const IconTab = props => {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [propsState, setPropsState] = useState(props)
  
   if(!dataLoaded){
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />  
    )
  }
  if(propsState.active){
      return(
        <View style={{flex: 1}}>
            <View style={{flex: 2}}>
                <Text style={{fontFamily: "roboto-bold", fontSize: 18, color: "#2A2C35"}}>{propsState.text}</Text>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
                <View style={{ width: 20,height: 5, backgroundColor: '#2A2C35', borderRadius: 50, alignItems: 'center'}}>
                </View>
            </View>
        </View>
    )
  }
    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{fontFamily: "roboto-bold", fontSize: 18, opacity: 0.25, color: "#2A2C35"}}>{propsState.text}</Text>
            </View>
            <View style={{flex: 1}}>
            </View>
        </View>
    )
}

export default IconTab;