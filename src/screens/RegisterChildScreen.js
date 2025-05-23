import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegisterChildScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        if (!fullName || !phone || !birthDate || !password) {
            alert("Por favor, preencha todos os campos obrigatórios");
            return;
        }

        alert("Cadastro realizado com sucesso!");
    };

    const formatDate = (date) => {
        return date.toLocaleDateString("pt-BR");
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
            />
        </ScrollView>
    );
};

export default RegisterChildScreen;