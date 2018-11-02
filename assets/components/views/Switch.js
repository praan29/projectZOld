import React, { Component } from 'react';
import {
Text,
View,
StyleSheet,
}from 'react-native';


export default class Switch extends React.Component{
render(){
	return(
		<View style = {styles.container}>
				<Text> Switch </Text>
		</View>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex : 1,
}
});