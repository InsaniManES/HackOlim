import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import WordsBar from '../partials/WordsBar';

class MyListScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon:({focused, tintColor}) => <AntDesign name="bars" size={30} color={tintColor} />
      };

  render(){
  return (
    <View>
      <WordsBar />
      <WordsBar />
      <WordsBar />
    </View>
  );
};
}



const styles = StyleSheet.create({});

export default MyListScreen;
