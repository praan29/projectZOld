import App from './router';
import React,{ Component } from 'react';

import { RootStackNavigator } from './router';

export default class Controller extends Component{
  constructor(props){
    super(props);
    this.state = {
      userSession : false,
    };
  }

  // componentWillMount() {
  //   this.setState({ userSession: true});
  // }

  render(){
    const { userSession } = this.state;
    const Apptemplates = RootStackNavigator(userSession);
    return <Apptemplates/>;
  }
}





// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello world</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
