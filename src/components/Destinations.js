import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { destinationData } from '../constants';
import { HeartIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

export default function Destinations() {
  const navigation = useNavigation(); 
 const rows = chunkArray(destinationData, 2); // Split data into pairs
    //const [isFavorite, toogleFavorite] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {rows.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((item, index) => (
            <DestinationCard navigation={navigation} item={item} key={index} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
const DestinationCard = ({ item, navigation }) => {
  const [isFavorite, toogleFavorite] = useState(false);
  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate('Destination',{...item})}
    style={styles.card}>
      <Image style={styles.image} source={item.image} />
        <TouchableOpacity onPress={()=> toogleFavorite(!isFavorite)} style={{backgroundColor:"white",bottom:300,width:40,height:40,left:60,borderRadius:20,opacity:0.4, justifyContent:"center", alignItems:"center"}}>
        <HeartIcon  fill={isFavorite ? "#bf0000":"white"} style={styles.heart}></HeartIcon>
       </TouchableOpacity>     
      <View style={{position:"absolute" ,top:200}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Function to split an array into chunks of a specified size
function chunkArray(arr, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    marginRight: 8,
 //   backgroundColor: 'beige',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft:6
  },
  image: {
    borderRadius: 30,
    width: '100%',
    height: 300,
    marginVertical:15,
    marginHorizontal:20
  },
  title:{
   // flexDirection:"column",
    //top:200,
   // position:"absolute",
    color:'white',
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:0
  },
  desc:{
    color:"white",
    fontSize:11,
    width:150,
    //position:"absolute",
  },
  heart:{
   // position:"relative",
   //bottom:300,
    right:0,
    //left:60,
    //opacity:0.8,
   // backgroundColor:"yellow",
  // color:"red"
    

  }

});
