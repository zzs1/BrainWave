import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function CarouselButton (){

    const CarouselButtonText = "";

    return(
        <View style={styles.container}>
                <View>
                    <Pressable style={styles.carouselButton}>
                        <Text style={styles.carouselButtonText}>{CarouselButtonText}</Text>
                    </Pressable>
                
                </View>
      

        </View>
    );
}

const styles =  StyleSheet.create({
    carouselButton: {
        width: 185,
        height: 60,
        backgroundColor: '#0C7BDC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowOffset: {width: 0, height: 10},
        // shadowColor: '#b4b4b4',
        // shadowRadius: 10,

    },
    carouselButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
}); 
