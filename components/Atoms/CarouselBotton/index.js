import { StyleSheet, View, Pressable, Text} from 'react-native';
import { useState, useEffect } from 'react';


export default function CarouselButton ({
    btnText='',
    color='',
    shadowColor=''
}){
    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        if(isPressed) {
            setTimeout(() => {
                setIsPressed(false);
            }, 500)
        }
    })

    return(
        <Pressable onPress={() => setIsPressed(true)} style={styles.container}>
            <View style={{
                ...styles.carouselButton,
                backgroundColor: color
            }}>
                <Text style={styles.carouselButtonText}>{btnText}</Text>
            </View>
            
            {
                isPressed ? <></> : <View style={{
                    ...styles.btnShadow,
                    backgroundColor: shadowColor,
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
        color: '#ffffff',
    },
}); 
