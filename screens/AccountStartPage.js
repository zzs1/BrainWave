import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable, Dimensions } from "react-native";
import { React, useState } from "react";
import { useTheme } from "@react-navigation/native";

import PrimaryButton from '../components/Atoms/PrimaryButton';
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPageStart({ navigation }) {
    const { colors } = useTheme();

    return (
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

            <Pressable style={styles.startButton} onPress={() => navigation.push('AccountStartName')}>
                <PrimaryButton name="START"/>
            </Pressable>
        </View>

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
