import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import React, { useState } from 'react';

export default function Form() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nivel_estres, setNivelEstres] = useState('');
    const [sueno, setSueno] = useState('');
    const [ejercicio, setEjercicio] = useState('');
    const [latidos, setLatidos] = useState('');
    const [respira, setRespira] = useState('');
    const idUsuario = 1;
    
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idUsuario, peso, altura, nivel_estres, sueno, ejercicio, latidos, respira }), 
            });

            const data = await response.json();

            if (response.status === 200) {
                console.log('Datos insertados exitosamente', data);
            } else {
                console.log('Error:', data.message);
            }
        } catch (error) {
            console.error('Error en el servidor:', error);
        }
    };

    return (
        <View>
            <Text style={styles.title}>Formulario</Text>
        </View>
        
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
         >

            <Text style={styles.text}>¿Cuánto pesas?</Text>
            <Input
                placeholder="Peso"
                value={peso}
                onChangeText={setPeso}
                secureTextEntry={false}
                isPassword={false}
            />

            <Text style={styles.text}>¿Cuánto mides?</Text>
            <Input
                placeholder="Altura"
                value={altura}
                onChangeText={setAltura}
                isPassword={false}
            />
    
            <Text style={styles.text}>¿Del 1 al 10 qué tanto estrés experimentas en un día?</Text>
            <Input
                placeholder="Niveles de estrés"
                value={nivel_estres}
                onChangeText={setNivelEstres}
                isPassword={false}
            />

            <Text style={styles.text}>¿Cuántas horas duermes al día?</Text>
            <Input
                placeholder="Horas"
                value={sueno}
                onChangeText={setSueno}
                isPassword={false}
            />

            <Text style={styles.text}>¿Cuántos días a la semana haces ejercicio?</Text>
            <Input
                placeholder="Días"
                value={ejercicio}
                onChangeText={setEjercicio}
                isPassword={false}
            />

            <Text style={styles.text}>¿Cuántas respiraciones tienes por minuto?</Text>
            <Input
                placeholder="Número de respiraciones"
                value={respira}
                onChangeText={setRespira}
                isPassword={false}
            />

            <Text style={styles.text}>¿Cuántos latidos tienes por minuto?</Text>
            <Input
                placeholder="Número de latidos"
                value={latidos}
                onChangeText={setLatidos}
                isPassword={false}
            />  

            <Button title="Enviar" onPress={handleLogin} />

            <StatusBar style="auto" />
        </ScrollView>
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
        marginBottom: 40,
        color: '#2B2D42',
    },
    text: {
        fontSize: 15,
        color: '#000000',
        marginBottom: 15,
    },
});
