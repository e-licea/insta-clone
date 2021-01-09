import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Login extends React.Component  {
render(){
  return (
    <View style={styles.container}>

      <Text style = {styles.text }>Login Page</Text>
      <TouchableOpacity  
      onPress = {()=> this.props.navigation.navigate('SignUp')}
      >
        <Text> Go to signup page</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffb4b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'aqua'
  }

});
