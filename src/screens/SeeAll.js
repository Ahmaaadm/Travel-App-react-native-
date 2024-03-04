import { View, Text } from 'react-native'
import React from 'react'
//import {} from '../components/Destinations.js'
import Destinations from '../components/Destinations'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function SeeAll() {
  return (
    <SafeAreaView>
      <Destinations/>
    </SafeAreaView>
  )
}