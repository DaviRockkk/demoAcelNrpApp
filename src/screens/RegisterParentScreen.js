import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterParentScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        if (!fullName || !phone || !password) {
            alert("Por favor, preencha todos os campos obrigatórios");
            return;
        }

        alert("Cadastro realizado com sucesso!");

        // Fazer: salvar dados no banco de dados
        // Para responsáveis: id, nome, telefone, email (opcional), senha
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={require("../assets/AcelLogo.png")} style={styles.logo} />
            <Text style={styles.title}>Crie sua conta</Text>

            <TextInput 
            style={styles.input}
            placeholder={"Nome completo"}
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
            autoCorrect={false}
            />
            <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            />
            <TextInput
            style={styles.input}
            placeholder="Email (opcional)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            />
            <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerText}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
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
        paddingHorizontal: 20,
        marginBottom: 15,
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
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
});

export default RegisterParentScreen;