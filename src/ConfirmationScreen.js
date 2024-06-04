import React, { useState,useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from './components/theme'
import { Image, Platform, StatusBar } from 'react-native';

export default function ConfirmationScreen({ navigation , route} )  {
    const userEmailAddress = 'johndoe@email.com' // route.params
    const email = route.params.email.value

    // useEffect hook to navigate to 'TwoFAOptInScreen' after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('TwoFAOptInScreen',{email});
        }, 3500);

        return () => clearTimeout(timer);
    }, []);    

    return (
    < View style={ styles.container}>
        <View style={ styles.maintext  }>
            <Image source={require( './assets/verifyAccount.png' )} />
        </View>

        <View style={styles.emailContainer}>
            <Text style={styles.messageText}>A confirmation email has been</Text>

            <View style={styles.row}>
              <Text style={styles.emailText}>sent to                
                  {' ' + email }  
              </Text>
            </View>
        </View>

        <View style={styles.row}>
            <Text style={styles.codeText}>Didn't receive an email? </Text>

            <TouchableOpacity onPress={() => {console.log("Send again")}}>
                <Text style={styles.link}>Send again.</Text>
            </TouchableOpacity>
        </View>

        <View style={ styles.lastRow } >
            <TouchableOpacity onPress={() => navigation.goBack() } >
                <Image source={require( './assets/back2.png')}  />    
            </TouchableOpacity>

            <View style={{ flexDirection:'row', alignItems:'center' , columnGap:100}}>
                <TouchableOpacity>
                    <Image />    
                </TouchableOpacity >            
                <TouchableOpacity>
                    <Image />    
                </TouchableOpacity >    
            </View>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
    },

    emailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginBottom: 30,
    },

    emailText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    messageText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
    },

    codeText: {
        color: theme.colors.text,
        fontWeight: 'bold',
    },

    link: {
        fontWeight: 'bold',
        color: theme.colors.link,
    },

    maintext:{
        justifyContent:'center',
        height:'20%',      
    },

    lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 200,
        bottom:'5%'
    },

    imageText: {
        alignItems: 'left',
    },
})
      