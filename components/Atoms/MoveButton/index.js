import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import { Image } from 'expo-image';

import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native'

import ArrowLeft from '../../../assets/Icons/arrowLeft.png'
import ArrowRight from '../../../assets/Icons/arrowRight.png'

export default function MoveButton ({
    direction='',
    onPress={}
}){
    const { colors } = useTheme ();

    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        if(isPressed) {
            setTimeout(() => {
                setIsPressed(false);
            }, 500)
        }
    })
    return(
        <Pressable onPress={() => {
            onPress();
            setIsPressed(true);
        }} style={styles.container}>
            <View style={{
                ...styles.btn,
                backgroundColor: colors.primaryBtnColor
            }}>
                <Image style={styles.arrow} source={direction === 'right' ? ArrowRight : ArrowLeft}/>
            </View>
            {
                isPressed ? <></> : <View style={{
                    ...styles.btnShadow,
                    backgroundColor: colors.primaryBtnShadow
                }}></View>
            }
        </Pressable>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 70
    },
    btn: {
        width: 70,
        height: 60,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnShadow: {
        width: 70,
        height: 60,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50,
        zIndex: -1
    },
    arrow: {
        width: 30,
        height:30
    }
}); 
