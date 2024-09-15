import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Importar iconos de Ionicons

export default function InfoExtra({ navigation }) {
  const userData = {
    name: 'Alejandra Peña',
    id: 'E01234',
    age: 20,
    position: 'Ingeniero de Software',
    city: 'Monterrey'
    //color : 'red'
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-circle-outline" size={24} color="#black" />
      <ScrollView>
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

          {/* Sección "Más" */}
          <Text style={styles.sectionTitle}>Más</Text>
          <View style={styles.moreContainer}>
          <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('Support')}>
  <Ionicons name="notifications-outline" size={24} color="#4F8EF7" />
  <Text style={styles.moreButtonText}>Soporte</Text>
</TouchableOpacity>
            <TouchableOpacity 
              style={[styles.moreButton, { marginTop: 15 }]} 
              onPress={() => navigation.navigate('AboutApp')}
            >
              <Ionicons name="information-circle-outline" size={24} color="#4F8EF7" />
              <Text style={styles.moreButtonText}>Acerca de la App</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',  // Fondo claro general
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
  // Subtítulo "Más"
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E73',
    marginBottom: 10,
    marginTop: 30,  // Espacio superior para desplazarlo más abajo
  },
  // Contenedor para los botones de "Soporte" y "Acerca de la App"
  moreContainer: {
    marginBottom: 20,
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  moreButtonText: {
    fontSize: 16,
    color: '#4F8EF7',
    marginLeft: 10,  // Espacio entre el ícono y el texto
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