import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Alert, Platform, AsyncStorage} from 'react-native';
import { TextInput ,TouchableRipple} from 'react-native-paper';
import { NavigationActions } from 'react-navigation'
import Spinner from 'react-native-loading-spinner-overlay'
import Axios from 'axios'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      id: '',
      password: '',
      token: '',
      spinner: false,
    }
  }

  _login = async () => {
    if (this.state.id === '' || this.state.password === '') {
      Alert.alert(
        '', 'No puedes dejar campos vacios',
        [{ text: 'Aceptar', style: 'cancel' }]
      )
    } else {
     /*  console.log(this.state.id)
      console.log(this.state.password) */

      if (Platform.OS == 'android') { this.setState({ spinner: true }) }
      await Axios( {
        url:`http://api.agualu.com/v1/login`,
        method: 'POST',
        data: JSON.stringify({
          username: this.state.id,
          password: this.state.password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(async (response) => {
         /*  console.log(response) */
          this.setState({ spinner: false })
          if (response.data.status_code === 200) {
            let token = response.data.user_token 
            try {
              await AsyncStorage.setItem('TokenLogin', token);
            } catch (error) {
              console.log(error)
            }
            this.props.navigation.navigate('Logged')

/*             this._storeData(JSON.parse(response._bodyText).token,null,null,null)
            this._setStore()
            Toast.show('Bienvenido a Motiprints', { duration: Toast.durations.LONG, hideOnPress: true })
            Alert.alert(
              '', 'Tus álbumes se conservan un máximo de 60 días, realiza tu pedido cuanto antes para que tus recuerdos no desaparezcan',
              [{ text: 'Aceptar', style: 'cancel' }]
            )
            this.props.navigation.navigate('Logged') */
          }
        })
        .catch(error => {
          console.log('error',error)
          this.setState({ spinner: false })
          Alert.alert(
            '', 'Usuario o contraseña incorrectos',
            [{ text: 'Aceptar', style: 'cancel' }]
          )
        })
    }
  }
  

  render() {
    return (
      <View style={styles.background}>
         <Spinner
          visible={this.state.spinner}
          color={'white'}
          textContent={'Cargando...'}
          textStyle={styles.spinnerTextStyle} />
        <TextInput
        underlineColor='#DDE2E7'
        style={styles.inputContainerStyle}
        label="User ID"
        placeholder="Escribe tu ID"
        value={this.state.id}
        onChangeText={id => this.setState({ id })} />
        <TextInput
          underlineColor='#DDE2E7'
          style={styles.inputContainerStyle}
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          password={true}
          secureTextEntry={true} />

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableRipple
            onPress={this._login.bind(this)}
            style={{ position: 'absolute', left: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#6ea9ff', width: 'auto', height: 'auto', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20 }} >
            <View>
              <Text style={{ color: '#ffffff', zIndex: 2, fontSize: 16, fontWeight: 'bold' }}>Ingresar</Text>
            </View>
            </TouchableRipple>
          </View>

      </View>
    );
  }

  
}

const { width } = Dimensions.get('window')
const modalW = Dimensions.get('window').width;
const modalH = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  login: {
    flex: 1,
    marginBottom: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width + 2,
    height: width / 1.5,
    left: -1
  },
  inputContainerStyle: {
    width: width - 20,
    backgroundColor: '#DDE2E7',
    marginTop: 5,
  },
  btn: {
    marginTop: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    color: '#ffffff'
  },
  loginText: {
    color: '#545454',
    fontSize: 16,
    marginTop: 20
  },
  spinnerTextStyle: {
    color: '#fff'
  },
  socialLogo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  }
})
