import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogIn from './pages/LogIn';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    justifyContent: 'center',
  },
});
