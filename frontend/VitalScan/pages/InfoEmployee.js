import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InfoExtra({ navigation }) {
  const userData = {
    name: 'Alejandra Peña',
    id: 'E01234',
    age: 20,
    position: 'Ingeniero de Software',
    city: 'Monterrey'
  };

  const reportData = [
    { id: 1, label: 'Estrés', percentage: '60%' },
    { id: 2, label: 'Ansiedad', percentage: '60%' },
    { id: 3, label: 'Niveles de sueño', percentage: '60%' },
  ];

  return (
    <View style={styles.container}>
      {/* Botón de retroceso que navega a la pantalla de inicio */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HomeAdmins')}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="#000" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          {/* Nombre e ID alineados a la izquierda */}
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.userId}>ID {userData.id}</Text>

          <View style={styles.reportCard}>
            <Text style={styles.reportTitle}>Resumen</Text>
            {reportData.map(item => (
              <View key={item.id} style={styles.reportItem}>
                <Text style={styles.reportLabel}>{item.label}</Text>
                <Text style={styles.reportPercentage}>{item.percentage}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Reporte</Text>
            <Ionicons name="arrow-forward-circle-outline" size={28} color="black" />
          </TouchableOpacity>
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  scrollViewContent: {
    paddingTop: 60,  // Espacio superior para evitar que el contenido quede debajo del botón de retroceso
    paddingBottom: 80,  // Espacio adicional en la parte inferior para evitar que el contenido quede oculto detrás de la barra de navegación
  },
  profileContainer: {
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#002E73',
    marginBottom: 5,
  },
  userId: {
    fontSize: 16,
    color: '#FF6B6B',
    marginBottom: 30,
  },
  reportCard: {
    backgroundColor: '#E0ECFF',
    borderRadius: 15,
    padding: 20,  // Ajustado para reducir el padding
    marginHorizontal: 20,
    marginVertical: 20,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E73',
    marginBottom: 10,
    textAlign: 'center',
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
  },
  reportPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E73',
  },
  reportButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,  // Ajustado para reducir el tamaño del botón
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20, // Espacio entre el botón y el contenido de abajo
  },
  reportButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002E73',
  },
});
