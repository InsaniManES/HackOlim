import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

let dummyMessages = [{
    sender: 'David Levy',
    date: '20/06',
    message: 'Hey, what\'s up? Learning Hebrew and stuff?'

},{
    sender: 'Sarah Cohen',
    date: '16/05',
    message: 'I learned an awesome word today! You know what Gzuztra is?'
}];



export default class MessagesScreen extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {
                    dummyMessages.map((data, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <FontAwesome style={{marginRight: 10}} name={'user-circle'} size={35}/>

                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#222739'}}>{data.sender}</Text>
                                <Text style={{width: 200, height: 40, fontFamily: 'Roboto', fontSize: 13, color: '#A4A4A4'}}>{data.message}</Text>
                            </View>

                            <Text style={{color: '#A4A4A4'}}>{data.date}</Text>
                        </View>
                    ))
                }
            </View>
        )

    }


}


const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 110,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    }
    }
)