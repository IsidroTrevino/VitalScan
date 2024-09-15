import { StatusBar } from 'expo-status-bar';
//import { set } from 'express/lib/application';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import React, { useState } from 'react';

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
                placeholder="¿Del 1 al 10 qué tanto estrés experimentas en un día?"
                value={nivel_estres}
                onChangeText={setNivelEstres}
                isPassword={false}
            />

            <InputField
                placeholder="¿Cuántas horas duermes al día?"
                value={sueno}
                onChangeText={setSueno}
                isPassword={false}
            />

            <InputField
                placeholder="¿Cuántos días a la semana haces ejercicio?"
                value={ejercicio}
                onChangeText={setEjercicio}
                isPassword={false}
            />

            <InputField
                placeholder="¿Cuántos días a la semana haces ejercicio?"
                value={ejercicio}
                onChangeText={setEjercicio}
                isPassword={false}
            />

            <InputField
                placeholder="¿Cuántos látidos de corazón tienes por minuto?"
                value={latidos}
                onChangeText={setLatidos}
                isPassword={false}
            />

            <InputField
                placeholder="¿Cuántas respiraciones tienes por minuto?"
                value={respira}
                onChangeText={setRespira}
                isPassword={false}
            />

            <Button title="Enviar" onPress={handleLogin} />

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
})