import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

export default function AccountPageStart({navigation}){

    // function timeMode(){
    //     console.log(mode);
    // }


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
                <Text style={styles.title}>Let’s set some goals!</Text>
                <Text style={styles.texts}>How long would you like to practice in a day?</Text>
            </View>


        <View style={styles.buttons}>

                <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                    <PrimaryButton name="Beginner (5mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Beginner"/>
                </Pressable>


                <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                    <PrimaryButton name="Intermediate (10mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Intermediate"/>
                </Pressable>

                <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                    <PrimaryButton name="Advanced 20mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Advanced"/>
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
    lineHeight: 30,
    paddingTop: 10,
},
accountStartTexts: {
    height:183,
    width: 292,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginTop: 10,
},
accountStartPageBody: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
},
buttons: {
    marginTop: 10,
    gap: 15,
}
});
