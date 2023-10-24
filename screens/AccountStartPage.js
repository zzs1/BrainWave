import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import { React, useState } from "react";
import PrimaryButton from '../components/Atoms/PrimaryButton';

export default function AccountPageStart({navigation}){


return(

    <View style={styles.accountStartPageBody}>
                    <View>
                        <Image
                        source={require('../assets/Icons/wimmy.png')}
                        style={styles.wimmyPic}
                        width={270}
                        height={188}/>
                    </View>


                        <View style={styles.accountStartTexts} >
                            <Text style={styles.title}>Let’s set up your account!</Text>
                            <Text style={styles.texts}>An account will allow you to track your progress and share with friends!</Text>
                        </View>
                
                <Pressable style={styles.startButton} onPress={() => navigation.push('AccountStartName')}>
                    <PrimaryButton name="START" colorBackground="#0C7BDC" shadow="#005AB5"/>
                </Pressable>
         

        </View>
        
        );
}


const styles = StyleSheet.create({
title: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
},
texts: {
    paddingTop: 5,
    fontSize: 20,
    lineHeight: 30,
},
accountStartTexts: {
    height:235,
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
startButton: {
    paddingTop: 150,
}

});
