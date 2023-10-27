
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable, Dimensions } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import React, { useState } from "react";
import { useTheme } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPageStart({ navigation }) {
    const { colors } = useTheme()

    const [userName, setUserName] = useState("");

    function handleNameChange(text) {
        setUserName(text);
    }

    // You can use useRoute to transfer the data instead of making a custom function

    // function handleSubmit(onSave){
    //     onSave(userName);
    // }

    return (
        <SafeAreaView>
            <View style={styles.accountStartPageBody}>
                <View>
                    <Image
                        source={require('../assets/Icons/wimmy.png')}
                        style={styles.wimmyPic}
                        width={270}
                        height={188}
                    />
                    <DialogueBoxUpper hasTitle={false} interestingText='What is your name?'/>
                </View>

                <TextInput
                    style={{
                        ...styles.userNameInput,
                        borderColor: colors.inputBorder,
                        backgroundColor: colors.inputBG
                    }}
                    placeholder="Type your name..."
                    onChangeText={handleNameChange}
                    value={userName}
                />

                <Pressable style={styles.startButton} onPress={() => { navigation.push('AccountStartAvater'); /*handleSubmit();*/ }}>
                    <PrimaryButton name="SET NAME" />
                </Pressable>
            </View>
        </SafeAreaView>
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
    userNameInput: {
        width: 280,
        height: 50,
        borderRadius: 6,
        borderWidth: 1.5,
        fontSize: 20,
        textAlign: 'center',
        marginTop: -100
    }
});
