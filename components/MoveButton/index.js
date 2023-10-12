import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function MoveButton ({navigation}){

    const moveButtonText = "→";

    return(
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
                <View>
                    <Pressable style={styles.moveButton} onPress= {() => navigation.push('/')}>
                        <Text style={styles.moveButtonArrow}>{moveButtonText}</Text>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    moveButton: {
        width: 70,
        height: 60,
        backgroundColor: '#0C7BDC',
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#b4b4b4',
        shadowOffset: {
            width: 5, 
            height: 5,
        },
        shadowRadius: 3,
        shadowOpacity: 0.9,
        elevation: 4,
    },
    moveButtonArrow: {
        fontSize: 30,
        color: '#FFFFFF'
    },

}); 
