import {StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions} from "react-native";
import {React, useState} from "react";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";




export default function AccountPages({navigation}){


    const [currentPage, setCurrentPage] = useState(1);
    const [wimmyPic, setWimmyPic] = useState(true);
    const [userName,  setUserName] = useState("");
    const [level, setLevel] = useState([]);


    function handleStartButton(){
        if(currentPage < 6){
            setCurrentPage(currentPage + 1);
        }

        if(currentPage === 5){
            setWimmyPic(false);
        }
    }

    function handleNameChange(text){
        setUserName(text);
    }

    function handleLevelChange(value){
        setLevel(value);
    }


    return(
        <View style = {StyleSheet.accountStartPageBody}>
            { wimmyPic && (
                <View>
                    <Image
                        source={require('../assets/Icons/wimmy.png')}
                        style={styles.wimmyPic}
                        width={270}
                        height={188} />
                </View>
            )}


            {currentPage === 1 && (
                <View style={styles.accountStartPageBody}>
                    <DialogueBoxUpper 
                        hasTitle={true}
                        title="Let's set up your account!"
                        interestingText="An account will allow you to track your progress and shar with friends!"
                    />

                    <Pressable style={styles.startButton1} onPress={handleStartButton}>
                        <PrimaryButton 
                            name="START"/>
                    </Pressable>
                </View>)}
            

            {currentPage === 2 && (
                 <View style={styles.accountStartPageBody}>
                        <Text style={styles.title}>What is your name?</Text>

                 <TextInput 
                    style={styles.userNameInput}
                    placeholder="Type your name..."
                    onChange={handleNameChange}
                    value = {userName}
                 />

                 <Pressable style={styles.startButton1} onPress={handleStartButton}>
                     <PrimaryButton 
                         name="SET NAME"/>
                 </Pressable>
             </View>)}


             {currentPage === 3 && (
                 <View style={styles.accountStartTexts}>
                              <DialogueBoxUpper hasTitle={false} interestingText='Select an avatar!' />
                    
                    <View style={styles.avatarIconView}>
                        <Image
                            source={require('../assets/accountPages/imageUpload.png')}
                            style={styles.avatarIcon}
                            width={150}
                            height={150}
                        />
                    </View>

                 <Pressable style={styles.startButton1} onPress={handleStartButton}>
                     <PrimaryButton 
                         name="SET AVATAR"/>
                 </Pressable>
             </View>)}


             {currentPage === 4 && (
                 <View style={styles.accountStartTexts}>
                    <DialogueBoxUpper
                        hasTitle={true}
                        title="Let’s set some goals!"
                        interestingText="How long would you like to practice in a day?"
                    />
            
            <View style={styles.buttons}>
                 <Pressable style={styles.startButton1} onPress={() => {handleStartButton(); handleLevelChange(["Beginner", "5"])}}>
                     <PrimaryButton 
                         name="Beginner (5mins/day)"/>
                 </Pressable>

                 <Pressable style={styles.startButton1} onPress={() => {handleStartButton(); handleLevelChange(["Intermediate", "10"])}}>
                     <PrimaryButton 
                         name="Intermediate (10mins/day)"/>
                 </Pressable>

                 <Pressable style={styles.startButton1} onPress={() => {handleStartButton(); handleLevelChange(["Advanced", "20"])}}>
                     <PrimaryButton 
                         name="Advanced (20mins/day)"/>
                 </Pressable>
                </View>
             </View>)}


             {currentPage === 5 && (
                 <View style={styles.accountStartTexts}>
                        <Text style={styles.title}>You’re All set!</Text>
                        <Text style={styles.texts}>Time to improve your critical thinking! Enjoy your stay</Text>
            
            <View style={styles.buttons}>
                 <Pressable style={styles.startButton1} onPress={handleStartButton}>
                     <PrimaryButton 
                         name="CONTINUE!"
                         colorBackground = "#0C7BDC"
                         shadow = "#005AB5"/>
                 </Pressable>
                </View>
             </View>)}


             {currentPage === 6 && (
                 <View style={styles.container}>
                    <View style={styles.accountStartPageBody}>
                        <View style={styles.avartar} >
                            <Image
                                source={require('../assets/Icons/userEdit.png')}
                                style={styles.wimmyPic}
                                width={210}
                                height={210} />
                        </View>

                    <View style={styles.userNameSection}>
                        <Text style={styles.userName}>{userName}</Text>
                        <Image 
                            source={require('../assets/Icons/editBlack.png')}
                            style={styles.editIcon}
                            width={20}
                            height={20}
                        />
                    </View>

                    <View style={styles.accountStartTexts} >
                        <Text style={styles.title}>Daily Goal</Text>
                        <Text style={styles.level}>{level[0]}</Text>
                            <View style={styles.section}>
                                <Text style={styles.time}>0/{level[1]}</Text>
                            </View>
                          <Text style={styles.message}>Your halfway there to your daily Goal!</Text>
                    </View>

                        <View style={styles.wimmyTail}>
                            <Image source={require('../assets/Icons/wimmyTail.png')} />
                        </View>
                            </View>
                        <NavBar color='#005AB5' navigation={navigation} />
                        <WimmyPopup
                            title='WIMMY SAYS...'
                            desc='Here is the interface for your account. You can keep track of you progress and make changes here!'
                            instuction='Tap to continue.'
                    />
             </View>)}





        </View>
    )

}


const styles = StyleSheet.create({
    accountStartPageBody: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wimmyPic: {
        marginTop: 80,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 30,
    },
    texts: {
        paddingTop: 5,
        fontSize: 20,
        lineHeight: 30,
    },
    accountStartTexts: {
        display: 'flex',
        flexDirection: 'column',
        height:235,
        width: 292,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderColor:'#C8C8C8',
        borderWidth: 2,
        backgroundColor: '#F9F9F9',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        marginTop: 10,
    },
    startButton: {
        position: 'absolute',
        bottom: -180,
    },
    accountStartNameBody: {
        height:67,
        width: 292,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderColor:'#C8C8C8',
        borderWidth: 2,
        display: 'flex',
        backgroundColor: '#F9F9F9',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        marginTop: 10,
    },
    userNameInput: {
        width: 280,
        height: 50,
        borderRadius: 6,
        borderColor: '#A4A4A4',
        borderWidth: 1.5,
        backgroundColor: '#E9E9E9',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
    }
    });
    
