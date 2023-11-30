import React from "react";

import { StyleSheet, View, Pressable, Dimensions, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { Audio } from 'expo-av';

import QuestionBox from "../components/Atoms/QuestionBox";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import NavBar from "../components/Molecules/NavBar";
import OptionBtn from "../components/Atoms/OptionButton";
import ProgressBar from "../components/Atoms/DialogueBar";
import WavingTail from "../components/Atoms/WavingTail";


import { logicProblems } from "../data/wordProblems";
import { numberPuzzles } from "../data/numberPuzzles.js";
import { patternRecognition } from "../data/patternRecognition.js";
import { AppContext } from '../context/AppContext.js';

import { getHint } from "../libs/getAPI.js";
import * as  Speech from 'expo-speech';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WordProblemsPage({ navigation }) {
    const { puzzleType } = React.useContext(AppContext);

    const route = useRoute();
    const currentLevel = route.params.currLevel;

    const { isColorBlind, isDyslexic } = React.useContext(AppContext);
    const { colors, colorBlindColors } = useTheme();

    const [data, setData] = useState(puzzleType.toLowerCase() === 'numbers problems' ? numberPuzzles : puzzleType.toLowerCase() === 'logic problems' ? logicProblems : patternRecognition);
    const [number, setNumber] = useState(0);
    const [attempt, setAttempt] = useState(3);

    const [currentScreen, setCurrentScreen] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [aiResponse, setAIResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const [showCorrectPopup, setShowCorrectPopup] = useState(false);
    const [showIncorrectPopup, setShowIncorrectPopup] = useState(false);

    const [questions, setQuestions] = useState();

    const questionSet = () => {
        if (currentLevel === 1) {
            return [0, 1, 2, 3]
        } else if (currentLevel === 2) {
            return [4, 5, 6, 7]
        } else if (currentLevel === 3) {
            return [8, 9, 10, 11]
        } else if (currentLevel === 4) {
            return [12, 13, 14, 15]
        } else if (currentLevel === 5) {
            return [16, 17, 18, 19]
        }
    }

    const shuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    }

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quesIndex, setQuesIndex] = useState(questionSet());
    const [optIndex, setOptIndex] = useState(shuffle([0, 1, 2, 3]));

    useEffect(() => {
        if (currentScreen === 1) {
            handleSend();
        }
    }, [currentScreen])

    const handleSend = async () => {
        try {
            console.log("Start AI Response");
            setLoading(true);
            const completion = await getHint(data[quesIndex[currentQuestion]].description, data[quesIndex[currentQuestion]].answer);
            setAIResponse(completion.choices[0].message.content);
            console.log("AI Response Completed");
        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }

    const handleAnswer = (choice, answer) => {
        if (choice === answer) {
            answerCorrectSound();
            setNumber(number + 1);
            console.log(number);
            setShowCorrectPopup(true);
            setTimeout(() => {
                setShowCorrectPopup(false);

                if (currentScreen < 4) {
                    setAttempt(3);
                    setCurrentQuestion(currentQuestion + 1);
                    setAIResponse('');
                    setOptIndex(shuffle(optIndex));
                    setCurrentScreen(currentScreen + 1);
                } else {
                    navigation.push("Feedback", {
                        points: number,
                        questions: [data[quesIndex[0]].description, data[quesIndex[1]].description, data[quesIndex[2]].description, data[quesIndex[3]].description]
                    });
                }
            }, 2000);
        } else {
            answerIncorrectSound();
            setAttempt(attempt - 1);
            setShowIncorrectPopup(true);
            setTimeout(() => {
                setShowIncorrectPopup(false);
                if (attempt === 1) {
                    if (currentScreen < 4) {
                        setAttempt(3);
                        setCurrentQuestion(currentQuestion + 1);
                        setAIResponse('');
                        setOptIndex(shuffle(optIndex));
                        setCurrentScreen(currentScreen + 1);
                    } else {
                        navigation.push("Feedback", {
                            points: number,
                            questions: [data[quesIndex[0]].description, data[quesIndex[1]].description, data[quesIndex[2]].description, data[quesIndex[3]].description]
                        });
                    }
                }
            }, 2000);
        }
    }

    const [sound, setSound] = React.useState();

    async function answerCorrectSound() {
        const { sound } = await Audio.Sound.createAsync(require('../assets/sound/answer-correct.wav')
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function answerIncorrectSound() {
        const { sound } = await Audio.Sound.createAsync(require('../assets/sound/answer-incorrect.wav')
        );
        setSound(sound);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    const [speech, setSpeech] = React.useState("");
    const listAvailableVoices = async () => {
        let voice = await Speech.getAvailableVoicesAsync()
        console.log(voice)
    }
    React.useEffect(() => listAvailableVoices)
    const WimmySpeak = (text) => {
        const speaking = `${text}`;
        options = {
            voice: "com.apple.speech.synthesis.voice.Fred"
        }
        Speech.speak(speaking)

    }

    return (
        <View style={styles.container}>
            <ProgressBar num={4} step={currentScreen} />

            {currentScreen === 1 && (
                <View style={styles.main_container}>
                    <Image style={styles.image} source={data[quesIndex[currentQuestion]]?.image} height={50} width={50} />
                    {showCorrectPopup && (
                        <View style={{
                            ...styles.correctPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.green,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.greenShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Correct, Good Job!</Text>
                        </View>
                    )}
                    {showIncorrectPopup && (
                        <View style={{
                            ...styles.incorrectPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.red,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.redShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Incorrect, Please try again. If you need extra help, just press my tail!</Text>
                        </View>
                    )}
                    <View style={styles.question}>
                        <Text
                            style={{
                                ...styles.attemptText,
                                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[currentQuestion]].description} />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name={data[quesIndex[0]].options[optIndex[0]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[0]].options[optIndex[0]].toLowerCase(), data[quesIndex[0]].answer.toLowerCase())}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[0]].options[optIndex[1]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[0]].options[optIndex[1]].toLowerCase(), data[quesIndex[0]].answer.toLowerCase())}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name={data[quesIndex[0]].options[optIndex[2]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[0]].options[optIndex[2]].toLowerCase(), data[quesIndex[0]].answer.toLowerCase())}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[0]].options[optIndex[3]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[0]].options[optIndex[3]].toLowerCase(), data[quesIndex[0]].answer.toLowerCase())}
                                color={colors.optionBtn.green}
                                shadow={colors.optionBtn.greenShadow}
                            />
                        </View>
                    </View>

                </View>
            )}

            {currentScreen === 2 && (
                <View style={styles.main_container}>
                    <Image style={styles.image} source={data[quesIndex[currentQuestion]]?.image} height={50} width={50} />
                    {showCorrectPopup && (
                        <View style={{
                            ...styles.correctPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.green,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.greenShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Correct, Good Job!</Text>
                        </View>
                    )}
                    {showIncorrectPopup && (
                        <View style={{
                            ...styles.incorrectPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.red,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.redShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Incorrect, Please try again. If you need extra help, just press my tail!</Text>
                        </View>
                    )}
                    <View style={styles.question}>
                        <Text
                            style={{
                                ...styles.attemptText,
                                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[currentQuestion]].description} />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name={data[quesIndex[1]].options[optIndex[0]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[1]].options[optIndex[0]].toLowerCase(), data[quesIndex[1]].answer.toLowerCase())}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[1]].options[optIndex[1]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[1]].options[optIndex[1]].toLowerCase(), data[quesIndex[1]].answer.toLowerCase())}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name={data[quesIndex[1]].options[optIndex[2]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[1]].options[optIndex[2]].toLowerCase(), data[quesIndex[1]].answer.toLowerCase())}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[1]].options[optIndex[3]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[1]].options[optIndex[3]].toLowerCase(), data[quesIndex[1]].answer.toLowerCase())}
                                color={colors.optionBtn.green}
                                shadow={colors.optionBtn.greenShadow}
                            />
                        </View>
                    </View>

                </View>
            )}

            {currentScreen === 3 && (
                <View style={styles.main_container}>
                    <Image style={styles.image} source={data[quesIndex[currentQuestion]]?.image} height={50} width={50} />
                    {showCorrectPopup && (
                        <View style={{
                            ...styles.correctPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.green,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.greenShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Correct, Good Job!</Text>
                        </View>
                    )}
                    {showIncorrectPopup && (
                        <View style={{
                            ...styles.incorrectPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.red,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.redShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Incorrect, Please try again. If you need extra help, just press my tail!</Text>
                        </View>
                    )}
                    <View style={styles.question}>
                        <Text
                            style={{
                                ...styles.attemptText,
                                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[currentQuestion]].description} />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name={data[quesIndex[2]].options[optIndex[0]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[2]].options[optIndex[0]].toLowerCase(), data[quesIndex[2]].answer.toLowerCase())}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[2]].options[optIndex[1]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[2]].options[optIndex[1]].toLowerCase(), data[quesIndex[2]].answer.toLowerCase())}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name={data[quesIndex[2]].options[optIndex[2]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[2]].options[optIndex[2]].toLowerCase(), data[quesIndex[2]].answer.toLowerCase())}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[2]].options[optIndex[3]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[2]].options[optIndex[3]].toLowerCase(), data[quesIndex[2]].answer.toLowerCase())}
                                color={colors.optionBtn.green}
                                shadow={colors.optionBtn.greenShadow}
                            />
                        </View>
                    </View>

                </View>
            )}

            {currentScreen === 4 && (
                <View style={styles.main_container}>
                    <Image style={styles.image} source={data[quesIndex[currentQuestion]]?.image} height={50} width={50} />
                    {showCorrectPopup && (
                        <View style={{
                            ...styles.correctPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.green,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.greenShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Correct, Good Job!</Text>
                        </View>
                    )}
                    {showIncorrectPopup && (
                        <View style={{
                            ...styles.incorrectPopup,
                            backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.optionBtn.red,
                            borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.optionBtn.redShadow
                        }}>
                            <Text style={{
                                ...styles.feedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>That's Incorrect, Please try again! If you need extra help, just press my tail!</Text>
                        </View>
                    )}
                    <View style={styles.question}>
                        <Text
                            style={{
                                ...styles.attemptText,
                                backgroundColor: isColorBlind ? colorBlindColors.primaryColor : colors.primaryBtnColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[currentQuestion]].description} />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name={data[quesIndex[3]].options[optIndex[0]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[3]].options[optIndex[0]].toLowerCase(), data[quesIndex[3]].answer.toLowerCase())}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[3]].options[optIndex[1]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[3]].options[optIndex[1]].toLowerCase(), data[quesIndex[3]].answer.toLowerCase())}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name={data[quesIndex[3]].options[optIndex[2]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[3]].options[optIndex[2]].toLowerCase(), data[quesIndex[3]].answer.toLowerCase())}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name={data[quesIndex[3]].options[optIndex[3]].toUpperCase()}
                                onPress={() => handleAnswer(data[quesIndex[3]].options[optIndex[3]].toLowerCase(), data[quesIndex[3]].answer.toLowerCase())}
                                color={colors.optionBtn.green}
                                shadow={colors.optionBtn.greenShadow}
                            />
                        </View>
                    </View>

                </View>
            )}

            <Pressable style={styles.tail} onPress={() => {
                if (currentScreen > 1) {
                    handleSend();
                }
                setIsActive(true);
            }}>
                <View style={styles.hintContainer}>
                    <Text style={{
                        ...styles.hintText,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>Need a Hint?</Text>
                    {/* <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} /> */}
                    </View>
                <WavingTail />
            </Pressable>

            <WimmyPopup
                title={loading ? "WIMMY IS THINKING..." : "WIMMY SAYS..."}
                desc={aiResponse} instuction="Tap to Continue..."
                active={isActive} onPress={() => setIsActive(false)}
                loading={loading}
            />
            <NavBar navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        paddingBottom: 60,
        paddingTop: 60,
    },
    main_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: screenHeight - 100,
        width: screenWidth,
        paddingLeft: 16
    },
    question: {
        marginTop: 25,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        paddingRight: 16,
        textAlign: "center"
    },
    btnRowOne: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    btnRowTwo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    tail: {
        position: 'absolute',
        bottom: 60
    },
    hintContainer: {
        top: 20,
        display: 'flex',
        alignItems: 'center'
    },
    hintText: {
        fontSize: 16,
    },
    correctPopup: {
        position: 'absolute',
        top: 250,
        width: 350,
        height: 200,
        padding: 20,
        borderRadius: 10,
        borderWidth: 3,
        display: "flex",
        justifyContent: 'center',
        zIndex: 2
    },
    incorrectPopup: {
        position: 'absolute',
        top: 250,
        width: 350,
        height: 200,
        padding: 20,
        borderRadius: 10,
        borderWidth: 3,
        display: "flex",
        justifyContent: 'center',
        zIndex: 2
    },
    feedText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    attemptText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20,
        marginBottom: 10,
        borderRadius: 20,
        padding: 5,
        width: 315,
        height: 40,
        color: 'white',
        borderWidth: 3,
        overflow: 'hidden',
    },
    speech_button: {
        height: 40,
        width: 50,
        marginLeft: 250,
        marginBottom: 20
    }
})