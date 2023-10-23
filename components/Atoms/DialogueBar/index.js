import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native'

export default function DialogueBar({}) {
    return(
        
        <>

        <View style={styles.dialogue_container}>
        <View style={styles.dialogue_bar_1}></View>
        <View style={styles.dialogue_line}></View>
        <View style={styles.dialogue_bar}></View>
        <View style={styles.dialogue_line}></View>
        <View style={styles.dialogue_bar}></View>
        <View style={styles.dialogue_line}></View>
        <View style={styles.dialogue_bar}></View>
        </View>
       
        </>

       
       
    )
}
const styles = StyleSheet.create({
    dialogue_container:{
        display:'flex',
        flexDirection: 'row',
        // gap: 45,
        width: 195,
        height:15,
    },
    dialogue_bar_1:{
        height:15,
        width:15,
        borderRadius:50,
       backgroundColor: '#005AB5',

    },
    dialogue_bar:{
     height:15,
     width:15,
     borderRadius:50,
    backgroundColor: '#EADBB4',
   
    },
    dialogue_line:{
        width:45,
        height: 5,
        backgroundColor: '#EADBB4',
        marginTop: 5

    }
    })