import React from "react";

import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text, Pressable, View } from "react-native"
import { useRoute } from "@react-navigation/native"

import { AppContext } from '../context/AppContext.js';

import QuestionBox from "../components/Atoms/QuestionBox"
import NavBar from "../components/Molecules/NavBar"
import PrimaryButton from "../components/Atoms/PrimaryButton"
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Feedback({ navigation }) {
    const { level, setLevel } = React.useContext(AppContext);

    const route = useRoute();
    const points = route.params.points;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main_container}>
                <View style={styles.image_box}>
                    <Image source={require("../assets/wimmyFront/Wimmy.png")} height={187} width={270} />
                </View>
                <Text style={{...styles.header,
                color: Colors.headerColour}}>Great Job</Text>
                <Text>Level: {level}</Text>
                <Text>Points: {points}</Text>
                <View style={styles.question_box} >
                    <QuestionBox style={styles.text} text="This section contains a list of feedback. Break down the questions and the logic behind them, let users know what they need to work on as well as a list of resources that can also help " />
                </View>
                <View style={styles.button}>
                    <PrimaryButton name="NEXT" onPress={() => {
                        navigation.push('PuzzleMap', { title: 'NUMBER PROBLEMS' });
                        setLevel(level + 1);
                    }} />
                </View>
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

    }

})