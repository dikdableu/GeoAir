import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesLoupe(props) {
  if(props.active){
    return(
        <Svg width={20} height={20} viewBox="0 0 20 20" style={styles.oval7} {...props}>
        <Defs>
          <Path
            d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
            id="prefix__b"
          />
          <Path
            d="M10.5 2a8.5 8.5 0 016.677 13.761l4.53 4.532a1 1 0 01-1.414 1.414l-4.532-4.53A8.5 8.5 0 1110.5 2zm0 2a6.5 6.5 0 104.548 11.144l.045-.051c.016-.016.033-.032.05-.046A6.5 6.5 0 0010.5 4z"
            id="prefix__c"
          />
        </Defs>
        <G fill="none" fillRule="evenodd">
          <G transform="translate(-296 -25)">
            <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
            <Use fill="#FFF" xlinkHref="#prefix__b" />
          </G>
          <Use
            fill="#46C0FF"
            xlinkHref="#prefix__c"
            transform="translate(-2 -2)"
          />
        </G>
      </Svg>
    )
  }else{
    return (

        <Svg width={20} height={20} viewBox="0 0 20 20" style={styles.oval7} {...props}>
          <Defs>
            <Path
              d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
              id="prefix__b"
            />
            <Path
              d="M10.5 2a8.5 8.5 0 016.677 13.761l4.53 4.532a1 1 0 01-1.414 1.414l-4.532-4.53A8.5 8.5 0 1110.5 2zm0 2a6.5 6.5 0 104.548 11.144l.045-.051c.016-.016.033-.032.05-.046A6.5 6.5 0 0010.5 4z"
              id="prefix__c"
            />
          </Defs>
          <G fill="none" fillRule="evenodd">
            <G transform="translate(-296 -25)">
              <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
              <Use fill="#FFF" xlinkHref="#prefix__b" />
            </G>
            <Use
              fill="#B4C3D2"
              xlinkHref="#prefix__c"
              transform="translate(-2 -2)"
            />
          </G>
        </Svg>
    );
  }
}

const styles = StyleSheet.create({

});

export default IconesLoupe;
