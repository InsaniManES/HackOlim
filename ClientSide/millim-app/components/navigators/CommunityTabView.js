import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MessagesScreen from "../screens/MessagesScreen";
import FriendsScreen from "../screens/FriendsScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import BadgesScreen from "../screens/BadgesScreen";






export default class TabViewComp extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Messages', title: 'Messages' },
      { key: 'Friends', title: 'Friends' }
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          Messages: MessagesScreen,
          Friends: FriendsScreen
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: 150 }}
        renderTabBar={props =>
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'black' }}
                labelStyle={{fontSize: 15, color: '#222739'}}
                style={{ backgroundColor: 'white' }}
            />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
