import React from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Divider} from "react-native-elements";


export default class LoginScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9BB3DD'}}>
                <Image source={require('../../assets/images/millim-logo-white.png')}
                       style={{height: 150, width: 150, marginBottom: 5}}/>
                <Divider style={{backgroundColor: 'white', width: 90, height: 7, marginBottom: 80}}/>

                <View style={styles.inputsSection}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email: </Text>
                        <TextInput style={styles.input}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password: </Text>
                        <TextInput style={styles.input}/>
                    </View>

                </View>

                <TouchableOpacity>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.newHereText}>
                    {'New here? '}
                    <Text style={{textDecorationLine: 'underline'}}>
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
            </View>
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