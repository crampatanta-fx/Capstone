import React, { useEffect } from 'react';
import Background from './components/Background';
import { Image, StyleSheet} from 'react-native'
import Paragraph from './Paragraph';

export default function LoginScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Background>
            <Image source={require('./assets/roundLogo.png')} style={styles.image} />
            <Paragraph>SPOTSTITCH</Paragraph>
        </Background>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
