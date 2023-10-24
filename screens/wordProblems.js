import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Linking,Text } from "react-native";
import { Pressable, TouchableOpacity } from "react-native";

import NavBar from '../components/Molecules/NavBar';
import DialogueBar from "../components/Atoms/DialogueBar";
import { Image } from "expo-image";

import OptionButton from "../components/Atoms/OptionButton";
import QuestionBox from "../components/Atoms/QuestionBox";
import { useState } from "react";
import WimmyPopup from "../components/Molecules/WimmyPopup";


export default function WordProblem({navigation}) {
    const [isActive, setIsActive] = useState();

    return (
        <SafeAreaView style={styles.container}>
            {
                isActive ? <WimmyPopup /> : <></>
            }
            <View style={styles.main_container}>
                <View style={styles.dialogue_bar_container}>
                    <DialogueBar/>
                </View >
                <View style={styles.image}>
                    <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184}/>
                </View>
            </View>

            <View >
                <View style={styles.question}>
                <QuestionBox  style={styles.text_container} text="I have seven candles lit. Two blew out. How many candles do I have left?"/>
                </View>
                <Pressable style={styles.option_buttons} onPress={() => navigation.push('WordProblemTwo')}>
            
                    <OptionButton  title1="7" title2="15" title3="40" title4="1"/>
                </Pressable>
            </View>
    
            <Pressable onPress={() => setIsActive(true)}>
                <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} style={{marginTop: 60}}/>
            </Pressable>
        
            <NavBar color='#0C7BDC' navigation={navigation}/>
        </SafeAreaView>
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
    dialogue_bar_container:{
        display: 'flex',
        marginTop: 27,
    },
    image:{
        marginTop:35,

    },
    question:{
        marginTop:30,
    },
    wimmy_tail:{
        
    },
    text_container:{
        fontSize:14
    }
})