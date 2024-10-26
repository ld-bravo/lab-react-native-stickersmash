import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from "expo-image";

type Props = {
  imgSource: string;
}

const ImageViewer = ({imgSource}: Props) => {
  return (
    <Image source={imgSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})

export default ImageViewer;