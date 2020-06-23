import React, { useState, useEffect, useMemo, useRef } from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, Dimensions, Modal, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default function ModalPurchase(props) {

  const [isModalVisible , setIsModalVisible] = useState(props.isVisible)

  useEffect(() => {
    console.log('test')
  }, [])

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Modal visible={isModalVisible} animationµType="fade">
        <View data-layer="98e6de10-7b25-4a17-82ed-1dec0fec39d6" style={styles.modalachat}>
            <View data-layer="6ed0e6cb-78ac-4c51-91d6-141259761f67" style={styles.modalachat_bg}>
                <View data-layer="b5b3f336-be55-4d3e-823d-c35618760d2f" style={styles.modalachat_bg_bgBleu17c04e62}>
                    <ReactImage data-layer="05ac74f7-8740-4f67-9b4f-0c78da81257c" source={require('../assets/mask9fe9c934.png')} style={styles.modalachat_bg_bgBleu17c04e62_mask9fe9c934} />
                    <ReactImage data-layer="85c250c2-bfac-43b3-866b-0ca73b0a66ae" source={require('../assets/bgBleu.png')} style={styles.modalachat_bg_bgBleu17c04e62_bgBleu} />
                </View>
            </View>
            <View data-layer="18428b44-2bbd-4118-bf5d-e0e1496af322" style={styles.modalachat_modal}>
                <View data-layer="fdb5091c-7bb2-4410-845f-44f461bba635" style={styles.modalachat_modal_rectangleBlanc}></View>
                <View data-layer="268faeeb-7821-4fe1-afd7-2241d67ac6f0" style={styles.modalachat_modal_villef2a70e5f}>
                    <Text data-layer="6b417350-f0bc-45fc-ba6e-26f004e268d2" style={styles.modalachat_modal_villef2a70e5f_sansengagement}>sans engagement </Text>
                    <Text data-layer="527b0bd5-c54e-4d6c-9879-c5e468a86a31" style={styles.modalachat_modal_villef2a70e5f_prix}>1,49€ par mois</Text>
                    <Text data-layer="f1d79fa2-3e43-4854-a587-4c98493f9fd8" style={styles.modalachat_modal_villef2a70e5f_abonnement}>Abonnement 1 Mois</Text>
                </View>
                <Text data-layer="6d221eb4-466e-48a4-9fe5-0a23b187c0c4" style={styles.modalachat_modal_fonctionnalites1}>Plus de Pubs </Text>
                <Text data-layer="18dc93b0-9cf8-4af3-890e-5516c7b6c17e" style={styles.modalachat_modal_fonctionnalites2}>Prévisions à 14 jours</Text>
                <Text data-layer="220bc303-464a-498b-a41c-f8a67e944e13" style={styles.modalachat_modal_fonctionnalites3}>Notifications de météos (A venir)</Text>
                <Text data-layer="e6c79463-29b9-4cd0-a8ed-a4548d64a606" style={styles.modalachat_modal_fonctionnalites4}>Pleins d'autres fonctionnalités à venir </Text>
                <View data-layer="d2c47017-7064-4045-92e8-4a59d1a869e7" style={styles.modalachat_modal_restaurerachats}>
                    <View data-layer="69482e26-5f51-4c75-ac21-c700872bc12e" style={styles.modalachat_modal_restaurerachats_rectangle999743d3}></View>
                    <View data-layer="40fe2f4e-249b-4625-b557-2efd79be2fbb" style={styles.modalachat_modal_restaurerachats_ville3bfee32c}>
                        <Text data-layer="50a918c5-682e-4926-89f1-7d46c9dd2a62" style={styles.modalachat_modal_restaurerachats_ville3bfee32c_versailles02c8911e}>Restaurer Achats</Text>
                    </View>
                </View>
                <View data-layer="b8546e10-427d-487c-85c9-4934a67f97e7" style={styles.modalachat_modal_souscrire}>
                    <Svg data-layer="da8ff9f0-135a-4016-a8ed-486ee14e9ce9" style={styles.modalachat_modal_souscrire_rectangle} preserveAspectRatio="none" viewBox="0 0 243 68.3392333984375" fill="rgba(103, 232, 211, 1)"><SvgPath d="M 28 0 L 215 0 C 230.4639739990234 0 243 14.90217781066895 243 33.28494644165039 L 243 35.05428314208984 C 243 53.43705368041992 230.4639739990234 68.3392333984375 215 68.3392333984375 L 28 68.3392333984375 C 12.53602600097656 68.3392333984375 0 53.43705368041992 0 35.05428314208984 L 0 33.28494644165039 C 0 14.90217781066895 12.53602600097656 0 28 0 Z"  /></Svg>
                    <View data-layer="c7161fac-45f3-46d8-a0b7-e1077ac870f2" style={styles.modalachat_modal_souscrire_ville}>
                        <Text data-layer="b8614d16-4980-45c2-b1c1-1f6d2f05ff96" style={styles.modalachat_modal_souscrire_ville_versailles}>Souscrire</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {toggleModal()}} style={{borderWidth: 1}}>
                  <View data-layer="5e391899-6394-4d03-9b1a-f1f002e9788c" style={styles.modalachat_modal_close}>
                      <Svg data-layer="93892d5c-b52b-4a63-aa49-2b715ae3eff8" style={styles.modalachat_modal_close_ellipse1} preserveAspectRatio="none" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 15 0 C 23.28427124023438 0 30 6.715729713439941 30 15 C 30 23.28427124023438 23.28427124023438 30 15 30 C 6.715729713439941 30 0 23.28427124023438 0 15 C 0 6.715729713439941 6.715729713439941 0 15 0 Z"  /></Svg>
                      <Svg data-layer="15fba2e9-ee8e-487f-b479-7619c10a6d59" style={styles.modalachat_modal_close_iconMetroCross} preserveAspectRatio="none" fill="rgba(110, 110, 110, 1)"><SvgPath d="M 16.89064407348633 14.31955909729004 C 16.89058685302734 14.31949901580811 16.89053153991699 14.31943893432617 16.89047431945801 14.31940841674805 L 12.50637722015381 9.640172004699707 L 16.89048767089844 4.960936546325684 L 16.89065742492676 4.960785865783691 C 16.93625259399414 4.91206169128418 16.9714527130127 4.85340690612793 16.99385452270508 4.788829803466797 C 17.05377769470215 4.617475509643555 17.01959609985352 4.417051315307617 16.89048957824707 4.279257774353027 L 14.81945133209229 2.068862915039063 C 14.69034576416016 1.93109917640686 14.50261497497559 1.894647359848022 14.34203720092773 1.958603739738464 C 14.28153610229492 1.982528328895569 14.22657585144043 2.02008318901062 14.18089580535889 2.06871223449707 C 14.18089580535889 2.068772315979004 14.18083953857422 2.06880259513855 14.18078231811523 2.068862915039063 L 9.796615600585938 6.748129844665527 L 5.412447929382324 2.068892955780029 L 5.412306785583496 2.068742275238037 C 5.36665153503418 2.020108222961426 5.311707973480225 1.982552170753479 5.251221656799316 1.958633661270142 C 5.090615749359131 1.894647359848022 4.902884960174561 1.931129217147827 4.773779392242432 2.068892955780029 L 2.702728748321533 4.279318332672119 C 2.573623418807983 4.417111873626709 2.539469957351685 4.617506504058838 2.599393606185913 4.788860321044922 C 2.621817111968994 4.853425979614258 2.6570143699646 4.912075996398926 2.702587604522705 4.960816383361816 C 2.702644109725952 4.960846424102783 2.702672481536865 4.960906982421875 2.702728748321533 4.960967063903809 L 7.08692455291748 9.640172004699707 L 2.702728748321533 14.31943893432617 L 2.702615976333618 14.31958961486816 C 2.657050371170044 14.36833000183105 2.621846199035645 14.42696666717529 2.599393367767334 14.49151515960693 C 2.539441585540771 14.66286945343018 2.573623418807983 14.86329460144043 2.702728748321533 15.00108814239502 L 4.77377986907959 17.21148490905762 C 4.902913570404053 17.34927940368652 5.090644359588623 17.38572883605957 5.251221656799316 17.32177352905273 C 5.311712265014648 17.29783058166504 5.366662502288818 17.26026725769043 5.412334442138672 17.21163177490234 C 5.412363529205322 17.21157264709473 5.412420272827148 17.21154403686523 5.412476539611816 17.21148300170898 L 9.79664421081543 12.53224563598633 L 14.18081092834473 17.21148300170898 L 14.18098068237305 17.21160316467285 C 14.22663879394531 17.2602481842041 14.28157997131348 17.29782295227051 14.34206676483154 17.32176971435547 C 14.50264358520508 17.38572692871094 14.69043159484863 17.34927558898926 14.81948089599609 17.21148300170898 L 16.89050483703613 15.00105667114258 C 17.01960945129395 14.86326217651367 17.05379104614258 14.66283702850342 16.99386787414551 14.49148464202881 C 16.97143745422363 14.42692279815674 16.93622970581055 14.36828231811523 16.89064788818359 14.31955623626709 Z"  /></Svg>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  "modalachat": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_bg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_bg_bgBleu8d9b102a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_bg_bgBleu8d9b102a_mask2b19d676": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_bg_bgBleu8d9b102a_bgBleu": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_bg_bgBleu8d9b102a_bgBleu_oval02fa9fa4": {
    "opacity": 0.0794270858168602,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 438,
    "height": 438,
    "left": 84,
    "top": -138
  },
  "modalachat_bg_bgBleu8d9b102a_bgBleu_oval": {
    "opacity": 0.0794270858168602,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 416,
    "height": 416,
    "left": -208,
    "top": 44
  },
  "modalachat_bg_bgBleu8d9b102a_bgBleu_mask": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": width - 22,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 303,
    "height": 584,
    "left": 36,
    "top": 195
  },
  "modalachat_cardContenu_rectangleBlanc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10980392156862745,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 32,
    "width": 303,
    "height": 584,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu_villea23980da": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 207,
    "height": 92,
    "left": 22.5,
    "top": 29
  },
  "modalachat_cardContenu_villea23980da_sansengagement": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(127, 141, 154, 1)",
    "fontSize": 14,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 19,
    "left": 0,
    "top": 73
  },
  "modalachat_cardContenu_villea23980da_prix": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(75, 84, 93, 1)",
    "fontSize": 21,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 165,
    "height": 25,
    "left": 0,
    "top": 36
  },
  "modalachat_cardContenu_villea23980da_abonnement": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(66, 77, 88, 1)",
    "fontSize": 20,
    "fontFamily": "OpenSans-Bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 207,
    "height": 36,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu_fonctionnalites1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 104,
    "height": 22,
    "left": 22.5,
    "top": 178
  },
  "modalachat_cardContenu_fonctionnalites2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 22,
    "left": 22.5,
    "top": 212
  },
  "modalachat_cardContenu_fonctionnalites3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 232,
    "height": 22,
    "left": 22.5,
    "top": 246
  },
  "modalachat_cardContenu_fonctionnalites4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontFamily": "OpenSans",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 256,
    "height": 22,
    "left": 22.5,
    "top": 280
  },
  "modalachat_cardContenu_restaurerachats": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 243,
    "height": 67.47,
    "left": 30.5,
    "top": 388
  },
  "modalachat_cardContenu_restaurerachats_rectangle389fd6b2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 28,
    "borderTopRightRadius": 28,
    "borderBottomLeftRadius": 28,
    "borderBottomRightRadius": 28,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10980392156862745,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 30,
    "width": 243,
    "height": 67.47,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu_restaurerachats_villefbb74b49": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 172.48,
    "height": 36,
    "left": 35,
    "top": 21.1
  },
  "modalachat_cardContenu_restaurerachats_villefbb74b49_versailles1f79d670": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(66, 77, 88, 1)",
    "fontSize": 20,
    "fontFamily": "OpenSans-Bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 172.48,
    "height": 36,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu_souscrire": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 243,
    "height": 68.34,
    "left": 30.5,
    "top": 476
  },
  "modalachat_cardContenu_souscrire_rectangle": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10980392156862745,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 30,
    "width": 243,
    "height": 68.34,
    "left": 0,
    "top": 0
  },
  "modalachat_cardContenu_souscrire_ville": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 119.82,
    "height": 36,
    "left": 61,
    "top": 16.74
  },
  "modalachat_cardContenu_souscrire_ville_versailles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 23,
    "fontFamily": "OpenSans-Bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 119.82,
    "height": 36,
    "left": 0,
    "top": 0
  },

  "modalachat_modal_close": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 30,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "modalachat_modal_close_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "modalachat_modal_close_iconMetroCross": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 14.45,
    "height": 15.42,
    "left": 7.88,
    "top": 7.58
  }
});
