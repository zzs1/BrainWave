import { StyleSheet, Text, View, Button,useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function DialogueBoxLower({
    title='',
    desc='',
    instuction=''
}) {
    const { colors } = useTheme();

    return(
        <View style={{
            ...styles.dialogue_box,
            borderColor: colors.dialogueBorder,
            backgroundColor: colors.dialogueBG
        }}>
            <Text style={{
                ...styles.title,
                color: colors.text
            }}>{title}</Text>
            <Text style={{
                ...styles.desc,
                color: colors.text
            }}>{desc}</Text>
            <Text style={{
                ...styles.instuction,
                color: colors.fadedText
            }}>{instuction}</Text>
        </View>
    )
    }
    const styles = StyleSheet.create({
        dialogue_box:{
            width: 315,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 2,
            padding: 15
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
        },
        desc: {
            fontSize: 18,
            marginTop: 20
        },
        instuction: {
            fontSize: 16,
            color: '#696969',
            marginTop: 15
        }
    })