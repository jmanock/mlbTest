import React,{Component} from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import {List} from 'react-native-elements';
import MLBGameDayApi from './../api/MLBGameDayApi';
import {DateBar} from './../components/app';

export default class TestScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>TextScreen</Text>
        
      </View>
    )
  }
}

TestScreen.navigationOptions = {
  title:'TestScreen'
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
});
