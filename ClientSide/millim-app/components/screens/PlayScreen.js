import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

class PlayScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="rocket1" size={40} color={tintColor} />
      };

  render(){
  return (
    <View>
      <Text>Play Screen</Text>
    </View>
  );
};
}



const styles = StyleSheet.create({});

export default PlayScreen;
