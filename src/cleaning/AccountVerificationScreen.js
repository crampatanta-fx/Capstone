// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// import BackButton from './BackButton';
// import SkipButton from './SkipButton';

// function AccountVerificationScreen() {

//     return (
//         <View style={styles.container}>
//             <View style={styles.textContainer}>
//                 <Text style={styles.header}>Verify your{"\n"}account.</Text>
//                 <Text style={styles.confirmationText}>A confirmation email has been sent to *********@email.com</Text>
//                 <Text style={styles.sendAgainText}>Didn't receive an email? Send again.</Text>
//             </View>
//             <View style={styles.backButton}>
//                 <BackButton/>
//             </View>
//             <SkipButton nextScreen='ImproveSecurityScreen'/>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     backButton:{
//         position: 'absolute',
//         bottom: 55,
//         left: 35,
//     },
    
//     confirmationText:{
//         fontFamily: 'poppins',
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         margin: 10,
//         width:'100%',
//     },
    
//     container:{
//         flex: 1,
//         position: 'relative',
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'top',
//         padding: 25,
//     },

//     header:{
//         marginTop: 22,
//         margin: 20,
//         fontFamily: 'poppins',
//         fontSize: 36,
//         fontWeight: 'bold',
//         lineHeight: '45%',
//         textAlign: 'center',
//     },

//     sendAgainText:{
//         fontFamily: 'poppins',
//         fontSize: 12,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         margin: 20,
//     },

//     textContainer:{
//         alignItems: 'center',
//         width: '100%',
//     }

// })

// export default AccountVerificationScreen;