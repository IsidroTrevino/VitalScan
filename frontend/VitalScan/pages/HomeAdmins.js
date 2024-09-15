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
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.reportButton}>
            <Ionicons name="warning-outline" size={50} color="red" />
                <View style={styles.iconTextContainer}>
                  <Text style={styles.reportButtonText}>John Doe</Text>
                  <Text style={styles.userId}>ID: E01234</Text>
                </View>
                <Ionicons name="arrow-forward-circle-outline" size={50} color="black" />
            </TouchableOpacity>
          </View>

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
  headerContainer: {
    padding: 20,
    marginTop: 50, // Mueve el nombre e ID más abajo
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
    marginStart: 50,
    marginEnd: 10,
    marginTop: 40,
    marginTop: 66,
    paddingHorizontal: 20,
    color: '#002E73',
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
  reportButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20, // Aumentar para hacer el botón más grande
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  reportButtonText: {
    fontSize: 25, // Aumentar el tamaño del texto
    fontWeight: 'bold', // Cambiar a negritas
    marginEnd: 30,
    marginBottom: 10,
    marginTop: 10,
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



