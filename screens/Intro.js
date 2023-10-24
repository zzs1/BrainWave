import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../components/Atoms/ProgressBar';
import PrimaryButton from '../components/Atoms/PrimaryButton';
import DialogueBoxUpper from '../components/Atoms/DialogueBoxUpper';

export default function Intro({navigation}) {

    const [begin, setBegin] = useState(true);
    const [end, setEnd] = useState(false);
    const [endthree, setEndThree] = useState(false);
    const [number, setNumber] = useState(1);


    const handleButtonPress = () => {
        setNumber(number + 1);
    
        if (number === 1) {
          setBegin(true);
          setEnd(false);
          setEndThree(false)
        } else if (number === 2) {
          setBegin(false);
          setEnd(true);
          setEndThree(false);
        } else if (number === 3) {
          setBegin(false);
          setEnd(false);
          setEndThree(true);
        }else if (number === 4) {
            navigation.push('Home');
        }
      };

    var colorScheme = useColorScheme();

    useEffect(() => {
      console.log(colorScheme);
    }, [colorScheme])

    return (
        <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
            <View style={styles.bigContainer}>
                <View style={styles.progressStyle}>
                    <ProgressBar/>
                </View>
                <View style={styles.imageLogo} >
                    <Image source={require('../assets/Icons/wimmy.png')} style={styles.whale} />
                    {
                        begin && (
                            <View style={styles.dialogueBox}>
                        <DialogueBoxUpper interestingText= 'Hi There!'/>
                    </View>
                        )
                    }
                    {
                        end && (
                            <View style={styles.dialogueBox}>
                        <DialogueBoxUpper interestingText= 'Im Wimmy the Whale.'/>
                    </View>
                        )
                    }
                      {
                        endthree && (
                            <View style={styles.dialogueBox}>
                        <DialogueBoxUpper interestingText= 'I will be guiding you along as you learn..'/>
                    </View>
                        )
                    }
                    <Pressable onPress={handleButtonPress} style={styles.primaryButton}>
                        <PrimaryButton name='Continue' colorBackground='#0C7BDC' shadow='#005AB5'/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    bigContainer: {
        display: 'flex',
        gap: 100,
    },
    progressStyle: {
        marginTop: 100,
    },
    imageLogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogueBox: {
        marginBottom: 200
    },
    whale: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    primaryButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightContainer: {
      backgroundColor: '#FFFFFF',
    },
    darkContainer: {
      backgroundColor: '#584b9d',
    },
    lightThemeText: {
      color: '#FFFFFF',
    },
    darkThemeText: {
      color: '#FFFFFF',
    }
  });
