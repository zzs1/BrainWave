import { StyleSheet, Text, View, Pressable, Dimensions, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native'
import { AppContext } from '../context/AppContext.js'
import React from 'react';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccessibilityPrompt({ navigation }) {

    const { isDarkTheme, setIsDarkTheme, isColorBlind, setIsColorBlind, isDyslexic, setIsDyslexic } = React.useContext(AppContext)
    const { colors, colorBlindColors } = useTheme();
    const { dark } = useTheme();

    const [hiddenInfo, setHiddenInfo] = useState(true);
    const [showSetting, setShowSetting] = useState(false);

    const handleYesButtonPress = () => {
        setHiddenInfo(false);
        setShowSetting(true);
    };

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            {
                hiddenInfo && (
                    <View style={styles.containerBig}>
                      <View style={styles.containerInside}>
                        <View style={styles.text}>
                            {/* <Text style={{
                                ...styles.textStyleBold,
                                color: colors.text
                            }}>Accessibility Options</Text> */}
                            <Text style={{
                                ...styles.textStyleBody,
                                color: colors.text,
                                paddingTop: 80,
                                fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
                            }}>Would you like to explore accessibility options for visual impairment?</Text>
                            <Text style={{
                                ...styles.textStyleNote,
                                color: colors.fadedText,
                                fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
                            }}>You can edit your preferences at any time</Text>
                        </View>

                        <View style={styles.textStyleYes}>
                            <PrimaryButton name='Yes' onPress={handleYesButtonPress} />
                            <PrimaryButton name='No' onPress={() => navigation.push('Intro')} />
                        </View>
                      </View>
                    </View>
                )
            }
            {
                showSetting && (
                    <View style={styles.containerBig}>
                      <View style={{
                        ...styles.containerInside,
                        // backgroundColor: colors.switchBG,
                        }}>
                        <Text style={{
                            ...styles.textStyleBoldSecond,
                            color: colors.text,
                            paddingTop: 80,
                            fontFamily: isDyslexic ? 'Lexend-Bold': 'Poppins-Bold'
                        }}>Accessibility Options</Text>
                        {/* <Text style={{
                            ...styles.textStyleBodySecond,
                            color: colors.text
                        }}>Tap to toggle</Text> */}
                        <View style={styles.textStyleYes}>
                            {/* <PrimaryButton name='Screen Reader' />
                            <PrimaryButton name='Color Blind Mode' />
                            <PrimaryButton name='Dyslexia Font' /> */}
                            {/* <PrimaryButton name='Explanation Label' /> */}

                            <View style={{
                                ...styles.box,
                                backgroundColor: isColorBlind ? (dark ? colorBlindColors.primaryColor : colorBlindColors.primaryColorFade) : colors.toggleBoxColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
                                }}>
                                <Text style={{
                                    ...styles.title,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
                                }}>Dark Mode</Text>
                                <Switch
                                    trackColor={{ false: colors.switchBG, true: colors.switchBG }}
                                    thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
                                    onValueChange={() => setIsDarkTheme(current => !current)}
                                    value={isDarkTheme}
                                />
                            </View>

                            <View style={{
                                ...styles.box,
                                backgroundColor: isColorBlind ? (dark ? colorBlindColors.primaryColor : colorBlindColors.primaryColorFade) : colors.toggleBoxColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
                                }}>
                                <Text style={{
                                    ...styles.title,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
                                }}>Color Blind Mode</Text>
                                <Switch
                                    trackColor={{ false: colors.switchBG, true: colors.switchBG }}
                                    thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
                                    onValueChange={() => setIsColorBlind(current => !current)}
                                    value={isColorBlind}
                                />
                            </View>

                            <View style={{
                                ...styles.box,
                                backgroundColor: isColorBlind ? (dark ? colorBlindColors.primaryColor : colorBlindColors.primaryColorFade) : colors.toggleBoxColor,
                                borderColor: isColorBlind ? colorBlindColors.primaryColorShadow : colors.primaryBtnShadow
                            }}>
                                <Text style={{
                                    ...styles.title,
                                    color: colors.text,
                                    fontFamily: isDyslexic ? 'Lexend-Regular': 'Poppins-Regular'
                                }}>Dyslexia Font</Text>
                                <Switch
                                    trackColor={{ false: colors.switchBG, true: colors.switchBG }}
                                    thumbColor={ isColorBlind ? colorBlindColors.switchThumb : colors.switchThumb }
                                    onValueChange={() => setIsDyslexic(current => !current)}
                                    value={isDyslexic}
                                />
                            </View>
                            <PrimaryButton name='Continue' onPress={() => navigation.push('Intro')} />
                        </View>
                      </View>
                    </View>
                )
            }

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: screenHeight
    },
    containerBig: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 100,
        paddingBottom: 100,
        height: screenHeight
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textStyleBold: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 25,
    },
    textStyleBody: {
        fontWeight: 'normal',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 25,
        width: 255
    },
    textStyleNote: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        width: 200
    },
    textStyleYes: {
        gap: 14,
        alignItems: 'center',
    },
    //After it is false
    containerBigSecond: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    textStyleBoldSecond: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 25,
    },
    textStyleBodySecond: {
        fontWeight: 'normal',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 25,
    },
    textStyleNoteSecond: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        width: 255
    },
    textStyleYesSecond: {
        marginTop: 40,
        gap: 14
    },
    containerInside: {
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        width: 400,
        height: 650,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        paddingBottom: 80,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    box: {
        width: 320,
        height: 70,
        borderRadius: 10,
        borderWidth: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20
    },
    title: {
        fontSize: 20,
        alignSelf: 'center'
    }
});