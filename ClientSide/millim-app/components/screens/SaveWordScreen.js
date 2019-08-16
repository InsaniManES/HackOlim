import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

class SaveWordScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon:({focused, tintColor}) => <AntDesign name="bars" size={30} color={tintColor} />
      };

  render(){
  return (
    <KeyboardAvoidingView  behavior={'height'} contentContainerStyle={{alignItems: 'center'}} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text>save Screen</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
}



const styles = StyleSheet.create({});

export default SaveWordScreen;
