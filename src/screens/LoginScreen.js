import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/AcelLogo.png')} style={styles.logo} />
            <Text style={styles.title}>Bem-vindo de volta!</Text>

            <TextInput 
                style={styles.input}
                placeholder="Seu email"
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false} 
                placeholderTextColor={'#212D55'}
            />
            <TextInput 
                style={styles.input}
                placeholder="Sua senha"
                secureTextEntry
                autoCapitalize='none'
                autoCorrect={false}
                placeholderTextColor={'#212D55'}
            />

            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.registerPrompt}>
                Não tem uma conta?{' '}
                <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}>Cadastre-se</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20,
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60,
        color: '#212D55',
    },
    input: {
        height: 50,
        backgroundColor: '#F0EFF4',
        borderRadius: 25,
        paddingHorizontal: 18,
        marginTop: 15,
        textAlign: 'center',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#444',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#212D55',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
    registerPrompt: {
        textAlign: 'center',
        color: '#333',
    },
    registerLink: {
        color: '#212D55',
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
});

export default LoginScreen;