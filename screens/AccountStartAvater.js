import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import PrimaryButton from '../components/Atoms/PrimaryButton';


export default function AccountPageStart(){



    const [image, setImage] = userState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    };


return(
<>
    <View style={styles.accountStartPageBody}>
        <View>
            <Image
            source={require('../../../assets/Icons/wimmy.png')}
            style={styles.wimmyPic}
            width={270}
            height={188}/>
        </View>


        <View style={styles.accountStartTexts} >
            <Text style={styles.texts}>Select an avatar!</Text>
        </View>

            
        <Pressable onPress={pickImage}>
            <Image 
                source={require('../../../assets/accountPages/imageUpload.png')}
                style={styles.wimmyPic}
                width={210}
                height={210}
                />
                 {image && <Image source={{ uri: image }} style={{ width: 190, height: 190 }} />}
        </Pressable>




        <View style={styles.accountStartButton}>
            <PrimaryButton
                primaryButtonText="SET AVATAR"
            />
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
borderTopLeftRadius: 20,
borderBottomRightRadius: 20,
borderTopRightRadius: 20,
borderColor:'#C8C8C8',
borderWidth: 2,
backgroundColor: '#F9F9F9'
},
accountStartPageBody: {
display:'flex',
flexDirection: 'column'
},
});
