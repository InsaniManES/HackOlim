import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {Divider} from "react-native-elements";
import DefaultButton from "../partials/DefaultButton";
import LabeledInput from "../partials/LabeledInput";
import * as api from '../../Services/ApiService';


export default class LoginScreen extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    static navigationOptions = {
        header: null
    };


    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    };

    goToDashboard = async () => {
        // let res = await api.login(this.state);
        // if(res) {
            this.props.navigation.navigate('Dashboard');
        // }
        // else{
        //     console.warn('Shit fucked up');
        // }
    };

    updateText = (text, value) => {
        let newState = this.state;
        newState[value] = text;
        this.setState(newState);
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={'height'} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9BB3DD'}}>
                <Image source={require('../../assets/images/millim-logo-white.png')}
                       style={{height: 150, width: 150, marginBottom: 5}}/>
                <Divider style={{backgroundColor: 'white', width: 90, height: 7, marginBottom: 80}}/>

                <View style={styles.inputsSection}>
                    <LabeledInput onChangeText={(text) => this.updateText(text,'email')} label={'Email: '}/>
                    <LabeledInput inputProps={{secureTextEntry: true}} onChangeText={(text) => this.updateText(text,'password')} label={'Password: '}/>
                </View>

                <DefaultButton onPress={this.goToDashboard} buttonText={'Login'}/>


                <Text style={styles.newHereText}>
                    {'New here? '}
                    <Text onPress={this.goToSignup} style={{textDecorationLine: 'underline'}}>
                        Sign up!
                    </Text>
                </Text>

                <TouchableOpacity>
                    <View style={{...styles.loginButton, backgroundColor: '#415DAE'}}>
                        <Text style={styles.loginWithFacebook}>
                            {'Login with '}
                            <Text style={{fontWeight: 'bold'}}>
                                facebook
                            </Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )

    }


}


const styles = StyleSheet.create({
        inputsSection: {
            width: '100%',
            paddingHorizontal: 55,
            height: 105,
            justifyContent: 'space-between',
            marginBottom: 20
        },
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
            fontSize: 18,
            lineHeight: 21,
            color: '#222739'
        },
        input: {
            flex: 1,
            textAlign: 'left',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18,
            paddingLeft: 5
        },
        loginButton: {
            width: 252,
            height: 45,
            backgroundColor: '#222739',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15
        },
        loginText: {
            color: 'white',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 21
        },
        newHereText: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '500',
            color: '#222739',
            fontSize: 18,
            lineHeight: 20,
            marginBottom: 15
        },
        loginWithFacebook: {
            color: 'white',
            fontSize: 18,
            lineHeight: 21,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal'
        }
    }
);