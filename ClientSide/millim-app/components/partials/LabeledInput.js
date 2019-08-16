import React from 'react';
import {View, Text, ScrollView, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';


export default class LabeledInput extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.inputContainer, this.props.containerStyle]}>
                <Text style={[styles.inputLabel, this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput {...this.props.inputProps} onChangeText={this.props.onChangeText} style={[styles.input, this.props.inputStyle]}/>
            </View>
        )

    }

}

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    containerStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    inputProps: PropTypes.object
};


const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 21,
        color: '#222739'
    },
    input: {
        flex: 1,
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        paddingLeft: 5
    },
    }
)