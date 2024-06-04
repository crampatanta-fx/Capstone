import React, { useState} from 'react';
import { Alert, Image , StyleSheet, Platform, StatusBar , View, TouchableOpacity} from 'react-native';
import SelectCard from './SelectCard';

function SelectTopic({navigation}) {
    const [select,setSelect] = useState("")    

    const onNextPressed = () => {      
        // Show an alert if no stitched option is selected.       
        if (!select) {
            Alert.alert('Warning', 'Please select your stitched.', [          
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);        
            return;
        }
        navigation.navigate('JoinLayerScreen')          
    };

    return (
        < View style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( './assets/let.png' )}
                />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( './assets/find.png')}
                />
            </View>
            <View style={ styles.detailtext}>
            <Image source={require( './assets/select.png')}
                />
            </View>
            <SelectCard setSelect={setSelect} select={select}/>           
            <View style={ styles.lastRow }
            >
                <TouchableOpacity onPress={() => navigation.goBack() } >
                    <Image source={require( './assets/back2.png')} />    
                </TouchableOpacity>    
                <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
                    <TouchableOpacity onPress={() => navigation.push('JoinLayerScreen')} >
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
        height:'10%',     
    },
    detailtext:{   
        justifyContent: 'center',       
        height:'5%',     
    },
    lastRow:{
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 160,
        bottom:'5%'
    }
})

export default SelectTopic;