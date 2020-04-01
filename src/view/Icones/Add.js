import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddComponent(props) {
  return (
    <Svg width={15} height={15} {...props}>
      <Path
        d="M6.346 13.846V8.654H1.154A1.154 1.154 0 010 7.501a1.154 1.154 0 011.154-1.154h5.192V1.155A1.155 1.155 0 017.5.001a1.154 1.154 0 011.154 1.154v5.192h5.192A1.154 1.154 0 0115 7.501a1.154 1.154 0 01-1.154 1.154H8.654v5.192A1.154 1.154 0 017.5 15.001a1.154 1.154 0 01-1.154-1.155z"
        fill="#2a2c35"
      />
    </Svg>
  )
}

export default AddComponent
