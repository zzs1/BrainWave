import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { React, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { ProgressChart } from "react-native-chart-kit";

import GoalBox from "../components/Molecules/GoalBox";
import NavBar from "../components/Molecules/NavBar";
import PrimaryButton from "../components/Atoms/PrimaryButton";
import WimmyPopup from "../components/Molecules/WimmyPopup";
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";
import TopBar from "../components/Molecules/TopBar";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPages({ navigation }) {

    const { colors } = useTheme();

    const [currentPage, setCurrentPage] = useState(1);
    const [wimmyPic, setWimmyPic] = useState(true);
    const [userName, setUserName] = useState("");
    const [level, setLevel] = useState('');
    const [goalTime, setGoalTime] = useState(0);
    
    const data = {
        data: [0.4]
    };

    const currentDate = new Date();


    const chartConfig = {
        backgroundColor: colors.dialogueBG,
        backgroundGradientFrom: colors.dialogueBG,
        backgroundGradientTo: colors.dialogueBG,
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(${colors.chartBarColor}, ${opacity})`,
        labelColor: (opacity = 1) => colors.chartBarLabel,
        strokeWidth: 2,
        barPercentage: 0.5,
    }


    function handleStartButton() {
        if (currentPage < 6) {
            setCurrentPage(currentPage + 1);
        }

        if (currentPage === 5) {
            setWimmyPic(false);
        }
    }

    function handleLevelButton(level, goal) {
        setLevel(level);
        setGoalTime(goal);
        setCurrentPage(currentPage + 1);
    }

    function handleNameChange(text) {
        setUserName(text);
    }

    return (
        <SafeAreaView style={styles.container}>
            {currentPage === 1 && (
                <View style={styles.accountStartPageBody}>

                    <View>
                        {
                            wimmyPic && <Image
                                source={require('../assets/Icons/wimmy.png')}
                                style={styles.wimmyPic}
                                width={270}
                                height={188} />
                        }
                        <DialogueBoxUpper
                            hasTitle={true}
                            title="Let's set up your account!"
                            interestingText="An account will allow you to track your progress and shar with friends!"
                        />
                    </View>

                    <PrimaryButton
                        onPress={handleStartButton}
                        name="START" />

                </View>)}


            {currentPage === 2 && (
                <View style={styles.accountStartPageBody}>
                    <View>
                        {
                            wimmyPic && <Image
                                source={require('../assets/Icons/wimmy.png')}
                                style={styles.wimmyPic}
                                width={270}
                                height={188} />
                        }
                        <DialogueBoxUpper hasTitle={false} interestingText='What is your name?' />
                    </View>

                    <TextInput
                        style={{
                            ...styles.userNameInput,
                            borderColor: colors.inputBorder,
                            backgroundColor: colors.inputBG
                        }}
                        placeholder="Type your name..."
                        onChangeText={handleNameChange}
                        value={userName}
                    />

                    <PrimaryButton name="SET NAME" onPress={handleStartButton} />
                </View>)}


            {currentPage === 3 && (
                <View style={styles.accountStartPageBody}>
                    <View>
                        {
                            wimmyPic && <Image
                                source={require('../assets/Icons/wimmy.png')}
                                style={styles.wimmyPic}
                                width={270}
                                height={188} />
                        }
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

                    <PrimaryButton name="SET AVATAR" onPress={handleStartButton} />
                </View>)}


            {currentPage === 4 && (
                <View style={styles.accountStartPageBody}>
                    <View>
                        {
                            wimmyPic && <Image
                                source={require('../assets/Icons/wimmy.png')}
                                style={styles.wimmyPic}
                                width={270}
                                height={188} />
                        }
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
                </View>)}

            {currentPage === 5 && (
                <View style={styles.accountStartPageBody}>
                    <View>
                        {
                            wimmyPic && <Image
                                source={require('../assets/Icons/wimmy.png')}
                                style={styles.wimmyPic}
                                width={270}
                                height={188} />
                        }
                        <DialogueBoxUpper
                            hasTitle={true}
                            title="You're all set!"
                            interestingText="Time to improve your critical thinking! Enjoy your stay!"
                        />
                    </View>
                    <PrimaryButton name="CONTINUE!" onPress={handleStartButton} />
                </View>)}


            {currentPage === 6 && (
                <View style={styles.accountPageBody}>
                    <TopBar navigation={navigation} />

                    <View style={styles.avartar} >
                        <Image
                            source={require('../assets/Icons/will.png')}
                            width={95}
                            height={95} />
                    </View>

                    <View style={styles.userNameSection}>
                        <Text style={{
                            ...styles.userName,
                            color: colors.text
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
                            <View style={{
                                ...styles.box,
                                height: 200,
                                borderColor: colors.dialogueBorder,
                            }}>
                                <Text style={styles.title}>LEVEL</Text>
                                <View style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <ProgressChart
                                        data={data}
                                        width={150}
                                        height={150}
                                        strokeWidth={16}
                                        radius={32}
                                        chartConfig={chartConfig}
                                        hideLegend={true}
                                        style={{
                                            borderRadius: 20
                                        }}
                                    />
                                </View>
                            </View>

                            <View style={{
                                ...styles.box,
                                height: 166,
                                borderColor: colors.dialogueBorder,
                            }}>
                                <Text style={styles.title}>My Wimmy</Text>
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
                                height: 115,
                                borderColor: colors.dialogueBorder,
                            }}>
                                <Text style={styles.title}>Streaks</Text>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    paddingTop: 5,
                                }}>10 Days</Text>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    paddingTop: 10,
                                }}>
                                    <Text style={styles.days}>{currentDate.getDate() - 2}</Text>
                                    <Text style={styles.days}>{currentDate.getDate() - 1}</Text>
                                    <Text style={styles.days}>{currentDate.getDate()}</Text>
                                    <Text style={styles.days}>{currentDate.getDate() + 1}</Text>
                                    <Text style={styles.days}>{currentDate.getDate() + 2}</Text>
                                </View>
                            </View>

                            <View style={{
                                ...styles.box,
                                height: 96,
                                borderColor: colors.dialogueBorder,
                            }}>
                                <Text style={styles.title}>WIMS</Text>
                                <View style={{
                                    display: 'flex',
                                    paddingTop: 15,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingLeft: 30,
                                }}>
                                    <Text style={{
                                        fontSize: 30,
                                    }}>1500</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        paddingLeft: 5,
                                    }}>Wims</Text>
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
            )}
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
        fontWeight: '900',
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
        bottom: 24
    },
    box: {
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 2,
    },
    days: {
        fontSize: 22,
    }

});

