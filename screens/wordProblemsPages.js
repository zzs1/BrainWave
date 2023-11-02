import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Linking,Text } from "react-native";
import { Pressable, TouchableOpacity } from "react-native";
import OptionButton from "../components/Atoms/OptionButton";
import QuestionBox from "../components/Atoms/QuestionBox";
import { useState } from "react";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import { Image } from "expo-image";
import WordProblem from "./wordProblems";
import WordProblemTwo from "./wordProblemTwo";
import WordProblemThree from "./wordProblemThree";
import WordProblemFour from "./wordProblemFour";
import Feedback from "./Feedback";
import PuzzleDialogueBar from "../components/Atoms/PuzzleDialogueBar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { useNavigation } from "expo-router";


export default function WordProblemsPage() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const navigation = useNavigation();
    const [isActive, setIsActive] = useState(false);
    const [lineColor, setLineColor] = useState('#EADBB4');
    const [circleColor, setCircleColor] = useState('#005AB5');
  
    const handleColorChange = () => {
      
      setLineColor(lineColor === '#EADBB4' ? '#005AB5' : '#EADBB4');
      setCircleColor(circleColor === '#005AB5' ? '#EADBB4' : '#005AB5');
    };
    // const handleScreenChange = () => {
        
    //     if (currentScreen < 5) {
    //         setCurrentScreen (currentScreen + 1)
        
    // }
    // }
    const handleNavigation = () => {
        if (currentScreen === 1) {
            navigation.navigate("WordProblemTwo");
        } else if (currentScreen === 2) {
            navigation.navigate("WordProblemThree");
        } else if (currentScreen === 3) {
            navigation.navigate("WordProblemFour");
        } else if (currentScreen === 4) {
            navigation.navigate("Feedback");
        }
    }

    return(
        <View>
            { currentScreen === 1 && (
                <View>
                <View style={styles.dialogue_bar_container}>
             {/* <DialogueBar /> */}
             <PuzzleDialogueBar 
                lineColor={lineColor}
                circleColor={circleColor}
                onColorChange={handleColorChange}
             />
</View >
            

            <View style={styles.main_container}>
               
                <View style={styles.image}>
                    <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
            </View>

            <View >
                <View style={styles.question}>
                    <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                </View>
                <Pressable style={styles.option_buttons} onPress={handleNavigation} >

                    <OptionButton onClick={handleScreenChange} title1="7" title2="15" title3="40" title4="1" />
                </Pressable>
            </View>

            <Pressable onPress={() => setIsActive(true)}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{ marginTop: 60 }} />
            </Pressable>
            {
                isActive ? <WimmyPopup style={styles.popup} /> : <></>
            }

            <NavBar color='#0C7BDC' navigation={navigation} /> 
            </View>
            ) }

<View style={styles.dialogue_bar_container}>
             {/* <DialogueBar /> */}
             <PuzzleDialogueBar 
                lineColor={lineColor}
                circleColor={circleColor}
                onColorChange={handleColorChange}
             />
</View >
            
            { currentScreen === 2 && (
                <View>
            <View style={styles.main_container}>
               
                <View style={styles.image}>
                    <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
            </View>

            <View >
                <View style={styles.question}>
                    <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                </View>
                <Pressable style={styles.option_buttons} onPress={onPress={handleNavigation} } >

                    <OptionButton navigation={navigation}  title1="7" title2="15" title3="40" title4="1" />
                </Pressable>
            </View>

            <Pressable onPress={() => setIsActive(true)}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{ marginTop: 60 }} />
            </Pressable>
            {
                isActive ? <WimmyPopup style={styles.popup} /> : <></>
            }

            <NavBar color='#0C7BDC' navigation={navigation} />
            </View>
            )}
            {currentScreen === 3 && (
                <View>
                          <View style={styles.dialogue_bar_container}>
             {/* <DialogueBar /> */}
             <PuzzleDialogueBar 
                lineColor={lineColor}
                circleColor={circleColor}
                onColorChange={handleColorChange}
             />
</View >
            

            <View style={styles.main_container}>
               
                <View style={styles.image}>
                    <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184} />
                    </View>
            </View>

            <View >
                <View style={styles.question}>
                    <QuestionBox style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?" />
                </View>
                <Pressable style={styles.option_buttons} onPress={onPress={handleNavigation} } >

                    <OptionButton  title1="7" title2="15" title3="40" title4="1" />
                </Pressable>
            </View>

            <Pressable onPress={() => setIsActive(true)}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{ marginTop: 60 }} />
            </Pressable>
            {
                isActive ? <WimmyPopup style={styles.popup} /> : <></>
            }

            <NavBar color='#0C7BDC' navigation={navigation} />
                </View>
            )}




        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    // main_container:{
    //     height: '100vh',
    //     width: '309vw'
    // },
    dialogue_bar_container: {
        display: 'flex',
        marginTop: 50,
        height:25,
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
    option_buttons:{
        marginTop: 15,
        height:100
    },
    popup:{
        marginTop: 60,
        
    }
})