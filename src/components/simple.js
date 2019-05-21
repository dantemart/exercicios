import React from 'react'
import { Text } from 'react-native'
import Default from '../styles/default'

export default function(props) {
	return <Text style={[Default.ex]}>{props.label}</Text>
}