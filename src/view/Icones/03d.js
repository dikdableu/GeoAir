import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CloudComponent(props) {
  return (
    <Svg width={35} height={35} {...props}>
      <G data-name="03d">
        <Path data-name="Rectangle 382" fill="none" d="M0 0h35v35H0z" />
        <G data-name="Union 3">
          <Path
            data-name="Trac\xE9 167"
            d="M25.501 28.001a5.5 5.5 0 002.474-10.414l-1.486-.751-.149-1.658a9 9 0 00-17.936.1l-.127 1.615-1.419.78a5.5 5.5 0 002.643 10.325h16m0 3h-16a8.5 8.5 0 01-4.088-15.955 12 12 0 0123.914-.137 8.5 8.5 0 01-3.826 16.092z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default CloudComponent
