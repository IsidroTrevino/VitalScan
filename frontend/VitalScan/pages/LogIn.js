import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), 
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log('Login exitoso', data);

                // Guardar idUsuario y firstLogin en AsyncStorage
                await AsyncStorage.setItem('idUsuario', String(data.idUsuario));
                await AsyncStorage.setItem('firstLogin', String(data.firstLogin));
                await AsyncStorage.setItem('isAdmin', String(data.isAdmin)); // Guardar si es admin

                // Verificar si es administrador
                const isAdmin = data.isAdmin === true || data.isAdmin === "true" || data.isAdmin === 1 || data.isAdmin === "1";
                const isFirstLogin = data.firstLogin === 1;  // Verificar si es el primer login

                if (isAdmin) {
                    // Redirigir a la pantalla de admins
                    console.log('Usuario es admin, redirigiendo al panel de admins.');
                    navigation.navigate('HomeAdmins');  // Redirigir al HomeAdmins si es admin
                } else if (isFirstLogin) {
                    console.log('Es el primer login, redirigiendo al formulario.');
                    navigation.navigate('Form');  // Redirigir al formulario
                } else {
                    console.log('No es el primer login, redirigiendo al Home.');
                    navigation.navigate('Home');  // Redirigir a home si no es admin
                }
            } else {
                console.log('Error en el login:', data.message);
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            console.error('Error en el servidor:', error);
            Alert.alert('Error en el servidor', 'No se pudo completar el login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresar</Text>

            <InputField
                placeholder="E - mail"
                value={email}
                onChangeText={setEmail}
                secureTextEntry={false}
                isPassword={false}
            />

            <InputField
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                isPassword={true}
            />

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <Button title="Ingresar" onPress={handleLogin} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#002E73',
    },
    forgotPassword: {
        color: '#4F8EF7',
        marginBottom: 20,
    },
    registerText: {
        color: '#8A8A8A',
        fontSize: 14,
    },
    registerLink: {
        color: '#4F8EF7',
        fontWeight: 'bold',
    },
});
