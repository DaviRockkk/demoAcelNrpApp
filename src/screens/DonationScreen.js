import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DonationScreen = () => {
    const handleDonationPress = () => {
        // adicionar a lógica para processar a doação
        alert('Pix da comunidade: ');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha sua forma de doação</Text>
            <Text style={styles.description}>Ajude com o que puder, a partir de R$1,00 já está valendo!</Text>
            <TouchableOpacity style={styles.card} onPress={handleDonationPress}>
                <Ionicons name="qr-code" size={24} color={'#212D55'} />
                <Text style={styles.cardText}>Doação via PIX</Text>
            </TouchableOpacity>
    
            <View style={styles.card}>
                <Ionicons name="pin" size={24} color={'#212D55'} />
                <Text style={styles.cardText}>Locais de doação</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0EFF4',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    description: {
        marginBottom: 30,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
    },
    cardText: {
        marginLeft: 10,
        color: 'black',
        fontSize: 16,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
});

export default DonationScreen;