import * as FileSystem from 'expo-file-system';

const modelJsonPath = FileSystem.documentDirectory + 'models/pppmodel_weights.json';
const modelWeightsPath = FileSystem.documentDirectory + 'models/model_weights.bin';

const loadModel = async () => {
  try {
    const modelJson = await FileSystem.readAsStringAsync(modelJsonPath);
    const modelWeights = await FileSystem.readAsStringAsync(modelWeightsPath, { encoding: FileSystem.EncodingType.Base64 });

    // Continue with loading the model...
  } catch (error) {
    console.error('Error loading model files:', error);
  }
};
