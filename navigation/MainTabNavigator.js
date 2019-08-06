import React from 'react'
import {NavigationActions, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabBarIcon from '../components/TabBarIcon';
import Venta from '../screens/Venta';
import LinksScreen from '../screens/LinksScreen';
import Recarga from '../screens/Recarga';
import Cupon from '../screens/Cupon';




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
            title: 'Pruebas',
            headerLeft: leftIcon(navigation, 'bars'),
        })
    },
},
navigationOptions
)

const prom = createStackNavigator({
    Cupon: {
        screen: Cupon,
        navigationOptions: ({navigation}) => ({
            title: 'Cupon',
            headerLeft: leftIcon(navigation, 'bars'),
        })
    },
},
navigationOptions
)

const sales = createStackNavigator({
    Venta: {
        screen: Venta,
        navigationOptions: ({navigation}) => ({
            title: 'Venta',
            headerLeft: leftIcon(navigation, 'bars'),
        })
    },
},
navigationOptions
)

const reload = createStackNavigator({
    Recarga: {
        screen: Recarga,
        navigationOptions: ({navigation}) => ({
            title: 'Recarga',
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
        reloadScreen: {
            screen: reload,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Recargas',
                drawerIcon: ({tintColor}) => (<Icon name="refresh" size={20} style={{color: tintColor}} />),
            })
        },
        saleScreen: {
            screen: sales,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Ventas',
                drawerIcon: ({tintColor}) => (<Icon name="barcode" size={20} style={{color: tintColor}} />),
            })
        },
        promScreen: {
            screen: prom,
            navigationOptions: ({navigation}) => ({
                drawerLabel: 'Cupon',
                drawerIcon: ({tintColor}) => (<Icon name="qrcode" size={20} style={{color: tintColor}} />),
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