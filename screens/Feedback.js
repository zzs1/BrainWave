import React, { useState } from "react";
import axios from "axios";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View, Dimensions, TextInput, FlatList, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native"
import { useTheme } from "@react-navigation/native";

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
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
        setWimPoints
    } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;

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
    }
    // const today = new Date();
    // const {currentCount} = useStreak(AsyncStorage, today);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_box}>
                <Image source={require("../assets/wimmyFront/Wimmy.png")} height={187} width={270} />
            </View>

            {currentScreen === 1 && (
                <View style={styles.main_container}>
                    <Text style={{
                        ...styles.header,
                        color: colors.navText,
                    }}>Great Job</Text>

                    <QuestionBox text="This section contains a list of feedback. Break down the questions and the logic behind them, let users know what they need to work on as well as a list of resources that can also help " />
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
                        }}>Lesson Complete!</Text>
                        <Text style={{
                            fontSize: 20,
                            color: colors.text,
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
                        }}>Points: {points}</Text>
                        <View style={styles.coin_container}>
                            <Image
                                source={require('../assets/Icons/wimmyCoin.png')}
                                width={20}
                                height={20}
                            />
                            <Text style={{
                                color: colors.text,
                            }}>{addWim} Wim Coins earned!</Text>
                        </View>
                    </View>
                    <PrimaryButton name="NEXT" onPress={handleStartButton} />
                </View>
            )}

            {currentScreen === 5 && (
                <View style={styles.main_container}>
                    <ScrollView>
                        <Text>Do you have any question for me?</Text>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            style={{}}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={{ color: item.type === 'user' ? 'green' : 'red' }}>{item.type === 'user' ? 'You:' : 'Wimmy: '}</Text>
                                    <Text>{item.text}</Text>
                                </View>
                            )}
                        />
                    </ScrollView>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <TextInput
                            style={{
                                ...styles.input,
                                paddingLeft: 10,
                            }}
                            placeholder="type..."
                            value={textInput}
                            onChangeText={text => setTextInput(text)} />

                        <Pressable
                            onPress={handleSend}
                            style={{
                                ...styles.sendButton
                            }}>
                            <Text style={{
                                fontSize: 16,
                                textAlign: 'center',
                                paddingTop: 7,
                            }}>send</Text>
                        </Pressable>
                    </View>

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
        paddingTop: 70,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        height: screenHeight - 25,
        width: screenWidth,
    },
    main_container: {
        height: 370,
        width: screenWidth,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image_box: {
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    question_box: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    button: {
        margin: 20
    },
    header: {
        fontSize: 30,
        height: 35,
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
    }
})