import React, {useState} from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";


let dummyData = [
    {
        answers: ['Cool', 'Sleepy', 'On Fire', 'Horrible'],
        correctAnswer: 'Cool',
        hebrewWord: 'סבבה'
    }
];


class PlayScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: '',
            questionIndex: 0,
            answerIndicator: ''
        }
    }

    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="rocket1" size={30} color={tintColor}/>
    };


    selectAnswer = (answer) => {
        this.setState({selectedAnswer: answer});
    };

    checkAnswer = () => {
        this.setState((prevState) => ({answerIndicator: prevState.selectedAnswer === dummyData[prevState.questionIndex].correctAnswer ? 'check-circle' : 'x-circle'}));
    };


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text style={{fontSize: 20}}>Pick the best definition for this word:</Text>

                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 24
                }}> {dummyData[this.state.questionIndex].hebrewWord} </Text>


                <View style={styles.row}>
                    {
                        dummyData[this.state.questionIndex].answers.map((answer) => (
                            <DefaultButton key={answer} onPress={() => this.selectAnswer(answer)} buttonText={answer}
                                           backgroundColor={this.state.selectedAnswer === answer ? '#0372B9' : '#817D7D'}
                                           style={styles.button} textStyle={styles.buttonText}/>
                        ))
                    }

                </View>

                {
                    this.state.selectedAnswer !== '' &&
                    <View style={{width: '100%', paddingRight: 10}}>
                        <DefaultButton onPress={this.checkAnswer} buttonText={'Check Answer'}
                                       style={{alignSelf: 'flex-end', width: 150}}/>
                    </View>
                }

                {
                    this.state.answerIndicator !== '' &&

                        <Feather color={this.state.answerIndicator === 'check-circle' ? 'green' : 'red'} name={this.state.answerIndicator} size={35}/>

                }

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
        paddingHorizontal: 60,
        flexWrap: 'wrap',
        marginBottom: 20
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
