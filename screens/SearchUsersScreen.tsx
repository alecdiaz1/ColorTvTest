import * as React from 'react';
import { StyleSheet } from 'react-native';

import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from '../components/Themed';
import { searchUsers } from '../redux/modules/usersSlice';
import { RootState } from '../redux/modules/reducer';
import { User } from '../interfaces';

type SearchScreenProps = {
  searchUsers: (query: string) => void;
  error: string;
  users: Array<User>
}

const SearchUsersScreen: React.FC<SearchScreenProps> = (props: SearchScreenProps) => {
  useEffect(() => {
    props.searchUsers('nas');
  }, []);

  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Text>{props.error}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
