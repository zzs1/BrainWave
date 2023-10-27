import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable, Dimensions } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
            <DialogueBoxUpper
                        hasTitle={true}
                        title="You're all set!"
                        interestingText="Time to improve your critical thinking! Enjoy your stay!"
                    />
        </View>

        <View style={styles.startButton}>
                <Pressable onPress={() => navigation.push('AccountInterfaceStart')}>
                    <PrimaryButton name="CONTINUE!"/>
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
        paddingTop: 100,
        paddingBottom: 100
    },
});
