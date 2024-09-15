import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function LogIn() {
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
            } else {
                console.log('Error:', data.message);
            }
        } catch (error) {
            console.error('Error en el servidor:', error);
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
        color: '#2B2D42',
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
