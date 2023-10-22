import React from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, Pressable, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useState, useEffect } from 'react';

import AccountCard from '../components/Molecules/AccountCard';
import SectionCardMain from '../components/Molecules/SectionCardMain';
import SectionCardSide from '../components/Molecules/SectionCardSide';
import CarouselButton from '../components/Atoms/CarouselBotton';
import MoveButton from '../components/Atoms/MoveButton';

import Avatar from '../assets/Icons/Avatar.png'

import { sectionCard } from '../data/sectionCards.js';

export default function homePage({navigation}) {
    const [data, setData] = useState(sectionCard);
    const [number, setNumber] = useState(0);
  
    var colorScheme = useColorScheme();

    useEffect(() => {
        console.log(colorScheme);
    }, [colorScheme])

  return (
    <SafeAreaView style={{...styles.container,backgroundColor: colorScheme === 'light' ? '#FFFFFF': '#584b9d'}}>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 650,
        width: '100%',
    }
})