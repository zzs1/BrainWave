import { StyleSheet, Text, View, Button,useColorScheme, TextInput, Image } from 'react-native';
import ExitButton from '../ExitButton';

export default function SubMenu() {
    return(
        <View style={styles.subMenuBody}>
            <Text style={styles.sections} >
                <View style={styles.section}>
                    <Image 
                    source={require('../../assets/subMenu/lamp.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Logic</Text>
                </View>
                <View style={styles.section}>
                    <Image 
                    source={require('../../assets/subMenu/number.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Numbers</Text>     
                </View>
                <View style={styles.section}>
                    <Image 
                    source={require('../../assets/subMenu/pattern.png')} 
                    style={styles.sideMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.sideMenuFont}>Patterns</Text>     
                </View>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    sideMenuFont:{
        fontSize: 16,
        color: '#0C7BDC',
        paddingLeft: 20,
    },
    sideMenuBody: {
        width: 176,
        height: 110,
        borderRadius: 10,
        backgroundColor: 'white'
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
  
    sections: {
        paddingTop: 30,
    }
})