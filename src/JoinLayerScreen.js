import React,{ useState} from 'react';
import { Alert,StyleSheet, View , SafeAreaView , Platform , StatusBar, Image ,TouchableOpacity } from 'react-native';  
import { dummyData } from './dummyData';
import LayerCard from './LayerCard';

function JoinLayerScreen( {navigation,route} ) {
    const [layer,setLayer] = useState("")

    const onNextPressed = () => {          
        // Check if a layer option is selected.   
        if (!layer) {
            // Show an alert if no layer option is selected.
            Alert.alert('Warning', 'Please select your layer.', [          
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);        
            return;
        }
        console.log("Done Pressed")         
    };
    return (
        < SafeAreaView style={ styles.container}>
            <View style={ styles.maintext  }>
                <Image source={require( './assets/sew.png' )} />
            </View>
            <View style={ styles.midtext}>
                <Image source={require( './assets/layer.png')} />
            </View>
            <View style={ styles.detailtext}>
                <Image source={require( './assets/detail.png')} />
            </View>           
            <LayerCard dummyData={ dummyData } setLayer={setLayer} layer={layer} />  
            <View style={ styles.lastRow } >
                <TouchableOpacity onPress={() => navigation.goBack() } >
                    <Image source={require( './assets/back2.png')} />    
                </TouchableOpacity>    
                <TouchableOpacity onPress={onNextPressed} >
                    <Image source={require( './assets/doneBtn.png')} />    
                </TouchableOpacity >            
            </View>  
        </SafeAreaView>        
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
    detailtext:{          
        height:'8%',     
    },
    lastRow:{
        flexDirection:'row',
        alignItems:'center',   
        columnGap: 200,
        bottom:'5%'
    }
})

export default JoinLayerScreen;