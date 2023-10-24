import { StyleSheet, Text, View, Button,useColorScheme } from 'react-native';
export default function DialogueBoxUpper({interestingText}) {
    return(
        <View style={styles.container}>
            <View style={styles.dialogue_box}>
                <Text style={styles.text}>{interestingText}</Text>
            </View>
        </View>
    )
    }
    const styles = StyleSheet.create({
        conatiner: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dialogue_box:{
            height:'auto',
            width: 315,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderColor:'#C8C8C8',
            borderWidth: 2,
            backgroundColor: '#F9F9F9',
            padding: 20
        },
        text: {
            fontSize: 20
        }
        })