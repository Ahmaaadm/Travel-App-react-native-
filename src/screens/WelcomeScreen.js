import { View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



export default function WelcomeScreen() {
    const navigation = useNavigation();
    const isDarkMode = useColorScheme() ==='dark'; 
  return (
    <View style={s.all} >
        <Image style={s.image1} source={require('../../assets/images/welcome.png')} />
      <View style={s.content}>
      <LinearGradient
        colors={['transparent','rgba(3,105,161,0.8)']}
        start={{x:0.5,y:0}}
        end={{x:0.5,y:1}}
        style={{width:wp(100),height:hp(50) , position:"absolute"}}>
      </LinearGradient>
           <View style={s.content2}>
              <Text style={s.nas}>
              Travelling made easy!
              </Text>
              <Text style={s.nas2}>Experience teh world best adventure around the world with  </Text>
              <Text style={s.nas2}>us. </Text>
           </View>
           <TouchableOpacity style={s.button} onPress={ () => navigation.navigate("Login")}>
            <Text style={s.inside}>Let's Go!</Text>
           </TouchableOpacity>  
           
      </View>
    </View>
  )
}


const s = StyleSheet.create({
  all:{
    flex:1,
    justifyContent:"center"

  },
  image1:{
    height:"100%",
    width:"100%",
    position:"absolute"
  },
  content:{
   // backgroundColor:"red",
    height:650,
    padding:5,
   // paddingLeft:5,
    paddingBottom:10,
    marginVertical:50,
    marginRight:10,
    top:450,
    
  },
  content2:{
    marginVertical:10,
    height:200,
    width:600,
   // backgroundColor:"#000",
    paddingTop:30

  },
  nas:{
    color:"#fff",
    fontSize:50,
    fontWeight:'bold',
    //backgroundColor:"#000",
    height:120,
    width:400,
    alignItems:"center",
    justifyContent:'center'
  },
  nas2:{
    color:"#fff",
    fontSize:15,
    height:15,
    alignItems:"center",
    justifyContent:'center'
  },
  button:{
    height:60,
    width:140,
    backgroundColor:"orange",
    marginLeft:"34%",
    //marginRight:"50%"
    borderRadius:40,
    alignItems:"center",
    justifyContent:'center',
    

  },
  inside:{
      fontSize:18,
      fontWeight:"bold",
      color:"#fff"
  },
  lg:{

  },
  text:{}

})