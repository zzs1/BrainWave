import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProgressBar from '../components/Atoms/DialogueBar';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import DialogueBoxUpper from '../components/Atoms/DialogueBoxUpper';
import WimmyAnimated from '../components/Atoms/WimmyAnimated';

import { Dialogue } from '../data/introDialogue';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Intro({ navigation }) {
    const [line, setLine] = useState(Dialogue);
    const [number, setNumber] = useState(0);

    const handleButtonPress = () => {
        if (number === line.length - 1) {
            navigation.push('Home');
        }
        setNumber(number + 1);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar step={number + 1} num={line.length} />
            {/* <View style={styles.imageLogo} >
                <Image source={require('../assets/Icons/wimmy.png')}/>
                    <DialogueBoxUpper interestingText={line[number]} hasTitle={false}/>
            </View> */}
            <View style={styles.imageLogo} >
                <WimmyAnimated />
                <DialogueBoxUpper interestingText={line[number]} hasTitle={false}/>
            </View>
            <PrimaryButton name='Continue' onPress={handleButtonPress}/>
                        {/* <Image
                           source={require('../assets/Icons/Clouds.png')}
                           style={styles.cloudsOne}
                           width={270}
                           height={188} 
                        />
                        <Image
                           source={require('../assets/Icons/Clouds.png')}
                           style={styles.cloudsTwo}
                           width={270}
                           height={188} 
                        /> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight,
        width: screenWidth,
        paddingBottom: 100,
        paddingTop: 120,
    },
    imageLogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: -100,
        position: 'absolute',
        top: 300
    }, cloudsOne: {
        position: "absolute",
        top: 0,
    },
    cloudsTwo: {
        position: "absolute",
        left: 270,
        top: 50,
    }
    
});
