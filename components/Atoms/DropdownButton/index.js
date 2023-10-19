import { StyleSheet, View, Pressable } from 'react-native';

export default function DropdownButton(){
    return(
        <View style={styles.container}>
            <View>
                <Pressable style={styles.drppDownButton}>
                    <View style={styles.drppDownButtonLine}></View>
                    <View style={styles.drppDownButtonLine}></View>
                </Pressable>
        
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    drppDownButton: {
       display: 'flex',
       flexDirection: 'column',
       gap: 5,
    },
    drppDownButtonLine: {
        backgroundColor: '#3366FF',
        width: 40,
        height: 4,
        borderRadius: 10,
        transform: [{rotate: '45deg'}],
    }
}); 