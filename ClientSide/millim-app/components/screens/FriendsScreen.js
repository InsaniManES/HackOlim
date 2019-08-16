import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

let dummyFriends = ['David Levy', 'Sarah Cohen', 'Rachel Stein', 'Jacob Peralta'];

export default class FriendsScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {
                    dummyFriends.map((item,index) => {
                        return(
                            <View key={index} style={styles.itemContainer}>
                                <Text>{item}</Text>
                                <FontAwesome style={{marginRight: 10}} name={'user-circle'} size={50}/>
                            </View>
                        )
                    })
                }
            </View>
        )

    }


}


const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 90,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
    }
)