import React from 'react'
import { StyleSheet, View, Pressable, Dimensions, Text, TextInput } from 'react-native';

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useState, useEffect } from 'react';

import { AppContext } from '../context/AppContext';
import { db } from './firebaseConfig';

import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useTheme } from '@react-navigation/native';

export default function UserLogin({ navigation }) {
    const {
        userName, setUserName,
        wimPoints, setWimPoints,
        pfp, setPfp,
        numberProgress, setNumberProgress,
        logicProgress, setLogicProgress,
        patternProgress, setPatternProgress,
        isDyslexic
    } = React.useContext(AppContext);

    const { colors } = useTheme()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = async () => {
        const auth = getAuth();
        const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result.user);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                    fontSize: 18,
                    color: colors.text
                }}>Email</Text>
                <TextInput
                    style={{
                        ...styles.userNameInput,
                        borderColor: colors.inputBorder,
                        backgroundColor: colors.inputBG,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}
                    placeholder="Enter your Email..."
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>

            <View>
                <Text style={{
                    fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular',
                    fontSize: 18,
                    color: colors.text
                }}>Password</Text>
                <TextInput
                    style={{
                        ...styles.userNameInput,
                        borderColor: colors.inputBorder,
                        backgroundColor: colors.inputBG,
                        color: colors.text,
                        fontFamily: isDyslexic ? 'Lexend-Regular' : 'Poppins-Regular'
                    }}
                    placeholder="Type your Password..."
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
            <PrimaryButton name='LOG IN' onPress={() => {
                signInUser();
                navigation.push("AccountProfile");
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    }
})