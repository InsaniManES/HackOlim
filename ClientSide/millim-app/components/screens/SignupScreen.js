import React from 'react';
import {KeyboardAvoidingView, View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LabeledInput from "../partials/LabeledInput";
import DefaultButton from "../partials/DefaultButton";
import AppHeader from "../partials/AppHeader";


export default class SignupScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            showHeader: true
        }
    }

    updateText = (text, value) => {
        let newState = this.state;
        newState[value] = text;
        this.setState(newState);
    };

    hideHeader = () => this.setState({showHeader: false});
    displayHeader = () => this.setState({showHeader: true});

    componentWillMount() {
        Keyboard.addListener('keyboardDidShow', this.hideHeader);
        Keyboard.addListener('keyboardDidHide', this.displayHeader);
    }

    componentWillUnmount() {
        Keyboard.removeListener('keyboardDidShow', this.hideHeader);
        Keyboard.removeListener('keyboardDidHide', this.displayHeader);
    }


    goToLanguageSelect = () => {
        let {displayName, email, password} = this.state;
        this.props.navigation.navigate('LanguageSelect' , {userData: {displayName, email, password}})
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView  behavior={'height'} style={{flex: 1, alignItems: 'center', backgroundColor: '#9BB3DD'}}>
                {this.state.showHeader && <AppHeader/>}
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <View style={styles.inputsContainer}>
                    <LabeledInput onChangeText={(text) => this.updateText(text, 'displayName')} label={'Username: '}/>
                    <LabeledInput onChangeText={(text) => this.updateText(text, 'email')} label={'Email: '}/>
                    <LabeledInput inputProps={{secureTextEntry: true}} onChangeText={(text) => this.updateText(text, 'password')} label={'Password: '}/>
                    <LabeledInput inputProps={{secureTextEntry: true}} onChangeText={(text) => this.updateText(text, 'passwordConfirm')} label={'Confirm Password: '}/>
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