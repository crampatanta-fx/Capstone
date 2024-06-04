import React ,{useState}from 'react';
import { Image , StyleSheet, Platform, StatusBar , View, Text, Alert , TouchableOpacity} from 'react-native';

function AddBannerPhoto({navigation}) {
    const [addBannerPhoto,setAddBannerPhoto] = useState(false)

    const onNextPressed = () => {
             
        if (!addBannerPhoto) {
            Alert.alert('Warning', 'Please select banner photo.', [          
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);        
            return;
        }
        navigation.navigate('SelectTopic')          
    };

    return (
        < View style={ styles.container}>
        <View style={ styles.maintext  }>
            <Image source={require( './assets/add.png' )}
            />
        </View>
        <View style={ styles.midtext}>
            <Image source={require( './assets/personal.png')}
            />
        </View>
        <View style={ styles.layer} >            
            <TouchableOpacity
                style={styles.camera}
                onPress={() => { console.log('Camera'), setAddBannerPhoto(true)  }}
            >
                <Image source={require( './assets/cameraIcon.png')}/> 
            </TouchableOpacity>
        </View>
        <View  style={ styles.imagecontainer }>
            <TouchableOpacity
            style={styles.image}
            onPress={() => { console.log('Edit') }}
            >
            <Image source={require( './assets/editIcon.png')}/> 
            </TouchableOpacity>
            <Image
            source={require( './assets/avatar.png')}           
            />
            <Text style={ styles.username}>John Doe</Text>
        </View>
        <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={require( './assets/back2.png')} onPress={() => navigation.goBack()} />    
                </TouchableOpacity>    
                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.push('SelectTopic')} >
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
        alignItems : 'center',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%',
    },
    layer:{
        height:'25%',
        width:'100%',
        backgroundColor:"#D4EAC3"
    },
    maintext:{
        justifyContent:'center',
        height:'20%',      
    },
    midtext:{             
        height:'6%',     
    },
    camera: {
        position: 'absolute',
        top: '6%',
        right: '2%',
        padding: 2,  
        zIndex: 1,
      },
      image: {
        position: 'absolute',
        top: '2%',
        right: '2%',  
        zIndex: 1,
      }, 
      imagecontainer:{
        position:'absolute',
        top: Platform.OS === 'android'? '50%':'50%', 
        zIndex:0
      },
      username: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop:'15%'
      },
      lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})


export default AddBannerPhoto;