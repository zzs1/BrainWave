import { StyleSheet, Text, View, Button,useColorScheme, TextInput } from 'react-native';
export default function InputBox() {
    return(
        <View>
            <TextInput style={styles.input_box} type="text"/> 
        </View>
    )
}
const styles = StyleSheet.create({
    input_box:{
        height:50,
        width: 280,
        borderRadius: 6,
        borderColor:'#C8C8C8',
        borderWidth: 2,
        backgroundColor: '#F9F9F9'
    }
    })