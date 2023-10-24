import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useState, useEffect } from 'react';

export default function AccessibilityPrompt({navigation}) {
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
                        <Text style={styles.textStyleBold}>Accessibility Options</Text>
                        <Text style={styles.textStyleBody}>Would you like to explore accessibility options for visual impairment?</Text>
                        <Text style={styles.textStyleNote}>Note: You can edit your preferences at any time.</Text>
                        <View style={styles.textStyleYes}>
                            <Pressable onPress={handleYesButtonPress} >
                                <PrimaryButton name='Yes'colorBackground='#0C7BDC' shadow='#005AB5'></PrimaryButton>
                            </Pressable>
                            <Pressable onPress={() => navigation.push('Intro')}>
                                <PrimaryButton name='No' colorBackground='#0C7BDC' shadow='#005AB5'/>
                            </Pressable>
                        </View>
                        <StatusBar style="auto" />
                    </View>
                )
            }
            {
                showSetting && (
                    <View>
                        <Text style={styles.textStyleBoldSecond}>Accessibility Options</Text>
                        <Text style={styles.textStyleBodySecond}>Tag to toggle</Text>
                        <View style={styles.textStyleYesSecond}>
                            <PrimaryButton name='Screen Reader' colorBackground='#747474' shadow='#444444'/>
                            <PrimaryButton name='Color Blind Mode'colorBackground='#747474' shadow='#444444'/>
                            <PrimaryButton name='Dyslexia Font' colorBackground='#747474' shadow='#444444'/>
                            <PrimaryButton name='Explanation Label' colorBackground='#747474' shadow='#444444'/>
                            <Pressable onPress={() => navigation.push('Intro')}>
                                <PrimaryButton name='Continue' colorBackground='#0C7BDC' shadow='#005AB5'/>
                            </Pressable>
                    </View>
                    <StatusBar style="auto" />
                </View>
                )
            }

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerBig: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyleBold: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center', 
        marginTop: 74,
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
        marginTop: 283,
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