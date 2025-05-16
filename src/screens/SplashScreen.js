import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.replace('Dashboard');
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/AcelLogo.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F1A2F',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '212D55',
    },
});

export default SplashScreen;