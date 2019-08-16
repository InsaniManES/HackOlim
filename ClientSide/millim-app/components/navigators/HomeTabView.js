import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MessagesScreen from '../screens/MessagesScreen';
import BadgesScreen from '../screens/BadgesScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

export default class TabViewComp extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Messages', title: 'Messages' },
      { key: 'Badges', title: 'Badges' },
      { key: 'Discover', title: 'Discover' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          Messages: MessagesScreen,
          Badges: BadgesScreen,
          Discover: DiscoverScreen
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: 150 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
