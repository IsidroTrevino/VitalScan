import { StatusBar } from 'expo-status-bar';
import { set } from 'express/lib/application';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Form() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nivel_estres, setNivelEstres] = useState('');
    const [sueno, setSueno] = useState('');
    const [ejercicio, setEjercicio] = useState('');
    const [latidos, setLatidos] = useState('');
    const [respira, setRespira] = useState('');
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ peso, altura, nivel_estres, sueno, ejercicio, latidos, respira }), 
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
            <Text style={styles.title}>Formulario</Text>

            <InputField
                placeholder="Peso"
                value={peso}
                onChangeText={setPeso}
                secureTextEntry={false}
                isPassword={false}
            />

            <InputField
                placeholder="Altura"
                value={altura}
                onChangeText={setAltura}
                isPassword={false}
            />
    
            <InputField
                placeholder="Niveles de estrés"
                value={nivel_estres}
                onChangeText={setNivelEstres}
                isPassword={false}
            />

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <Button title="Ingresar" onPress={handleLogin} />

            <StatusBar style="auto" />
        </View>
    );
}
