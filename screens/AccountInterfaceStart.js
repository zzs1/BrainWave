import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import NavBar from "../components/Molecules/NavBar";
import * as ImagePicker from 'expo-image-picker';

import WimmyPopup from "../components/Molecules/WimmyPopup"
import GoalBox from "../components/Molecules/GoalBox";
import { useState } from "react";

export default function AccountPageStart({ navigation }) {
    const [userName, setUserName] = useState('User Name')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.accountStartPageBody}>

                <View style={styles.avartar} >
                    <Image
                        source={require('../assets/Icons/userEdit.png')}
                        style={styles.wimmyPic}
                        width={210}
                        height={210} />
                </View>

        <View style={styles.userNameSection}>
         <Text style={styles.userName}>{userName}</Text>
            <Image 
                source={require('../assets/Icons/editBlack.png')}
                style={styles.editIcon}
                width={20}
                height={20}
            />
        </View>

                <GoalBox prog={60} level="Intermediate" goal="15" time="8"/>

                <View style={styles.wimmyTail}>
                    <Image source={require('../assets/Icons/wimmyTail.png')} />
                </View>
            </View>
            <NavBar color='#005AB5' navigation={navigation} />
            <WimmyPopup
                title='WIMMY SAYS...'
                desc='Here is the interface for your account. You can keep track of you progress and make changes here!'
                instuction='Tap to continue.'
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
    },
    avartar: {
        alignItems: 'center',
        paddingTop: 40,
    },
    userName: {
        textDecorationLine: 'underline',
        fontSize: 28,
    },
    userNameSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        marginBottom: 50
    },
    editIcon: {
        marginLeft: 10,
    },
    accountStartTexts: {
        height: 250,
        width: 292,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#C8C8C8',
        borderWidth: 2,
        backgroundColor: '#F9F9F9',
        marginTop: 80,
        textAlign: 'left',
        paddingTop: 20,
        paddingLeft: 20,

    },
    accountStartPageBody: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    level: {
        fontSize: 20,
    },
    time: {
        fontSize: 16,
        paddingLeft: 10,
    },
    message: {
        fontSize: 20,
        paddingTop: 20,
        lineHeight: 30,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }
});
