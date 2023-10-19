import { StyleSheet, Text, View, Button,useColorScheme, TextInput, Image } from 'react-native';

export default function PuzzleMapDropdown(){
    return(
        <>
                <Pressable style={styles.section}>
                    <Image 
                    source={require('../../../assets/sideMenu/map.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Puzzle Maps</Text>
                </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    sideMenuFont:{
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
    },
    sideMenuIcon: {
        paddingLeft: 20,
    },
})