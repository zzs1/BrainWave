import { StyleSheet, View, Pressable } from 'react-native';

export default function DropdownButton(){
    return(
        <View style={styles.container}>
            <View>
                <Pressable style={styles.drppDownButton}>
                    <View style={styles.drppDownButtonLine1}></View>
                    <View style={styles.drppDownButtonLine2}></View>
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
    drppDownButtonLine1: {
        backgroundColor: '#3366FF',
        width: 40,
        height: 4,
        borderRadius: 10,
        transform: [{rotate: '45deg'}],
    },
    drppDownButtonLine2: {
        backgroundColor: '#3366FF',
        width: 40,
        height: 4,
        borderRadius: 10,
        transform: [{rotate: '315deg'}],
    },
    
}); 