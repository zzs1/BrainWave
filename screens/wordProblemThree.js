import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Linking,Text } from "react-native";
import { Pressable } from "react-native";
import { Link } from 'expo-router';
import NavBar from '../components/Molecules/NavBar';
import DialogueBar from "../components/Atoms/DialogueBar";
import { Image } from "expo-image";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import OptionButton from "../components/Atoms/OptionButton";
import QuestionBox from "../components/Atoms/QuestionBox";

export default function WordProblemThree({navigation}) {
    return (
        <>
        <View style={styles.main_container}>
            <View style={styles.word_problem_container}>
            <NavBar />
            </View>

          
        <View style={styles.dialogue_bar_container}>
    <DialogueBar/>
    </View >
    <View style={styles.image}>
        <Image source={require("../assets/placeHolder/Placeholder.png")} height={184} width={184}/>
        </View>
    </View>
    {/* <PrimaryButton/> */}
    <View >
        <View style={styles.question}>
        <QuestionBox   />
        </View>
        <Pressable style={styles.option_buttons}>
       
    <OptionButton  />
    </Pressable>
    
    
    <View style={styles.wimmy_tail}>
    <Image source={require("../assets/wimmyFront/WimmyFront.png")} height={94} width={88} />
    </View>
    </View>
        </>
    )
}
const styles = StyleSheet.create({
    main_container:{
        height: '100vh',
        width: '309vw'

    },
    word_problem_container:{
        marginTop: 34,

    },
    dialogue_bar_container:{
        display: 'flex',
        marginTop: 27,
        marginLeft: 70
    },
    image:{
        marginTop:35,
        marginLeft:75

    },
    question:{
        marginTop:30,
        marginLeft:15
    },
    wimmy_tail:{
        marginLeft: 120,
        marginBottom: 30
    },
    option_buttons:{
        marginLeft: 20
    }
})