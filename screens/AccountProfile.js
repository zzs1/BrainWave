import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker'

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebaseConfig.js";

import ModalComp from "../components/Molecules/Modal/index.js";
import GoalBox from "../components/Molecules/GoalBox";
import NavBar from "../components/Molecules/NavBar";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import TopBar from "../components/Molecules/TopBar";
import LevelBox from "../components/Molecules/LevelBox/index.js";

import { AppContext } from '../context/AppContext.js';
import EditPopup from "../components/Molecules/EditPopup/index.js";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountProfile({ navigation }) {
    const {
        wimPoints,
        setWimPoints,
        isDyslexic,
        userName,
        setUserName,
        pfp,
        setPfp,
    } = React.useContext(AppContext);

    const { colors } = useTheme();

    const [isActive, setIsActive] = useState(false);

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

    const currentDate = new Date();

    const getUser = async () => {
        const userProfile = getAuth();
        if (!userProfile.currentUser) {
            return null;
        }

        const docRef = doc(db, "users", userProfile.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document Data: ", docSnap.data());
            const user = docSnap.data();
            setUserName(user.userName);
            setPfp(user.avatar);
            setWimPoints(user.wimPoints);
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.accountPageBody}>
                <TopBar navigation={navigation} points={wimPoints} />

                <Image
                    source={{ uri: pfp }}
                    width={150}
                    height={150}
                    style={{
                        borderRadius: 10,
                        borderColor: colors.dialogueBorder,
                        borderWidth: 3
                    }}
                />

                <View style={styles.userNameSection}>
                    <Text style={{
                        ...styles.userName,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>{userName}</Text>
                </View>

                <TouchableOpacity onPress={() => setIsActive(true)}>
                    <Text style={{
                        marginBottom: 10,
                        fontSize: 20,
                        color: colors.text
                    }}>Edit Profile</Text>
                </TouchableOpacity>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 14
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 14,
                    }}>
                        <LevelBox />

                        <View
                            style={{
                                ...styles.box,
                                height: 200,
                                backgroundColor: colors.dialogueBG,
                                borderColor: colors.dialogueBorder,

                            }}>
                            <Text
                                onPress={() => navigation.push('')}
                                style={{
                                    ...styles.title,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
                                }}>My Wimmy</Text>
                            < ModalComp />
                            <Image
                                source={require('../assets/Icons/wimmySmall.png')}
                                style={{
                                    marginTop: 10,
                                    width: 130,
                                    height: 110,
                                    objectFit: 'contain'
                                }}
                            />


                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        gap: 14,
                    }}>
                        <GoalBox prog={60} level={"Intermediate"} goal={15} time="8" />

                        <View style={{
                            ...styles.box,
                            backgroundColor: colors.dialogueBG,
                            borderColor: colors.dialogueBorder,
                            height: 115,
                        }}>
                            <Text style={{
                                ...styles.title,
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
                            }}>Streaks</Text>
                            <Text style={{
                                fontSize: 16,
                                textAlign: 'center',
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>10 Days</Text>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 16,
                                paddingRight: 16,
                            }}>
                                <Text style={{
                                    ...styles.days,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}>{currentDate.getDate() - 2}</Text>
                                <Text style={{
                                    ...styles.days,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}>{currentDate.getDate() - 1}</Text>
                                <Text style={{
                                    ...styles.days,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}>{currentDate.getDate()}</Text>
                                <Text style={{
                                    ...styles.days,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}>{currentDate.getDate() + 1}</Text>
                                <Text style={{
                                    ...styles.days,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                }}>{currentDate.getDate() + 2}</Text>
                            </View>
                        </View>

                        <View style={{
                            ...styles.box,
                            height: 96,
                            backgroundColor: colors.dialogueBG,
                            borderColor: colors.dialogueBorder,
                        }}>
                            <Text style={{
                                ...styles.title,
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
                            }}>WIM COINS</Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                paddingLeft: 30,
                            }}>
                                <Image
                                    source={require('../assets/Icons/wimmyCoin.png')}
                                    width={30}
                                    height={30}
                                />
                                <Text style={{
                                    fontSize: 30,
                                    color: colors.text,
                                }}>{wimPoints}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.navCont}>
                    <NavBar navigation={navigation} />
                    <WimmyPopup
                        title='WIMMY SAYS...'
                        desc='Here is the interface for your account. You can keep track of you progress and make changes here!'
                        instuction='Tap to continue.'
                    />
                </View>
            </View>
            <EditPopup active={isActive} onPress={() => setIsActive(false)} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
    },
    accountPageBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        paddingTop: 50,
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 10,
    },
    userNameSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        textDecorationLine: 'underline',
        fontSize: 25,
    },
    navCont: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    box: {
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 2,
        width: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    days: {
        fontSize: 16,
        paddingRight: 5,
    },
});

