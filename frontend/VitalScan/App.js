import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { modelURI } from "../VitalScan/pages/modelHandler";
import CameraView from "../VitalScan/pages/Camera";


const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState("back");
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [inputTensor, setInputTensor] = useState([]);

  // model configuration
  const configurations = { threshold: 0.25 };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      tf.ready().then(async () => {
        const yolov5 = await tf.loadGraphModel(modelURI, {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions }); // set loading fractions
          },
        }); // load model

        // warming up model
        const dummyInput = tf.ones(yolov5.inputs[0].shape);
        await yolov5.executeAsync(dummyInput);
        tf.dispose(dummyInput);

        // set state
        setInputTensor(yolov5.inputs[0].shape);
        setModel(yolov5);
        setLoading({ loading: false, progress: 1 });
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <>
          {loading.loading ? (
            <Text style={styles.loadingText}>
              Loading model... {(loading.progress * 100).toFixed(2)}%
            </Text>
          ) : (
            <View style={styles.cameraContainer}>
              <View style={styles.cameraWrapper}>
                <CameraView
                  type={type}
                  model={model}
                  inputTensorSize={inputTensor}
                  config={configurations}
                >
                  <View style={styles.flipContainer}>
                    <TouchableOpacity
                      style={styles.flipButton}
                      onPress={() =>
                        setType((current) => (current === "back" ? "front" : "back"))
                      }
                    >
                      <MaterialCommunityIcons
                        name="camera-flip"
                        size={30}
                        color="white"
                        style={styles.icon}
                      />
                      <Text style={styles.flipText}>Flip Camera</Text>
                    </TouchableOpacity>
                  </View>
                </CameraView>
              </View>
            </View>
          )}
        </>
      ) : (
        <View>
          <Text style={styles.permissionText}>Permission not granted!</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  loadingText: {
    fontSize: 18,
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  cameraWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  flipContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 20,
  },
  flipButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  flipText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
  permissionText: {
    fontSize: 18,
  },
});

export default App;
