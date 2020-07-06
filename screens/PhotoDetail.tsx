import * as React from 'react';
import {
  View, Image, StyleSheet, ActivityIndicator
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const PhotoDetail = ({ route }) => {
  const { url } = route.params;
  const [loading, setLoading] = React.useState(true);

  return (
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={false}
        style={styles.container}
      >
        { loading && <ActivityIndicator size="large" style={{ marginTop: 100 }}/> }
        <Image
          style={styles.photo}
          source={{ url }}
          resizeMode="contain"
          onLoadEnd={() => setLoading(false)}
        />
      </ReactNativeZoomableView>
  );
};

export { PhotoDetail };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
