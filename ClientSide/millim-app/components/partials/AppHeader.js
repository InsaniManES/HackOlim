import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import SearchBar from "./SearchBar";



export default class AppHeader extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/millim-logo-white.png')} style={{height: 60, width: 60}}/>
                {this.props.showSearch && <SearchBar/>}
                {
                    this.props.showPlus &&
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Auth')}>
                        <AntDesign name={'pluscircleo'} size={35} color={'white'}/>
                    </TouchableWithoutFeedback>
                }
                {

                    this.props.showClose &&
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Auth')}>
                    <AntDesign name={'closecircleo'} size={35} color={'white'}/>
                    </TouchableWithoutFeedback>
                }
            </View>
    )

    }

}

AppHeader.propTypes = {
    showPlus: PropTypes.bool,
    showClose: PropTypes.bool,
    showSearch: PropTypes.bool
};


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 70,
        backgroundColor: '#222739',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 10
    }
    }
)
