import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesHome(props) {
  if(props.active){
    return (
      <Svg width={24} height={24} color="#46C0FF" {...props}>
        <Defs>
          <Path
            d="M5 23a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v11a3 3 0 01-3 3H5zm7-19.733L4 9.489V20a1 1 0 001 1h3v-9a1 1 0 01.883-.993L9 11h6a1 1 0 011 1v9h3a1 1 0 001-1V9.49l-8-6.223zM14 13h-4v8h4v-8z"
            id="prefix__a"
          />
        </Defs>
        <Use fill="#46C0FF" xlinkHref="#prefix__a" fillRule="evenodd" />
      </Svg>
    )
  }else {
    return (
      <Svg width={24} height={24} color="#D8D8D8" {...props}>
        <Defs>
          <Path
            d="M5 23a3 3 0 01-3-3V9a1 1 0 01.386-.79l9-7a1 1 0 011.228 0l9 7A1 1 0 0122 9v11a3 3 0 01-3 3H5zm7-19.733L4 9.489V20a1 1 0 001 1h3v-9a1 1 0 01.883-.993L9 11h6a1 1 0 011 1v9h3a1 1 0 001-1V9.49l-8-6.223zM14 13h-4v8h4v-8z"
            id="prefix__a"
          />
        </Defs>
        <Use fill="#D8D8D8" xlinkHref="#prefix__a" fillRule="evenodd" />
      </Svg>
    );
  }
}

const styles = StyleSheet.create({

});

export default IconesHome;
