import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function AboutApp({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Flecha de regreso */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={28} color="#002E73" />
          </TouchableOpacity>
        </View>

        {/* Título "Acerca de la App" más abajo */}
        <Text style={styles.title}>Acerca de la App</Text>

        {/* Contenido de la página */}
        <View style={styles.contentContainer}>
          <Text style={styles.description}>
            Esta aplicación ha sido diseñada para proporcionar un seguimiento detallado de la salud y bienestar de sus usuarios. 
            A través de un análisis avanzado de datos, te permite controlar aspectos como el nivel de estrés, ansiedad y calidad del sueño.
          </Text>

          <Text style={styles.description}>
            Nuestro objetivo es ofrecerte las herramientas necesarias para mejorar tu calidad de vida mediante recomendaciones personalizadas 
            y un monitoreo constante.
          </Text>

          <Text style={styles.description}>
            Versión de la App: 1.0.0
          </Text>

          <Text style={styles.description}>
            Desarrollado por: Code Ninjas.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF', 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30, 
  },
  backButton: {
    backgroundColor: '#E0ECFF', 
    padding: 10,  
    borderRadius: 50, 
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002E73',
    textAlign: 'center', 
    marginTop: 40,       
  },
  contentContainer: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#4F8EF7',
    marginBottom: 15,
    lineHeight: 22, 
  },
});
