import { StyleSheet, View, Pressable, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import axios from "axios";

import QuestionBox from "../components/Atoms/QuestionBox";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import NavBar from "../components/Molecules/NavBar";
import OptionBtn from "../components/Atoms/OptionButton";
import ProgressBar from "../components/Atoms/DialogueBar";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WordProblemsPage({ navigation }) {
    const { colors } = useTheme();
    const [currentScreen, setCurrentScreen] = useState(1);
    const [isActive, setIsActive] = useState(false);

    const [aiResponse, setAIResponse] = useState('');

    const handleSend = async () => {
        console.log("Start ai test");
        const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
            body: JSON.stringify({question: "Who are you?"}),
            method: "post"
        });
        console.log('response', response.body.getReader())
        const completion = await response.json();
        setAIResponse(completion.choices[0].message.content)
    }

    const handleScreenChange = () => {
        if (currentScreen < 4) {
            setCurrentScreen(currentScreen + 1);

        } else {
            navigation.push("Feedback");
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
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
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
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
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
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
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
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnRowOne}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.blue}
                                shadow={colors.optionBtn.blueShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.red}
                                shadow={colors.optionBtn.redShadow}
                            />
                        </View>
                        <View style={styles.btnRowTwo}>
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
                                color={colors.optionBtn.yellow}
                                shadow={colors.optionBtn.yellowShadow}
                            />
                            <OptionBtn
                                name="Option"
                                onPress={handleScreenChange}
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
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{ marginTop: 0 }} />
            </Pressable>

            <WimmyPopup style={styles.popup} title="WIMMY SAYS..." desc={aiResponse} instuction="Tap to Continue..." active={isActive} onPress={() => setIsActive(false)} />


            <NavBar color='#0C7BDC' navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth
    },
    main_container: {

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
    wimmy_tail: {

    },
    text_container: {
        fontSize: 14
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
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        height: '100%'
    },

})