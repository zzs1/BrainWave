import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function PrimaryButton ({name=""}){
    const { colors } = useTheme();

    return(
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
                <View style={{
                    ...styles.primaryButton,
                    backgroundColor: colors.primaryBtnColor
                }}>
                    <Text style={styles.primaryButtonText}>{name}</Text>
                </View>
                <View style={{
                    ...styles.btnShadow,
                    backgroundColor: colors.primaryBtnShadow
                }}></View>

        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    primaryButton: {
        width: 330,
        height: 70,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnShadow: {
        width: 330,
        height: 70,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60,
        zIndex: -1
    },

    primaryButtonText: {
        fontSize: 25,
        color: '#FFFFFF',
    }   
}); 
