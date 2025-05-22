import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EventScreen from '../screens/EventScreen';
import DonationScreen from '../screens/DonationScreen';
import SplashScreen from '../screens/SplashScreen';
import ContactScreen from '../screens/ContactScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// temporário, pode ignorar
const Placeholder = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route.name}</Text>
  </View>
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#212D55',
      tabBarIcon: ({ color, size }) => {
        let iconName = 'home';
        if (route.name === 'Eventos') iconName = 'calendar';
        if (route.name === 'Configurações') iconName = 'settings';
        if (route.name === 'Doações') iconName = 'heart';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false
    })}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Eventos" component={EventScreen} />
    <Tab.Screen name="Doações" component={DonationScreen} />
    <Tab.Screen name="Configurações" component={Placeholder} />
  </Tab.Navigator>
);

const DrawerHeaderRight = ({ navigation }) => {
  const isLoggedIn = false; // criar autenticação no futuro
  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate(isLoggedIn ? 'Perfil' : 'Login')}>
      <Ionicons name="person-circle" size={28} color="#212D55" />
    </TouchableOpacity>
  );
};

const DrawerMenu = ({navigation}) => (
  <Drawer.Navigator screenOptions={{ headerRight: () => <DrawerHeaderRight navigation={navigation} />}}>
    <Drawer.Screen name="AcelNRP" component={Tabs} />
    <Drawer.Screen name="Perfil" component={Placeholder} />
    <Drawer.Screen name="Contato" component={ContactScreen} />
    <Drawer.Screen name="Configurações" component={Placeholder} />
    <Drawer.Screen name="Sair" component={Placeholder} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Dashboard" component={DrawerMenu} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true}}/>
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
