// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const CreateBioScreen = ({ navigation }) => {
//   const [bio, setBio] = useState('');
//   const [location, setLocation] = useState('Toronto, ON');

//   // Function to handle the "Next" action
//   const handleNext = () => {
//     // Insert validation or data storage logic here if needed
//     navigation.navigate('NextScreen'); // Replace 'NextScreen' with your actual next screen's name
//   };

//   // Function to handle the "Back" action
//   const handleBack = () => {
//     // Insert back navigation logic here
//     // For example, if using a stack navigator:
//     // navigation.goBack();
//   };

//   // Function to handle the "Skip" action
//   const handleSkip = () => {
//     // Insert skip logic here
//     // For example, navigating to a different screen without storing onboarding data:
//     // navigation.navigate('SomeOtherScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Spotstitch, Jane.</Text>
//       <Text style={styles.subtitle}>Let's get to know you.</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Hey, my name is..."
//         onChangeText={setBio}
//         value={bio}
//       />

//       <TextInput
//         style={styles.input}
//         onChangeText={setLocation}
//         value={location}
//       />

//       <View style={styles.buttonContainer}>
//         <Button title="Back" onPress={handleBack} />
//         <Button title="Skip" onPress={handleSkip} />
//         <Button title="NEXT" onPress={handleNext} />
//       </View>
//     </View>
//   );
// };

// // Styles for the OnboardingScreen component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 20,
//   },
// });

// export default CreateBioScreen;
