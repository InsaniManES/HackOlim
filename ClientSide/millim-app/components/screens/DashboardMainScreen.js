import React from 'react';
import {View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AppHeader from "../partials/AppHeader";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";
import HomeTabView from '../navigators/HomeTabView';


export default class DashboardMainScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View  style={{flex: 1, paddingTop: 25, alignItems: 'center'}}>
            <View style={styles.row}>
                <Text style={styles.textStyle}>David Goldman</Text>
                <DefaultButton buttonText={'Subscribe'} style={styles.button} textStyle={styles.buttonText} />
            </View>
            <View style={styles.content}>
              <Text>Free member</Text>
            </View>

            <FontAwesome name="user-circle" size={136} color="#0372B9" style={styles.icon} />
            <HomeTabView />

          </View>
          )

    }

    static navigationOptions = {
          tabBarIcon: ({focused, tintColor}) => <AntDesign name="user" size={30} color={tintColor} />
        };


}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
      width: '100%',
      paddingRight: 10
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
    fontSize: 18
  },
  icon: {
    marginTop: 10
  },
  tabView: {
    flex: 1
  }
}
)
