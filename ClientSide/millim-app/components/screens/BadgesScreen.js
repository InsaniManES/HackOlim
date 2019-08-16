import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';


export default class BadgesScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>This is BadgesScreen</Text>
            </View>
        )

    }


}


const styles = StyleSheet.create({}
)