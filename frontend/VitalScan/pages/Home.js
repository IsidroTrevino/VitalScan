import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const userData = {
    name: 'Alejandra Peña',
    id: 'E01234',
  };

  const reportData = [
    { id: 1, label: 'Estrés', percentage: '60%' },
    { id: 2, label: 'Ansiedad', percentage: '60%' },
    { id: 3, label: 'Niveles de sueño', percentage: '60%' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.userId}>ID: {userData.id}</Text>
        </View>

        {/* Tarjeta del reporte */}
        <View style={styles.reportCard}>
          <Text style={styles.reportTitle}>Resumen</Text>
          {reportData.map(item => (
            <View key={item.id} style={styles.reportItem}>
              <Text style={styles.reportLabel}>{item.id} {item.label}</Text>
              <Text style={styles.reportPercentage}>{item.percentage}</Text>
            </View>
          ))}
        </View>

        {/* Botón "Reporte" */}
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>Reporte</Text>
          <Ionicons name="arrow-forward-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </ScrollView>

      {/* Menú inferior */}
      <View style={styles.bottomMenu}>
        {/* Icono de Inicio en azul */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#4F8EF7" />
          <Text style={[styles.menuText, { color: '#4F8EF7' }]}>Inicio</Text>
        </TouchableOpacity>
        {/* Icono de Perfil */}
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
  headerContainer: {
    padding: 20,
    marginTop: 50, // Mueve el nombre e ID más abajo
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002E73',
  },
  userId: {
    fontSize: 16,
    color: '#8A8A8A',
    marginTop: 5,
  },
  reportCard: {
    backgroundColor: '#E0ECFF',
    borderRadius: 15,
    padding: 40, // Aumentar el padding para hacerla más grande
    marginHorizontal: 20,
    marginVertical: 20,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E73',
    marginBottom: 10,
    textAlign: 'center', // Centrar el texto del título
  },
  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 10,
  },
  reportLabel: {
    fontSize: 16,
    color: '#002E73',
    textAlign: 'left', // Alineado a la izquierda
  },
  reportPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E73',
    textAlign: 'right', // Alineado a la derecha
  },
  reportButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30, // Aumentar para hacer el botón más grande
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  reportButtonText: {
    fontSize: 20, // Aumentar el tamaño del texto
    fontWeight: 'bold', // Cambiar a negritas
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
