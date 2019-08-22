import React from 'react';
import { ScrollView, StyleSheet, Text , View ,Platform , Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import {fetchData , fetchUserFollower , fetchUserFullName ,fetchUserPicUrlHd}  from '../utils/api';
import SearchInput from '../components/SearchInput';
import Profile from '../components/Profile';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    follower: null,
    full_name: null,
    profile_pic_url_hd: null,
    username: null,
  };

  componentDidMount(){
    // this.handleFetchUserFollower('ivankovic_branko');
  }

  handleFetchUserFollower = async username => {
    this.setState({} , async () => {
      const follower = await fetchUserFollower(username);
      this.setState({follower: follower});
    });
  }

  handleFetchUserFullName = async username => {
    this.setState({} , async () => {
      const full_name = await fetchUserFullName(username);
      this.setState({full_name: full_name});
    });
  }

  handleFetchUserPicUrlHd = async username => {
    this.setState({} , async () => {
      const profile_pic_url_hd = await fetchUserPicUrlHd(username);
      this.setState({profile_pic_url_hd: profile_pic_url_hd});
    });
  }

  handleSubmitEditing = async username => {
    this.setState({username: username});
    this.handleFetchUserFollower(username);
    this.handleFetchUserFullName(username);
    this.handleFetchUserPicUrlHd(username);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchInput placeholder="Type Username" onSubmit={this.handleSubmitEditing} />
        <ScrollView>
          <Profile name={this.state.full_name}
                   username={this.state.username}
                   follower={this.state.follower}
                   avatarUrl={this.state.profile_pic_url_hd}
                   />
                   
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
  avatar: {
    width: 100 ,
    height: 100 ,
    resizeMode: 'contain',
    borderRadius: 60,
    marginTop: 256 / 128,
  },

});
