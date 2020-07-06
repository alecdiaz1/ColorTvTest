import * as React from 'react';
import {
  View, Text, Image, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity,
} from 'react-native';
import {useNavigation} from "@react-navigation/native";

type GridPhoto = {
  url: string;
}

const GridPhoto: React.FC<GridPhoto> = (props: GridPhoto) => {
  const { urls } = props;
  const url = urls.regular;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PhotoDetail', {
        url: urls.full,
      })}
    >
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
