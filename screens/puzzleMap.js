import { Image } from "expo-image"
import { View, Text, Pressable } from "react-native"
import { StyleSheet } from "react-native"
import NavBar from "../components/Molecules/NavBar"
export default function PuzzleMap() {
    return(
        <>
        <View style={styles.navbar}>
        <NavBar />
        </View>
        <View style={styles.main_container}>
        <View>
        <Text style={styles.text}>LOGIC MAP</Text>
        </View>
        {/* <View>
        <Image style={styles.level_lock_two} source={require("../assets/levelLocker/LevelLockBlack.png")} alt="" width={107} height={112}/> 
        </View> */}
        <View>
        <View>
        <Image style={styles.level_lock_two} source={require("../assets/levelLocker/LevelLockBlack.png")} alt="" width={107} height={112}/>
        <View style={styles.line_one} ></View>
        <Image style={styles.level_lock} source={require("../assets/levelLocker/LevelLockBlack.png")} alt="" width={107} height={112}/> 
        </View>
        <View style={styles.line_two} ></View>
        <View>
            <Pressable>
            <Image style={styles.level1_vector} source={require("../assets/level1/Level1.png")} height={121} width={176}/>
            </Pressable>
        </View>
        </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    navbar:{
        marginTop: 24

    },
    main_container:{
        height: '100vh',
        marginTop: 40,
    },
    
    level_lock:{
        // marginTop:100,
        marginLeft: 50
    },
    text:{
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30
    },
    level1_vector:{
        marginLeft: 150,
        // marginTop: 30
        marginBottom: 80
    },
    level_lock_two:{
        marginLeft: 190,
        // marginTop:150,

    },
    line_one:{
        width:190,
        height: 15,
        backgroundColor:'#343434',
        transform:[{rotate: '-55deg'}],
        marginLeft: 60,
        marginTop: 40

    },
    line_two:{
        width:190,
        height: 15,
        backgroundColor:'#343434',
        transform:[{rotate: '55deg'}],
        marginLeft: 60,
        marginTop: 60
    }
})