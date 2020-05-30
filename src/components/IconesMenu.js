import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function IconesMenu(props) {
  return (
    <Svg data-name="Icones/menu" width={24} height={24} {...props}>
      <G data-name="Groupe 5">
        <Path
          data-name="ico-menu"
          d="M6 19a1 1 0 010-2h13a1 1 0 010 2zm0-6a1 1 0 010-2h8a1 1 0 010 2zm0-6a1 1 0 010-2h13a1 1 0 010 2z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default IconesMenu
