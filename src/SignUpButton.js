import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
// import AccountVerificationScreen from "./AccountVerificationScreen";

function SignUpButton({
    label = 'SIGN UP',
    submitHandler,
    buttonStyle = styles.signUpButton,
    textStyle = styles.buttonText,
    disabled = false,
    
})

{    
    const navigation = useNavigation();

    const signUpHandler = () => {

        if(submitHandler){
            submitHandler();
        }

        // navigation.navigate('AccountVerificationScreen');
        navigation.navigate('AddProfileScreen');
    };

    return (
        <TouchableOpacity style={[buttonStyle, disabled ? styles.disabled : null]} 
                            onPress={disabled ? null : signUpHandler} disabled={disabled}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

SignUpButton.propTypes = {
    submitHandler: PropTypes.func,
    disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
    signUpButton:{
        backgroundColor: '#8CBDEB',
        width: 105,
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

    buttonText:{
        color: 'white',
        // fontFamily: 'poppins',
        fontWeight: 'bold',
        margin: 10,
    },

    disabled: {
        opacity: 10,
    }
})

export default SignUpButton;