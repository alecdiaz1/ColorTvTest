import * as React from 'react';
import {
  View, Text, Image, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity,
} from 'react-native';

type GridPhoto = {
  url: string;
}

const GridPhoto: React.FC<GridPhoto> = (props: GridPhoto) => {
  const { url } = props;

  return (
    <TouchableOpacity>
      <Image
        style={styles.gridPhoto}
        source={{ url }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export { GridPhoto };

const styles = StyleSheet.create({
  gridPhoto: {
    width: '100%',
    height: 125,
  },
});
