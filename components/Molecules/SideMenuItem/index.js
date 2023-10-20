import { StyleSheet, Text, View, Button,useColorScheme, TextInput, Image } from 'react-native';
import ExitButton from '../ExitButton';


export default function SideMenu() {
    return(
        <View style={styles.sideMenuBody}>
          <View style={styles.exitMenuIcon}>
            <ExitButton />
          </View>
            <Text style={styles.sections} >
                <View style={styles.section} >
                    <Image 
                    source={require('../../../assets/sideMenu/home.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Home</Text>
                </View>
                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/sideMenu/map.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Puzzle Maps</Text>
                </View>
                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/sideMenu/acount.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Account</Text>     
                </View>
                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/sideMenu/setting.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Settings</Text>     
                </View>
            </Text>
        <View  style={styles.sideMenuLogo} >
                <Image 
                source={require('../../../assets/sideMenu/logo-white.png')} 
                style={styles.imageLogo} 
                width={95}
                height={90}/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    sideMenuFont:{
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
    },
    sideMenuBody: {
        width: 270,
        height: 742,
        borderRadius: 40,
        backgroundColor: '#0C7BDC'
    },
    sideMenuLogo: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 170,
    },
    sideMenuIcon: {
        paddingLeft: 20,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: 30,
    },
    exitMenuIcon: {
        paddingTop: 50,
        paddingLeft: 23,
    },
    sections: {
        paddingTop: 30,
    }
})