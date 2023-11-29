import React from 'react';

import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { Image } from 'expo-image';

import { AppContext } from '../../../context/AppContext.js'

import WimmyThinking from '../WimmyThinking/index.js';
import SoundBlack from '../../../assets/Icons/sound-black.svg'
import SoundWhite from '../../../assets/Icons/sound-white.svg'

export default function DialogueBoxLower({
    title = '',
    desc = '',
    instuction = '',
    loading = false
}) {
    const { isDyslexic } = React.useContext(AppContext);
    const { colors, dark } = useTheme();

    const listAvailableVoices = async () => {
        let voice = await Speech.getAvailableVoicesAsync()
        console.log(voice)
    }

    React.useEffect(() => {
        listAvailableVoices();
    }, []);

    const WimmySpeak = () => {
        const speaking = `${desc}`;
        options = {
            voice: "com.apple.speech.synthesis.voice.Fred"
        }
        Speech.speak(speaking)
    }
    return (
        <View style={{
            ...styles.dialogue_box,
            borderColor: colors.dialogueBorder,
            backgroundColor: colors.dialogueBG
        }}>
            <Text style={{
                ...styles.title,
                color: colors.text,
                fontFamily: isDyslexic ? 'Lexend-Bold' : 'Poppins-Bold'
            }}>{title}</Text>
            {
                loading ? <WimmyThinking /> :
                    <Text style={{
                        ...styles.desc,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}>{desc}</Text>
            }
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingRight: 20
            }}>
                <Text style={{
                    ...styles.instuction,
                    color: colors.fadedText,
                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                }}>{instuction}</Text>
                <Pressable onPress={WimmySpeak}>
                    <Image 
                        source={dark ? SoundWhite : SoundBlack}
                        contentFit='contain'
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    dialogue_box: {
        width: 315,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 2,
        padding: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        fontSize: 22,
        margin: 0
    },
    desc: {
        fontSize: 18,
    },
    instuction: {
        fontSize: 16,
        color: '#696969',
        marginTop: 15
    }
})