import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

const modelJson = require("../../models/pppmodel_weights.json");
const modelWeights = [
  require("../../models/model_weights.bin"),
];


/**
 * loadModel for Android and IOS
 * loading model via bundleResourceIO and assets
 */
export const modelURI = bundleResourceIO(modelJson, modelWeights);