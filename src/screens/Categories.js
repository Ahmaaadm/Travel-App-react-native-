import { View,Image,TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import { categoriesData } from '../constants'
import SortCategories from '../components/sortCategories'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const navigation = useNavigation();
  return (
    <View>
    <View style={s3.first}>
        <View style={s3.two}>
            <Text style={s3.cat1}>Categories</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("SeeAll")}>
            <Text style={s3.cat2} >See All</Text>
        </TouchableOpacity>
    </View>
    <View>
        <ScrollView style={s3.scr} horizontal contentContainerStyle={{paddingHorizontal:15}} showsHorizontalScrollIndicator={false}>
                {
                    categoriesData.map((cat,index)=>{
                        return (
                                    <TouchableOpacity key={index} style={s3.to} >
                                        <Image style={s3.imgs} source={cat.image}/>
                                        <Text style={s3.underImage}>{cat.title}</Text>
                                    </TouchableOpacity>
                        )
                        })
                }
        </ScrollView>
        <View>
            <SortCategories/>
        </View>
    </View>
    </View>

  )
}

const s3 = StyleSheet.create({
    first:{
       marginVertical:5
    },
    first:{
       // backgroundColor:"#ccb678",
        width:"100%",
        height:25,
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:16
        
    },
    cat1:{
       fontWeight:"bold",
       fontSize:18 
    },
    cat2:{
        fontWeight:"bold",
        fontSize:18 ,
        color: theme.text,
     },
     to:{
        flex:1,
        alignItems:"center",
      //  backgroundColor:"red",
        height:100,
        width:100,
        marginVertical:10,
        marginRight:12

     },
     scr:{
       // backgroundColor:"blue",
        marginTop:15,
        
     },
     imgs:{
        borderRadius:30,
        width:90,
        height:90,
        
     },
     underImage:{
        fontSize:15,
        fontWeight:"bold",
        marginTop:4
     }
 
})