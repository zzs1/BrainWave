import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import MenuButton from '../../Atoms/MenuButton';


export default function NavBar({
    
}) {
  return (
    <View style={styles.navBarBody} >
         <Image 
            source={require('../../../assets/navBar/logoNavBarBlack.png')} 
            // style={styles.navBarLogo} 
            width={45}
            height={47}/>
                <View style={styles.navBarLogoNameView} >
                   <Image 
                        source={require('../../../assets/navBar/logo.png')} 
                        width={22}
                        height={160}/>
                </View>
         {/* <MenuButton  style={{backgroundColor: 'black'}}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  navBarBody: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   },
   navBarLogoNameView: {
    paddingLeft: 45,
    paddingRight: 65,
   },

});
