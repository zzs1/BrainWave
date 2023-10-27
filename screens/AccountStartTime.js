import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable, Dimensions } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPageStart({ navigation }) {

    // function timeMode(){
    //     console.log(mode);
    // }


    return (
        <>
            <View style={styles.accountStartPageBody}>
                <View>
                    <Image
                        source={require('../assets/Icons/wimmy.png')}
                        style={styles.wimmyPic}
                        width={270}
                        height={188} />
                    <DialogueBoxUpper
                        hasTitle={true}
                        title="Let's set up your account!"
                        interestingText="An account will allow you to track your progress and shar with friends!"
                    />
                </View>

                <View style={styles.buttons}>

                    <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                        <PrimaryButton name="Beginner (5mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Beginner" />
                    </Pressable>


                    <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                        <PrimaryButton name="Intermediate (10mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Intermediate" />
                    </Pressable>

                    <Pressable onPress={() => navigation.push('AccountStartTime2')}>
                        <PrimaryButton name="Advanced 20mins/day)" colorBackground="#0C7BDC" shadow="#005AB5" value="Advanced" />
                    </Pressable>

                </View>


            </View>
        </>
    );
}


const styles = StyleSheet.create({
    accountStartPageBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: screenHeight,
        width: screenWidth,
        paddingTop: 50,
        paddingBottom: 100
    },
    buttons: {
        marginTop: 10,
        gap: 10,
    }
});
