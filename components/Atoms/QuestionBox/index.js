import { StyleSheet, View, Text} from 'react-native';

export default function QuestionBox({}) {
    return(
        <View>
            <View style={styles.box}></View>
        </View>
    )
}
const styles = StyleSheet.create({
box:{
    height:67,
    width: 315,
    borderRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9'
}
})