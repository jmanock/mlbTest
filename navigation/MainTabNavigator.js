import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import TestScreen from '../screens/TestScreen';
import GameScreen from '../screens/GameScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TestStack = createStackNavigator({
  Test:TestScreen,
});

TestStack.navigationOptions = {
  tabBarLabel:'Test',
  tabBarIcon:({focused}) =>(
    <TabBarIcon focused={focused} name={'code-tags'} />
  ),
};

const GameStack = createStackNavigator({
  Games:GameScreen,
});

GameStack.navigationOptions = {
  tabBarLabel:'Games',
  tabBarIcon:({focused}) =>(
    <TabBarIcon focused={focused} name={'baseball-bat'} />
  ),
};

const SettingsStack = createStackNavigator({
  Settings:SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel:'Settings',
  tabBarIcon:({focused}) =>(
    <TabBarIcon focused={focused} name={'settings'} />
  )
};

export default createBottomTabNavigator({
  TestStack,
  GameStack,
  SettingsStack
})
