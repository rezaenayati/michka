import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {fetchData , fetchUserFollower}  from '../utils/api';
// import {SearchInput} from '../components/SearchInput';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    data: null,
  };

  componentDidMount(){
    this.handleFetchUser('ivankovic_branko');
  }

  handleFetchUser = async username => {
    this.setState({} , async () => {
      const data = await fetchUserFollower(username);
      this.setState({data: data});
    });
  }
  // <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation} />

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.state.data}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
