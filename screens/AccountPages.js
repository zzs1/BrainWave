import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebaseConfig.js";

import ModalComp from "../components/Molecules/Modal/index.js";
import GoalBox from "../components/Molecules/GoalBox";
import NavBar from "../components/Molecules/NavBar";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";
import TopBar from "../components/Molecules/TopBar";
import LevelBox from "../components/Molecules/LevelBox/index.js";
import WimmyAnimated from "../components/Atoms/WimmyAnimated/index.js";

import { AppContext } from '../context/AppContext.js';

import UserRegister from "../firebase/UserRegister.js";
import UserLogin from "../firebase/UserLogin.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPages({ navigation }) {
    const {
        wimPoints,
        isDyslexic,
        accountSet,
        setAccountSet,
        userName,
        setUserName,
        pfp,
        setPfp,
        numberProgress,
        logicProgress,
        patternProgress,
        logicLevel,
        numberLevel,
        patternLevel
    } = React.useContext(AppContext);

    const { colors } = useTheme();

    const [currentPage, setCurrentPage] = useState(1);
    const [level, setLevel] = useState('');
    const [goalTime, setGoalTime] = useState(0);
    // const [isActive, setIsActive] = useState(false);

    const [isRegister, setIsRegister] = useState(true);

    const permission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert("Permission Denied")
            }
        }
    }

    useEffect(() => {
        permission();
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        console.log(result);
        if (!result.canceled) {
            setPfp(result.uri)
        }
    }

    const currentDate = new Date();

    function handleLevelButton(level, goal) {
        setLevel(level);
        setGoalTime(goal);
        setCurrentPage(currentPage + 1);
    }

    const setUpUser = () => {
        const userCreds = getAuth();
        
        if(!userCreds.currentUser) {
            return null;
        }

        const userRef = doc(db, "users", userCreds.currentUser.uid);
        setDoc(
            userRef,
            {
                userName: userName,
                avatar: pfp,
                wimPoints: wimPoints,
                numberProg: numberProgress,
                numberLvl: numberLevel,
                logicProg: logicProgress,
                logicLvl: logicLevel,
                patternProg: patternProgress,
                patternLvl: patternLevel
            },
            { merge: true }
        )
        console.log("User Set UP")
    }

    return (
        <SafeAreaView style={styles.container}>
                {currentPage === 1 && (
                    <View style={styles.accountStartPageBody}>

                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper
                                hasTitle={true}
                                title="Let's set up your account!"
                                interestingText="An account will allow you to track your progress and share it with friends!"
                            />
                        </View>

                        <PrimaryButton
                            onPress={() => setCurrentPage(currentPage + 1)}
                            name="START" />

                    </View>)}

                {currentPage === 2 && (
                    <View style={styles.accountStartPageBody}>
                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper hasTitle={false} interestingText="Let's start with your account credentials" />
                        </View>
                        {/* once firebase is set up make these into components (follow monika's method) */}

                        {
                            isRegister ? <UserRegister /> : <UserLogin navigation={navigation}/>
                        }

                        <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
                            <Text style={{
                                fontSize: 18
                            }}>{
                                    isRegister ? 'Already have an Accout? LOG IN' : "Don't have an account? REGISTER"
                                }</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setCurrentPage(currentPage + 1)}>
                            <Text style={{
                                fontSize: 18
                            }}>SKIP FOR NOW</Text>
                        </TouchableOpacity>
                    </View>)}

                {currentPage === 3 && (
                    <View style={styles.accountStartPageBody}>
                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper hasTitle={false} interestingText='What is your name?' />
                        </View>

                        <View>
                            <Text style={{
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                                fontSize: 18,
                                color: colors.text
                            }}>Select a Username</Text>
                            <TextInput
                                style={{
                                    ...styles.userNameInput,
                                    borderColor: colors.inputBorder,
                                    backgroundColor: colors.inputBG,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}
                                placeholder="Type your name..."
                                onChangeText={(text) => setUserName(text)}
                                value={userName}
                            />
                        </View>

                        <PrimaryButton name="SET NAME" onPress={() => setCurrentPage(currentPage + 1)} />
                    </View>)}

                {currentPage === 4 && (
                    <View style={styles.accountStartPageBody}>
                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper hasTitle={false} interestingText='Select an avatar!' />
                        </View>

                        <View style={{
                            ...styles.avatarIconView,
                            borderColor: colors.dialogueBorder
                        }}>
                            {
                                pfp && <Image
                                    source={{
                                        uri: pfp
                                    }}
                                    style={{
                                        ...styles.avatarIcon,
                                        width: 190,
                                        height: 190,
                                        borderRadius: 10,
                                    }}
                                />
                            }
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5
                        }}>
                            <PrimaryButton name="UPLOAD IMAGE" onPress={pickImage} />
                            <PrimaryButton name="SET AVATAR" onPress={() => setCurrentPage(currentPage + 1)} />
                        </View>
                    </View>)}

                {currentPage === 5 && (
                    <View style={styles.accountStartPageBody}>
                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper
                                hasTitle={true}
                                title="Let's set your goals!"
                                interestingText="How long would you like to practice in a day?"
                            />
                        </View>

                        <View style={styles.buttons}>
                            <PrimaryButton name="Beginner (5mins/day)" value="Beginner" onPress={handleLevelButton('Beginner', 5)} />
                            <PrimaryButton name="Intermediate (10mins/day)" value="Intermediate" onPress={handleLevelButton('Intermediate', 10)} />
                            <PrimaryButton name="Advanced 20mins/day)" value="Advanced" onPress={handleLevelButton('Advanced', 20)} />
                        </View>
                    </View>
                )}

                {currentPage === 6 && (
                    <View style={styles.accountStartPageBody}>
                        <View>
                            <WimmyAnimated />

                            <DialogueBoxUpper
                                hasTitle={true}
                                title="You're all set!"
                                interestingText="Time to improve your critical thinking! Enjoy your stay!"
                            />
                        </View>
                        <PrimaryButton name="CONTINUE!" onPress={() => {
                            isRegister ? setUpUser() : null;
                            navigation.push("AccountProfile");
                        }} />
                    </View>)}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
    },
    accountStartPageBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: screenHeight,
        width: screenWidth,
        paddingTop: 80,
        paddingBottom: 100
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    },
    texts: {
        paddingTop: 5,
        fontSize: 20,
        lineHeight: 30,
    },
    userNameInput: {
        width: 280,
        height: 50,
        borderRadius: 6,
        borderWidth: 1.5,
        fontSize: 20,
        textAlign: 'center',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        gap: 10
    },
    userNameSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    avatarIconView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 3,
        width: 200,
        height: 200,
        borderRadius: 10,
    }

});

