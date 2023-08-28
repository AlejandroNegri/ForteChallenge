import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';

export default function CameraScreen(props) {
  let camera;

  const shoot = async () => {
    const photo = await camera.takePictureAsync();
    props.setShowPreview(true);
    props.setNewImage(photo);
  };

  return (
    <Camera
      style={styles.container}
      ref={(r) => {
        camera = r;
      }}
    >
      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={shoot} style={styles.shootButton} />
      </View>
    </Camera>
  );
}
