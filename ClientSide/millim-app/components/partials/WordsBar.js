import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";

let dummyData = [
  {
    hebrewWord: 'כלב',
    englishWord: 'Dog',
    sentence: 'כלב מי שמלכלך'

  },
  {
    hebrewWord: 'שמח',
    englishWord: 'Happy',
    sentence: 'מי שטוב לו ושמח כף ימחא'
  },
  {
    hebrewWord: 'מגניב',
    englishWord: 'Cool',
    sentence: 'איזה מגניב התיק החדש של דנה'
  },
  {
    hebrewWord: 'חושך',
    englishWord: 'Darkness',
    sentence: 'באנו חושך לגרש, בידנו אור ואש'
  },
  {
    hebrewWord: 'סבבה',
    englishWord: 'Chill',
    sentence: 'החומס הזה סבבה לאללה'
  },
  {
    hebrewWord: 'חיים',
    englishWord: 'Life',
    sentence: 'חיים רק פעם אחת'
  }
]

export default class WordsBar extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={{flex: 1}}>
        {
          dummyData.map((data) =>
          <View style={styles.textStyle} key={data.hebrewWord}>
            <View  style={styles.row}>
                <AntDesign style={{marginRight: 20}} name={'sound'} size={35} />
                <View style={styles.row}>
                  <View>
                    <Text style={{textAlign: 'center'}}>{data.hebrewWord}</Text>
                    <Text style={{textAlign: 'center'}}>{data.englishWord}</Text>
                  </View>
                  <DefaultButton buttonText={'Save'} style={styles.button} textStyle={styles.buttonText} />
              </View>
            </View>
            <View>
              <Text>{data.sentence}</Text>
            </View>
            </View>
          )}
          </View>
          )

    }

}



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    height: 28,
    width: 95,
    marginRight: 50
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21
  },
  textStyle: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '100%',
    height: 70,
    paddingHorizontal: 20
  }
});
