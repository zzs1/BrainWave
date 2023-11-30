import React from 'react'
import { StyleSheet, View, Pressable, Dimensions, Text } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

import PrimaryButton from '../components/Atoms/PrimaryButton';

import { AppContext } from '../context/AppContext';

export default function UserLogOut() {
    const {
        setUserName,
        setWimPoints,
        setPfp,
        setNumberProgress, setNumberLevel,
        setLogicProgress, setLogicLevel,
        setPatternProgress, setPatternLevel,
    } = React.useContext(AppContext);

    const logout = async () => {
        const auth = getAuth();
        await signOut(auth);
        setUserName("");
        setWimPoints(0);
        setPfp("");
        setNumberProgress(0);
        setNumberLevel(0);
        setLogicProgress(0);
        setLogicLevel(0);
        setPatternProgress(0);
        setPatternLevel(0);
        console.log("User Logged Out");
    }

  return (
    <View>
        <PrimaryButton name='Log Out' onPress={() => logout()}/>
    </View>
  )
}