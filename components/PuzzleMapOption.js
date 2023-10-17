import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


// import LogicIcon from '../assets/logic.svg';
// import PatternsIcon from '../assets/patterns.svg';

export default function PuzzleMapOption({navigation}) {

    const [isActive, setIsActive] = useState(false);

    return (
        <TouchableOpacity onPress={() => setIsActive(!isActive)}>
            <View style={styles.container}>
                {isActive ? '^' : '^^'}
            </View>

        {isActive && (<View>
            <View>
            {/* <LogicIcon/> */}
            <Text>Logic</Text>
            </View>

            <View>
            {/* <LogicIcon/> */}
            <Text>Numbers</Text>
            </View>

            <View>
            {/* <PatternsIcon/> */}
            <Text>Patterns</Text>
            </View>


            </View>
            )}
             </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 270,
        height: '100%',
        backgroundColor: '#0C7BDC'
        
    }
});
