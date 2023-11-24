import React, { useState, useEffect } from "react";
import axios from "axios";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View, Dimensions, TextInput, FlatList, ScrollView, KeyboardAvoidingView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native"
import { useTheme } from "@react-navigation/native";

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
import FeedbackBox from "../components/Atoms/FeedbackBox/index.js";
import SendBtn from "../components/Atoms/sendBtn/index.js";
import WimmyAnimated from "../components/Atoms/WimmyAnimated/index.js";

import { useStreak } from "use-streak";

import { getChat } from "../libs/getAPI.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Feedback({ navigation }) {
    const { colors } = useTheme();
    const {
        logicLevel,
        setLogicLevel,
        numberLevel,
        setNumberLevel,
        patternLevel,
        setPatternLevel,
        puzzleType,
        logicProgress,
        setLogicProgress,
        numberProgress,
        setNumberProgress,
        patternProgress,
        setPatternProgress,
        wimPoints,
        setWimPoints,
        isDyslexic
    } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;
    const questions = route.params.questions;

    // const [AIFeedback, setAIFeedback] = useState('')
    // const [loading, setLoading] = useState(false);

    // useEffect(async () => {
    //     const getAIFeedback = async () => {
    //         const feedback = await getFeedBack(questions[0], questions[1], questions[2]);
    //         return feedback.choices[0].message.content
    //     }
    //     try {
    //         setLoading(true);
    //         setAIFeedback(getAIFeedback());
    //     } catch {
    //         throw new Error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // },[])

    const [currentScreen, setCurrentScreen] = useState(1);
    const [addWim, setAddWim] = useState(0);

    function handleStartButton() {
        if (currentScreen < 5) {
            setCurrentScreen(currentScreen + 1);
        }
    }

    const handleWimCoins = () => {
        if (points >= 3) {
            setAddWim(100)
            setWimPoints(wimPoints + 100);
        } else if (points <= 2) {
            setAddWim(50)
            setWimPoints(wimPoints + 50);
        } else if (points <= 1) {
            setAddWim(25)
            setWimPoints(wimPoints + 25);
        }
    }

    const [data, setData] = useState([]);
    const [textInput, setTextInput] = useState('');

    const handleSend = async () => {
        console.log("Start AI Response");
        try {
            const text = await getChat(textInput);
            setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: text.choices[0].message.content }]);
        } catch (error) {
            throw new Error(error);
        } finally {

        }
        setTextInput('');
    }

    // const today = new Date();
    // const {currentCount} = useStreak(AsyncStorage, today);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
                <WimmyAnimated/>
            </View>

            {currentScreen === 1 && (
                <View style={styles.main_container}>
                    <Text style={{
                        ...styles.header,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>Great Job</Text>

                    <FeedbackBox text={`I'LL GIVE YOU AN EXPLANATION OF EACH QUESTION:\n\nQUESTION 1: ${questions[0]}\n\nQUESTION 2: ${questions[1]}\n\nQUESTION 3: ${questions[2]}\n\nQUESTION 4: ${questions[3]}`} />
                    <PrimaryButton name="NEXT" onPress={() => {
                        handleWimCoins();
                        handleStartButton();
                    }} />
                </View>
            )}

            {currentScreen === 2 && (
                <View style={styles.main_container}>
                    <View style={{
                        ...styles.box,
                        backgroundColor: colors.dialogueBG,
                        borderColor: colors.dialogueBorder,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                        }}>Lesson Complete!</Text>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                        }}>Level: {puzzleType.toLowerCase() === 'numbers problems' ? numberLevel : puzzleType.toLowerCase() === 'logic problems' ? logicLevel : patternLevel}</Text>
                        <Image />
                    </View>
                    <PrimaryButton name="NEXT" onPress={handleStartButton} />
                </View>
            )}

            {currentScreen === 3 && (
                <View style={styles.main_container}>
                    <View >
                        <View style={{
                            ...styles.box,
                            backgroundColor: colors.dialogueBG,
                            borderColor: colors.dialogueBorder,
                        }}>
                            <Text>🔥</Text>
                            {/* <Text style ={{
                                        fontSize: 20,
                                    }}>{currentCount} day {currentCount > 1 ? "s" : ""}</Text>
                                <Text style ={{
                                        fontSize: 20,
                                    }}>day streaks</Text> */}
                        </View>
                    </View>
                    <PrimaryButton name="NEXT" onPress={handleStartButton} />
                </View>
            )}


            {currentScreen === 4 && (
                <View style={styles.main_container}>
                    <View style={{
                        ...styles.box,
                        backgroundColor: colors.dialogueBG,
                        borderColor: colors.dialogueBorder,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
                            fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                        }}>Points: {points}</Text>
                        <View style={styles.coin_container}>
                            <Image
                                source={require('../assets/Icons/wimmyCoin.png')}
                                width={20}
                                height={20}
                            />
                            <Text style={{
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>{addWim} Wim Coins earned!</Text>
                        </View>
                    </View>
                    <PrimaryButton name="NEXT" onPress={handleStartButton} />
                </View>
            )}

            {currentScreen === 5 && (
                <View style={styles.main_container}>
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                        <Text style={{
                            ...styles.chatHead,
                            color: colors.text
                        }}>Do you have any questions for me?</Text>
                        <FlatList
                            scrollEnabled={true}
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            style={{
                                paddingLeft: 20,
                            }}
                            renderItem={({ item }) => (
                                <View key={item}>
                                    {/* <Text style={{ color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'You:' : 'Wimmy: '}</Text> */}
                                    <Text style={{
                                        ...styles.chatBox,
                                        backgroundColor: item.type === 'user' ? colors.chatBoxUser : colors.chatBoxAI,
                                        borderColor: item.type === 'user' ? colors.chatBorderUser : colors.chatBorderAI,
                                        borderBottomRightRadius: item.type === 'user' ? 0 : 10,
                                        borderTopLeftRadius: item.type === 'user' ? 10 : 0,
                                        textAlign: item.type === 'user' ? 'right' : 'left',
                                        color: colors.text
                                    }}>{item.text}</Text>
                                </View>
                            )}
                        />

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 10,
                            marginBottom: 20
                        }}>
                            <TextInput
                                style={{
                                    ...styles.input,
                                    paddingLeft: 10,
                                    borderColor: colors.inputBorder,
                                    backgroundColor: colors.inputBG,
                                }}
                                placeholder="Ask me anything"
                                value={textInput}
                                onChangeText={text => setTextInput(text)}
                            />

                            <SendBtn 
                                name="Send"
                                onPress={handleSend}
                            />

                            {/* <Pressable
                                onPress={handleSend}
                                style={{
                                    ...styles.sendButton
                                }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    paddingTop: 7,
                                }}>send</Text>
                            </Pressable> */}
                        </View>
                    </KeyboardAvoidingView>

                    <PrimaryButton name="NEXT" onPress={() => {
                        if (points > 2) {
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberProgress(numberProgress + 20) : puzzleType.toLowerCase() === 'logic problems' ? setLogicProgress(logicProgress + 20) : setPatternProgress(patternProgress + 20);
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberLevel(numberLevel + 1) : puzzleType.toLowerCase() === 'logic problems' ? setLogicLevel(logicLevel + 1) : setPatternLevel(patternLevel + 1);
                        }
                        navigation.push('PuzzleMap');
                    }} />
                </View>
            )
            }

            <NavBar navigation={navigation} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        height: screenHeight - 24,
        width: screenWidth,
    },
    main_container: {
        height: 430,
        width: screenWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image_box: {
        width: '100vw',
        marginBottom: 10
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    box: {
        minHeight: 70,
        height: 'auto',
        width: 315,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 16,
        textAlign: 'auto',
        margin: 20
    },
    coin_container: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    input: {
        width: 230,
        height: 50,
        borderWidth: 3,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10
    },
    sendButton: {
        width: 72,
        height: 35,
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginLeft: -1,
    },
    chatBox: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        fontSize: 14,
        maxWidth: 280,
        width: 'auto',
        height: 'auto',
        padding: 10,
        minWidth: 1,
        marginTop: 15,
    },
    chatHead: {
        fontSize: 22,
        marginBottom: 10
    }
})