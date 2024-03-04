import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Inout,TextInput,ScrollView,KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import {CheckCircleIcon, EnvelopeIcon, EyeIcon, KeyIcon,XMarkIcon,CheckIcon,GlobeAsiaAustraliaIcon} from 'react-native-heroicons/outline'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'


let loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter Valide email').required("Email is required"),
    password: Yup.string().min(8,({min})=>"password must be at least 8 characters! ").required('required password to continue').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
})


export default function Login() { 
    const navigation = useNavigation();
    const [isChecked, check]=useState(false);
    const [showPassword,setShowPassword] = useState(false);
    
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios'?"padding":'height'}>
   <Formik 
   initialValues={{ email : '',password: '' }}
   validateOnMount={true}
   onSubmit={values => console.log(values)}
   validationSchema={loginValidationSchema}
   > 
   
   {({ handleChange, handleBlur, handleSubmit, values, touched,errors,isValid }) => (
    
    <View style={styles.screene}>
        <Image style={styles.image}  source={require('../../assets/images/mountain.png')  }/>
        <View style={styles.logo}>
            <GlobeAsiaAustraliaIcon  color={"white"} size={150} />
            <Text style={{fontSize:50,fontWeight:"bold",color:"white"}}>Travel App</Text>
        </View>
        <View style={styles.down}>
        <KeyboardAwareScrollView style={{flex:1,flexGrow:1}}>
            <ScrollView>
            <Text style={styles.welcome} >Welcome</Text>
            <View style={{flexDirection:"row"}}><Text style={{fontWeight:"300"}}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("NewCostumer")} >
            <Text style={{color:"skyblue", fontWeight:"bold", fontStyle: 'italic'}}> Register Now</Text></TouchableOpacity>
            </View>
            <View style={{marginTop:40}}>
                <Text>Email</Text>
                <View style={{flexDirection:"row"}}>
                    <EnvelopeIcon style={{marginTop:5,}} size={20} color={"black"}/>
                <TextInput 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.emaill} placeholder='enter your Email' />
                {!errors.email?<CheckIcon style={{marginLeft:33}}/>:''}
                </View>
                <View style={styles.line} ></View>
            </View>
            {errors.email && touched.email && <Text style={styles.errors}>{errors.email}</Text>
            }
            <View style={{marginTop:40}}>
                <Text>Password</Text>
                <View style={{flexDirection:"row"}}>
                   <KeyIcon style={{marginTop:5}} size={20} color={"black"}/> 
                <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={showPassword} style={styles.emaill} placeholder='enter your Password' />
                <TouchableOpacity>
                <EyeIcon name={showPassword?"eye-off":"eye"} onPress={()=>setShowPassword(!showPassword)} style={{marginLeft:35,position:"absolute",marginTop:5}} fill={showPassword?"skyblue":"white"} color={"black"} size={22} />
                
                </TouchableOpacity>
                </View>
                <View style={styles.line} ></View>
            </View>
            {errors.password && touched.password && 
            <Text style={styles.errors}>{errors.password}</Text>
            }
            <View style={{marginTop:25,flexDirection:"row",justifyContent:"space-between"}}>
                <View >
                    <TouchableOpacity onPress={()=>check(!isChecked)} style={{flexDirection:"row"} }>
                        <CheckCircleIcon fill={isChecked?"skyblue":"white"} size={20}/>
                        <Text style={{marginLeft:5,fontWeight:"200"}}>Remember Me</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{fontWeight:"200"}}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{justifyContent:"center",height:90, alignItems:"center",flex:1,marginTop:23}}>
                <TouchableOpacity onPressIn={handleSubmit} style={{backgroundColor:isValid?"#5492ab":"#6e7070",borderRadius:700,shadowOffset:{width:5,height:10},shadowOpacity:0.8,shadowColor:"skyblue"}} 
                onPress={()=>
                    {
                        if(isValid ||(values.email=='admin' && values.password=='admin'))
                        {console.log("Admin logging in");
                            navigation.navigate('Home')}
                        else
                           console.log('error')
                    }
                } 
                 >
                    <View style={{width:150,height:60,justifyContent:"center",alignItems:"center",borderRadius:700}}>
                        <Text style={{fontSize:25,fontWeight:"bold"}}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    </View>
    )}
   </Formik> 
   </KeyboardAvoidingView>
  )
  
}


const styles = StyleSheet.create({
    screene:{
        flex:1,
       // justifyContent:"center",
       flexDirection:"column-reverse"
    },
    image:{
        height:"100%",
        width:'100%',
        position:"absolute",
        
    },
    down:{
        backgroundColor:"#fff",
        //marginTop:200,
        height:500,
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        paddingHorizontal:50,
        paddingVertical:30,
        opacity:1,
        height:500,
        
        
    },
    welcome:{
        fontSize:30,
       // fontWeight:"bold"
    },
    line:{
        width:"90%",
        backgroundColor:"black",
        height:1,
        marginTop:8
    },
    emaill:{
        marginTop:5,marginLeft:5,
        width:200,
    },
    errors:{
        fontSize:14,
        color:"red",
        fontWeight:"bold",
        marginTop:5
    },
    buttons:{
        borderRadius:700,
        backgroundColor: "#5492ab" ,
        shadowColor:"red",
        shadowOffset:{width:-2,height:4}
    },
    eyeIcon:{
        marginLeft:35,position:"absolute",marginTop:5
    },
    logo:{
        position:"absolute",
        flex:1,
        height:200,
        zIndex:1,
        marginBottom:"100%",
        //backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center",
        marginLeft:85,
        marginBottom:550,

        
    }
})
//()=>isValid? navigation.navigate("Home"):''