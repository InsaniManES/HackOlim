import React from 'react';
import {createStackNavigator} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import AppHeader from "../partials/AppHeader";
import SignupScreen from "../screens/SignupScreen";
import LanguageSelectionScreen from "../screens/LanguageSelectionScreen";



export const AuthNavigator =  createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    LanguageSelect: LanguageSelectionScreen
},{
    initialRouteName: 'Login',
    backBehavior: 'none',
    defaultNavigationOptions: {
        header: <AppHeader/>

    }
});