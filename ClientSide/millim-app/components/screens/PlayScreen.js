import React, {useState} from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";

class PlayScreen extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="rocket1" size={30} color={tintColor} />
      };

  render(){



  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text style={fontSize=20}>Pick the best definition for this word.</Text>
        <View style={styles.text}>
          <Text> סבבה </Text>
          <Feather name="help-circle" size={20} />
        </View>

        <View style={styles.row}>
          <DefaultButton buttonText={'Cool'} style={styles.button} textStyle={styles.buttonText} />
          <DefaultButton buttonText={'Sleepy'} style={styles.button} textStyle={styles.buttonText} />
        </View>

        <View style={styles.row}>
          <DefaultButton buttonText={'On fire'} style={styles.button} textStyle={styles.buttonText} />
          <DefaultButton buttonText={'Subscribe'} style={styles.button} textStyle={styles.buttonText} />
        </View>

    </View>
  );
};
}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 60
  },
  button: {
    height: 28,
    width: 95
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    fontSize: 18
  },
  answerButton: {
    height: 40,
    width: 160
  }
});

export default PlayScreen;
