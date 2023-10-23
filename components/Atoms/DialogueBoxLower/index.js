import { StyleSheet, Text, View, Button,useColorScheme } from 'react-native';
export default function DialogueBoxLower({
    title='',
    desc='',
    instuction=''
}) {
    return(
        <View style={styles.dialogue_box}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
            <Text style={styles.instuction}>{instuction}</Text>
        </View>
    )
    }
    const styles = StyleSheet.create({
        dialogue_box:{
            width: 315,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderColor:'#C8C8C8',
            borderWidth: 2,
            backgroundColor: '#F9F9F9',
            padding: 15
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#1E1E1E'
        },
        desc: {
            fontSize: 18,
            color: '#1E1E1E',
            marginTop: 20
        },
        instuction: {
            fontSize: 16,
            color: '#696969',
            marginTop: 15
        }
    })