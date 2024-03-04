import { View, Text,ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { ChevronLeftIcon, ClockIcon,HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  return (
    <View style={styles.indexO}>
         <Image source={item.image} style={styles.image}/>
         <SafeAreaView style={styles.SafeArea}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:"#fff",alignItems:'center',justifyContent:"center",opacity:0.5, borderRadius:30,width:45, height:45,marginHorizontal:10}} >
               <ChevronLeftIcon strokeWidth={4} size={wp(7)} color="black" style={styles.icon1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>toggleFavorite(!isFavorite)} style={{backgroundColor:"#fff",alignItems:'center', justifyContent:"center",opacity:0.5, borderRadius:30,width:45, height:45,marginHorizontal:10}} >
               <HeartIcon strokeWidth={3} size={wp(7)} fill={isFavorite? "red":"white"} color={"black"}  style={styles.icon2} />
            </TouchableOpacity>
         </SafeAreaView>
         <View style={styles.down}>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.scrol}>
                <View style={{flexDirection:"row", justifyContent:"space-between" , alignItems:"flex-start", }}>
                    <Text style={styles.header1}>
                      {item.title}
                    </Text>
                    <Text style={styles.header2}>
                     ${item.price}
                    </Text>
                </View>
                <Text style={styles.longDescription}>{item.longDescription}</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between" ,marginVertical:15}}>
                  <View style={{flexDirection:"row", paddingVertical:2, alignItems:"flex-start"}}>
                      <ClockIcon size={wp(8)} fill={"skyblue"} />
                      <View>
                        <Text style={styles.details}>{item.duration}</Text>
                        <Text>Duration</Text>
                      </View>
                  </View>
                  <View style={{flexDirection:"row", paddingVertical:2, alignItems:"flex-start"}}>
                      <MapPinIcon size={wp(8)}  color={"#e37842"} />
                      <View>
                        <Text style={styles.details}>{item.distance}</Text>
                        <Text>Duration</Text>
                      </View>
                  </View>
                  <View style={{flexDirection:"row", paddingVertical:2, alignItems:"flex-start"}}>
                      <SunIcon size={wp(8)} fill={"orange"} color={"orange"}  />
                      <View>
                        <Text style={styles.details}>{item.weather}</Text>
                        <Text>Duration</Text>
                      </View>
                  </View>
                </View>
              </ScrollView>
              <View style={{justifyContent:"center", alignItems:"center"}}>
              <TouchableOpacity style={styles.book}>
                <Text style={styles.bookText}>Book Now!</Text>
              </TouchableOpacity>
              </View>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    indexO:{
     // backgroundColor:"#fff",
      flex:1,
    },
    image:{
      width:"100%",
      height:"52%"
    },
    SafeArea:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:"100%",
      position:'absolute',
     //backgroundColor:"red"
    },
    icon1:{
      marginRight:3,
    },
    down:{
      backgroundColor:"white",
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      marginTop:-35,
      paddingHorizontal:15,
      display:"flex",
      flex:1,
      justifyContent:"space-between",
      paddingTop:8
    },
    scrol:{
      paddingVertical:6
    },
    header1:{
      fontWeight:"bold",
      fontSize:wp(7),
      flex:1
    },
    header2:{
      fontWeight:"bold",
      fontSize:wp(7),
      color:theme.text
     // flex:1
    },
    longDescription:{
      //backgroundColor:"blue",
      paddingVertical:4,
      marginVertical:20,
      fontSize:15,
      fontWeight:"300"
    },
    details:{
      fontSize:18, fontWeight:"bold"
    },
    book:{
      marginBottom:30,
      marginHorizontal:"auto",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:theme.text,
      height:60,
      width:200,
      borderRadius:40,
      
    },
    bookText:{
      fontSize:wp(5.5),
      fontWeight:"bold",
      color:'#ffffff'
    }


})