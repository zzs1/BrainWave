import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function ExitButton (){

    return(
        <View style={styles.container}>
                <View>
                    <Pressable style={styles.exitButton}>
                        <View style={styles.exitButtonLine1}></View>
                        <View style={styles.exitButtonLine2}></View>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    exitButtonLine1: {
        backgroundColor: 'white',
        display: 'block',
        width: 30,
        height: 6,
        borderRadius: 10,
        transform: [{rotate: '45deg'}],
    },
    exitButtonLine2: {
        backgroundColor: 'white',
        display: 'block',
        width: 30,
        height: 6,
        borderRadius: 10,
        transform: [{rotate: '-45deg'}],
    },
    // exitButton: {
    //     display: inline-block;
    //     padding:25px 0;
      
    // }
}); 
