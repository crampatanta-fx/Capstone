import React ,{ useState} from 'react'
import { View,Text,TouchableOpacity, StyleSheet ,Platform,Image,StatusBar} from 'react-native'
import TextInput from './components/TextInput'
import { theme } from './components/theme'
import { bioValidator } from './helpers/bioValidator'
import { locationValidator } from './helpers/locationValidator'

export default function CreateBio({navigation,route}) {
  const [bio, setBio] = useState( { value:'' , error:''})
  const [location, setLocation] = useState( { value:'' , error:''})
  const [keyFocus,setkeyFocus] = useState(true)

  // Extracting the email value from the route parameters
  const email = route.params.email

    const onNextPressed = () => {
        const bioError = bioValidator(bio.value) ;
        const locationError = locationValidator(location.value) ;

        if (locationError || bioError) {
            setBio({ ...bio, error: bioError });           
            setLocation({ ...location, error: locationError });           
            return;
        }
        navigation.navigate('ConnectSocials')          
    };

  return (
    <View style={styles.container}>       
        <Text style={styles.emailText}> Welcome to </Text>
        <Text style={styles.emailText}>  Spotstitch, {email.slice(0,3).toUpperCase()}. </Text>
     
        <View style={styles.emailContainer}>
            <Image source={require( './assets/letsget.png' )} />
        </View>
        <View >
            <TextInput 
                style={{ height:150, width:340 }}
                numberOfLines={10}
                multiline={true}
                label="Add your bio"
                returnKeyType="next"
                value={bio.value}
                onChangeText={(text) => setBio({ value: text, error: '' })}
                error={!!bio.error}
                errorText={bio.error}
                autoCapitalize="none"
                placeholder="Hey, my name is..."                
                onFocus={()=> setkeyFocus(false)}
                onBlur={()=> setkeyFocus(true)}
            />
        </View>
        <View style={ styles.phoneContainer}>
            <TextInput
                label="Location"
                returnKeyType="next"
                value={location.value}
                onChangeText={(text) => setLocation({ value: text, error: '' })}
                error = {!!location.error}
                errorText={location.error}
                autoCapitalize="none"
                onFocus={()=> setkeyFocus(false)}
                onBlur={()=> setkeyFocus(true)}
                placeholder="Toronto, ON"
            />
        </View>

        {keyFocus ?
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
        :null} 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
      backgroundColor: 'white',
      width: '100%',
    },

    emailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        marginBottom: 10,
    },

    emailText: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 38,
    },

    messageText: {
        fontSize: 16,
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

    imageText: {
        alignItems: 'left',
    },

    phoneContainer: {
      width: '100%',
      maxWidth: 340,
  },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        // maxWidth:340,
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
    },
})
