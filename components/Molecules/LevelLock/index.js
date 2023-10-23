import { Image } from "expo-image";
import { View } from "react-native";
import { StyleSheet, Text} from 'react-native';

export default function LevelLock({}) {
    return(
        <View>
        
                <Image style={styles.image} source={require("../../../assets/levelLocker/LevelLockBlue.png")} alt="" width={107} height={112}/> 
            
        </View>
    )
}
const styles = StyleSheet.create({
    level_lock:{
    
        

      
    }
    })