import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class Settings extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> Settings </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});