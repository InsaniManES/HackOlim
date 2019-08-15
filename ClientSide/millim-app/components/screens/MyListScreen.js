import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

class MyListScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon:({focused, tintColor}) => <AntDesign name="bars" size={40} color={tintColor} />
      };

  render(){
  return (
    <View>
      <Text>My List Screen</Text>
    </View>
  );
};
}



const styles = StyleSheet.create({});

export default MyListScreen;
