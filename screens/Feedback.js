import { Image } from "expo-image"
import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import NavBar from "../components/Molecules/NavBar"
import QuestionBox from "../components/Atoms/QuestionBox"
import NextButton from "../components/Atoms/NextButton"
export default function Feedback() {
    return(
        <>
        <View style={styles.main_container}>
        <View style={styles.navbar_container}>
        <NavBar />
        </View>
        <View style={styles.image_box}>
            <Image source={require("../assets/wimmyFront/Wimmy.png")} height={187} width={270}/>
        </View>
        <Text style={styles.header}>Great Job</Text>
        <View style={styles.question_box} >
        <QuestionBox style={styles.text}  text="This section contains a list of feedback. Break down the questions and the logic behind them, let users know what they need to work on as well as a list of resources that can also help "/>
        </View>
        <View style={styles.button}>
        <NextButton text='NEXT'/>
        </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    main_container:{
        height: '100vh',
        width: '309vw',
        

    },
    navbar_container:{
        marginTop: 24,

    },
 image_box:{
    width:'100vw',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30
 },
 question_box:{
    marginTop: 20,
    marginLeft:20,
    fontSize: 20

 },
 button:{
    paddingTop: 25,
    paddingLeft: 15
 },
//  text:{
//     fontSize: 20
//  },
 header:{
    fontSize: 30,
    height: 35,
    fontWeight:'bold',
    color:'#393939',
    marginLeft: 110,
    marginTop: 10,
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center'

 }
 
})