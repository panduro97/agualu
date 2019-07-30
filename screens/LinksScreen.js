import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import jwt_decode from 'jwt-decode' 

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
      text: '20',
    }
  }

  _prueba = async () => {
    try {
      const value = await AsyncStorage.getItem('TokenLogin');
      if (value !== null) {
        // We have data!!
        console.log(value);
        var decoded = jwt_decode(value);
        let tiempoReal = new Date();
        let hora = Date.parse(tiempoReal)
        let horaActual = hora / 1000
        console.log(horaActual)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

 
 
  render() {
    this._prueba()
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.text}
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
      width: width - 20,
      backgroundColor: '#DDE2E7',
      marginTop: 5,
    }
});
