import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native';

export default function TopBar({navigation}){
    return(
        <>
        <View style={{
             display: 'flex',
             flexDirection: 'row',
          }}>

          <View style={{
            marginRight: 180,
          }}>
            {/* <Image
                source={require('../../../assets/Icons/logo_navBar.png')}
                width = {200}
                height = {100}
                 /> */}
          </View>

        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image 
             source={require('../../../assets/Icons/wimmyTopBar.png')}
             width = {40}
             height = {40}
            />
            <Text styles={{
               fontSize: 16
            }}>1500</Text>
          </View>

            <Pressable onPress={() => navigation.push('Settings')} 
              style={{
                gap: 10,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 40,
            }}>
                <Image
                source={require('../../../assets/Icons/settingBlack.png')}
                width = {40}
                height = {40} />
            </Pressable>
          </View>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  
  });