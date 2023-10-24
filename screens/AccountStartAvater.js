import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable, Image} from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';
import { React, useState } from "react";

export default function AccountPageStart({navigation}){



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


return(
<>
    <View style={styles.accountStartPageBody}>
        <View>
            <Image
            source={require('../assets/Icons/wimmy.png')}
            style={styles.wimmyPic}
            width={270}
            height={188}/>
        </View>


        <View style={styles.accountStartTexts} >
            <Text style={styles.texts}>Select an avatar!</Text>
        </View>

            
        {/* <Pressable onPress={pickImage}> */}
        <View style={styles.avatarIconView}>
             <Image 
                source={require('../assets/accountPages/imageUpload.png')}
                style={styles.avatarIcon}
                width={210}
                height={210}
                />
            
        </View>

                 {/* {image && <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />} */}
        {/* </Pressable> */}




        <View>
                <Pressable style={styles.startButton} onPress={() => navigation.push('AccountStartTime')}>
                    <PrimaryButton name="SET AVATAR" colorBackground="#0C7BDC" shadow="#005AB5"/>
                </Pressable>
        </View>


    </View>
    </>
        );
}


const styles = StyleSheet.create({
texts: {
    fontSize: 20,
},
accountStartTexts: {
    height:67,
    width: 292,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderColor:'#C8C8C8',
    borderWidth: 2,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
},
accountStartPageBody: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
},
avatarIconView: {
    marginTop: 70,
},
startButton: {
    padding: 40,
}

});
