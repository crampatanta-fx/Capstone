// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const SocialMediaConnectScreen = ({ onConnectFacebook, onConnectTwitter, onConnectInstagram, onConnectGoogle, onSkip, onNext, onBack }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Connect your social media.</Text>
//       <Text style={styles.subHeader}>Link your accounts for a more immersive experience.</Text>
      
//       {/* Social Media Buttons */}
//       <TouchableOpacity style={styles.button} onPress={onConnectFacebook}>
//         <FontAwesome name="facebook" size={20} color="#3b5998" style={styles.icon} />
//         <Text style={styles.buttonText}>Facebook</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={onConnectTwitter}>
//         <FontAwesome name="twitter" size={20} color="#00acee" style={styles.icon} />
//         <Text style={styles.buttonText}>Twitter</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={onConnectInstagram}>
//         <FontAwesome name="instagram" size={20} color="#C13584" style={styles.icon} />
//         <Text style={styles.buttonText}>Instagram</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={onConnectGoogle}>
//         <FontAwesome name="google" size={20} color="#DB4437" style={styles.icon} />
//         <Text style={styles.buttonText}>Google</Text>
//       </TouchableOpacity>

//       {/* Navigation Buttons */}
//       <View style={styles.navContainer}>
//         <TouchableOpacity onPress={onBack}>
//           <Text style={styles.navText}>Back</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onSkip}>
//           <Text style={styles.navText}>Skip</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton} onPress={onNext}>
//           <Text style={styles.nextButtonText}>NEXT</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // Styles for the SocialMediaConnectScreen component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subHeader: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e8e8e8',
//     padding: 15,
//     borderRadius: 5,
//     width: '100%',
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#585858',
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   navContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 20,
//   },
//   navText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   nextButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//   },
//   nextButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default SocialMediaConnectScreen;
