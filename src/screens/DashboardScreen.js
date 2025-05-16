import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import Eventos from './EventScreen';
import EventScreen from './EventScreen';
import ContactScreen from './ContactScreen';

// adicionar mais slides aqui
const Slides = [
  { id: '1', title: 'Evento de Futebol', image: require('../assets/Screenshot_1.png') },
  { id: '2', title: 'Palestra Comunitária', image: require('../assets/Screenshot_2.png') },
];

const CARD_DATA = [
  { icon: 'calendar', label: 'Eventos', route: 'EventScreen' },
  { icon: 'football', label: 'Atividades' },
  { icon: 'man', label: 'Voluntariar' },
  { icon: 'chatbox-ellipses', label: 'Fale conosco', route: 'ContactScreen' },
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper showsPagination autoplay autoplayTimeout={4} loop>
          {Slides.map((item) => (
            <TouchableOpacity key={item.id} style={styles.slide} onPress={() => navigation.navigate('Eventos')}>
              <ImageBackground source={item.image} style={styles.slideImage} resizeMode="cover" />
              <View style={styles.overlay}>
                <Text style={styles.slideTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>

      <View style={styles.cardContainer}>
        {CARD_DATA.map(({ icon, label, route }, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(route)}>
            <Ionicons name={icon} size={28} color="#212D55" />
            <Text style={styles.cardLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#F0EFF4',
  },
  sliderContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  slide: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212D55',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slideTitle: {
    color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: -80,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    marginTop: 80,
  },
  dotInactive: {
    backgroundColor: '#FFFFFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  dotAtive: {
    backgroundColor: '#212D55',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    width: '48%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardLabel: {
    marginTop: 8,
    color: '#212D55',
    fontWeight: '500',
    textAlign: 'center'
  },
});

export default DashboardScreen;
