import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ThunderComponent(props) {
  return (
    <Svg width={35} height={35} {...props}>
      <G data-name="11d">
        <Path data-name="Rectangle 329" fill="none" d="M35 35H0V0h35z" />
        <G data-name="Groupe 268">
          <Path
            data-name="Trac\xE9 158"
            d="M30.411 13.501v-.335a6.5 6.5 0 00-4.613-6.222 9.21 9.21 0 00-17.966.5 6.5 6.5 0 00-3.42 5.725v.335a6.5 6.5 0 006.5 6.5h13a6.5 6.5 0 006.499-6.503zm-3 0a3.5 3.5 0 01-3.5 3.5h-13a3.5 3.5 0 01-3.5-3.5v-.335a3.5 3.5 0 011.844-3.085l1.25-.674.271-1.394a6.211 6.211 0 0112.113-.334l.415 1.644 1.624.492a3.522 3.522 0 012.482 3.351z"
          />
          <Path
            data-name="Trac\xE9 159"
            d="M31.008 26.861a1.5 1.5 0 00-2.09.367l-1.722 2.457a1.5 1.5 0 102.458 1.722l1.721-2.457a1.5 1.5 0 00-.367-2.089z"
          />
          <Path
            data-name="Trac\xE9 160"
            d="M8.083 26.861a1.5 1.5 0 00-2.09.367l-1.722 2.457a1.5 1.5 0 102.457 1.722L8.45 28.95a1.5 1.5 0 00-.367-2.089z"
          />
          <Path
            data-name="Trac\xE9 161"
            d="M19.114 25.474l1.726-3.462a.6.6 0 00-.972-.681l-6.429 6.761a.6.6 0 00.091.905l2.181 1.529-1.726 3.462a.6.6 0 00.972.681l6.429-6.762a.6.6 0 00.162-.473.594.594 0 00-.253-.431z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default ThunderComponent
