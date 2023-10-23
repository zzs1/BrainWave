import { StyleSheet } from "react-native"
import { Pressable, Text } from "react-native"

export default function NextButton() {
    return(
        <>
        <Pressable style={styles.next_button}>
            <Text style={styles.next_button_text}>Next</Text>

        </Pressable>
        </>
    )
}
const styles =  StyleSheet.create({
    next_button: {
        width: 330,
        height: 70,
        backgroundColor: '#0C7BDC',
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',

      

    },
    next_button_text:{
        fontSize:25,
        color: 'white'
    }

 
});