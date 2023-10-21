import { StyleSheet, Text, View, Button,useColorScheme, TextInput, Image } from 'react-native';

export default function SubMenu() {
    return(
        <View style={styles.subMenuBody}>

                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/subMenu/lamp.png')} 
                    style={styles.subMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.subMenuFont}>Logic</Text>
                </View>

                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/subMenu/number.png')} 
                    style={styles.subMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.subMenuFont}>Numbers</Text>     
                </View>

                <View style={styles.section}>
                    <Image 
                    source={require('../../../assets/subMenu/pattern.png')} 
                    style={styles.subMenuIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.subMenuFont}>Patterns</Text>     
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    subMenuFont:{
        fontSize: 16,
        color: '#0C7BDC',
        paddingLeft: 20,
    },
    subMenuBody: {
        width: 176,
        height: 110,
        borderRadius: 10,
        backgroundColor: '#white',
        display: 'flex',
        flexDirection: 'column',
        gap: -30,
    },
    SubMenu: {
        paddingLeft: 20,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: 30,
    },
    subMenuIcon: {

    },

})