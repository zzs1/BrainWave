import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function MenuButton (){

    return(
        <View style={styles.container}>
                <View>
                    <Pressable style={styles.menuButton}>
                        <View style={styles.menuButtonLine}></View>
                        <View style={styles.menuButtonLine}></View>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    menuButton: {
       display: 'flex',
       flexDirection: 'column',
       gap: 5,

    },
    menuButtonLine: {
        backgroundColor: '#3366FF',
        width: 40,
        height: 4,
        borderRadius: 10,
    }
}); 
