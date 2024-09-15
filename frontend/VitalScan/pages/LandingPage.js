import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LandingPage({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LogIn');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topCircle} />
      <Text style={styles.title}>VitalScan</Text>
      <View style={styles.bottomCircle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  topCircle: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4F8EF7', 
  },
  bottomCircle: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#4F8EF7', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4F8EF7',  
  },
});
