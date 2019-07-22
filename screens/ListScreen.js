import React from 'react';
import { ScrollView, StyleSheet, Text , View ,Platform} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {fetchData , fetchUserFollower}  from '../utils/api';
import SearchInput from '../components/SearchInput';

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

  handleSubmitEditing = async username => {
    this.handleFetchUser(username);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchInput placeholder="Type Username" onSubmit={this.handleSubmitEditing} />
        <ScrollView>
          <Text style={[styles.largeText , styles.textStyle]}>{this.state.data}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textStyle: {
  textAlign: 'center',
  ...Platform.select({
    ios: {
      fontFamily: 'AvenirNext-Regular',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  color: 'red',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },

});
