import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

function RefreshComponent(props) {
  console.log(props)
  return (
    <Svg data-layer="3d35f051-b5bb-4ad4-889b-6a0b430a96b0" {...props} preserveAspectRatio="none" fill="rgba(42, 44, 53, 1)"><SvgPath d="M 7.874999523162842 2 C 4.591416358947754 2 1.917999744415283 4.587666511535645 1.764582753181458 7.833333492279053 L -4.76837158203125e-07 7.833333492279053 L 2.646582841873169 11.28491592407227 L 5.25 7.833333492279053 L 3.514583110809326 7.833333492279053 C 3.666249513626099 5.557166576385498 5.560916423797607 3.75 7.874999523162842 3.75 C 10.28766632080078 3.75 12.25 5.712333679199219 12.25 8.125 C 12.25 10.53766536712646 10.28766632080078 12.49999904632568 7.874999523162842 12.49999904632568 C 6.486083030700684 12.49999904632568 5.248833179473877 11.84724998474121 4.447333335876465 10.83516597747803 L 3.369916200637817 12.26374912261963 C 4.489333152770996 13.48174858093262 6.090583324432373 14.24999904632568 7.874999523162842 14.24999904632568 C 11.25716686248779 14.24999904632568 14 11.50716590881348 14 8.125 C 14 4.742833137512207 11.25716686248779 2 7.874999523162842 2 Z"  /></Svg>
  )
}

export default RefreshComponent
