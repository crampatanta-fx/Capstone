import React , { useState} from 'react'
import TextInput from './components/TextInput'
import Header from './components/Header'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import { theme } from './components/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { twoFAValidator } from './helpers/twoFAValidator'

export default function SignInTwoFA({ navigation, route }) {
  const [twoFA, setTwoFA] = useState({ value:'', error:''})
  const userPhoneNumber = '000-000-0000' // route.params

  // Extracting the email value from the route parameters
  const email = route.params.email.value

  // Function to handle the action when the "Continue" button is pressed.
  const onContinuePressed = () => {             
    const twoFAError = twoFAValidator(twoFA.value);
    if (twoFAError) {
      setTwoFA({ ...twoFA, error: twoFAError });           
      return;
    }
    navigation.navigate('CreateBio', {email} )         
};

  return (
    <SafeAreaView style={styles.container}>
      <Header>Verify it's you.</Header>
      <View style={styles.phoneContainer}>
        <Text style={styles.messageText}>An authentication code has been sent to</Text>
        <View style={styles.row}>
          <Text style={styles.phoneText}>
            {'***-***-' + userPhoneNumber.slice(-4)}
          </Text>
          <Text style={styles.messageText}> and will expire after 5</Text>
        </View>
        <Text style={styles.messageText}> minutes.</Text>
      </View>
      <TextInput
        label="6-digit code"
        returnKeyType="done"
        value={twoFA.value}
        onChangeText={(text) => setTwoFA({ value: text, error: '' })}
        error={!!twoFA.error}
        errorText={twoFA.error}
        maxLength={6}
        keyboardType="numeric"
        placeholder = "123456"
      />
      <Button
        style={styles.signInButton}
        mode="contained"
        onPress={onContinuePressed}
      >

      <Text style={styles.signInText}>CONTINUE</Text>
      </Button>
      <View style={styles.row}>
        <Text style={styles.codeText}>Need another code? </Text>
        <TouchableOpacity onPress={() => {console.log("Send again")}}>
          <Text style={styles.link}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    phoneContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    phoneText: {
      fontWeight: 'bold',
    },
    button: {
      marginTop: 10,
      marginBottom: 20,
      width: '40%',
      backgroundColor: theme.colors.lightBlue
    },
    buttonText: {
      color: theme.colors.text,
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
    signInButton: {
        marginTop: 20,
        marginBottom:20,
        width: '40%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#8CBDEB'
    },
      signInText: {
        color: '#8CBDEB',
        fontWeight: 'bold',
      },


  })
  