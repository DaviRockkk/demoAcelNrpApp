import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import RegisterParentScreen from "./RegisterParentScreen";
// import RegisterChildScreen from "./RegisterChildScreen";

const AccountTypeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Que tipo de conta deseja criar</Text>
            <TouchableOpacity 
            style={styles.optionButton}
            onPress={() => navigation.navigate("RegisterParentScreen")}
            >
                <Text style={styles.optionText}>Sou responsável</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("RegisterChildScreen")}
            >
                <Text style={styles.optionText}>Sou criança</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#212D55',
    },
    optionButton: {
        backgroundColor: '#212D55',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    optionText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.7,
    },
});

export default AccountTypeScreen;