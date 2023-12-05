import React from 'react'
import { StyleSheet, View, Pressable, Dimensions, Text, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { collection, addDoc, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { useState, useEffect } from 'react';

import { AppContext } from '../context/AppContext';
import { db } from './firebaseConfig';

import PrimaryButton from '../components/Atoms/PrimaryButton';
import AccountStatPopup from '../components/Molecules/AccountStatPopup';

export default function UserLogin({ navigation }) {
    const {
        isDyslexic
    } = React.useContext(AppContext);

    const { colors } = useTheme()

    const [active, setActive] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = async () => {
        const result = await signInWithEmailAndPassword(auth, email, password)
        console.log(result.user);
        setActive(true);
    }

    return (
        <>
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
                        secureTextEntry={true}
                    />
                </View>
                <PrimaryButton name='LOG IN' onPress={() => {
                    signInUser();
                }} />
            </View>
            {
                active ? <AccountStatPopup navigation={navigation} title="You've Successfully Logged In!" /> : <></>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    },
    userNameInput: {
        width: 280,
        height: 50,
        borderRadius: 6,
        borderWidth: 1.5,
        fontSize: 20,
        textAlign: 'center',
    },
})