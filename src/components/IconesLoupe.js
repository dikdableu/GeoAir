import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesLoupe(props) {
  if(props.active){
    return(
      <Svg width={24} height={24} color="#46C0FF" {...props}>
        <Defs>
          <Path
            d="M10.5 2a8.5 8.5 0 016.677 13.761l4.53 4.532a1 1 0 01-1.414 1.414l-4.532-4.53A8.5 8.5 0 1110.5 2zm0 2a6.5 6.5 0 104.548 11.144l.045-.051c.016-.016.033-.032.05-.046A6.5 6.5 0 0010.5 4z"
            id="prefix__a"
          />
        </Defs>
        <Use fill="#46C0FF" xlinkHref="#prefix__a" fillRule="evenodd" />
      </Svg>
    )
  }else{
    return (
      <Svg width={24} height={24} color="#D8D8D8" {...props}>
        <Defs>
          <Path
            d="M10.5 2a8.5 8.5 0 016.677 13.761l4.53 4.532a1 1 0 01-1.414 1.414l-4.532-4.53A8.5 8.5 0 1110.5 2zm0 2a6.5 6.5 0 104.548 11.144l.045-.051c.016-.016.033-.032.05-.046A6.5 6.5 0 0010.5 4z"
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

export default IconesLoupe;
