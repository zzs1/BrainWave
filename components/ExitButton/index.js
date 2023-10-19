import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function ExitButton (){

    return(
        <View style={styles.container}>
                <View>
                    <Pressable style={styles.exitButton}>
                        <View style={styles.exitButtonLine}></View>
                        <View style={styles.exitButtonLine}></View>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    menuButton: {
       transform: [{ rotate: '45deg'}]

    },
    exitButtonLine: {
        backgroundColor: '#3366FF',
        width: 40,
        height: 4,
        borderRadius: 10,
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: [{ translateY: -50}],
    }
}); 
