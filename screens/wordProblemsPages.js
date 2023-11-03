import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Linking, Text, Dimensions } from "react-native";
import { Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";

import QuestionBox from "../components/Atoms/QuestionBox";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import PuzzleDialogueBar from "../components/Atoms/PuzzleDialogueBar";
import NavBar from "../components/Molecules/NavBar";
import OptionBtn from "../components/Atoms/OptionButton";
import ProgressBar from "../components/Atoms/DialogueBar";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function WordProblemsPage({ navigation }) {
    const { colors } = useTheme();
    const [currentScreen, setCurrentScreen] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [lineColor, setLineColor] = useState('#EADBB4');
    const [circleColor, setCircleColor] = useState('#005AB5');

    const handleColorChange = () => {
        setLineColor(lineColor === '#EADBB4' ? '#005AB5' : '#EADBB4');
        setCircleColor(circleColor === '#005AB5' ? '#EADBB4' : '#005AB5');
    };


    const handleScreenChange = () => {
        if (currentScreen === 4) {
            navigation.push("Feedback");
        }
        setCurrentScreen(currentScreen + 1);
    }

    return (
        <View style={styles.container}>
            <ProgressBar num={4} step={currentScreen} />
            {currentScreen === 1 && (
                <View style={styles.main_container}>

                    <View style={styles.image}>
                        <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
                    <View style={styles.question}>
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.blue}
                            shadow={colors.optionBtn.blueShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.yellow}
                            shadow={colors.optionBtn.yellowShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                    </View>
                </View>
            )}

            {currentScreen === 2 && (
                <View style={styles.main_container}>

                    <View style={styles.image}>
                        <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
                    <View style={styles.question}>
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.blue}
                            shadow={colors.optionBtn.blueShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.yellow}
                            shadow={colors.optionBtn.yellowShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                    </View>
                </View>
            )}

            {currentScreen === 3 && (
                <View style={styles.main_container}>

                    <View style={styles.image}>
                        <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
                    <View style={styles.question}>
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.blue}
                            shadow={colors.optionBtn.blueShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.yellow}
                            shadow={colors.optionBtn.yellowShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                    </View>
                </View>
            )}

            {currentScreen === 4 && (
                <View style={styles.main_container}>

                    <View style={styles.image}>
                        <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
                    <View style={styles.question}>
                        <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                    </View>
                    <View style={styles.btnContainer}>
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.blue}
                            shadow={colors.optionBtn.blueShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.yellow}
                            shadow={colors.optionBtn.yellowShadow}
                        />
                        <OptionBtn
                            name="Option"
                            onPress={() => setCurrentScreen(handleScreenChange)}
                            color={colors.optionBtn.red}
                            shadow={colors.optionBtn.redShadow}
                        />
                    </View>
                </View>
            )}

            <Pressable onPress={() => setIsActive(true)}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{ marginTop: 60 }} />
            </Pressable>

            {
                isActive ? <WimmyPopup style={styles.popup} /> : <></>
            }

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
        display: 'flex',
        marginTop: 50,
        height: 25,
    },
    image: {
        marginTop: 30,

    },
    question: {
        marginTop: 35,
    },
    wimmy_tail: {

    },
    text_container: {
        fontSize: 14
    },
    option_buttons: {
        marginTop: 15,
        height: 100
    },
    popup: {
        marginTop: 60,

    }
})