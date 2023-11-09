import { StyleSheet, View, Text, TextInput} from 'react-native';

export default function QuestionBox({ text}) {
    return(
        <View>
            <TextInput style={styles.box}
            value={text}
            multiline={true}
            placeholder=''></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
box:{
    minHeight:67,
    height: 'auto',
    width: 315,
    borderRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 10,
    paddingBottom:10,
    fontSize: 16,
    textAlign:'auto',
    paddingLeft: 10,
    paddingRight: 10
    
}
})