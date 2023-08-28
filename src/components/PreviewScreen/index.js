import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function PreviewScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: props.image && props.image.uri }}
        style={styles.imgBackground}
      >
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={props.retakePicture}>
            <AntDesign name='closecircleo' size={45} color='red' />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.savePhoto}>
            <AntDesign name='checkcircleo' size={45} color='green' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
