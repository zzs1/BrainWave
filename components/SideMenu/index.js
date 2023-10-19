import { StyleSheet, Text, View, Button,useColorScheme, TextInput, Image } from 'react-native';
import ExitButton from '../ExitButton';
import Home from "../../assets/sideMenu/Home.svg"
import { SvgUri } from 'react-native-svg';

export default function SideMenu() {
    return(
        <View style={styles.sideMenuBody}>
           {/* <ExitButton /> */}
             <View style={styles.section} >
                <Image 
                source={require('../../assets/sideMenu/home.png')} 
                style={styles.sideMenuLogo} 
                width={30}
                height={30}/>
                <Text style={styles.sideMenuFont}>Home</Text>
             </View>
             <View style={styles.section}>
                 <Text style={styles.sideMenuFont}>Puzzle Maps</Text>
             </View>
             <View style={styles.section}>
                 <Text style={styles.sideMenuFont}>Account</Text>     
             </View>
             <View style={styles.section}>
                 <Text style={styles.sideMenuFont}>Settings</Text>     
             </View>

             <Image 
                source={require('../../assets/sideMenu/logo-white.png')} 
                style={styles.imageLogo} 
                width={95}
                height={90}/>
        </View>
    )
}
const styles = StyleSheet.create({
    sideMenuFont:{
        fontSize: 20,
        color: 'white'
    },
    sideMenuBody: {
        width: 270,
        height: 742,
        backgroundColor: '#0C7BDC',
    },
    sideMenuLogo: {
        
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
    }
})