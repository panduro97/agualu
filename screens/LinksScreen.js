import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import jwt_decode from 'jwt-decode' 
import {decode, encode} from 'base-64'
import { ntob, bton } from 'number-to-base64';
import { List  } from 'react-native-paper';

import {StyleSheet, View, Text, Dimensions, AsyncStorage} from 'react-native';
 
const { width } = Dimensions.get('window')
const modalW = Dimensions.get('window').width;
const modalH = Dimensions.get('window').height;

export default class LinksScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      id: '',
      password: '',
      token: '',
      spinner: false,
      text: '',
      qr: ''
    }
  }


  _prueba = async () => {
    let variable = await AsyncStorage.getItem('UserID')
    let numero = Number(variable)
    console.log(typeof(numero)+ numero)
    var final = ntob(numero)

/*     let Useridd = encode(await AsyncStorage.getItem('UserID')); */
    var longitud = final.length

    if(longitud < 5){
      while (final.length < 5) {
        final = "0" + final;
      }
    }
  
/*     switch (Servicio) {
      case value:
        
        break;
    
      default:
        break;
    } */
  let idFinal = '#R'+ final 

    this.setState({
      qr:  final,
      text: idFinal
    })
   
    try {
      const value = await AsyncStorage.getItem('TokenLogin');
      if (value !== null) {
        // We have data!!
      /*   console.log(value); */
        var decoded = jwt_decode(value);
        let tiempoReal = new Date();
        let hora = Date.parse(tiempoReal)
        let horaActual = hora / 1000
      /*   console.log(horaActual) */
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  componentWillMount(){
    this._prueba()
  }
 
 
  render() {
    
    return (
      <View style={styles.container}>
        <List.Item
          title="First Item"
          description="Item description"
          /* left={props => <List.Icon {...props} icon="folder" />} */
        />
        <QRCode
          value={this.state.qr}
          size={200}
          bgColor='black'
          fgColor='white'/>
          <Text>
          {this.state.text}{'\n'}{'\n'}
        </Text>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
      width: width - 20,
      backgroundColor: '#DDE2E7',
      marginTop: 5,
    }
});
