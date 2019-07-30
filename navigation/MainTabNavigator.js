import React from 'react'
import {NavigationActions, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';



const navigationOptions = {
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#ffffff',
		},
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
			fontSize: 20,
			color: '#000000',
			fontWeight: 'bold'
		}
	}
}

const leftIcon = (navigation, icon) => <Icon
	name={icon}
	style={{paddingHorizontal: 20, paddingVertical:18}}
	size={20}
	color="#000000"
	onPress={() => navigation.openDrawer()}
/>;

const goBack = (navigation, icon) => <Icon
    name={icon}
    style={{paddingHorizontal: 20, paddingVertical:18}}
	size={20}
	color="#000000"
	onPress={() => navigation.goBack(Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT))}
/>

/* const logoutScreenStack = createStackNavigator({
    LogoutScreen: {
        screen: Logout,
        navigationOptions: ({navigation}) => ({
            title: 'Cerrar sesión'
        })
    }
}) */

const body = createStackNavigator({
    QRview: {
        screen: LinksScreen,
        navigationOptions: ({navigation}) => ({
            title: 'LinksScreen',
            headerLeft: leftIcon(navigation, 'bars'),
        })
    }
},
navigationOptions
)




export default createDrawerNavigator(
    {
          QrScreen: {
            screen: body,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Qr Code',
                drawerIcon: ({tintColor}) => (<Icon name="clone" size={20} style={{color: tintColor}} />),
            })
        },
     /*    LogoutScreen: {
            screen: logoutScreenStack,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Cerrar sesión',
                drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={20} style={{color: tintColor}} />),
            })
        } */
    },
	{
		drawerBackgroundColor : '#6ea9ff',
		contentOptions: {
			activeTintColor: '#f980ba',
			activeBackgroundColor : '#00cfff',
			inactiveTintColor : '#ffffff',
			itemsContainerStyle: {
				marginVertical: 0,
			}
		}
	}
)