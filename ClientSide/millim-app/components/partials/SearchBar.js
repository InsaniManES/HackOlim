import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

class SearchBar extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    updateText = (text) => {
        this.setState({term: text})
    };

    render() {
        return (

            <View style={styles.backgroundStyle}>
                <Feather name="search" style={styles.iconStyle}/>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder="Search"
                    value={this.state.term}
                    onChangeText={(text) => this.updateText(text)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#FFFDFD',
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
