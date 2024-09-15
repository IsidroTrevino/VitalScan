import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Support({ navigation }) {
  const faqData = [
    {
      question: '¿Cómo puedo restablecer mi contraseña?',
      answer: 'Puedes restablecer tu contraseña desde la pantalla de inicio de sesión seleccionando "¿Olvidaste tu contraseña?". Te enviaremos un correo con los pasos para restablecerla.',
    },
    {
      question: '¿Cómo se recopilan mis datos de salud?',
      answer: 'La aplicación recopila los datos de salud a través de sensores conectados y entradas manuales que proporcionas en la sección de monitoreo.',
    },
    {
      question: '¿Es segura mi información personal?',
      answer: 'Sí, la seguridad de tu información es nuestra máxima prioridad. Utilizamos encriptación avanzada para proteger tus datos.',
    },
    {
      question: '¿Cómo puedo contactar al soporte técnico?',
      answer: 'Puedes contactarnos a través de la opción "Contáctanos" dentro de esta página o escribirnos a soporte@vitalscan.com.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Flecha de regreso */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={28} color="#002E73" />
          </TouchableOpacity>
        </View>

        {/* Título "Soporte" */}
        <Text style={styles.title}>Soporte</Text>

        {/* Sección de preguntas frecuentes */}
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqCard}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        ))}

        {/* Botón para contactar soporte */}
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contáctanos</Text>
          <Ionicons name="mail-outline" size={24} color="black" />
        </TouchableOpacity>
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
    marginTop: 20, 
    marginBottom: 20,
  },
  faqCard: {
    backgroundColor: '#E0ECFF',
    borderRadius: 15,
    padding: 15, 
    marginHorizontal: 20,
    marginVertical: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E73',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#4F8EF7',
    lineHeight: 20, 
  },
  contactButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  contactButtonText: {
    fontSize: 18,
    color: '#002E73',
  },
});
