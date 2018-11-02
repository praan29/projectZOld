import React,{ Component } from 'react';
import { 
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
} from 'react-native';


import { Button,Icon } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import { HeaderBackButton,Badge,NavigationActions } from 'react-navigation';


class FloatingLabel extends Component{

	constructor(props){
		super(props);
		this.state={
			isFocused :false,
		};
	}
	
	handleFocus = () =>this.setState( { isFocused:true });
	handleBlur = () =>this.setState( { isFocused: false });
	
	render(){
		const { label, ...props }=this.props;
		const { isFocused } = this.state;
		const labelStyle={
			marginStart : 25,
			position:'absolute',
			top: !isFocused ? 15 : 0,
			fontSize : !isFocused ? 20 : 14,
			color:!isFocused ? '#aaa': '#000',
		};
		return(
			<View style={{padding:18}}>
				<Text style={labelStyle}>
					{label} 
				</Text>
				<TextInput
					{...props}
					style={styles.inputText}
					onBlur={this.handleBlur}
					onFocus={this.handleFocus}
				/>
			</View>
		)
	}
}

export default class SignUp extends React.Component{

constructor(props){
	super(props);
	this.state = {
		firstName:"",
		lastName:"",
		emailAddress:"",
		phoneNumber:"",
		userName:"",
		fPassword:"",
		cPassword:"",
	};
}	

radio_props = {
	data:[
		{
			label : 'Male',
			value : 'm',
			layout : 'row',
		},
		{
			label : 'Female',
			value : 'f',
			layout : 'row',
		},
   ],
};
onPress = data => this.setState({ data });
handleSubmitAction = ()=>{
	this.props.navigation.navigate('HomeButtonNav');
}
handleCancelAction =()=>{
	this.props.navigation.navigate('LandingView');
}
firstNameChangeEvent=(fname)=>this.setState({firstName:fname});
lastNameChangeEvent=(lname)=>this.setState({lastName:lname});
emailAddressChangeEvent=(email)=>this.setState({emailAddress:email});
phoneNumberChangeEvent=(phone)=>this.setState({phoneNumber:phone});
userNameChangeEvent=(uname)=>this.setState({userName:uname});
fPasswordChangeEvent=(fpwd)=>this.setState({fPassword:fpwd});
cPasswordChangeEvent=(cpwd)=>this.setState({cPassword:cpwd});

	render(){
		return(
			<View style = {styles.container}>
				<ScrollView style={styles.scrollViewWrapper}>
					<KeyboardAvoidingView behavior= 'padding'>
						<FloatingLabel
							label="FirstName"
							value={this.state.firstName}
							onChangeText={this.firstNameChangeEvent}
						/>
						<FloatingLabel
							label="LastName"
							value={this.state.lastName}
							onChangeText={this.lastNameChangeEvent}
						/>
						<View style = {styles.gendersWrapper} >
							<Text style={styles.genderLabel}>Gender</Text>
							<RadioGroup radioButtons={this.radio_props.data} onPress={this.onPress} flexDirection='row' />
						</View>
						<FloatingLabel
							label="Email Address"
							value={this.state.emailAddress}
							onChangeText={this.emailAddressChangeEvent}
						/>
						<FloatingLabel
							label="PhoneNumber"
							value={this.state.phoneNumber}
							onChangeText={this.phoneNumberChangeEvent}
						/>
						<FloatingLabel
							label="Username"
							value={this.state.userName}
							onChangeText={this.userNameChangeEvent}
						/>
						<FloatingLabel
							label="Password"
							secureTextEntry
							value={this.state.fPassword}
							onChangeText={this.fPasswordChangeEvent}
						/>
						<FloatingLabel
							label="Confirm Password"
							secureTextEntry
							value={this.state.cPassword}
							onChangeText={this.cPasswordChangeEvent}
						/>
					</KeyboardAvoidingView>
				</ScrollView>

				<View>
					<Button
						title='+'
						color='#fff'
						fontSize={20}
						fontFamily='Roboto'
						buttonStyle={styles.submitButton}
						onPress={this.handleSubmitAction}
					/>
					<Button
						title='X'
						color='#fff'
						fontSize={20}
						fontFamily='Roboto'
						buttonStyle={styles.cancelButton}
						onPress={this.handleCancelAction}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container :{
		flexGrow: 1,
		backgroundColor : '#ffff',
	},
	scrollViewWrapper:{
		flex:1,
		margin:10,
	},
	inputWrapper:{
		// height:11,
		// margin:10,
	},
	inputText:{
		height:45,
		// width:315,
		fontSize : 18,
		fontFamily: 'Roboto',
		letterSpacing: 0.8,
		// marginStart : 18,
		// borderBottomWidth : 2,
		// borderTopColor : '#fff',
		// borderRightColor : '#fff',
		// borderLeftColor : '#fff',	
		// borderBottomColor : '#4d4d4d',
	},
	gendersWrapper:{
		flex : 1,
		flexDirection:'row',
		alignContent : 'flex-start',
	},
	genderLabel:{
		fontSize : 18,
		marginStart : 34,
		letterSpacing: 0.8,
		fontFamily: 'Roboto',
	},
	submitButtonWrapper:{
		bottom : 149,
		flexDirection:'row',
		alignContent : 'flex-end',
	},
	submitButtonTitle:{
		color:'red',
		fontSize : 18,
		letterSpacing: 0.8,
		fontFamily: 'Roboto',
	},
	submitButton:{
		zIndex : 11,
		right : 4,
		bottom : 128,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#01579B',
	},
	cancelButton:{
		zIndex : 11,
		right : 4,
		bottom : 45,
		width : 60,
		height : 60,
		elevation : 8,
		borderRadius : 50,
		position : 'absolute',
		alignItems : 'center',
		justifyContent:'center',
		backgroundColor : '#FF6347',
	}
});

// <View style={styles.inputWrapper}>	
						// 	<TextInput
						// 		value={this.state.lastName}
						// 		style={styles.inputText}
						// 		placeholder="last name"
						// 		onChangeText={this.lastNameChangeEvent}
						// 		placeholderTextColor="#234876"
						// 		underlineColorAndroid="transparent"
						// 	/>
						// </View>
						// <View style = {styles.genders} >
						// 	<Text style={styles.genderLabel}>Gender</Text>
						// 	<RadioGroup radioButtons={this.radio_props.data} onPress={this.onPress} flexDirection='row' />
						// </View>