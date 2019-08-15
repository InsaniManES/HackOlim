import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

class CommunityScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="team" size={40} color={tintColor} />
      };

  render(){
  return (
    <View>
      <Text>Community Screen</Text>
    </View>
  );
};
}



const styles = StyleSheet.create({});

export default CommunityScreen;
