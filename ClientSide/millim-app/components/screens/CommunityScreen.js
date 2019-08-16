import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import CommunityTabView from '../navigators/CommunityTabView';

class CommunityScreen extends React.PureComponent{

  static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="team" size={30} color={tintColor} />
      };

  render(){
  return (
      <View style={styles.tabView}>
        <CommunityTabView />
      </View>
  );
};
}



const styles = StyleSheet.create({
  tabView: {
    flex: 1
  }
});

export default CommunityScreen;
