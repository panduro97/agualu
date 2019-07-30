import React, {Component} from 'react'
import {AsyncStorage, Alert} from 'react-native'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import MainTabNavigator from './MainTabNavigator'
import Preloader from '../components/Preloader'
import guestStack from './Login'


class AuthLoadingScreen extends Component {
    constructor(props){
        super(props)
        this._navigationAsync()
    }

    _navigationAsync = async () => {
     /*    const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken ? 'Logged' : 'Guest')
        if (userToken) {
            Alert.alert(
                '', 'Tus álbumes se conservan un máximo de 60 días, realiza tu pedido cuanto antes para que tus recuerdos no desaparezcan',
                [{ text: 'Aceptar' , style: 'cancel' }]
            )
        } */
        this.props.navigation.navigate('Guest')
    }

    render() {
        return (
            <Preloader />
        )
    }
}

export default SwitchStack = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Guest: guestStack,
        Logged: MainTabNavigator
    },
    {
        initialRouteName: 'AuthLoading',
        gesturesEnabled: false
    }
))