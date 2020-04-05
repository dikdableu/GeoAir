import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function CloudsSunComponent(props) {
  return (
    <Svg width={35} height={35} {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M0 0h35v35H0z" />
        </ClipPath>
      </Defs>
      <G data-name="02d" clipPath="url(#prefix__a)">
        <Path fill="#fff" d="M0 0h35v35H0z" />
        <G data-name="02d">
          <Path
            data-name="Trac\xE9 124"
            d="M32.292 18.401a11.207 11.207 0 001.7-5.94 11.626 11.626 0 00-11.75-11.46 11.75 11.75 0 00-11.092 7.7 13 13 0 001.762 25.863l12.5-.005a9.556 9.556 0 009.587-9.525 9.458 9.458 0 00-2.707-6.633zM22.248 4.307a8.306 8.306 0 018.432 8.154 7.9 7.9 0 01-1.087 4 9.6 9.6 0 00-4.176-.949q-.359 0-.71.026a13.1 13.1 0 00-9.911-6.877 8.478 8.478 0 017.452-4.354zm7.964 16.578a6.254 6.254 0 011.58 4.151 6.354 6.354 0 01-6.379 6.314H12.912a9.783 9.783 0 01-2.4-19.244 9.986 9.986 0 012.586-.343c.252 0 .5.01.752.029a9.863 9.863 0 018.015 5.242l.98 1.858 2.1-.152c.159-.011.318-.017.478-.017a6.43 6.43 0 011.869.278l.034-.023-.032.026a6.407 6.407 0 012.929 1.882"
            fill="#2a2c35"
          />
          <Path fill="none" d="M0 0h35v35H0z" />
        </G>
      </G>
    </Svg>
  )
}

export default CloudsSunComponent
