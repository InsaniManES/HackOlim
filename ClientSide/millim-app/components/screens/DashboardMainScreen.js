import React from 'react';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AppHeader from "../partials/AppHeader";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";


export default class DashboardMainScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <KeyboardAvoidingView  behavior={'height'} contentContainerStyle={{alignItems: 'center'}} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.row}>
                <Text style={styles.textStyle}>David Goldman</Text>
                <DefaultButton buttonText={'Subscribe'} style={styles.button} textStyle={styles.buttonText} />
            </View>
            <View style={styles.content}>
              <Text>Free member</Text>
            </View>
            <View style={styles.icon}>
            <FontAwesome name="user-circle" size={136} color="#0372B9" />
            </View>
          </KeyboardAvoidingView>
          )

    }

    static navigationOptions = {
          tabBarIcon: ({focused, tintColor}) => <AntDesign name="user" size={40} color={tintColor} />
        };


}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 28,
    width: 95,
    marginLeft: 10
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 100
  },
  icon: {
    marginTop: 10
  }
}
)
