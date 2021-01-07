import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  state = {
    niceNumber: 0
  }

  adding = () => {
    this.setState({niceNumber: this.state.niceNumber+1})
  }
  substract = () => {
    this.setState({niceNumber: this.state.niceNumber-1})
  }

  setToZero = () =>{
    this.setState({niceNumber:0})
  }

  render(){
    return (
      <View style={{ 
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color:'black'}}>Welcome to Antoni's tutorial</Text>
        <Text style={{color:'black'}}> Another text </Text>
        <Button title="Button1" color="black" />
        <TouchableOpacity 
          style={{height:50, paddingHorizontal:10, backgroundColor:'blue', justifyContent:'center', alignItems:'center', borderRadius:10, margin:10}}
          onPress={()=> this.adding()}
        >
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{height:50, paddingHorizontal:10, backgroundColor:'red', justifyContent:'center', alignItems:'center', borderRadius:10, margin:10}}
          onPress={()=> this.setToZero()}
        >
          <Text>Substract</Text>
        </TouchableOpacity>
        <Text style={{fontSize:25}}> {this.state.niceNumber} </Text>
        <Text
        style={{color:'red', fontSize:25, }}>
          senfsgn
        </Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}


