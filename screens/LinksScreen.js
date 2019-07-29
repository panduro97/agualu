import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
 
const { width } = Dimensions.get('window')
const modalW = Dimensions.get('window').width;
const modalH = Dimensions.get('window').height;

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    Dimensions
} from 'react-native';
 
class HelloWorld extends Component {
  state = {
    text: '20',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='purple'
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
 
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
 
module.exports = HelloWorld;