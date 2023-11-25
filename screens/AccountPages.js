import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";

import GoalBox from "../components/Molecules/GoalBox";
import NavBar from "../components/Molecules/NavBar";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";
import TopBar from "../components/Molecules/TopBar";
import LevelBox from "../components/Molecules/LevelBox/index.js";
import WimmyAnimated from "../components/Atoms/WimmyAnimated/index.js";

import { AppContext } from '../context/AppContext.js';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPages({ navigation }) {
    const { wimPoints, isDyslexic, accountSet, setAccountSet, userName, setUserName } = React.useContext(AppContext);
    const { colors } = useTheme();

    const [currentPage, setCurrentPage] = useState(1);
    const [level, setLevel] = useState('');
    const [goalTime, setGoalTime] = useState(0);


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
                                        interestingText="An account will allow you to track your progress and shar with friends!"
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
                                    
                                    <DialogueBoxUpper hasTitle={false} interestingText='What is your name?' />
                                </View>

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

                                <PrimaryButton name="SET NAME" onPress={() => setCurrentPage(currentPage + 1)} />
                            </View>)}

                        {currentPage === 3 && (
                            <View style={styles.accountStartPageBody}>
                                <View>
                                    <WimmyAnimated />
                                    
                                    <DialogueBoxUpper hasTitle={false} interestingText='Select an avatar!' />
                                </View>

                                {/* <Pressable onPress={pickImage}> */}
                                <View style={styles.avatarIconView}>
                                    <Image
                                        source={require('../assets/accountPages/imageUpload.png')}
                                        style={styles.avatarIcon}
                                        width={150}
                                        height={150}
                                    />
                                </View>

                                {/* {image && <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />} */}
                                {/* </Pressable> */}

                                <PrimaryButton name="SET AVATAR" onPress={() => setCurrentPage(currentPage + 1)} />
                            </View>)}

                        {currentPage === 4 && (
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

                        {currentPage === 5 && (
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

                        <View style={styles.avartar} >
                            <Image
                                source={require('../assets/Icons/will.png')}
                                width={95}
                                height={95} />
                        </View>

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
                            <View style={{
                                flexDirection: 'column',
                                gap: 14,
                            }}>

                                <LevelBox />

                                <View style={{
                                    ...styles.box,
                                    height: 166,
                                    backgroundColor: colors.dialogueBG,
                                    borderColor: colors.dialogueBorder,
                                }}>
                                    <Text style={{
                                        ...styles.title,
                                        color: colors.text,
                                        fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
                                    }}>My Wimmy</Text>
                                    <Image
                                        source={require('../assets/Icons/wimmySmall.png')}
                                        style={{
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
    }

});

