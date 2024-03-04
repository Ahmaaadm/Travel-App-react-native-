import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Inout,TextInput,ScrollView,KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import {CheckCircleIcon, EnvelopeIcon, EyeIcon, KeyIcon,XMarkIcon,CheckIcon,GlobeAsiaAustraliaIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'

let loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter Valide email').required("Email is required"),
    password: Yup.string().min(8,({min})=>"password must be at least 8 characters! ").required('required password to continue').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    password2 : Yup.string().min(8,({min})=>"password must be at least 8 characters! ").required('required password to continue').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
})


export default function NewCostumer() {
    const navigation = useNavigation();
    const confirmationMessage = "please confirm your password correctly ";
  return (
    
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios'?"padding":'height'} >
        
        <Formik 
   initialValues={{ email : '',password: '',password2:''}}
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
            <View>
                <Text style={{fontSize:30}}>Sign Up</Text>
                <View style={{flexDirection:"row",marginTop:3}}>
                <Text style={{fontWeight:"300"}}>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={{fontStyle:"italic",fontWeight:"bold",color:"skyblue"}}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop:30}}>
                <Text>Email</Text>
                <View style={{flexDirection:"row"}}>
                    <EnvelopeIcon style={{marginTop:5,}} size={20} color={"black"}/>
                <TextInput
                onChangeText={handleChange('email')} 
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.emaill} placeholder='enter your Email' />
                </View>
                
                <View style={styles.line} ></View>{errors.email&& touched.email&&<Text style={styles.errors} >{errors.email}</Text>}
            </View>
            <View style={{marginTop:40}}>
                <Text>Password</Text>
                <View style={{flexDirection:"row"}}>
                    <KeyIcon style={{marginTop:5,}} size={20} color={"black"}/>
                <TextInput 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry style={styles.emaill} placeholder='enter your Password'  />
                </View>
                <View style={styles.line} ></View>
                {errors.password && touched.password && <Text style={styles.errors}>{errors.password}</Text>}
            </View>
            <View style={{marginTop:40}}>
                <Text>Confirm Password</Text>
                <View style={{flexDirection:"row"}}>
                    <KeyIcon style={{marginTop:5,}} size={20} color={"black"}/>
                <TextInput 
                onChangeText={handleChange('password2')}
                onBlur={handleBlur('password2')}
                value={values.password2}
                secureTextEntry style={styles.emaill} placeholder='enter your Password' />
                </View>
                <View style={styles.line} ></View>
                {values.password != values.password2 &&touched.password2 && <Text style={styles.errors}>{confirmationMessage}</Text>}
            </View>
            <View style={{justifyContent:"center",height:90, alignItems:"center",flex:1,marginTop:2}}>
                <TouchableOpacity
                 disabled={!isValid && !(values.password===values.password2)}
                 style={{backgroundColor:"#5492ab",borderRadius:700,shadowOffset:{width:5,height:10},shadowOpacity:0.8,shadowColor:"skyblue"}}
                 onPress={() => {
                    if (isValid && values.password === values.password2) {
                      console.log(values); 
                      navigation.navigate("Home");
                    } else {
                      console.log("Password confirmation error");
                    }
                  }}  >
                    <View style={{width:150,height:60,justifyContent:"center",alignItems:"center",borderRadius:700}}>
                        <Text style={{fontSize:25,fontWeight:"bold"}}>SignUp</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        width:"100%",
        height:"100%",
        ///position:"absolute",
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
        position:"absolute",
        width:"100%"
    },
    line:{ width:"90%",
    backgroundColor:"black",
    height:1,
    marginTop:8},
    emaill:{
        marginTop:5,marginLeft:5,
        width:200,
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

        
    },
    errors:{
        fontSize:14,
        color:"red",
        fontWeight:"bold",
        marginTop:5
    },

})