import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class UpdateProject extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> UpdateProject </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});