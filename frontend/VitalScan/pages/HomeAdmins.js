import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../components/Input';
import React, { useState } from 'react';

export default function HomeAdmins({ navigation }) {
    const [search, setSearchh] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Vital Scan</Text>

        <Input
                placeholder="Buscar"
                value={search}
                onChangeText={setSearchh}
                secureTextEntry={false}
                isPassword={false}
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="red" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="red" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="orange" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="orange" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="green" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="green" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="green" />
            <View style={styles.iconTextContainer}>
              <Text style={styles.reportButtonText}>John Doe</Text>
              <Text style={styles.userId}>ID: E01234</Text>
            </View>
            <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.bottomMenu}>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={24} color="#4F8EF7" />
            <Text style={[styles.menuText, { color: '#4F8EF7' }]}>Inicio</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF', // Color de fondo claro
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
    marginStart: 50,
    marginEnd: 10,
    marginTop: 66,
    paddingHorizontal: 20,
    color: '#002E73',
  },
  scrollViewContent: {
    paddingBottom: 80, // Espacio adicional en la parte inferior para evitar que el último botón quede oculto detrás de la barra de navegación
  },
  reportButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15, // Espacio entre los botones
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  iconTextContainer: {
    flex: 1,
    marginStart: 15,
  },
  reportButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  userId: {
    fontSize: 14,
    color: '#8A8A8A',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  menuButton: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
  },
});
