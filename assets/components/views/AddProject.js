import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class AddProject extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> Add Project </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});