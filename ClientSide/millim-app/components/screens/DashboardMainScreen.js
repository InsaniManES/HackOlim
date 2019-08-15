import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default class DashboardMainScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>This is DashboardMainScreen</Text>
            </View>)

    }

    static navigationOptions = {
          tabBarIcon: ({focused, tintColor}) => <AntDesign name="user" size={40} color={tintColor} />
        };


}


const styles = StyleSheet.create({}
)
