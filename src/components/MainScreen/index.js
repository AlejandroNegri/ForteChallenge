import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import * as FileSystem from 'expo-file-system';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function MainScreen(props) {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages().then((images) => {
      setGalleryImages(images);
    });
  }, []);

  const fetchGalleryImages = async () => {
    const files = await FileSystem.readDirectoryAsync(props.galleryFolder);
    const imageUris = files.map(
      (filename) => `${props.galleryFolder}/${filename}`
    );
    return imageUris;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.openCamera} style={styles.button}>
        <Feather name='camera' size={30} color='white' />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <FlatList
          data={galleryImages}
          keyExtractor={(item) => item}
          numColumns={3}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.smallImg} />
          )}
        />
      </View>
    </View>
  );
}
