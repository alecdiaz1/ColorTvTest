import * as React from 'react';
import {
  View, Text, Image, StyleSheet, ActivityIndicator, Dimensions,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useEffect } from 'react';
import { User } from '../interfaces';
import { API_BASE_URL } from '../env.json';
import { getData } from '../services/apiService';

// eslint-disable-next-line react/prop-types
const UserProfileScreen = ({ route }) => {
  const { user } = route.params;
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // @ts-ignore
  useEffect(() => {
    const getPhotos = () => {
      getData(`${API_BASE_URL}/users/${user.username}/photos`)
        .then(async (response) => {
          await setData(response);
          await setLoading(false);
        });
    };
    getPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profilePicture}
          source={{ uri: user.profile_image.large }}
        />
        <View style={styles.bioContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text>{user.username}</Text>
        </View>
      </View>
      <View style={styles.photoGrid}>
        { data === null ? <ActivityIndicator />
          : (
            <FlatGrid
              itemDimension={100}
              spacing={5}
              data={data}
              renderItem={({item}) =>
                <Image
                  style={styles.gridPhoto}
                  source={{ uri: item.urls.regular }}
                  resizeMode="cover"
                />}
            />
          )}
      </View>
    </View>

  );
};

export { UserProfileScreen };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    display: 'flex',
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
  },

  header: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,

    padding: 20,
  },
  gridPhoto: {
    width: '100%',
    height: 125,
  },
  bioContainer: {
    width: '100%',
    height: '70%',
  },
  photoGrid: {
    display: 'flex',
    flex: 5,
    backgroundColor: '#f5f5f5',
  },
  profilePicture: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 100,
  },
});
