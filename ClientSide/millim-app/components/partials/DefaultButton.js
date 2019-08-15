import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


export default class DefaultButton extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.button, this.props.style, {backgroundColor: this.props.backgroundColor}]}>
                    <Text style={[styles.text, this.props.textStyle]}>{this.props.buttonText}</Text>
                </View>
            </TouchableOpacity>
        )

    }

}

DefaultButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    backgroundColor: PropTypes.string
};

DefaultButton.defaultProps = {
    backgroundColor: '#222739'
};


const styles = StyleSheet.create({
    button: {
        width: 252,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 21
    },
    }
);