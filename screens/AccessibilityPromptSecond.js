import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useState, useEffect } from 'react';

export default function AccessibilityPromptSecond({navigation}) {
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBig}>
                <Text style={styles.textStyleBold}>Accessibility Options</Text>
                <Text style={styles.textStyleBody}>Tag to toggle</Text>
                <View style={styles.textStyleYes}>
                   <PrimaryButton name='Screen Reader' colorBackground='#747474'/>
                   <PrimaryButton name='Color Blind Mode'colorBackground='#747474'/>
                   <PrimaryButton name='Dyslexia Font' colorBackground='#747474'/>
                   <PrimaryButton name='Explanation Label' colorBackground='#747474'/>
                </View>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 281,
      
    },
    containerBig: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyleBold: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center', 
        marginTop: 104,
        marginBottom: 25,
    },
    textStyleBody: {
        fontWeight: 'normal',
        fontSize: 20,
        textAlign: 'center', 
        marginBottom: 25,
    },
    textStyleNote: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center', 
        width: 255
    },
    textStyleYes: {
        marginTop: 40,
        gap: 14
    },
});