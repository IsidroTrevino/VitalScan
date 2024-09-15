import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import Tflite from 'tflite-react-native';

export default function CameraScreen() {
  const [tflite, setTflite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
        const tf = new Tflite();
        const modelAsset = Asset.fromModule(require('../models/pppmodel_weights.json'));
        await modelAsset.downloadAsync(); 
      
        tf.loadModel(
          {
            model: modelAsset.uri, // Use the URI from the downloaded asset
            numThreads: 1,
          },
          (err, res) => {
            if (err) {
              console.log('Error loading model:', err);
            } else {
              console.log('Model loaded successfully:', res);
              setTflite(tf);
            }
          }
        );
      };

    loadModel();

    return () => {
      if (tflite) {
        tflite.close();
      }
    };
  }, []);

  const runInference = async () => {
    if (!tflite) {
      Alert.alert('Model not loaded yet');
      return;
    }

    // Example inference code
    tflite.runModelOnImage(
      {
        path: 'path_to_image.jpg',
        imageMean: 0,
        imageStd: 255,
        numResults: 5,
        threshold: 0.05,
      },
      (err, res) => {
        if (err) {
          console.log('Error running inference:', err);
        } else {
          console.log('Inference results:', res);
          setResults(res);
        }
      }
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Model...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>TensorFlow Lite Model Example</Text>
      <Button title="Run Inference" onPress={runInference} />
      {results && (
        <View>
          <Text>Results:</Text>
          {results.map((result, index) => (
            <Text key={index}>{result.label}: {result.confidence}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
