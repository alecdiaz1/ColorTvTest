import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from '../components/Themed';
import { searchUsers } from '../redux/modules/usersSlice';
import { RootState } from '../redux/modules/reducer';
import { User } from '../interfaces';
import { UserCard } from '../components/UserCard';

type SearchScreenProps = {
  searchUsers: (query: string) => void;
  error: string;
  users: Array<User>
}

const SearchUsersScreen: React.FC<SearchScreenProps> = (props: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={(text) => props.searchUsers(text)}
      />
      <Text>{props.error}</Text>
      <FlatList
        data={props.users}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  error: state.users.error,
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  searchUsers: (query: string) => dispatch(searchUsers(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBox: {
    height: 40,
    backgroundColor: '#ff9a9a',
    marginHorizontal: 10,
    padding: 10,
  },
});
