import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import CameraScreen from './src/components/CameraScreen';
import PreviewScreen from './src/components/PreviewScreen';
import MainScreen from './src/components/MainScreen';
import * as FileSystem from 'expo-file-system';
import { getGalleryFolder, getNewImageFilepath } from './src/utils';

export default function App() {
  const [showCamera, setShowCamera] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);
  const [newImage, setNewImage] = React.useState(null);

  const galleryFolder = getGalleryFolder();

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setShowCamera(true);
    }
  };

  const savePhoto = async () => {
    let filePath = await getNewImageFilepath();

    await FileSystem.moveAsync({
      from: newImage.uri,
      to: filePath,
    });

    setNewImage(null);
    setShowPreview(false);
    setShowCamera(false);
  };

  const retakePicture = () => {
    setNewImage(null);
    setShowPreview(false);
    openCamera();
  };

  return (
    <View style={styles.container}>
      {showCamera ? (
        <View style={styles.cameraArea}>
          {showPreview && newImage ? (
            <PreviewScreen
              image={newImage}
              retakePicture={retakePicture}
              savePhoto={savePhoto}
            />
          ) : (
            <CameraScreen
              setShowPreview={setShowPreview}
              setNewImage={setNewImage}
              galleryFolder={galleryFolder}
            ></CameraScreen>
          )}
        </View>
      ) : (
        <MainScreen
          openCamera={openCamera}
          galleryFolder={galleryFolder}
        ></MainScreen>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraArea: {
    flex: 1,
    width: '100%',
  },
});
