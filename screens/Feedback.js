import React, { useState } from "react";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View, Dimensions } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native"
import { useTheme } from "@react-navigation/native";

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
import { useStreak } from "use-streak";

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
        setPatternProgress
    } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;

    const [currentScreen, setCurrentScreen] = useState(1);

    function handleStartButton() {
        if (currentScreen < 4) {
            setCurrentScreen(currentScreen + 1);
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
                    <PrimaryButton name="NEXT" onPress={handleStartButton} />
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
                        <Text style={{
                                color: colors.text, 
                        }}>wims earned!</Text>

                    </View>
                    <PrimaryButton name="NEXT" onPress={() => {
                        if(points > 2) {
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberProgress(numberProgress + 20) : puzzleType.toLowerCase() === 'logic problems' ? setLogicProgress(logicProgress + 20) : setPatternProgress(patternProgress + 20);
                            puzzleType.toLowerCase() === 'numbers problems' ? setNumberLevel(numberLevel + 1) : puzzleType.toLowerCase() === 'logic problems' ? setLogicLevel(logicLevel + 1) : setPatternLevel(patternLevel + 1);
                        }
                        navigation.push('PuzzleMap');
                    }} />
                </View>
            )}

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
    }

})