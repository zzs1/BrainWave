import { Image } from 'expo-image';
import { StyleSheet, View, Text} from 'react-native';
export default function Logo() {
    return(
        <View>
            
                <Image style={styles.image} source={require("../../../assets/Logo/logoblue.png")} alt="" width={90} height={95}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        

    }
})