import React ,{ useState} from 'react'
import { Alert,View, TouchableOpacity, StyleSheet ,Platform,Image,StatusBar} from 'react-native'
import SocialMediaButton from './SocialMediaButton'

export default function ConnectSocials({navigation}) {
    const [social,setSocial] = useState('')

    const onNextPressed = () => {
             
        if (!social) {
            Alert.alert('Warning', 'Please select at least one social media.', [          
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);        
            return;
        }
        // If at least one social media is selected, navigate to the 'AddProfileScreen'.
        console.log(social)
        navigation.navigate('AddProfileScreen')          
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainText}>
                    <Image source={require( './assets/ConnectSocial.png' )} />
            </View >
            <View style={styles.subText}>
                    <Image source={require( './assets/Linkaccounts.png' )} />
            </View>
            <View>
                <SocialMediaButton
                    title="Facebook"
                    iconColor="#ffffff"
                    iconName="facebook"
                    iconSize={25}
                    onPress={ ()=>{setSocial('Facebook') }}
                    />
                <SocialMediaButton
                    title="Twitter"
                    iconColor="#ffffff"
                    iconName="twitter"
                    iconSize={25}
                    onPress={ ()=>{setSocial('Twitter') }}
                    />
                <SocialMediaButton
                    title="Instagram"
                    iconColor="#ffffff"
                    iconName="instagram"
                    iconSize={25}
                    onPress={ ()=>{setSocial('Instagram') }}
                    />
                <SocialMediaButton
                    title="Google"
                    iconColor="#ffffff"
                    iconName="google"
                    iconSize={25}
                    onPress={ ()=>{setSocial('Google') }}
                />
            </View>

            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack()  } >
                    <Image source={require( './assets/back2.png')}/>    
                </TouchableOpacity>  

                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddProfileScreen')} >
                        <Image source={require( './assets/skipBtn.png')} />    
                    </TouchableOpacity >

                    <TouchableOpacity onPress={onNextPressed} >
                        <Image source={require( './assets/nextBtn.png')} />    
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
  