import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import Button from '../components/Button';
import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Form({ navigation }) {  // Recibe `navigation` como prop
    const [idUsuario, setIdUsuario] = useState(null);
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nivel_estres, setNivelEstres] = useState('');
    const [sueno, setSueno] = useState('');
    const [ejercicio, setEjercicio] = useState('');
    const [latidos, setLatidos] = useState('');
    const [respira, setRespira] = useState('');

    useEffect(() => {
        const loadIdUsuario = async () => {
            try {
                const userId = await AsyncStorage.getItem('idUsuario');
                if (userId) {
                    const idUsuarioInt = parseInt(userId);
                    setIdUsuario(idUsuarioInt);
                } else {
                    Alert.alert('Error', 'No se encontró el idUsuario');
                }
            } catch (error) {
                console.error('Error al obtener el idUsuario:', error);
            }
        };

        loadIdUsuario();
    }, []);

    const handleForm = async () => {
        if (!idUsuario) {
            Alert.alert('Error', 'No se ha cargado el idUsuario');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    idUsuario,
                    peso, 
                    altura, 
                    nivel_estres, 
                    sueno, 
                    ejercicio, 
                    latidos, 
                    respira 
                }), 
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log('Datos insertados exitosamente', data);
                // Redirigir a Home después de un submit exitoso
                navigation.navigate('Home');
            } else {
                console.log('Error:', data.message);
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            console.error('Error en el servidor:', error);
            Alert.alert('Error en el servidor', 'No se pudo enviar el formulario');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario</Text>
        
            <ScrollView 
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >

            <Text style={styles.text}>¿Cuánto pesas?</Text>
            <InputField
                placeholder="Peso"
                value={peso}
                onChangeText={setPeso}
                secureTextEntry={false}
                isPassword={false}
                showIcon={false}
            />

            <Text style={styles.text}>¿Cuánto mides?</Text>
            <InputField
                placeholder="Altura"
                value={altura}
                onChangeText={setAltura}
                isPassword={false}
                showIcon={false}
            />
        
            <Text style={styles.text}>¿Del 1 al 10 qué tanto estrés experimentas en un día?</Text>
            <InputField
                placeholder="Niveles de estrés"
                value={nivel_estres}
                onChangeText={setNivelEstres}
                isPassword={false}
                showIcon={false}
            />

            <Text style={styles.text}>¿Cuántas horas duermes al día?</Text>
            <InputField
                placeholder="Horas"
                value={sueno}
                onChangeText={setSueno}
                isPassword={false}
                showIcon={false}
            />

            <Text style={styles.text}>¿Cuántos días a la semana haces ejercicio?</Text>
            <InputField
                placeholder="Días"
                value={ejercicio}
                onChangeText={setEjercicio}
                isPassword={false}
                showIcon={false}
            />

            <Text style={styles.text}>¿Cuántas respiraciones tienes por minuto?</Text>
            <InputField
                placeholder="Número de respiraciones"
                value={respira}
                onChangeText={setRespira}
                isPassword={false}
                showIcon={false}
            />

            <Text style={styles.text}>¿Cuántos latidos tienes por minuto?</Text>
            <InputField
                placeholder="Número de latidos"
                value={latidos}
                onChangeText={setLatidos}
                isPassword={false}
                showIcon={false}
            />    

            <Button title="Enviar" onPress={handleForm} />

            <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
    },
    contentContainer: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
        marginStart: 10,
        marginTop: 40,
        paddingHorizontal: 20,
        color: '#2B2D42',
    },
    text: {
        fontSize: 15,
        color: '#000000',
        marginBottom: 15,
    },
});
