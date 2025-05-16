import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Touchable, ScrollView, TouchableOpacity } from 'react-native';

export const Eventos = [
    { id: '1', title: 'Futebol Solidário', description: 'Campeonato beneficente no campo municipal.', image: require('../assets/Screenshot_1.png') },
  { id: '2', title: 'Palestra: Saúde Mental', description: 'Palestra com profissionais da área.', image: require('../assets/Screenshot_2.png') },
  { id: '3', title: 'Mutirão de Limpeza', description: 'Limpeza do parque central com voluntários.', image: require('../assets/Screenshot_5.png') },
  { id: '4', title: 'Feira da Comunidade', description: 'Venda de produtos artesanais e comidas típicas.', image: require('../assets/Screenshot_6.png') },
  { id: '5', title: 'Campanha de Doação de Sangue', description: 'Parceria com o hemocentro da cidade.', image: require('../assets/Screenshot_4.png') },
  { id: '6', title: 'Cinema ao Ar Livre', description: 'Sessão gratuita no campo da praça.', image: require('../assets/Screenshot_7.png') },

];

const EventScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {Eventos.map((event) => (
                <TouchableOpacity key={event.id} style={styles.card}>
                    <Image source={event.image} style={styles.image} />
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{event.title}</Text>
                        <Text style={styles.description}>{event.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF4',
        padding: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    textWrapper: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black', 
        marginBottom: 5,
    },
    description: {
        color: 'black',
        fontSize: 14,
    },
});

export default EventScreen;