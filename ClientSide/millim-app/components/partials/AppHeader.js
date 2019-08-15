import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';


export default class AppHeader extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/millim-logo-white.png')} style={{height: 60, width: 60}}/>
            </View>
    )

    }


}


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 70,
        backgroundColor: '#222739',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    }
    }
)