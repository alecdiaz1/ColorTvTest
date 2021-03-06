import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { Text, View } from '../components/Themed';
import { searchUsers } from '../redux/modules/usersSlice';
import { RootState } from '../redux/modules/reducer';
import { User } from '../interfaces';
import { UserCard } from '../components/UserCard';

type SearchScreenProps = {
  searchUsers: (query: string, page?: number) => void;
  error: string;
  users: Array<User>
}

const SearchUsersScreen: React.FC<SearchScreenProps> = (props: SearchScreenProps) => {
  const loadNextPage = async () => {
    await setPage(page + 1);
    props.searchUsers(searchTerm, page);
  };

  const onChangeSearch = async (text: string) => {
    await setPage(1);
    await setSearchTerm(text);
    props.searchUsers(text, page);
  };

  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder={'Search for a user...'}
        onChangeText={(text) => onChangeSearch(text)}
      />
      <Text>{props.error}</Text>
      <FlatList
        ListEmptyComponent={<Text style={styles.emptyText}>No results found</Text>}
        data={props.users}
        renderItem={({ item }) => <UserCard user={item} />}
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  error: state.users.error,
  users: state.users.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  searchUsers: (query: string, page: number) => dispatch(searchUsers(query, page)),
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
  emptyText: {
    textAlign: 'center',
    color: '#979797',
  },
  searchBox: {
    height: 40,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 100,
    marginTop: 10,
  },
});
