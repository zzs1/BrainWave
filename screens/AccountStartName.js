import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useState } from "react";


const [userName, setUserName] = useState('');

function handleNameChange(text){
setUserName(text);
}

function handleSubmit(){
console.log(userName);
};


export default function AccountPageStart(){


return(
        <>
        <View style={styles.accountStartPageBody}>
            <View>
                <Image
                source={require('../../../assets/Icons/wimmy.png')}
                style={styles.wimmyPic}
                width={270}
                height={188}/>
            </View>


            <View style={styles.accountStartTexts} >
                <Text style={styles.texts}>What is your name?</Text>
            </View>


            <TextInput
                style={styles.userNameInput}
                placeholder = "Type your name..."
                onChangeText = {handleNameChange}
                value = {userName}
            />


            <View style={styles.accountStartButton}>
              <PrimaryButton
                primaryButtonText="SET NAME"
                onPress = {handleSubmit}/>
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
borderTopLeftRadius: 20,
borderBottomRightRadius: 20,
borderTopRightRadius: 20,
borderColor:'#C8C8C8',
borderWidth: 2,
backgroundColor: '#F9F9F9'
},
accountStartPageBody: {
display:'flex',
flexDirection: 'column'
},
accountStartButton: {
marginTop: 100,
},
userNameInput: {
width: 280,
height: 50,
borderColor: '#A4A4A4',
borderWidth: 1.5,
backgroundColor: '#E9E9E9',
}
});
