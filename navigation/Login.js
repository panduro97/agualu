import React from 'react'
import {createStackNavigator, createAppContainer} from "react-navigation"
import HomeScreen from "../screens/HomeScreen.js"

const guestStack =  createStackNavigator(
	{
		Start: {
            screen: HomeScreen,
            navigationOptions: () => ({
                header: null
            })
		},
	},
	{
		initialRouteName: 'Start'
	}
)

export default guestStack