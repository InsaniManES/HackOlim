import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import DashboardMainScreen from '../screens/DashboardMainScreen';
import LoginScreen from '../screens/LoginScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MyListScreen from '../screens/MyListScreen';
import PlayScreen from '../screens/PlayScreen';
import { EvilIcons } from '@expo/vector-icons';

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export const DashboardNavigator = createBottomTabNavigator (
  {
    Community: CommunityScreen,
    MyList: MyListScreen,
    Play: PlayScreen,
    Home: DashboardMainScreen
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#0372B9',
      inactiveTintColor: '#817D7D',
      // activeBackgroundColor: '#9BB3DD',
      // inactiveBackgroundColor: '#9BB3DD',
      showLabel: false,
      showIcon: true
    }
  }
)
