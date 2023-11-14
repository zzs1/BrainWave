import React, { useState } from "react";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native"
import { useTheme } from "@react-navigation/native";

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
import { useStreak } from "use-streak";

export default function Feedback({ navigation }) {

    const { colors } = useTheme();
    const { level, setLevel } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;

    const [currentScreen, setCurrentScreen] = useState(1);

    function handleStartButton(){
        if (currentScreen < 4){
            setCurrentScreen(currentScreen + 1);
        }
    }

    // const today = new Date();
    // const {currentCount} = useStreak(AsyncStorage, today);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main_container}>
                <View style={styles.image_box}>
                    <Image source={require("../assets/wimmyFront/Wimmy.png")} height={187} width={270} />
                </View>


        { currentScreen === 1 && (
            <View style ={{
                
            }}>
                <Text style={{
                    ...styles.header,
                        color: colors.navText,
                    }}>Great Job</Text>

                <View style={styles.question_box} >
                    <QuestionBox style={styles.text} text="This section contains a list of feedback. Break down the questions and the logic behind them, let users know what they need to work on as well as a list of resources that can also help " />
                    <PrimaryButton name = "NEXT" onPress={handleStartButton}/>
                </View>

            </View>
        )}

        { currentScreen === 2 && (
         <View>
            <View  style ={{
                ...styles.box,
                backgroundColor: colors.dialogueBG,
            }}>
                <Text style ={{
                    fontSize: 20,
                    color: colors.navText,
                }}>Lesson Complete!</Text>
                <Text style ={{
                    fontSize: 20,
                    color: colors.navText,
                }}>Level: {level}</Text>
                 <Image />
            </View>
            <PrimaryButton name = "NEXT" onPress={handleStartButton}/>
         </View>
        )}

        { currentScreen === 3 && (
         <View>
          <View>
            <View style ={{
                ...styles.box,
                backgroundColor: colors.dialogueBG,
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
          <PrimaryButton name = "NEXT" onPress={handleStartButton}/>
         </View>
        )}

        
        { currentScreen === 4 && (
        <View>
            <View  style ={{
                ...styles.box,
                backgroundColor: colors.dialogueBG,
            }}>
                <Text style ={{
                    fontSize: 20,
                    color: colors.navText,
                }}>Points: {points}</Text>
                <Text style = {{
                    color: colors.navText,
                }}>wims earned!</Text>
   
            </View>
            <View style={styles.button}>
                    <PrimaryButton name="NEXT" onPress={() => {
                        navigation.push('PuzzleMap', { title: 'NUMBER PROBLEMS' });
                        setLevel(level + 1);
                    }} />
                </View>
        </View>
        )}

            </View>
            <NavBar color='#0C7BDC' navigation={navigation} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        height: '100%'
    },
    main_container: {
        height: '100vh',
        width: '309vw',
    },
    navbar_container: {
        marginTop: 24,
    },
    image_box: {
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    question_box: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20

    },
    button: {
        paddingTop: 25,
        paddingLeft: 15
    },
    //  text:{
    //     fontSize: 20
    //  },
    header: {
        fontSize: 30,
        height: 35,
        fontWeight: 'bold',
        color: '#393939',
        marginLeft: 110,
        marginTop: 10,
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center'
    },
    box: {
        minHeight:67,
        height: 'auto',
        width: 315,
        borderRadius: 20,
        borderColor:'#C8C8C8',
        borderWidth: 2,
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 10,
        paddingBottom:10,
        fontSize: 16,
        textAlign:'auto',
        paddingLeft: 10,
        paddingRight: 10
    }

})