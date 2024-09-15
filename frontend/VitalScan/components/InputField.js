import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function InputField({ placeholder, value, onChangeText, secureTextEntry, isPassword }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {isPassword ? (
        <MaterialIcons name="lock" size={20} color="#4F8EF7" />
      ) : (
        <FontAwesome name="envelope" size={20} color="#4F8EF7" />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword ? !isPasswordVisible : secureTextEntry}
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <MaterialIcons
            name={isPasswordVisible ? 'visibility-off' : 'visibility'}
            size={20}
            color="#4F8EF7"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
