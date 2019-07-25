import React, { Component } from 'react'
import { View, FormLabel, FormInput, FormValidationMessage } from 'react-native'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        /* const { params } = props.navigation.state; */
        this.state = {
            cuerpo: {}
        };
    }

    render() {
        return (
          <View>
          <FormLabel>Name</FormLabel>
          <FormInput />
          <FormValidationMessage>Error message</FormValidationMessage>
          </View>
        )
    }
}

