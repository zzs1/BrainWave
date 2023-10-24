import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

export default function AccountPageStart({navigation}){


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
                <Text style={styles.title}>You’re All set!</Text>
                <Text style={styles.texts}>Time to improve your critical thinking! Enjoy your stay!</Text>
            </View>


        <View style={styles.startButton}>
                <Pressable onPress={() => navigation.push('AccountStartPage')}>
                    <PrimaryButton name="CONTINUE!" colorBackground="#0C7BDC" shadow="#005AB5"/>
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
    lineHeight: 30,
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
    marginTop: 100,
},
buttonTexts: {
    fontSize: 22,
    fontWeight: 'bold',
},
startButton: {
    paddingTop: 180,
}
});
