import React,{Component} from 'react';
import {ScrollView,View, StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native';
import { ListItem } from 'react-native-elements';
import MLBGameDayApi from './../api/MLBGameDayApi';
import {DateBar} from '../components/app';

export default class GameScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading:false,
      date:new Date(),
      games:[],
    }
  }
  componentDidMount(){
    this.getGamesForDay();
  }
  getGamesForDay = () =>{
    this.setState({isLoading:true});
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth() + 1;
    var day = this.state.date.getDate();
    
    MLBGameDayApi.getListOfGamesForDay(year,month,day).then(function(data){
      this.setState({games:data});
      this.setState({isLoading:false})
    }.bind(this));
  }
  onDateChange = date =>{
    this.setState({date:date});
    this.getGamesForDay();
  }
  renderListItem = ({item}) =>{
    var title = `${item.awayTeam} @ ${item.homeTeam}`;

    return(
      <ListItem key={item.key} title={title} />
    )
  }
  render(){
    if(this.state.isLoading){
      return <ActivityIndicator animation={true} size='large' style={{paddingTop:50}} />
    }
    return(
      <ScrollView style={styles.container}>
        <DateBar onDateChange={this.onDateChange} date={this.state.date}/>
        <FlatList data={this.state.games} renderItem={this.renderListItem} />
      </ScrollView>
    );
  }
}

GameScreen.navigationOptions = {
  title:'Games'
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:15,
    backgroundColor:'#fff'
  }
});
