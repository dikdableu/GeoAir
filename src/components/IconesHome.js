import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesHome(props) {
  if(props.active){
    return (
        <Svg width={20} height={22} viewBox="0 0 20 22" style={styles.shape3} {...props}>
        <Defs>
          <Path
            d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
            id="prefix__b"
          />
          <Path
            d="M5 23a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v11a3 3 0 01-3 3H5zm7-19.733L4 9.489V20a1 1 0 001 1h3v-9a1 1 0 01.883-.993L9 11h6a1 1 0 011 1v9h3a1 1 0 001-1V9.49l-8-6.223zM14 13h-4v8h4v-8z"
            id="prefix__c"
          />
        </Defs>
        <G fill="none" fillRule="evenodd">
          <G transform="translate(-62 -24)">
            <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
            <Use fill="#FFF" xlinkHref="#prefix__b" />
          </G>
          <Use
            fill="#46C0FF"
            xlinkHref="#prefix__c"
            transform="translate(-2 -1)"
          />
        </G>
      </Svg>
    )
  }else {
    return (
        <Svg width={20} height={22} viewBox="0 0 20 22" style={styles.shape3} {...props}>
          <Defs>
            <Path
              d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
              id="prefix__b"
            />
            <Path
              d="M5 23a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v11a3 3 0 01-3 3H5zm7-19.733L4 9.489V20a1 1 0 001 1h3v-9a1 1 0 01.883-.993L9 11h6a1 1 0 011 1v9h3a1 1 0 001-1V9.49l-8-6.223zM14 13h-4v8h4v-8z"
              id="prefix__c"
            />
          </Defs>
          <G fill="none" fillRule="evenodd">
            <G transform="translate(-62 -24)">
              <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
              <Use fill="#FFF" xlinkHref="#prefix__b" />
            </G>
            <Use
              fill="#B4C3D2"
              xlinkHref="#prefix__c"
              transform="translate(-2 -1)"
            />
          </G>
        </Svg>
    );
  }
}

const styles = StyleSheet.create({

});

export default IconesHome;
