import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image,
} from 'react-native';
import { User } from '../interfaces';

type UserCardProps = {
    user: User
}

const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {
  const { user } = props;
  return (
    <TouchableOpacity style={styles.container}>
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
    backgroundColor: '#dbdbdb',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
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
