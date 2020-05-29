import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesFavoris(props) {
  if(props.active){
    return (
      <Svg width={24} height={24} color="#46C0FF" {...props}>
        <Defs>
          <Path
            d="M12.804 3.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0017.401 4a4.5 4.5 0 00-3.183 1.319l-1.06 1.06a1 1 0 01-1.414 0l-1.06-1.06a4.501 4.501 0 00-6.366 6.366l8.133 8.133z"
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
            d="M12.804 3.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0017.401 4a4.5 4.5 0 00-3.183 1.319l-1.06 1.06a1 1 0 01-1.414 0l-1.06-1.06a4.501 4.501 0 00-6.366 6.366l8.133 8.133z"
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

export default IconesFavoris;
