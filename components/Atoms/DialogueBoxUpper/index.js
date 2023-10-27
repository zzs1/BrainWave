import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function DialogueBoxUpper({
    hasTitle={},
    title='',
    interestingText=''
}) {
    const { colors } = useTheme();

    return(
        <View style={styles.container}>
            <View style={{
                ...styles.dialogue_box,
                backgroundColor: colors.dialogueBG,
                borderColor: colors.dialogueBorder
            }}>
                {
                    hasTitle ?  <Text style={{
                        ...styles.title,
                        color: colors.text
                    }}>{title}</Text> : <></>
                }
                <Text style={{
                    ...styles.text,
                    color: colors.text
                }}>{interestingText}</Text>
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
            borderWidth: 3,
            padding: 20
        },
        text: {
            fontSize: 20
        },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20
        }
        })