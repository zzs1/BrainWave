import React from 'react'
import { StyleSheet, View, Pressable, Dimensions, Text, TextInput } from 'react-native';

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { useState, useEffect } from 'react';

import { AppContext } from '../context/AppContext';
import { db } from './firebaseConfig';

import PrimaryButton from '../components/Atoms/PrimaryButton';
import { useTheme } from '@react-navigation/native';

export default function UserRegister() {
    const {
        userName, 
        wimPoints, 
        pfp, 
        numberProgress, numberLevel,
        logicProgress, logicLevel,
        patternProgress, patternLevel,
        isDyslexic
    } = React.useContext(AppContext);

    const { colors } = useTheme()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = async () => {
        if (email && password) {
            const auth = getAuth();
            const results = await createUserWithEmailAndPassword(auth, email, password)
            console.log(results.user);

            const userRef = doc(db, "users", results.user.uid);
            setDoc(
                userRef,
                {
                    userName: userName,
                    avatar: pfp,
                    wimPoints: wimPoints,
                    numberProg: numberProgress,
                    logicProg: logicProgress,
                    numberLvl: numberLevel,
                    patternProg: patternProgress,
                    logicLvl: logicLevel,
                    patternProg: patternProgress,
                    patternLvl: patternLevel,
                },
                { merge: true }
            )
        } else {
            alert('Fill in all textfields')
        }
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
                }}>Create Password</Text>
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
            <PrimaryButton name='REGISTER' onPress={() => {
                addUser();
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