import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import SearchWordScreen from '../screens/SearchWordScreen';
import SaveWordScreen from '../screens/SaveWordScreen';
import BrowseWordScreen from '../screens/BrowseWordScreen';

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
      { key: 'Search', title: 'Search' },
      { key: 'Save', title: 'Save' },
      { key: 'Browse', title: 'Browse' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          Search: SearchWordScreen,
          Save: SaveWordScreen,
          Browse: BrowseWordScreen
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
