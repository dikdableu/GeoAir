import * as React from "react"
import Svg, { Text, TSpan } from "react-native-svg"

function GeoAirLogo(props) {
  return (
    <Svg width={150} height={36} {...props}>
      <Text
        fill="#fff"
        fontSize={24}
        fontWeight={700}
      >
        <TSpan x={36.264} y={26}>
          {"Geo"}
        </TSpan>
        <TSpan y={26} >
          {"Air"}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default GeoAirLogo
