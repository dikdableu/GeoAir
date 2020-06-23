import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function IconBag(props) {
  return (
    <Svg width={23} height={23} {...props}>
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <Path
          data-name="Trac\xE9 1"
          d="M4.833 1.5L1.5 5.5v14a2.12 2.12 0 002.222 2h15.556a2.12 2.12 0 002.222-2v-14l-3.333-4z"
        />
        <Path data-name="Trac\xE9 2" d="M1.5 6.5h20" />
        <Path data-name="Trac\xE9 3" d="M17.5 8.5a6 6 0 01-12 0" />
      </G>
    </Svg>
  )
}

export default IconBag
