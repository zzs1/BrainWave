import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';

export default function TopBar({navigation}){
    return(
        <>
        <View style={{
          ...styles.container,
          }}>
          <View>
            <Image
                source={require('../../../assets/Icons/Topbar.png')}
                width = {200}
                height = {100}
                 />
          </View>

            <Pressable onPress={() => navigation.push('AccountPages')} 
              style={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
            }}
            >
                <Image
                source={require('../../../assets/Icons/willsmall.png')}
                width = {40}
                height = {40} />
                <Text style={{
                    fontSize: 10,
            }}>Will Smith</Text>
            </Pressable>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 200,
      justifyContent: 'center',
      elevation: 5, // Add a drop shadow with an elevation value
    shadowColor: 'black', // Customize the shadow color
    shadowOffset: { width: 0, height: 5 }, // Adjust the shadow offset
    shadowOpacity: 0.5, // Adjust the shadow opacity
    shadowRadius: 5, // Adjus
     },
  });
  