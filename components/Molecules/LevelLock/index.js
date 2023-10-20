import { Image } from "expo-image";
import { View } from "react-native";
import { StyleSheet, Text} from 'react-native';

export default function LevelLock({}) {
    return(
        <View style={styles.level_lock}>
        
                <Image style={styles.image} source={"../../assets/LevelLock/Lock.png"} alt="" width={20} height={20}/> 
            
        </View>
    )
}
const styles = StyleSheet.create({
    level_lock:{
        height:112,
        width: 107,
        borderRadius:60,
        backgroundColor: '#0C7BDC'

      
    }
    })