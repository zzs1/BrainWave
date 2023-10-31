import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccessibilityPrompt({ navigation }) {
    const { colors } = useTheme();

    const [hiddenInfo, setHiddenInfo] = useState(true);
    const [showSetting, setShowSetting] = useState(false);

    const handleYesButtonPress = () => {
        setHiddenInfo(false);
        setShowSetting(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            {
                hiddenInfo && (
                    <View style={styles.containerBig}>
                        <View style={styles.text}>
                            <Text style={{
                                ...styles.textStyleBold,
                                color: colors.text
                            }}>Accessibility Options</Text>
                            <Text style={{
                                ...styles.textStyleBody,
                                color: colors.text
                            }}>Would you like to explore accessibility options for visual impairment?</Text>
                            <Text style={{
                                ...styles.textStyleNote,
                                color: colors.fadedText
                            }}>Note: You can edit your preferences at any time.</Text>
                        </View>

                        <View style={styles.textStyleYes}>
                            <PrimaryButton name='Yes' onPress={handleYesButtonPress} />
                            <PrimaryButton name='No' onPress={() => navigation.push('Intro')} />
                        </View>
                    </View>
                )
            }
            {
                showSetting && (
                    <View style={styles.containerBig}>
                        <Text style={{
                            ...styles.textStyleBoldSecond,
                            color: colors.text
                        }}>Accessibility Options</Text>
                        <Text style={{
                            ...styles.textStyleBodySecond,
                            color: colors.text
                        }}>Tap to toggle</Text>
                        <View style={styles.textStyleYesSecond}>
                            <PrimaryButton name='Screen Reader' />
                            <PrimaryButton name='Color Blind Mode' />
                            <PrimaryButton name='Dyslexia Font' />
                            <PrimaryButton name='Explanation Label' />
                            <PrimaryButton name='Continue' onPress={() => navigation.push('Intro')} />
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
        alignItems: 'center'
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
        gap: 14
    },
    //After it is false
    containerBigSecond: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    textStyleBoldSecond: {
        fontWeight: 'bold',
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
});