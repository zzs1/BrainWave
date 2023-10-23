import { StyleSheet, View, Text} from 'react-native';
export default function SubjectBox({}) {
    return(
        <View>
            <View style={styles.subject_box}></View>

        </View>
    )
}
const styles = StyleSheet.create({
    subject_box:{
        height:327,
        width: 230,
        borderRadius: 10,
        borderWidth: 3,
        borderColor:'#D1BD8C',
        backgroundColor: '#DBA932',
      
    }
    })