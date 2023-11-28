import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView, Platform, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

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

import AvatarBlue from '../assets/Icons/avatar-blue.svg'
import AvatarPurple from '../assets/Icons/avatar-purple.svg'
import AvatarWhite from '../assets/Icons/avatar-white.svg'

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
        email,
        setEmail,
        password,
        setPassword
    } = React.useContext(AppContext);

    const { colors } = useTheme();

    const [currentPage, setCurrentPage] = useState(1);
    const [level, setLevel] = useState('');
    const [goalTime, setGoalTime] = useState(0);
    // const [isActive, setIsActive] = useState(false);

    const [pfp, setPfp] = useState(null);

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

    return (
        <SafeAreaView style={styles.container}>
            {
                accountSet ?
                    <View>
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
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10
                                }}>
                                    <View>
                                        <Text style={{
                                            fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                                            fontSize: 18,
                                            color: colors.text
                                        }}>Email</Text>
                                        <TextInput
                                            style={{
                                                ...styles.userNameInput,
                                                borderColor: colors.inputBorder,
                                                backgroundColor: colors.inputBG,
                                                color: colors.text,
                                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                            }}
                                            placeholder="Enter your Email..."
                                            onChangeText={(text) => setEmail(text)}
                                            value={email}
                                        />
                                    </View>

                                    <View>
                                        <Text style={{
                                            fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                                            fontSize: 18,
                                            color: colors.text
                                        }}>Create Password</Text>
                                        <TextInput
                                            style={{
                                                ...styles.userNameInput,
                                                borderColor: colors.inputBorder,
                                                backgroundColor: colors.inputBG,
                                                color: colors.text,
                                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                                            }}
                                            placeholder="Type your Password..."
                                            onChangeText={(text) => setPassword(text)}
                                            value={password}
                                        />
                                    </View>
                                </View>

                                {/* change once firebase is set up */}
                                <PrimaryButton name="SET NAME" onPress={() => null } />
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
                                <PrimaryButton name="CONTINUE!" onPress={() => setAccountSet(false)} />
                            </View>)}
                    </View> :

                    <View style={styles.accountPageBody}>
                        <TopBar navigation={navigation} points={wimPoints} />

                        <Pressable style={styles.avartar} onPress={pickImage}>
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
                        </Pressable>

                        <View style={styles.userNameSection}>
                            <Text style={{
                                ...styles.userName,
                                color: colors.text,
                                fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                            }}>{userName}</Text>
                            {/* <Image
                                source={require('../assets/Icons/editBlack.png')}
                                style={styles.editIcon}
                                width={20}
                                height={20}
                            /> */}
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 14,
                        }}>
                            <LevelBox />

                            <View
                                style={{
                                ...styles.box,
                                height: 166,
                                backgroundColor: colors.dialogueBG,
                                borderColor: colors.dialogueBorder,

                            }}>
                                <Text 
                                onPress={() => navigation.push('')}
                                style={{
                                    ...styles.title,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
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
                                <GoalBox prog={60} level={level} goal={goalTime} time="8" />

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

                                {/* <View style={styles.wimmyTail}>
                                <Image source={require('../assets/Icons/wimmyTail.png')} />
                                </View> */}
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
            }
        </SafeAreaView>
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
    editIcon: {
        marginLeft: 10,
    },
    userName: {
        textDecorationLine: 'underline',
        fontSize: 28,
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

