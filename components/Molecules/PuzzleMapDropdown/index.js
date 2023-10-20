import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import SubMenu from '../../Molecules/SubMenuItem';
import React, { useState } from 'react';



export default function PuzzleMapDropdown(){

    const [IsActive, setIsActive] = useState(false);


    return(
        <>
        <View style={styles.puzzleMapDropdownBody}>
                <Pressable style={styles.section}>
                    <Image 
                    source={require('../../../assets/sideMenu/map.png')} 
                    style={styles.puzzleMapDropdownIcon} 
                    width={30}
                    height={30}/>
                    <Text style={styles.puzzleMapDropdownFont}>Puzzle Maps
                    
                        <Pressable onPress={() => setIsActive(!IsActive)}>
                            <Text style={styles.puzzleArrows}>{IsActive ? '˰': '˯'}</Text>
                        </Pressable>
                        
                    </Text>

                        {
                            IsActive &&  (
                            
                          <View style={styles.subMenuView}>
                            <SubMenu/>
                          </View>)
                        }

                </Pressable>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    puzzleMapDropdownFont:{
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
    },
    puzzleMapDropdownIcon: {
        paddingLeft: 20,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 50,
        paddingLeft: 30,
    },
    puzzleArrows: {
        fontSize: 60,
        color: 'white',
    },
    puzzleMapDropdownBody: {
        backgroundColor: 'black',
        width: 300,
        height: 700,
    },
    subMenuView: {
        flexDirection: 'column',
    }
})