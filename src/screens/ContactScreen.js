import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ContactScreen = () => {
    const email = 'futsalsocialnrp@hotmail.com';
    const phone = '+5527996258909';

    return (
        <View style={styles.container}>
            <View style={styles.contactContainer}>
                <View style={styles.contactEmail}>
                    <Text style={styles.contactText}>E-mail: {email}</Text>
                    <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('mailto:${email}')}>
                        <Ionicons name='mail' size={24} color={'#212D55'} />
                        <Text style={styles.contactLink}>Enviar e-mail</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contactPhone}>
                    <Text style={styles.contactText}>Telefone: {phone}</Text>
                    <TouchableOpacity style={styles.contactButton} onPress={() => Linking.openURL('tel:${phone}')}>
                        <Ionicons name='call' size={24} color={'#212D55'} />
                        <Text style={styles.contactLink}>Ligar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactButton}>
                        <Ionicons name='logo-whatsapp' size={24} color={'#212D55'} />
                        <Text style={styles.contactLink} onPress={() => Linking.openURL('https://wa.me/5527996258909')}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF4',
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    contactContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    contactEmail: {
        marginBottom: 60,
    },
    contactPhone: {
        marginBottom: 20,
    },
    contactText: {
        fontSize: 18,
        marginBottom: 15,
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    contactLink: {
        marginLeft: 7,
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default ContactScreen;