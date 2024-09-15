import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Importar iconos de Ionicons

export default function ProfileAdmins({ navigation }) {
  const userData = {
    name: 'Alejandra Peña',
    id: 'E01234',
    age: 20,
    position: 'Ingeniero de Software',
    city: 'Monterrey'
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileContainer}>
          {/* Nombre e ID alineados a la izquierda */}
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.userId}>ID {userData.id}</Text>

          {/* Tarjetas de información */}
          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Edad</Text>
              <Text style={styles.infoValue}>{userData.age}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Puesto</Text>
              <Text style={styles.infoValue}>{userData.position}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Ciudad</Text>
              <Text style={styles.infoValue}>{userData.city}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        {/* Botón para navegar a Home */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>
        {/* Icono de perfil en azul indicando la pantalla activa */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#4F8EF7" />
          <Text style={[styles.menuText, { color: '#4F8EF7' }]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',  
  },
  scrollView: {
    flex: 1,
  },
  profileContainer: {
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002E73',
    textAlign: 'left',
    marginTop: 40,
    marginBottom: 5,
  },
  userId: {
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'left',
    marginBottom: 30,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#E0ECFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    color: '#4F8EF7',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E73',
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
