import React from "react";

import { StyleSheet, View, Pressable, Dimensions, Text } from "react-native";
import { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";

import QuestionBox from "../components/Atoms/QuestionBox";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import NavBar from "../components/Molecules/NavBar";
import OptionBtn from "../components/Atoms/OptionButton";
import ProgressBar from "../components/Atoms/DialogueBar";

import { logicProblems } from "../data/wordProblems";
import { AppContext } from '../context/AppContext.js';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WordProblemsPage({ navigation }) {
    const { puzzleType, difficulty, level, setLevel } = React.useContext(AppContext);

    const route = useRoute();
    const currentLevel = route.params.currLevel;

    const { colors } = useTheme();
    const [currentScreen, setCurrentScreen] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [aiResponse, setAIResponse] = useState('')
    const [data, setData] = useState(logicProblems);
    const [number, setNumber] = useState(0);
    const [attempt, setAttempt] = useState(3);

    const questionSet = () => {
        if(currentLevel === 1) {
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

    const [quesIndex, setQuesIndex] = useState(questionSet());
    const [optIndex, setOptIndex] = useState(shuffle([0, 1, 2, 3]));

    const handleSend = async () => {
        console.log("Start ai test");
        const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
            body: JSON.stringify({question: "Who are you?"}),
            method: "post"
        });

        const completion = await response.json();
        setAIResponse(completion.choices[0].message.content)
    }

    const handleAnswer = (choice, answer) => {
        if(choice === answer) {
            setNumber(number + 1);
            console.log(number);
            if (currentScreen < 4) {
                setAttempt(3);
                setOptIndex(shuffle(optIndex));
                setCurrentScreen(currentScreen + 1);
            } else {
                navigation.push("Feedback", { points: number });
            }
        } else {
            setAttempt(attempt - 1)
            if (attempt === 1) {
                if (currentScreen < 4) {
                    setAttempt(3);
                    setOptIndex(shuffle(optIndex));
                    setCurrentScreen(currentScreen + 1);
                } else {
                    navigation.push("Feedback", { points: number });
                }
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.dialogue_bar_container}>
                <ProgressBar num={4} step={currentScreen} />
            </View>
            {currentScreen === 1 && (
                <View style={styles.main_container}>
                    <Image style={styles.image} source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />

                    <View style={styles.question}>
                        <Text>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[0]].description} />
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
                    <Image style={styles.image} source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />

                    <View style={styles.question}>
                        <Text>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[1]].description} />
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
                    <Image style={styles.image} source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />

                    <View style={styles.question}>
                        <Text>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[2]].description} />
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
                    <Image style={styles.image} source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />

                    <View style={styles.question}>
                        <Text>Attempts: {attempt}</Text>
                        <QuestionBox style={styles.text_container} text={data[quesIndex[3]].description} />
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

            <Pressable onPress={() => {
                handleSend();
                setIsActive(true)
            }}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} />
            </Pressable>

            <WimmyPopup style={styles.popup} title="WIMMY SAYS..." desc={aiResponse} instuction="Tap to Continue..." active={isActive} onPress={() => setIsActive(false)} />


            <NavBar navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: screenHeight,
        width: screenWidth,
        paddingBottom: 60
    },
    dialogue_bar_container: {
        // display: 'flex',
        marginTop: 60,
        height: 25,
    },
    image: {
        marginTop: 40,
        marginLeft: 60

    },
    question: {
        marginTop: 25,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        // height: 50,
        marginTop: 20

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
    option_buttons: {
        marginTop: 15,
        height: 100
    },
    popup: {
        marginTop: 30, 
    },
})