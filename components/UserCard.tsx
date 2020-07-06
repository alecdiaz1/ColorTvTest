import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image,
} from 'react-native';
import { User } from '../interfaces';
import { useNavigation } from '@react-navigation/native';

type UserCardProps = {
    user: User
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const { user } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('UserProfile', {
        user: user,
      })}
    >
        <Image
          style={styles.profilePicture}
          source={{ uri: user.profile_image.large }}
        />
        <View style={styles.nameContainer}>
          <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
          <Text>{user.username}</Text>
        </View>
    </TouchableOpacity>
  );
};

export { UserCard };

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e8e8e8',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
