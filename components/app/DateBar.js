import React,{Component} from 'react';
import {TouchableOpacity,View, Text,StyleSheet} from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default class DateBar extends Component{
  static defaultProps = {
    date:new Date(),
    onDateChange:function(date){ },
  }
  
  constructor(props){
    super(props);
    this.state = {
      date:this.props.date
    }
  }
  onLeftArrowPress = () =>{
    var newDate = new Date(this.state.date);
    newDate.setDate(newDate.getDate() -1);
    this.setState({date:newDate});
    this.props.onDateChange(newDate);
  }
  onRightArrowPress = () =>{
    var newDate = new Date(this.state.date);
    newDate.setDate(newDate.getDate() + 1);
    this.setState({date:newDate});
    this.props.onDateChange(newDate);
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onLeftArrowPress}>
          <Icon name='chevron-left' style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.date}>{this.state.date.toDateString()}</Text>
        <TouchableOpacity onPress={this.onRightArrowPress}>
          <Icon name='chevron-right' style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  date:{
    paddingTop:5,
  },
  icon:{
    fontSize:30,
    color:'gray'
  }
})
