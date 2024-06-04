import React, {useRef , useState} from 'react';
import { Alert,Image , StyleSheet, Platform, StatusBar , View, Button, TouchableOpacity} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";

function AddProfilePhoto({navigation,route}) {
    const [addPhoto,setAddPhoto] = useState(false)
    const refRBSheet = useRef();

    const onNextPressed = () => {
             
        if (!addPhoto) {
            Alert.alert('Warning', 'Please add profile photo.', [          
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);        
            return;
        }
        navigation.navigate('AddBannerPhoto')          
    };

    return (       
        < View style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( './assets/addPhoto.png' )} />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( './assets/show.png')} />
            </View>  
            <View style={{zIndex:1}}>
                <TouchableOpacity
                style={styles.image}
                onPress={() => {refRBSheet.current.open() , setAddPhoto(true) }}
                >
                    <Image source={require( './assets/cameraIcon.png')}/> 
                </TouchableOpacity>
                <Image  source={require( './assets/empty-avatar.png')} />            
            </View>    
                           
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{                  
                draggableIcon: {
                    backgroundColor: "grey"
                },
                container:{
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    alignItems:'center',
                    justifyContent:'space-evenly',
                }
                }}
            >
                <TouchableOpacity onPress={ ()=> console.log("Take photo")}>
                    <Image source={require( './assets/takePhotoIcon.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=> console.log("Choose photo")}>
                    <Image source={require( './assets/chooseFromIcon.png')}/> 
                </TouchableOpacity>
            </RBSheet>

            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack() } >
                    <Image source={require( './assets/back2.png')}  />    
                </TouchableOpacity>    
                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.push('AddBannerPhoto')} >
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
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight*3:'20%'
    },
    maintext:{
        justifyContent:'center',
        height:'20%',      
    },
    midtext:{             
        height:'6%',     
    },
    image: {
        // backgroundColor: '#C7C9CB',
        position: 'absolute',
        top: '2%',
        right: '2%',
        // padding: 2,
        // borderRadius: 7,
        zIndex: 3,
    },
    lastRow:{
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})

export default AddProfilePhoto;