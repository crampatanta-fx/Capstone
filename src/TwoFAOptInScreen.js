import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import TextInput from './components/TextInput'
import { Image, Platform, StatusBar, Text } from 'react-native';
import { phoneValidator} from './helpers/phoneValidator'

export default function TwoFAOptInScreen({ navigation,route }) {
    const [phoneNumber, setPhoneNumber] = useState({ value:'', error:''})
    const userPhoneNumber = '000-000-0000' // route.params
    const email= route.params.email 

    // Function to handle the action when the "Next" button is pressed.
    const onNextPressed = () => {
        const phoneError = phoneValidator(phoneNumber.value);
     
        if (phoneError) {
            setPhoneNumber({ ...phoneNumber, error: phoneError });           
            return;
        }
        navigation.navigate('SignUpTwoFA', { email,phoneNumber })     
     
    };

    return (
        < View style={ styles.container}>
            <View >
                <Image source={require( './assets/accountVerified.png' )} />
            </View>

            <View style={ styles.mainText}>
                <Image source={require( './assets/improveSecurity.png' )} />
            </View>

            <View style={ styles.subText}>
                <Image source={require( './assets/activate2F.png' )} />
            </View>

            <View >
                <Image source={require( './assets/signinCode.png' )} />
            </View>

            <View style={ styles.phoneContainer}>
                <TextInput
                    label="Phone number"
                    returnKeyType="done"
                    value={phoneNumber.value}
                    onChangeText={(text) => setPhoneNumber({ value: text, error: '' })}
                    error={!!phoneNumber.error}
                    errorText={phoneNumber.error}
                    autoCapitalize="none"
                    autoCompleteType="tel"
                    textContentType="telephoneNumber"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack()  } >
                    <Image source={require( './assets/back2.png')}/>    
                </TouchableOpacity>  

                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateBio',{ email })} >
                        <Image source={require( './assets/skipBtn.png')} />    
                    </TouchableOpacity >

                    <TouchableOpacity onPress={onNextPressed} >
                        <Image source={require( './assets/nextBtn.png')} />    
                    </TouchableOpacity >    
                </View>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
        backgroundColor: 'white',
    },

    mainText:{
        justifyContent:'center',
        height:'20%',    
        marginBottom: 20,  
    },

    subText:{  
        marginBottom: 20,  
    },

    lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    },

    phoneContainer: {
        width: '100%',
        maxWidth: 340,
    },
})