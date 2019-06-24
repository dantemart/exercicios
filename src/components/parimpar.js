import React from 'react'
import { View, Text } from 'react-native'
import Default from '../styles/default'

function parOuImpar(num) {
	// if(num % 2 == 0) {
	// 	return <Text style={Default.ex}>Par</Text>
	// } else {
	// 	return  <Text style={Default.ex}>Impar</Text>
	// }
	const v = num % 2 == 0 ? 'Par' : 'Impar'
	return <Text style ={Default.ex}>{v}</Text>
}

export default props => 
	<View>
		{
			parOuImpar(props.number)
		}
	</View>