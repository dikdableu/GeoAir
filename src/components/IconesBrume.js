import * as React from "react"
import Svg, { G, Path  } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function IconesBrume(props) {
  return (
    <Svg style={{width: '100%', height: '100%'}} data-name="Icones/brume"  {...props}>
     <Path scale={0.55}
       d="M34.969 60.726a1.162 1.162 0 110-2.318h24.572a1.162 1.162 0 110 2.318zm-12.085-7.191a1.213 1.213 0 01-1.252-1.159 1.212 1.212 0 011.252-1.154h36.657a1.21 1.21 0 011.25 1.158 1.211 1.211 0 01-1.25 1.155zm-11.13-7.482a1.21 1.21 0 01-1.25-1.16 1.21 1.21 0 011.25-1.158h47.787a1.21 1.21 0 011.25 1.158 1.21 1.21 0 01-1.25 1.159zM49.816 38.678H17.851a8.915 8.915 0 01-9.1-8.7 8.916 8.916 0 019.1-8.7h.054a14.688 14.688 0 015.26-8.856 16.129 16.129 0 0118.586-1.008 15.051 15.051 0 015.741 6.515 11.553 11.553 0 012.322-.237A10.754 10.754 0 0160.79 28.185a10.754 10.754 0 01-10.974 10.493zM17.851 23.385a6.756 6.756 0 00-6.891 6.6 6.755 6.755 0 006.891 6.591h31.965a8.594 8.594 0 008.766-8.391 8.6 8.6 0 00-8.766-8.392 9.182 9.182 0 00-2.657.394l-1.016.309-.357-.959a13.342 13.342 0 00-12.559-8.495 13.089 13.089 0 00-13.271 11.464l-.112 1.071-1.122-.135a7.351 7.351 0 00-.871-.057z"
       fill="#bbcad9"
     />
   </Svg>
  )
}

export default IconesBrume