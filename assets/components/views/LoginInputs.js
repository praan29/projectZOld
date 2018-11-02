import React,{ Component } from 'react';
import { 
	View,
	Text,
	TextInputs,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
	
} from 'react-native';

import { Button } from 'react-native-elements';


export default ({ navigation }) => (

	<View style={[styles.container,styles.wrapper]}>

		<View style = {styles.textInput}>
				<TextInput
					returnKeyType = "next"
					placeholder = "email / phone number"
					style = {styles.inputBox}
					placholderTextColor = "95a5a6"
					underlineColorAndroid = "transparent"
				/>
		</View>

		<View style = {styles.textInput} >
			<TextInput
				secureTextEntry
				returnKeyType = "go"
				placeholder = "password" 
				style = {styles.inputBox}
				placholderTextColor = "95a5a6"
					underlineColorAndroid = "transparent"
			/>
		</View>


	</View>

);

const styles = StyleSheet.create({
	container:{
		padding:40,
	},
	wrapper:{
		marginTop:5,
		marginBottom:80,
	},
	textInput:{
		height : 40,
		marginTop : 8,
		marginBottom : 14,
		paddingVertical : 5,
		paddingHorizontal : 10,
	},
	inputBox : {
		color : '#4d4d4d',
		fontSize : 18,
		fontFamily : 'Roboto',
		borderBottomWidth : 2,
		borderTopColor : '#fff',
		borderRightColor : '#fff',
		borderLeftColor : '#fff',
		marginStart : 24,
		borderBottomColor : '#ece058',
	},
});