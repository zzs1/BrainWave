import { StyleSheet, View, Pressable, Text} from 'react-native';
import MoveButton from '../MoveButton';
import CarouselButton from '../CarouselBotton';

export default function PuzzleNavigationSet (){

    return(
        <View style={styles.container}>
            <View>
                <MoveButton/>
            </View>
            <View>
                <CarouselButton/>
            </View>
            <View>
                <MoveButton/>
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
}); 
