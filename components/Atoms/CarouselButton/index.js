import { StyleSheet, View, Pressable, Text} from 'react-native';
import { useState, useEffect } from 'react';
import { useTheme } from '@react-navigation/native';


export default function CarouselButton ({
    btnText='',
}){
    const { colors } = useTheme();

    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        if(isPressed) {
            setTimeout(() => {
                setIsPressed(false);
            }, 500)
        }
    })

    return(
        <View onPress={() => setIsPressed(true)} style={styles.container}>
            <View style={{
                ...styles.carouselButton,
                backgroundColor: colors.primaryBtnColor
            }}>
                <Text style={{
                    ...styles.carouselButtonText,
                    color: colors.btnText
                }}>{btnText}</Text>
            </View>
            
            {
                isPressed ? <></> : <View style={{
                    ...styles.btnShadow,
                    backgroundColor: colors.primaryBtnShadow
                }}></View> 
            }             
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 70
    },
    carouselButton: {
        width: 185,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnShadow: {
        width: 185,
        height: 60,
        borderRadius: 10,
        marginTop: -50,
        zIndex: -1
    },
    carouselButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
}); 
