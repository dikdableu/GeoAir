import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path  } from "react-native-svg";

function IconesPluie(props) {
  return (
    <Svg style={{width: '100%', height: '100%'}} data-name="Icones/pluie" {...props}>
      <Path scale={0.55}
        data-name="Fill 2"
        d="M17.142 51.533L20 56.5c.664 1.151 2.518.124 1.853-1.029L19 50.5c-.669-1.148-2.523-.12-1.858 1.033"
        fill="#8dd9f3"
      />
      <Path scale={0.55}
        data-name="Fill 3"
        d="M28.142 51.533L31 56.5c.665 1.151 2.519.124 1.854-1.029L30 50.5c-.668-1.148-2.524-.12-1.858 1.033"
        fill="#8dd9f3"
      />
      <Path scale={0.55}
        data-name="Fill 4"
        d="M39.142 51.533L42 56.5c.664 1.151 2.519.124 1.854-1.029L41 50.5c-.668-1.148-2.523-.12-1.858 1.033"
        fill="#8dd9f3"
      />
      <Path scale={0.55}
        data-name="Fill 5"
        d="M50.142 51.533L53 56.5c.664 1.151 2.519.124 1.854-1.029Q53.426 52.986 52 50.5c-.669-1.148-2.523-.12-1.858 1.033"
        fill="#8dd9f3"
      />
      <Path scale={0.55}
        d="M50.394 43.821H17.199a9.257 9.257 0 01-9.448-9.031 9.258 9.258 0 019.448-9.032h.052a15.252 15.252 0 015.463-9.2 16.75 16.75 0 0119.3-1.047 15.624 15.624 0 015.961 6.765 12.048 12.048 0 012.411-.246 11.168 11.168 0 0111.4 10.9 11.167 11.167 0 01-11.392 10.891zM17.199 27.942a7.015 7.015 0 00-7.156 6.849 7.015 7.015 0 007.156 6.851h33.195a8.925 8.925 0 009.1-8.713 8.925 8.925 0 00-9.1-8.714 9.526 9.526 0 00-2.758.409l-1.055.318-.372-1a13.853 13.853 0 00-13.041-8.82 13.592 13.592 0 00-13.781 11.9l-.117 1.12-1.165-.138a7.578 7.578 0 00-.906-.062z"
        fill="#8ab8d1"
      />
    </Svg>
  );
}

export default IconesPluie;