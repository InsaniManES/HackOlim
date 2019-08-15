import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';


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


}


const styles = StyleSheet.create({}
)