import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable} from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import  React, { useState } from "react";
import { useTheme } from '@react-navigation/native'

const [userName, setUserName] = useState("");

function handleNameChange(text){
    setUserName(text);
}

function handleSubmit(onSave){
    onSave(userName);
}




export default function AccountPageStart({navigation}){
const { colors } = useTheme()

return(
        <>
        <View style={styles.accountStartPageBody}>
            <View>
                <Image
                source={require('../assets/Icons/wimmy.png')}
                style={styles.wimmyPic}
                width={270}
                height={188}/>
            </View>


            <View style={styles.accountStartTexts} >
                <Text style={styles.texts}>What is your name?</Text>
            </View>


            <TextInput
                style={{
                    ...styles.userNameInput,
                    borderColor: colors.inputBorder,
                    backgroundColor: colors.inputBG
                }} 
                placeholder = "Type your name..."
                onChangeText = {handleNameChange}
                value = {userName}
            />


            <View style={styles.accountStartButton}>

                <Pressable style={styles.startButton} onPress={() => {navigation.push('AccountStartAvater'); handleSubmit();}}>
                    <PrimaryButton name="SET NAME" colorBackground="#0C7BDC" shadow="#005AB5"/>
                </Pressable>
            </View>


    </View>
</>
);
}


const styles = StyleSheet.create({
title: {
    fontSize: 22,
    fontWeight: 'bold',
},
texts: {
    fontSize: 20,
},
accountStartTexts: {
    height:67,
    width: 292,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
},
accountStartPageBody: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
},
accountStartButton: {
    marginTop: 180,
},
userNameInput: {
    width: 280,
    height: 50,
    borderRadius: 6,
    borderWidth: 1.5,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
}
});
