import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image, Dimensions } from 'react-native'
import { AppContext } from '../../../context/AppContext.js'
import WimmyPopup from '../WimmyPopup/index.js';


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function ModalComp() {

    const { wimPoints, isDyslexic } = React.useContext(AppContext);
    const [modelVisible, setModelVisible] = useState(false);

    return (

        <View>
            <Modal
                transparemt={true}
                visible={modelVisible}>
                <View style={{
                    width: screenWidth,
                    height: screenHeight
                }}>
                    <View style={{
                        marginTop: 100
                    }}>
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                            }}>Would you like to change Wimmy's costume?</Text>

                        <View style={{
                            ...styles.costumeImage,
                            marginTop: 10
                        }}>
                            <Image
                                source={require('../../../assets/Icons/wimmyCostume.png')}
                                width={270}
                                height={188} />

                        </View>


                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            marginTop: 30,
                        }}> 30 coins </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                borderRadius: 10,
                                backgroundColor: '#CDDDEC',
                                marginRight: 150,
                                marginLeft: 150,
                                marginTop: 100,
                            }}
                            onPress={() => setModelVisible(!modelVisible)}>
                            Yes
                        </Text>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={{
                    backgroundColor: '#CDDDEC',
                    width: 100,
                    padding: 5,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center'
                }}
                onPress={() => setModelVisible(true)}>
                <Text style={{
                    textAlign: 'center'
                }}>go to shop</Text>
            </Pressable>
        </View>

    )
}


const styles = StyleSheet.create({
    costumeImage: {
        display: 'flex',
        alignItems: 'center'
    }
})