import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable, Image, Dimensions } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

import DialogueBoxUpper from "../components/Atoms/DialogueBoxUpper";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AccountPageStart({ navigation }) {



    // const [image, setImage] = userState(null);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if(!result.canceled){
    //         setImage(result.assets[0].uri);
    //     }
    // };


    return (
        <>
            <View style={styles.accountStartPageBody}>
                <View>
                    <Image
                        source={require('../assets/Icons/wimmy.png')}
                        style={styles.wimmyPic}
                        width={270}
                        height={188} />
                    <DialogueBoxUpper hasTitle={false} interestingText='Select an avatar!' />
                </View>

                {/* <Pressable onPress={pickImage}> */}
                <View style={styles.avatarIconView}>
                    <Image
                        source={require('../assets/accountPages/imageUpload.png')}
                        style={styles.avatarIcon}
                        width={150}
                        height={150}
                    />
                </View>

                {/* {image && <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />} */}
                {/* </Pressable> */}




                <Pressable style={styles.startButton} onPress={() => navigation.push('AccountStartTime')}>
                    <PrimaryButton name="SET AVATAR"/>
                </Pressable>


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
