import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Image } from 'expo-image';
import PuzzleMapOption from './PuzzleMapOption';

/* SVGs */
// import MenuXButton from '../assets/menu-x.svg';
// import HomeButton from '../assets/home.svg';
// import PuzzleMapButton from '../assets/puzzle-map.svg';
// import AccountButton from '../assets/account.svg';
// import SettingButton from '../assets/settings.svg';



export default function SideMenu({navigation}) {

    return (
        <View style={styles.container}>   
            {/* <MenuXButton /> */}

            <View style={styles.homeXSection}>
                <Image 
                style={styles.image}
                source="../assets/homeX.png"
                contentFit="cover"
                transition={1000}
                width={50}
                height={50}
                
                />
            </View>

        <View style={styles.iconSections}>
            <View style={styles.section}>
                <Image 
                    style={styles.image}
                    source="../assets/home.png"
                    contentFit="cover"
                    transition={1000}
                    width={50}
                    height={50}
                />
                <Text style={styles.sideMenuFont}>Home</Text>
             </View>

             <View style={styles.section}>
                {/* <PuzzleMapButton/> */}
                <Image 
                style={styles.image}
                source="../assets/map.png"
                contentFit="cover"
                transition={1000}
                width={50}
                height={50}
                />
                <Text style={styles.sideMenuFont}>Puzzle Maps</Text>
                {/* <PuzzleMapOption /> */}
             </View>

             <View style={styles.section}>
                {/* <AccountButton/> */}
                <Image 
                style={styles.image}
                source="../assets/user.png"
                contentFit="cover"
                transition={1000}
                width={50}
                height={50}
            />
                <Text style={styles.sideMenuFont}>Account</Text>
             </View>


             <View style={styles.section}>
                {/* <SettingButton /> */}
                <Image 
                style={styles.image}
                source="../assets/setting.png"
                contentFit="cover"
                transition={1000}
                width={50}
                height={50}
                />
                <Text style={styles.sideMenuFont}>Settings</Text>
             </View>


        </View>
            
             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 270,
        height: '100%',
        backgroundColor: '#0C7BDC'
        
    },
    sideMenuFont: {
        fontSize: 20,
        color: 'white',
    },
    section: {
        flexDirection: 'row',
        gap: 20,
        paddingLeft: 50
    },
    iconSections: {
        gap: 50
    }
});
