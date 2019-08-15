import React from 'react';
import {KeyboardAvoidingView, View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LabeledInput from "../partials/LabeledInput";
import DefaultButton from "../partials/DefaultButton";
import AppHeader from "../partials/AppHeader";


export default class SignupScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    goToLanguageSelect = () => {
        this.props.navigation.navigate('LanguageSelect')
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView  behavior={'height'} style={{flex: 1, alignItems: 'center', backgroundColor: '#9BB3DD'}}>
                <AppHeader/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <View style={styles.inputsContainer}>
                    <LabeledInput label={'Username: '}/>
                    <LabeledInput label={'Email: '}/>
                    <LabeledInput label={'Password: '}/>
                    <LabeledInput label={'Confirm Password: '}/>
                </View>

                <DefaultButton onPress={this.goToLanguageSelect} buttonText={'Join'}/>
                </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )

    }


}


const styles = StyleSheet.create({
    inputsContainer: {
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        height: 220,
        marginBottom: 40
    }
    }
)