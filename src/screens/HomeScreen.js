import { View,Image, Text,TouchableOpacity, StyleSheet,SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Categories from './Categories'
import SortCategories from '../components/sortCategories'
import Destinations from '../components/Destinations'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { useColorScheme } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Profile from './Profile'



export default function HomeScreen() {
  const IsDarkmode = useColorScheme() === 'white';
  const navigation = useNavigation();
  return (
    <SafeAreaView style={s2.safe}>
      <ScrollView style={s2.scrol} showsHorizontalScrollIndicator={false}>
        <View style={s2.head}>
           <Text style={s2.lets}>Let's Discover</Text>
           <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image style={s2.logo} source={require('../../assets/images/avatar.png')}/>
           </TouchableOpacity>
        </View>
        <View>
          <View style={s2.sb}>
             <MagnifyingGlassIcon strokeWidth={3} color="gray" size={30} style={{left:70, }}/>
             <TextInput style={s2.search} placeholder='Search Destination' placeholderTextColor={'gray'}/>
          </View>
        </View>
        <View style={{marginTop:25}}>
          <Categories/>
        </View>
        <View >
          <Destinations/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const s2 = StyleSheet.create({
      safe:{
        backgroundColor:"white",
        flex:1,
      },
      scrol:{
        backgroundColor:"white",
        marginVertical:20,

      },
      lets:{
        fontSize:40,
        fontWeight:"bold",
        //backgroundColor:"red",
        marginLeft:20
      },
      head:{
        //backgroundColor:"green",
        flexDirection:"row",
      },
      logo:{
        width: 45, 
        height: 45,
        marginLeft:"35%",
      },
      sb:{
       // backgroundColor:"red",
        backgroundColor:"#ebe9e6",
        width:"90%",
        marginTop:60,
        height:50,
        marginHorizontal:20,
        borderRadius:30,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center"
      },
      search:{
        backgroundColor:"#ebe9e6",
        height:"100%",
        width:"65%",
        borderRadius:30,
        marginHorizontal:100,
        fontSize:20

      },
      don:{
        backgroundColor:"blue",
         width:"90%",
         height:800,
         marginHorizontal:20,
         marginVertical:20,
      }
})