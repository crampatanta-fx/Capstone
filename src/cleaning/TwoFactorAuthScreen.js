// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const TwoFactorAuthScreen = ({ onBackPress, onNextPress }) => {
//   const [code, setCode] = useState('');

//   return (
//     <View style={styles.container}>
//       <MaterialIcons name="check-circle" size={32} color="green" style={styles.checkIcon} />
//       <Text style={styles.header}>2FA Activation</Text>
//       <Text style={styles.infoText}>
//         An authentication code has been sent to
//         {'\n'}***-****-0000 and will expire after 5 minutes.
//       </Text>
//       <TextInput
//         style={styles.input}
//         placeholder="6-digit code"
//         keyboardType="number-pad"
//         maxLength={6}
//         onChangeText={setCode}
//         value={code}
//       />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
//           <Text style={styles.buttonText}>Back</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton} onPress={onNextPress}>
//           <Text style={styles.buttonText}>NEXT</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={ styles.lastRow } >
//                 <TouchableOpacity onPress={() => console.log("goback") } >
//                     <Image source={require( './assets/back2.png')} onPress={() => navigation.goBack()} />    
//                 </TouchableOpacity>    
//                 <View style={{ flexDirection:'row', alignItems:'center' , columnGap:20}}>
//                     <TouchableOpacity onPress={() => console.log("Skip")} >
//                         <Image source={require( './assets/skipBtn.png')} />    
//                     </TouchableOpacity >            
//                     <TouchableOpacity onPress={() => console.log("Done")} >
//                         <Image source={require( './assets/nextBtn.png')} />    
//                     </TouchableOpacity >    
//                 </View>
//         </View> 


//     </View>
    
    
//   );
// };

// // Styles for the TwoFactorAuthScreen component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   checkIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     fontSize: 18,
//     padding: 10,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     width: '100%',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   backButton: {
//     backgroundColor: '#e8e8e8',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     marginRight: 10,
//   },
//   nextButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   lastRow:{
//       position:'absolute',
//       flexDirection:'row',
//       alignItems:'center',   
//       columnGap: 180,
//       bottom:'5%'
//   }
// });

// export default TwoFactorAuthScreen;
