import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Button from './components/Button'
import TextInput from './components/TextInput'
import { nameValidator } from './helpers/nameValidator'
import { emailValidator } from './helpers/emailValidator'
import { usernameValidator } from './helpers/usernameValidator'
import { passwordValidator } from './helpers/passwordValidator'
import Icon from './components/Icon'
import Logo from './components/Logo'
import { socialIconList } from './components/Icon/socialIconList'
import HorizontalLine from './components/HorizontalLine'

export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [username, setUsername] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [showPassword, setShowPassword] = useState(false);
  
    const onSignupPressed = () => {
        const nameError = nameValidator(name.value);
        const emailError = emailValidator(email.value);
        const usernameError = usernameValidator(name.value);
        const passwordError = passwordValidator(password.value);

        if (nameError || emailError || usernameError || passwordError) {
            setName({ ...name, error: nameError });
            setEmail({ ...email, error: emailError });
            setUsername({ ...username, error: usernameError });
            setPassword({ ...password, error: passwordError });
            return;
        }
        navigation.navigate('ConfirmationScreen' , {email} )        
    }; 

    return (
        <View style={styles.container}>
            <Logo />
            <View style={ styles.mainText}>
                <Image source={require( './assets/signupSocMed.png' )} />
            </View>

            <View style={[styles.row, styles.icons]}>
                {/* Mapping through the socialIconList to render each social icon */}
                {socialIconList.map((item) => {
                  return (
                    <Icon
                      key={item.name}
                      name={item.name}
                      containerStyle={styles.iconContainer}
                      onPress={item.onPress}
                      type='font-awesome'
                    />
                  );
                })}
            </View>

            <HorizontalLine text="Or use your email" />
            
            <TextInput
                label="Full name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
            />

            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Username"
                returnKeyType="next"
                value={username.value}
                onChangeText={(text) => setUsername({ value: text, error: '' })}
                error={!!username.error}
                errorText={username.error}
                autoCapitalize="none"
                autoCompleteType="username"
                textContentType="username"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry={!showPassword}
            />

            <Button style={styles.signUpButton} mode="contained" onPress={onSignupPressed}>
                <Text style={styles.signUpText}>SIGN UP</Text>
            </Button>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainText:{
        marginTop: 30,
      },

    row: {
        flexDirection: 'row',
        marginTop: 4,
    },

    icons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        iconColor: 'green',
    },

    iconContainer: {
        marginHorizontal: 10,
        marginTop: 10,
    },

    signUpButton: {
        backgroundColor: '#8CBDEB',
        width: 110,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },

    signUpText: {
        color: "#FFFFFF",
        fontWeight: 'bold',
    },
})
  