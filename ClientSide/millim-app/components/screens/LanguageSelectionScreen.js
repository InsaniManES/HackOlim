import React from 'react';
import {View, Text, Image, StyleSheet, Picker} from 'react-native';
import DefaultButton from "../partials/DefaultButton";
import AppHeader from "../partials/AppHeader";
import * as api from '../../Services/ApiService';




export default class LanguageSelectionScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'en'
        }
    }



    goToDashboard = () => {
        this.props.navigation.navigate('Dashboard');
    };

    registerUser = async () => {
        let userData = {...this.props.navigation.state.params.userData, language: this.state.selectedLanguage};
        let res = await api.registerUser(userData);
        if(res){
            console.log('Success');
            this.goToDashboard();
        }
        else{
            console.log('Fail');
        }
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9BB3DD'}}>
                <AppHeader/>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50}}>
                <Text style={styles.text}>Select your native language:</Text>
                <View style={styles.dropdownContainer}>
                    <Picker style={{width: '100%', height: '70%'}} selectedValue={this.state.selectedLanguage} onValueChange={(itemValue, itemIndex) =>
                        this.setState({selectedLanguage: itemValue})
                    }>
                        <Picker.Item label={'English'} value={'en'}/>
                        <Picker.Item label={'Spanish'} value={'sp'}/>
                        <Picker.Item label={'French'} value={'fr'}/>
                    </Picker>
                </View>

                <DefaultButton onPress={this.registerUser} buttonText={'Continue'}/>
                </View>

            </View>
        )

    }


}


const styles = StyleSheet.create({
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingLeft: 15,
        paddingRight: 20,
        marginBottom: 22
    },
    text: {
        color: '#222739',
        fontFamily: 'Roboto',
        fontSize: 13,
        lineHeight: 18,
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: 10
    }
    }
)