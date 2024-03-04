import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {} from '../screens/Login'

export default function Profile() {
  return (
    <View style={styles.screen}>
      <SafeAreaView>
      <StatusBar style='dark'/>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"red"
    }
})