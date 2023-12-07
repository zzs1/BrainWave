import React, { useState, useEffect } from "react";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View, Dimensions, TextInput, FlatList, ScrollView, KeyboardAvoidingView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native"
import { useTheme } from "@react-navigation/native";

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { db } from "../firebase/firebaseConfig.js";

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
import FeedbackBox from "../components/Atoms/FeedbackBox/index.js";
import SendBtn from "../components/Atoms/sendBtn/index.js";
import WimmyAnimated from "../components/Atoms/WimmyAnimated/index.js";
import WimmyThinking from "../components/Atoms/WimmyThinking/index.js";

import { useStreak } from "use-streak";

import { getChat, getFeedBack } from "../libs/getAPI.js";
import * as  Speech from 'expo-speech';

import SoundBlack from '../assets/Icons/sound-black.svg'
import SoundWhite from '../assets/Icons/sound-white.svg'
import VolumePause from '../assets/Icons/sound-icon-pause.svg'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Feedback({ navigation }) {
    const { colors, dark } = useTheme();
    const {
        logicLevel, setLogicLevel,
        numberLevel, setNumberLevel,
        patternLevel, setPatternLevel,
        puzzleType,
        logicProgress, setLogicProgress,
        numberProgress, setNumberProgress,
        patternProgress, setPatternProgress,
        wimPoints, setWimPoints,
        isDyslexic
    } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;
    const questions = route.params.questions;

    const [AIFeedback, setAIFeedback] = useState('')
    const [feedLoading, setFeedLoading] = useState(false);

    const getAIFeedback = async () => {
        try {
            console.log(questions);
            console.log("Start AI Response");
            setFeedLoading(true);
            const feedback = await getFeedBack(questions[0], questions[1], questions[2], questions[3]);
            setAIFeedback(feedback.choices[0].message.content);
        } catch {
            throw new Error(error);
        } finally {
            setFeedLoading(false);
            console.log("AI Response Completed");
        }
    }

    useEffect(() => {
        getAIFeedback();
    }, [])

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
        try {
            console.log("Start AI Response");
            const text = await getChat(textInput);
            setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: text.choices[0].message.content }]);
        } catch (error) {
            throw new Error(error);
        } finally {
            console.log("AI Response Completed");
        }
        setTextInput('');
    };
    const [speech, setSpeech] = React.useState("");
    const listAvailableVoices = async () => {
        let voice = await Speech.getAvailableVoicesAsync()
        console.log(voice)
    }
    let speechInstance;

    React.useEffect(() => {
        listAvailableVoices();
        
        return() => {
            Speech.stop()
        }
    }, []);
    React.useEffect(() => {
        if(!isPlaying && Speech) {
            Speech.stop();
        }
    }, [isPlaying])

    const WimmySpeak = () => {
       
        console.log("SPEAKING");
        const speaking = `${AIFeedback}`;
        options = {
            voice: "en-us-x-iol-local"
        }
     
       Speech.speak(speaking,options)

    }
    const [isPlaying, setIsPlaying] = useState(false);
    const playPause = () => {
        const preValue = isPlaying;
        setIsPlaying(!preValue);
        if (!preValue) {
            WimmySpeak()
        } else{
            Speech.stop()
        }
        
    }

    const updateUser = async () => {
        const userCreds = getAuth();
        
        if(!userCreds.currentUser) {
            return null;
        }

        const userRef = doc(db, "users", userCreds.currentUser.uid)
        setDoc(
            userRef,
            {
                wimPoints: wimPoints,
                numberProg: numberProgress,
                numberLvl: numberLevel,
                logicProg: logicProgress,
                logicLvl: logicLevel,
                patternProg: patternProgress,
                patternLvl: patternLevel,
            },
            { merge: true }
        )
        console.log("Changes saved");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
                <WimmyAnimated />
            </View>
            {/* <Pressable style={styles.speech_button} title="speech" onPress={WimmySpeak}>
                <Image source={dark ? SoundWhite : SoundBlack} height={42} width={50} style={{objectFit: 'contain'}}/>
            </Pressable> */}
            <Pressable style={styles.speech_button} title="speech" onPress={playPause}>
                {
                    isPlaying ?
                    <Image 
                    source={dark ? SoundWhite : SoundBlack}
                    contentFit='contain'
                    height={42} width={50} style={{objectFit: 'contain'}}
/>
                  
                    
               
                    :   <Image source={require('../assets/Icons/sound-icon-pause.svg')}
                      height={42} width={50} style={{objectFit: 'contain'}}/> }
                     
                
                </Pressable>

            {currentScreen === 1 && (
                <View style={styles.main_container}>
                    <Text style={{
                        ...styles.header,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>Great Job</Text>

                    <FeedbackBox text={AIFeedback} loading={feedLoading} />
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
                    <PrimaryButton name="NEXT" onPress={() => {
                        if (points > 2) {
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberProgress(numberProgress + 20) : puzzleType.toLowerCase() === 'logic problems' ? setLogicProgress(logicProgress + 20) : puzzleType.toLowerCase() === 'pattern recognition' ? setPatternProgress(patternProgress + 20) : null;
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberLevel(numberLevel + 1) : puzzleType.toLowerCase() === 'logic problems' ? setLogicLevel(logicLevel + 1) : puzzleType.toLowerCase() === 'pattern recognition' ? setPatternLevel(patternLevel + 1) : null;
                        };
                        handleStartButton();
                    }} />
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
                            <Text style={{
                                fontSize: 20,
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}> Day 1 🔥Streaks</Text>
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
                        <View style={{
                            ...styles.box,
                            backgroundColor: colors.dialogueBG,
                            borderColor: colors.dialogueBorder,
                        }}>
                            <Text style={{
                                ...styles.chatHead,
                                color: colors.text
                            }}>Do you have any questions for me?</Text>
                        </View>
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

                    <PrimaryButton name="FINISH" onPress={() => {
                        updateUser();
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
        height: screenHeight,
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
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 16,
        textAlign: 'auto',
        margin: 10
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
        overflow: 'hidden',
    },
    chatHead: {
        fontSize: 16,
        marginBottom: 10
    }
})