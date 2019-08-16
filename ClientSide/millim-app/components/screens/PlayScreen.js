import React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import DefaultButton from "../partials/DefaultButton";
import {Divider} from "react-native-elements";


let dummyData = [
    {
        answers: ['Cool', 'Sleepy', 'On Fire', 'Horrible'],
        correctAnswer: 'Cool',
        hebrewWord: 'סבבה'
    },
    {
        answers: ['Passion', 'Security', 'Happiness', 'Confusion'],
        correctAnswer: 'Security',
        hebrewWord: 'בטחון'
    },
    {
        answers: ['Car', 'Bottle', 'Couch', 'Door'],
        correctAnswer: 'Couch',
        hebrewWord: 'ספה'
    },
    {
        answers: ['Where?', 'How?', 'When?', 'Really?'],
        correctAnswer: 'Really?',
        hebrewWord: 'וואלה?'
    }
];


class PlayScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: '',
            questionIndex: 0,
            progressFill: new Animated.Value(0),
            indicatorOpacity: new Animated.Value(0),
            answerIndicator: ''
        }
    }

    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => <AntDesign name="rocket1" size={30} color={tintColor}/>
    };


    selectAnswer = (answer) => {
        this.setState({selectedAnswer: answer});
    };

    getProgressFill = () => {
        return this.state.progressFill.interpolate({
            inputRange: [0, dummyData.length],
            outputRange: ['0%', '100%']
        })
    };

    animateIndicator = () => {
        Animated.timing(this.state.indicatorOpacity , {
            toValue: 1,
            duration:400
        }).start( () => {
            Animated.timing(this.state.indicatorOpacity, {
                toValue: 0,
                duration: 200
            }).start(() => this.setState((prevState) => ({questionIndex: prevState.questionIndex +1, selectedAnswer: '', answerIndicator: ''})));
        });
    };

    checkAnswer = () => {
        this.setState((prevState) => ({answerIndicator: prevState.selectedAnswer === dummyData[prevState.questionIndex].correctAnswer ? 'check-circle' : 'x-circle'}), this.animateIndicator);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.questionIndex > prevState.questionIndex){
            Animated.timing(this.state.progressFill, {
                toValue: this.state.questionIndex,
                duration: 200
            }).start();
        }
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                <View style={styles.progressBar}>
                    <Animated.View style={{
                        height: '100%',
                        borderRadius: 25,
                        width: this.getProgressFill(),
                        backgroundColor: '#9BB3DD'
                    }}/>
                </View>

                <Text style={{fontSize: 20, marginBottom: 10}}>{this.state.questionIndex < dummyData.length ? 'Pick the best definition for this word:' : 'You Are Done!'}</Text>

                <Text style={{
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    marginBottom: 15
                }}> {this.state.questionIndex < dummyData.length ? dummyData[this.state.questionIndex].hebrewWord : ''} </Text>

                {this.state.questionIndex < dummyData.length && <Divider style={{height: 2, width: '80%', marginBottom: 20}}/>}

               { this.state.questionIndex < dummyData.length &&
                   <View style={styles.row}>
                    {
                        dummyData[this.state.questionIndex].answers.map((answer) => (
                            <DefaultButton key={answer} onPress={() => this.selectAnswer(answer)} buttonText={answer}
                                           backgroundColor={this.state.selectedAnswer === answer ? '#0372B9' : '#817D7D'}
                                           style={styles.button} textStyle={styles.buttonText}/>
                        ))
                    }

                </View>
               }

                {
                    this.state.selectedAnswer !== '' &&
                    <View style={{width: '100%', paddingRight: 10}}>
                        <DefaultButton onPress={this.checkAnswer} buttonText={'Check Answer'}
                                       style={{alignSelf: 'flex-end', width: 150}}/>
                    </View>
                }



                    <Animated.View style={{opacity: this.state.indicatorOpacity}}>
                        {
                            this.state.answerIndicator !== '' &&
                            <Feather color={this.state.answerIndicator === 'check-circle' ? 'green' : 'red'}
                                     name={this.state.answerIndicator} size={50}/>
                        }
                    </Animated.View>


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
    },
    progressBar: {
        width: '80%',
        height: 15,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        marginTop: 25,
        marginBottom: 80

    }
});

export default PlayScreen;
