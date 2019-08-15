import React from 'react';
import {KeyboardAvoidingView, View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LabeledInput from "../partials/LabeledInput";
import DefaultButton from "../partials/DefaultButton";


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
            <KeyboardAvoidingView  behavior={'height'} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9BB3DD'}}>

                <View style={styles.inputsContainer}>
                    <LabeledInput label={'Username: '}/>
                    <LabeledInput label={'Email: '}/>
                    <LabeledInput label={'Password: '}/>
                    <LabeledInput label={'Confirm Password: '}/>
                </View>

                <DefaultButton onPress={this.goToLanguageSelect} buttonText={'Join'}/>
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