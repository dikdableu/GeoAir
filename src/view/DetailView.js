import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class DetailView extends Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  _addFavorite = () => {
    var id = 0

    if (responseApiMeteo.name.length == 0){
      id = 0
    }else{
      for (i = 0; i < responseApiMeteo.name.length; i++) {
          var char = responseApiMeteo.name.charCodeAt(i);
          id = ((id << 5) - id) + char;
          id = id & id;
      }
    }

    var i = 0
    if(listFavorite.length > 0){
      listFavorite.map((item) => {
        if(!typeof 'undefined' || !item.ville || item.id == id){
          i++
        }
      })
    }
    if(i == 0){
      var userInfos = user.shift().idUsers

      dispatch({type: "ADD_FAVORITE", listFavorite: {
        "id": userInfos,
        "ville": responseApiMeteo.name,
        "lat": responseApiMeteo.coord.lat,
        "long": responseApiMeteo.coord.lon
      }})

      Toast.show('Ajouté aux favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }else{
      Toast.show('Existe déjà dans vos favoris', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  }


  render() {

    const color = this.props.navigation.state.params.color
    const responseApiAir = this.props.navigation.state.params.responseApiAir
    const responseApiMeteo = this.props.navigation.state.params.responseApiMeteo

    var dateSunSet = new Date(responseApiMeteo.sys.sunrise * 1000)
    var dateSunRise = new Date(responseApiMeteo.sys.sunset * 1000)
    const minuteSunRise = "0" + dateSunRise.getMinutes()
    const minuteSunSet = "0" + dateSunSet.getMinutes()

    console.log(responseApiAir)

    const sunset = dateSunSet.getHours() + 'h' + minuteSunSet.substr(-2)
    const sunrise = dateSunRise.getHours() + 'h' + minuteSunRise.substr(-2)

    return (
    <ScrollView data-layer="4f1b034a-7282-4eb8-9a4f-fe1e74b0e35b" style={styles.ville}>
        <View data-layer="3d1674d8-b866-413a-b6f1-d4d4843c5c0b" style={styles.ville_searchcity}>
            <Text data-layer="35e40b9c-0c10-4b39-9378-5716d6ae6453" style={styles.ville_searchcity_versailles}>{responseApiMeteo.name.length > 13 ? responseApiMeteo.name.slice(0,13) + '...' : responseApiMeteo.name}</Text>
            <Text data-layer="8a61130c-2565-4b9f-ba8c-cae5c64598dc" style={styles.ville_searchcity_yvelinesFrance}>{responseApiMeteo.sys.country}</Text>
            <Svg data-layer="182b2df4-be2b-4861-90d8-5fc386c26c59" style={styles.ville_searchcity_iconadd} preserveAspectRatio="none" viewBox="-5944.99951171875 -2494.0009765625 15 15" fill="rgba(42, 44, 53, 1)"><SvgPath d="M -5938.65380859375 -2480.15478515625 L -5938.65380859375 -2485.3466796875 L -5943.845703125 -2485.3466796875 C -5944.4833984375 -2485.3466796875 -5944.99951171875 -2485.86376953125 -5944.99951171875 -2486.500732421875 C -5944.99951171875 -2487.137939453125 -5944.4833984375 -2487.654541015625 -5943.845703125 -2487.654541015625 L -5938.65380859375 -2487.654541015625 L -5938.65380859375 -2492.846923828125 C -5938.65380859375 -2493.48388671875 -5938.13623046875 -2494.0009765625 -5937.49951171875 -2494.0009765625 C -5936.8623046875 -2494.0009765625 -5936.345703125 -2493.48388671875 -5936.345703125 -2492.846923828125 L -5936.345703125 -2487.654541015625 L -5931.15380859375 -2487.654541015625 C -5930.51611328125 -2487.654541015625 -5929.99951171875 -2487.137939453125 -5929.99951171875 -2486.500732421875 C -5929.99951171875 -2485.86376953125 -5930.51611328125 -2485.3466796875 -5931.15380859375 -2485.3466796875 L -5936.345703125 -2485.3466796875 L -5936.345703125 -2480.15478515625 C -5936.345703125 -2479.517333984375 -5936.8623046875 -2479.0009765625 -5937.49951171875 -2479.0009765625 C -5938.13623046875 -2479.0009765625 -5938.65380859375 -2479.517333984375 -5938.65380859375 -2480.15478515625 Z"  /></Svg>
            <View data-layer="f9ca6f36-e687-40d6-a4ff-81a741ff2ef3" style={styles.ville_searchcity_rectangle286}></View>
            <TouchableOpacity onPress={() => {this._addFavorite()}}>
              <View data-layer="6f42dd39-c16b-4316-9787-f322c9cb308f" style={styles.ville_searchcity_rectangle287}></View>
            </TouchableOpacity>
        </View>
        <View data-layer="24dcd44e-e852-4f05-962a-19ad1cf55bef" style={styles.ville_groupe192}>
            <View data-layer="cb85ea2d-4dc3-44fd-bcba-edbc6b2a71f1" style={styles.ville_groupe192_groupe186}>
                <Text data-layer="613b6418-8ae0-4a52-9140-b028ffc59683" style={styles.ville_groupe192_groupe186_vitesseDuVent}>Vitesse du vent</Text>
                <Text data-layer="5078d6dc-4f4c-43bf-b90b-6ef8e0ec1130" style={styles.ville_groupe192_groupe186_x43Ms}>{responseApiMeteo.wind.speed + ' m/s'}</Text>
            </View>
            <View data-layer="fdecae97-e068-4a14-ae6f-016f243f37c4" style={styles.ville_groupe192_groupe188}>
                <Text data-layer="c6eb792f-512d-45be-8993-d8d3b51a7902" style={styles.ville_groupe192_groupe188_humidite}>Humidité</Text>
                <Text data-layer="b006120f-50ac-471d-be43-3578347c5989" style={styles.ville_groupe192_groupe188_x93}>{responseApiMeteo.main.humidity + ' %'}</Text>
            </View>
            <View data-layer="44022b19-07db-4b91-8da0-cdc1f75f0160" style={styles.ville_groupe192_groupe189}>
                <Text data-layer="66f264dc-029c-4f11-a9ab-4a7c0f6a8743" style={styles.ville_groupe192_groupe189_visibilite}>Visibilité</Text>
                <Text data-layer="d123136e-3b2f-414e-8f3a-5cd9b8e20d87" style={styles.ville_groupe192_groupe189_x1900M}>{responseApiMeteo.visibility} m</Text>
            </View>
            <View data-layer="18942cd1-894a-4d20-b263-26c1326a2b79" style={styles.ville_groupe192_groupe217}>
                <Text data-layer="a33e5227-f855-406f-8a4b-cfbf91169ef9" style={styles.ville_groupe192_groupe217_coucherDuSoleil}>Coucher du soleil</Text>
                <Text data-layer="352c3782-fa0d-41f3-b440-09056d08639e" style={styles.ville_groupe192_groupe217_x18h43}>{sunrise}</Text>
            </View>
            <View data-layer="e8ba60da-aaea-409a-96d9-131f95028f8d" style={styles.ville_groupe192_groupe218}>
                <Text data-layer="7d7a7bdb-c69d-40a1-8c11-d098dd2b41b5" style={styles.ville_groupe192_groupe218_leverDuSoleil}>Lever du soleil</Text>
                <Text data-layer="7ddcaeb4-ce0e-4e30-a588-9e18cc128862" style={styles.ville_groupe192_groupe218_x8h32}>{sunset}</Text>
            </View>
            <View data-layer="ec474366-8a0f-4564-9c77-ade2c43feb6d" style={styles.ville_groupe192_groupe187}>
                <Text data-layer="3f2ec0a7-d07b-4b8b-b3db-3b0e3b05d001" style={styles.ville_groupe192_groupe187_pression}>Pression</Text>
                <Text data-layer="366dff06-b4ea-4672-9671-ee1a79d5c879" style={styles.ville_groupe192_groupe187_x1027Hpa}>{responseApiMeteo.main.pressure} hPa</Text>
            </View>
        </View>
        <View data-layer="9d43fb5a-789a-4a79-85a1-6b26e5ec9333" style={styles.ville_groupe221}>
            <View data-layer="2ef40511-e2d0-493c-b9b0-0c283ef71cea" style={[styles.ville_groupe221_rectangle275, {borderColor: color, borderWidth: 1, backgroundColor: 'white'}]}></View>
            <View data-layer="717627c5-613c-4e5f-8b51-12486e23b1e3" style={styles.ville_groupe221_airqualityindex}>
                <View data-layer="d23c7299-6f74-412b-a4ff-a392de3e20dc" style={[styles.ville_groupe221_airqualityindex_rectangle190, {borderColor: color}]}></View>
                <Text data-layer="9419f363-9d48-4e75-9a91-52c8f4e2cd20" style={[styles.ville_groupe221_airqualityindex_x2173dda066, {color: color}]}>{responseApiAir.data.aqi}</Text>
            </View>
            <View data-layer="2734aded-b111-4a02-ab1d-c30e26371ca4" style={styles.ville_groupe221_groupe203}>
                <View data-layer="9bfd5fe9-748f-4c69-ac78-7ebd0786039b" style={styles.ville_groupe221_groupe203_groupe222}>
                    <View data-layer="f2036ed2-b4e2-4f0b-960f-19745f4545db" style={styles.ville_groupe221_groupe203_groupe222_groupe200}>
                        <Text data-layer="e3da888e-eeba-44e7-89d3-48922666ccde" style={styles.ville_groupe221_groupe203_groupe222_groupe200_pm10}>PM10</Text>
                        <Text data-layer="82ee61a4-f1d0-49c8-b4da-d70f2811e5a0" style={[styles.ville_groupe221_groupe203_groupe222_groupe200_x132, { color: color}]}>{responseApiAir.data.iaqi.pm10.v}</Text>
                    </View>
                    <View data-layer="b81e02b9-4a42-43b7-9bb1-045a467ba591" style={styles.ville_groupe221_groupe203_groupe222_groupe201}>
                        <Text data-layer="df9b264a-b8e9-441d-8874-b97ece89075d" style={styles.ville_groupe221_groupe203_groupe222_groupe201_x03}>O3</Text>
                        <Text data-layer="be2d8d50-0c64-445e-a28d-30f2c044695e" style={[styles.ville_groupe221_groupe203_groupe222_groupe201_x21, { color: color}]}>{responseApiAir.data.iaqi.o3.v}</Text>
                    </View>
                    <View data-layer="fcd17405-b9f8-4034-8495-1140b2c2562c" style={styles.ville_groupe221_groupe203_groupe222_rectangle291}></View>
                </View>
                <View data-layer="719c91a9-ecc6-40cd-861c-7156acf81213" style={styles.ville_groupe221_groupe203_groupe223}>
                    <View data-layer="4d466ca9-2b93-4c57-a6e6-3fafb0730908" style={styles.ville_groupe221_groupe203_groupe223_groupe199}>
                        <Text data-layer="3fc09ed9-b435-43c7-84a3-7cb0d19d43fe" style={styles.ville_groupe221_groupe203_groupe223_groupe199_no2}>NO2</Text>
                        <Text data-layer="6e874a53-5214-418e-a5c1-00864a1198ed" style={[styles.ville_groupe221_groupe203_groupe223_groupe199_x165, { color: color}]}>{responseApiAir.data.iaqi.no2.v}</Text>
                    </View>
                    <View data-layer="97a0b00d-5104-48e9-81b7-83cf587fe90a" style={styles.ville_groupe221_groupe203_groupe223_groupe202}>
                        <Text data-layer="63321f72-08b8-41d0-a989-1cdaf68e5ce4" style={styles.ville_groupe221_groupe203_groupe223_groupe202_pm25}>PM2.5</Text>
                        <Text data-layer="b5fa323c-d169-4984-bdb8-387b90324f59" style={[styles.ville_groupe221_groupe203_groupe223_groupe202_x11, { color: color}]}>{responseApiAir.data.iaqi.pm25.v}</Text>
                    </View>
                    <View data-layer="e1745705-9ea5-4be9-a421-444cd57e496c" style={styles.ville_groupe221_groupe203_groupe223_rectangle290}></View>
                </View>
            </View>
        </View>
        <View data-layer="1d9af854-117d-4569-bd1c-382d8648a352" style={styles.ville_line713d4434}></View>
        <View data-layer="f8323eb0-ce31-4b3d-b8bf-5df4ab26af60" style={styles.ville_line}></View>
        <View data-layer="c4e395d8-e883-4da3-8fa2-95ff82f6742d" style={styles.ville_time}>
            <Text data-layer="fdf366e4-eec7-4adc-ad64-a0b8e5029805" style={styles.ville_time_x1200a8d3bbd1}>12 : 00</Text>
            <Text data-layer="fb5ee516-c6e3-4026-9cbe-623a78487820" style={styles.ville_time_x1200a2a59a04}>12 : 00</Text>
            <Text data-layer="f048b778-dc7e-4176-baa8-f7db3694bfa2" style={styles.ville_time_x12003504acc6}>12 : 00</Text>
            <Text data-layer="a4153b3d-df41-4e52-b162-f6ed4d71d883" style={styles.ville_time_x1200baa55a04}>12 : 00</Text>
            <Text data-layer="fc51e519-00c3-463a-8162-8b9264607aac" style={styles.ville_time_x1200}>12 : 00</Text>
        </View>
        <View data-layer="5f3e823b-ff4d-4966-b7f6-693d042b7522" style={styles.ville_groupe219}>
            <Text data-layer="01344ea0-c0e2-4edd-8743-c44f33a55d3a" style={styles.ville_groupe219_x17c}>{(responseApiMeteo.main.temp - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="94dde90a-e2c8-418b-bfc3-93638dc3f882" style={styles.ville_groupe219_min}>MIN</Text>
            <Text data-layer="02f386d0-2c04-4f6f-b54b-5afd748bac1a" style={styles.ville_groupe219_max}>MAX</Text>
            <Text data-layer="f352e19c-9794-428c-a13a-76584e15af46" style={styles.ville_groupe219_x10c}>{(responseApiMeteo.main.temp_min - 273.15).toFixed(1) + "°C"}</Text>
            <Text data-layer="d619b2b2-857d-4bae-b000-74cf855a0ea6" style={styles.ville_groupe219_x18c}>{(responseApiMeteo.main.temp_max - 273.15).toFixed(1) + "°C"}</Text>
            <Svg data-layer="546f373a-333e-41be-aa9d-cad06fb2e792" style={styles.ville_groupe219_trace122} preserveAspectRatio="none" viewBox="55.547035217285156 355.60400390625 33.1279296875 36.5" fill="rgba(42, 44, 53, 1)"><SvgPath d="M 87.78725433349609 366.0759887695312 C 87.46347808837891 365.424072265625 86.67291259765625 365.1590576171875 86.02361297607422 365.4819641113281 L 81.27143096923828 367.8396301269531 L 82.49105834960938 364.2167053222656 C 82.72357940673828 363.5279235839844 82.35329437255859 362.7812194824219 81.66452026367188 362.5495910644531 C 80.97309875488281 362.3161926269531 80.22903442382812 362.6873168945312 79.99739074707031 363.3761291503906 L 77.93629455566406 369.4944458007812 L 73.42716217041016 371.7319641113281 L 73.42716217041016 366.6972351074219 L 77.99156951904297 362.1327819824219 C 78.50575256347656 361.6186218261719 78.50575256347656 360.7850341796875 77.99156951904297 360.2717590332031 C 77.47739410400391 359.7575988769531 76.64471435546875 359.7575988769531 76.13053894042969 360.2717590332031 L 73.42716217041016 362.9751281738281 L 73.42716217041016 357.670166015625 C 73.42716217041016 356.9427795410156 72.8375244140625 356.35400390625 72.11100769042969 356.35400390625 C 71.38361358642578 356.35400390625 70.79485321044922 356.9427795410156 70.79485321044922 357.670166015625 L 70.79485321044922 362.9751281738281 L 68.09059906005859 360.2717590332031 C 67.57642364501953 359.7575988769531 66.74373626708984 359.7575988769531 66.22955322265625 360.2717590332031 C 65.71538543701172 360.7850341796875 65.71538543701172 361.6186218261719 66.22955322265625 362.1327819824219 L 70.79485321044922 366.6981201171875 L 70.79485321044922 371.4801025390625 L 66.73934936523438 368.9452209472656 L 65.28720092773438 362.6548767089844 C 65.12400054931641 361.94677734375 64.41766357421875 361.5045471191406 63.70957946777344 361.6686401367188 C 63.00148391723633 361.8318481445312 62.55925369262695 362.5390625 62.72333526611328 363.2471313476562 L 63.58322143554688 366.9727172851562 L 59.08373641967773 364.1614379882812 C 58.46777725219727 363.7753601074219 57.65615081787109 363.9640197753906 57.27008056640625 364.5799560546875 C 56.88488388061523 365.1968078613281 57.07265853881836 366.0084228515625 57.68861389160156 366.3936157226562 L 62.18722152709961 369.2049255371094 L 58.4625129699707 370.0648193359375 C 57.75442123413086 370.2279968261719 57.31219482421875 370.9352111816406 57.47627258300781 371.643310546875 C 57.61666488647461 372.2522583007812 58.15804290771484 372.6637573242188 58.75733184814453 372.6637573242188 C 58.85472869873047 372.6637573242188 58.95475387573242 372.65234375 59.05390548706055 372.6295471191406 L 65.34423828125 371.1773986816406 L 69.41553497314453 373.7219848632812 L 65.11521911621094 375.8558959960938 L 58.99774932861328 373.7947692871094 C 58.30633163452148 373.562255859375 57.56226348876953 373.9334411621094 57.32974243164062 374.6222229003906 C 57.09722518920898 375.3110046386719 57.46837615966797 376.0576782226562 58.15716552734375 376.2893371582031 L 61.78097152709961 377.5098571777344 L 57.02878570556641 379.8675231933594 C 56.37772750854492 380.1913146972656 56.11098861694336 380.98095703125 56.43476104736328 381.6320190429688 C 56.66464996337891 382.0953369140625 57.13056945800781 382.3638000488281 57.61403274536133 382.3638000488281 C 57.81057739257812 382.3638000488281 58.01063537597656 382.319091796875 58.19840621948242 382.2260437011719 L 62.95059204101562 379.868408203125 L 61.73007583618164 383.4913330078125 C 61.49843597412109 384.1801147460938 61.86871337890625 384.9267883300781 62.55749893188477 385.1593322753906 C 62.69701385498047 385.205810546875 62.83827972412109 385.2286071777344 62.9777946472168 385.2286071777344 C 63.52706909179688 385.2286071777344 64.03948974609375 384.8811645507812 64.22462463378906 384.3319091796875 L 66.28571319580078 378.2135314941406 L 70.79485321044922 375.9761047363281 L 70.79485321044922 381.0099487304688 L 66.22955322265625 385.5752258300781 C 65.71538543701172 386.0885314941406 65.71538543701172 386.9220886230469 66.22955322265625 387.436279296875 C 66.48664855957031 387.6933898925781 66.82358551025391 387.8214721679688 67.1605224609375 387.8214721679688 C 67.49745178222656 387.8214721679688 67.83351135253906 387.6933898925781 68.09059906005859 387.436279296875 L 70.79485321044922 384.7320251464844 L 70.79485321044922 390.0378723144531 C 70.79485321044922 390.7643737792969 71.38361358642578 391.35400390625 72.11100769042969 391.35400390625 C 72.8375244140625 391.35400390625 73.42716217041016 390.7643737792969 73.42716217041016 390.0378723144531 L 73.42716217041016 384.7328796386719 L 76.13053894042969 387.436279296875 C 76.38762664794922 387.6933898925781 76.72456359863281 387.8214721679688 77.06061553955078 387.8214721679688 C 77.39755249023438 387.8214721679688 77.73448181152344 387.6933898925781 77.99156951904297 387.436279296875 C 78.50575256347656 386.9220886230469 78.50575256347656 386.0885314941406 77.99156951904297 385.5752258300781 L 73.42716217041016 381.0108032226562 L 73.42716217041016 376.2287902832031 L 77.482666015625 378.7628479003906 L 78.93393707275391 385.0531616210938 C 79.07432556152344 385.662109375 79.61658477783203 386.0736083984375 80.21499633789062 386.0736083984375 C 80.31326293945312 386.0736083984375 80.41329193115234 386.0622253417969 80.51244354248047 386.0393676757812 C 81.22053527832031 385.8761901855469 81.66276550292969 385.1689758300781 81.49868011474609 384.4608764648438 L 80.6387939453125 380.7352905273438 L 85.13740539550781 383.5466003417969 C 85.35413360595703 383.6825866699219 85.59542846679688 383.7466430664062 85.83320617675781 383.7466430664062 C 86.27191925048828 383.7466430664062 86.70098876953125 383.5273132324219 86.95105743408203 383.1280822753906 C 87.33625030517578 382.5121154785156 87.14848327636719 381.6995849609375 86.53251647949219 381.3143920898438 L 82.03303527832031 378.5031127929688 L 85.75949859619141 377.6432189941406 C 86.46759033203125 377.4800109863281 86.90981292724609 376.7727966308594 86.74573516845703 376.064697265625 C 86.58253479003906 375.3565979003906 85.87444305419922 374.9135131835938 85.167236328125 375.0784606933594 L 78.87689971923828 376.5306396484375 L 74.80560302734375 373.986083984375 L 79.10591125488281 371.8521423339844 L 85.22514343261719 373.912353515625 C 85.36378479003906 373.9597473144531 85.50505065917969 373.981689453125 85.64455413818359 373.981689453125 C 86.19470977783203 373.981689453125 86.70713043212891 373.6351013183594 86.89227294921875 373.0849304199219 C 87.12390899658203 372.3961486816406 86.75363922119141 371.6503295898438 86.06484985351562 371.4178161621094 L 82.44017028808594 370.1981811523438 L 87.19322967529297 367.8396301269531 C 87.84428405761719 367.5167236328125 88.11015319824219 366.72705078125 87.78725433349609 366.0759887695312 Z"  /></Svg>
            <View data-layer="8fbbd1ca-eba7-457d-a9dd-b0a0a1b079da" style={styles.ville_groupe219_rectangle288}></View>
        </View>
    </ScrollView>
    );
  }
}

DetailView.propTypes = {

}

DetailView.defaultProps = {

}


const styles = StyleSheet.create({
  "ville": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "ville_searchcity": {
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
    "width": "auto",
    "height": 43,
    "left": 34,
    "top": 183,
    "right": 30
  },
  "ville_searchcity_versailles": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 24,
    "left": 0,
    "top": 0,
    "right": 76
  },
  "ville_searchcity_yvelinesFrance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 17,
    "left": 0,
    "right": 163,
    "bottom": 0
  },
  "ville_searchcity_iconadd": {
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
    "width": 15,
    "height": "auto",
    "top": 4,
    "right": 5,
    "bottom": 24
  },
  "ville_searchcity_rectangle286": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 306,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "ville_searchcity_rectangle287": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 24,
    "height": 24,
    "top": 0,
    "right": 0
  },
  "ville_groupe192": {
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
    "width": "auto",
    "height": 130,
    "left": 34,
    "top": 451,
    "right": 36
  },
  "ville_groupe192_groupe186": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe186_vitesseDuVent": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 97,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe186_x43Ms": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe188": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 23,
    "right": 0
  },
  "ville_groupe192_groupe188_humidite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 57,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe188_x93": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe189": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 67,
    "right": 0
  },
  "ville_groupe192_groupe189_visibilite": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 55,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe189_x1900M": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe217": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 111,
    "right": 0
  },
  "ville_groupe192_groupe217_coucherDuSoleil": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 109,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe217_x18h43": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe218": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 89,
    "right": 0
  },
  "ville_groupe192_groupe218_leverDuSoleil": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 91,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe218_x8h32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe192_groupe187": {
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
    "width": "auto",
    "height": 19,
    "left": 0,
    "top": 45,
    "right": 0
  },
  "ville_groupe192_groupe187_pression": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe192_groupe187_x1027Hpa": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 60,
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221": {
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
    "width": "auto",
    "height": 84,
    "left": 34,
    "top": 338,
    "right": 35
  },
  "ville_groupe221_rectangle275": {
    "opacity": 0.3,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": "auto",
    "height": 84,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_airqualityindex": {
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
    "width": "auto",
    "height": 35,
    "left": 25,
    "top": 25,
    "right": 231
  },
  "ville_groupe221_airqualityindex_rectangle190": {
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
    "borderTopWidth": 1.5,
    "borderRightWidth": 1.5,
    "borderBottomWidth": 1.5,
    "borderLeftWidth": 1.5,
    "borderTopLeftRadius": 3,
    "borderTopRightRadius": 3,
    "borderBottomLeftRadius": 3,
    "borderBottomRightRadius": 3,
    "width": 50,
    "height": 35,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_airqualityindex_x2173dda066": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": "auto",
    "left": 16,
    "top": 6,
    "right": 16,
    "bottom": 8
  },
  "ville_groupe221_groupe203": {
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
    "width": "auto",
    "height": "auto",
    "left": 92,
    "top": 20,
    "right": 11,
    "bottom": 21
  },
  "ville_groupe221_groupe203_groupe222": {
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
    "width": 96,
    "height": "auto",
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe200": {
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
    "width": 81,
    "height": 19,
    "top": 1,
    "right": 14
  },
  "ville_groupe221_groupe203_groupe222_groupe200_pm10": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe200_x132": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201": {
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
    "width": 81,
    "height": 19,
    "right": 14,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201_x03": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe222_groupe201_x21": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe222_rectangle291": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 43,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223": {
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
    "width": 96,
    "height": "auto",
    "left": 0,
    "top": 0,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe199": {
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
    "width": 81,
    "height": 19,
    "left": 1,
    "top": 1
  },
  "ville_groupe221_groupe203_groupe223_groupe199_no2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 28,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe199_x165": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202": {
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
    "width": 81,
    "height": 19,
    "left": 1,
    "bottom": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202_pm25": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 41,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "ville_groupe221_groupe203_groupe223_groupe202_x11": {
    "opacity": 1,
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 19,
    "top": 0,
    "right": 0
  },
  "ville_groupe221_groupe203_groupe223_rectangle290": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 43,
    "left": 0,
    "top": 0,
    "right": 0
  },
  "ville_line713d4434": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 622,
    "right": 0
  },
  "ville_line": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(42, 44, 53, 0.050980392156862744)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": 2,
    "left": 0,
    "top": 691,
    "right": 0
  },
  "ville_time": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": -198.5,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 397,
    "height": 20,
    "left": "50%",
    "top": 646
  },
  "ville_time_x1200a8d3bbd1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 20,
    "left": 88,
    "top": 0
  },
  "ville_time_x1200a2a59a04": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 47,
    "height": 20,
    "left": 174,
    "top": 0
  },
  "ville_time_x12003504acc6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 20,
    "left": 263,
    "top": 0
  },
  "ville_time_x1200baa55a04": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 20,
    "left": 351,
    "top": 0
  },
  "ville_time_x1200": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 0.25098039215686274)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 46,
    "height": 20,
    "left": 0,
    "top": 0
  },
  "ville_groupe219": {
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
    "width": "auto",
    "height": 57,
    "left": 34,
    "top": 262,
    "right": 30
  },
  "ville_groupe219_x17c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 'auto',
    "height": 46,
    "left": 56,
    "top": 1
  },
  "ville_groupe219_min": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-regular",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 27,
    "height": 14,
    "right": 56,
    "bottom": 13
  },
  "ville_groupe219_max": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 31,
    "height": 17,
    "top": 9,
    "right": 52
  },
  "ville_groupe219_x10c": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-regular",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 14,
    "left": 279,
    "right": 5,
    "bottom": 13
  },
  "ville_groupe219_x18c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(42, 44, 53, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "roboto-bold",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "auto",
    "height": 17,
    "left": 279,
    "top": 9,
    "right": 5
  },
  "ville_groupe219_trace122": {
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
    "width": 33.63,
    "height": 37,
    "left": -1,
    "top": 8
  },
  "ville_groupe219_rectangle288": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  }
});
