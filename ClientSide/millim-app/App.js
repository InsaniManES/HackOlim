import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {AuthNavigator} from "./components/navigators/AuthenticationNavigator";
import {DashboardNavigator} from "./components/navigators/DashboardNavigator";
import {AppLoading} from "expo";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appReady: false
        }
    }


    render() {

        return (
            <View style={{flex: 1}}>
                <StatusBar hidden/>
                <AppContainer/>
            </View>
        );
    }
}

const AppNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Dashboard: DashboardNavigator

}, {
    backBehavior: 'none',
    initialRouteName: 'Auth'
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
