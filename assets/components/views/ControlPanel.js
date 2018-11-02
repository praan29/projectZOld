import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class ControlPanel extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> ControlPanel </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});