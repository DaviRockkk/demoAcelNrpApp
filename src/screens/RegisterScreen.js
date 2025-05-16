import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }
        alert("Cadastro realizado com sucesso!");
    };

    return (
        <View style={styles.container}>
            <Image source={require("../assets/AcelLogo.png")} style={styles.logo} />
            <Text style={styles.title}>Crie sua conta</Text>

            <TextInput style={styles.input} placeholder="Nome completo" />
            <TextInput 
                style={styles.input}
                placeholder='Seu email'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            /> 
            <TextInput 
                style={styles.input}
                placeholder='Sua senha'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput 
                style={styles.input}
                placeholder='Confirme sua senha'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerText}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={styles.loginPrompt}>
                Já tem uma conta?{' '}
                <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>Conecte-se</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
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
        marginBottom: 24,
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
    registerButton: {
        backgroundColor: '#212D55',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    registerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
    loginPrompt: {
        textAlign: 'center',
        color: '#333',
    },
    loginLink: {
        color: '#212D55',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;