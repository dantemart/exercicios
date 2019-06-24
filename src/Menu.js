import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import ParImpar from './components/parimpar'
import Simple from './components/simple'

export default createDrawerNavigator({
	ParImpar: {
		screen: () => <ParImpar number={30}></ParImpar>,
		navigationOptions: { title: 'Par ou Impar' }
	},
	Simple: {
		screen: () => <Simple label='Label de teste!'></Simple>,
	}
}, { drawerWidth: 300 })