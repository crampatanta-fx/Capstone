import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";


function SkipButton({
    label = 'Skip',
    nextScreen,
    buttonStyle = styles.skipButton,
    textStyle = styles.buttonText,
}) 
{
    const navigation = useNavigation();

    const skipHandler = () => {
        navigation.navigate(nextScreen);
    };

    return (
        <TouchableOpacity style={buttonStyle} onPress={skipHandler}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

SkipButton.propTypes = {
    nextScreen: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    skipButton:{

    },

    buttonText:{
        color:'#AFABAB',
        fontFamily:'poppins',
        fontSize: 16,
        fontWeight: 'medium',
    },
})

export default SkipButton;