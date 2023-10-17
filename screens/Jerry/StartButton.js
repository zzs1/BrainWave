import { View, Text,StyleSheet } from "react-native";

export default function Start({variant}){
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}> Get Started</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 330,
        height: 61,
        backgroundColor: '#0C7BDC',
        borderRadius: 10,
        shadowColor: 'black',  
        shadowOffset: { width: 0, height: 5 },  
        shadowOpacity: 10,  
        shadowRadius: 0,   
        elevation: 5,      
    },
    containerText: {
        fontWeight: 'bold',
        color: 'white',
    }
  });
