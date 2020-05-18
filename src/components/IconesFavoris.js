import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg"

function IconesFavoris(props) {
  if(props.active){
    return (
        <Svg width={23} height={21} viewBox="0 0 23 21" style={styles.path3} {...props}>
          <Defs>
            <Path
              d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
              id="prefix__b"
            />
            <Path
              d="M12.804 3.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0017.401 4a4.5 4.5 0 00-3.183 1.319l-1.06 1.06a1 1 0 01-1.414 0l-1.06-1.06a4.501 4.501 0 00-6.366 6.366l8.133 8.133z"
              id="prefix__c"
            />
          </Defs>
          <G fill="none" fillRule="evenodd">
            <G transform="translate(-177 -25)">
              <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
              <Use fill="#FFF" xlinkHref="#prefix__b" />
            </G>
            <Use
              fill="#46C0FF"
              xlinkHref="#prefix__c"
              transform="translate(-1 -2)"
            />
          </G>
        </Svg>
    )
  }else{
    return (
        <Svg width={23} height={21} viewBox="0 0 23 21" style={styles.path3} {...props}>
          <Defs>
            <Path
              d="M44 0h287c24.3 0 44 19.7 44 44v26H0V44C0 19.7 19.7 0 44 0z"
              id="prefix__b"
            />
            <Path
              d="M12.804 3.905a6.5 6.5 0 0111.1 4.597 6.5 6.5 0 01-1.906 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.194-9.194l.353.353.353-.353zm-.353 15.913l7.073-7.073 1.06-1.06A4.5 4.5 0 0017.401 4a4.5 4.5 0 00-3.183 1.319l-1.06 1.06a1 1 0 01-1.414 0l-1.06-1.06a4.501 4.501 0 00-6.366 6.366l8.133 8.133z"
              id="prefix__c"
            />
          </Defs>
          <G fill="none" fillRule="evenodd">
            <G transform="translate(-177 -25)">
              <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
              <Use fill="#FFF" xlinkHref="#prefix__b" />
            </G>
            <Use
              fill="#B4C3D2"
              xlinkHref="#prefix__c"
              transform="translate(-1 -2)"
            />
          </G>
        </Svg>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default IconesFavoris;
