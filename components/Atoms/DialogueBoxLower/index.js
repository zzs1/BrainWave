import { StyleSheet, Text, View, Button,useColorScheme } from 'react-native';
export default function DialogueBoxLower() {
    return(
        <View>
        
            <View style={styles.dialogue_box}></View>
    
        </View>
    )
    }
    const styles = StyleSheet.create({
        dialogue_box:{
            height:67,
            width: 315,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderColor:'#C8C8C8',
            borderWidth: 2,
            backgroundColor: '#F9F9F9'
        }
        })