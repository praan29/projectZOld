import React ,{ Component } from 'react';
import { 
	Alert,
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	
} from 'react-native';

import { Button } from 'react-native-elements';
// import LoginInput  from './views/LoginInputs';


const companyLogo = require('../img/logo.png');
const loginScreenWallpaper = require('../img/wallpaper.jpg');

export default class LoginView extends Component{
	render(){
		return(
			<ImageBackground
				source = {loginScreenWallpaper}
				style = {[styles.container,styles.wallpaper]}
			>
				<View style={styles.logoWrapper}>
					<Image
						source={companyLogo}
						style = {styles.logoStyle}
					>
					</Image>
				</View>

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

		<View style={styles.buttonWrapper}>

		<Button
			title='Sign In'
			color= '#fff'
			fontSize = {20}
			fontWeight='100'
			fontFamily= 'Roboto'
			buttonStyle={[styles.signInButton]}
			onPress={() =>  Alert.alert('Sign Button Clicked')} 
		/>

		<Button
			title='Create Account'
			color= '#fff'
			fontSize = {20}
			fontWeight='100'
			fontFamily= 'Roboto'
			buttonStyle={[styles.signUpButton]}
			onPress={() =>  this.props.navigation.navigate('SignUpView',{headerTitle : 'Create Acc'})} 
		/>
		
	</View>


	</View>

			</ImageBackground>
		);
	}
} 


const styles = StyleSheet.create({
	container :{
		flex:1,
	},
	wallpaper :{
		height:null,
		width:null,
	},
	logoWrapper:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	logoStyle:{
		width:100,
		height:100
	},
	wrapper:{
		margin:20,
		// marginBottom:80,
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
	buttonWrapper:{
		flex: 1,
		marginTop : 10,
		flexDirection : 'row',
		justifyContent:'space-around',
	},
	signInButton:{
		width : 150,
		height : 45,
		borderRadius : 20,
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#27ae60',
	},
	signUpButton:{
		width : 180,
		height : 45,
		borderRadius : 20,
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#234876',
	},
});