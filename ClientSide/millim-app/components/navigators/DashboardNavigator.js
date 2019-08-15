import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import DashboardMainScreen from '../screens/DashboardMainScreen';
import LoginScreen from '../screens/LoginScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MyListScreen from '../screens/MyListScreen';
import PlayScreen from '../screens/PlayScreen';
import { EvilIcons } from '@expo/vector-icons';
import AppHeader from "../partials/AppHeader";
import DefaultButton from "../partials/DefaultButton";

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const DashboardTabNavigator = createBottomTabNavigator (
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
      //activeBackgroundColor: '#9BB3DD',
      //inactiveBackgroundColor: '#9BB3DD',
      showLabel: false,
      showIcon: true
    }
  }
);

export const DashboardNavigator = createStackNavigator({
    Tabs: DashboardTabNavigator
} , {
    initialRouteName: 'Tabs',
    defaultNavigationOptions: {
        header: (headerProps) => <AppHeader {...headerProps} showPlus/>
    }
});



