import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {fetchUser , test} from '../logics';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    data: null,
  };
  componentWillMount(){
    this.fetchUser2();
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Hey Joey do wanna eat some juice?");
    }, 5000);
  }

  fetchUser2 = (username) => {
    var inf = {};
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.responseType = 'json';
    xhr.open("GET", "https://api.twitter.com/1.1/users/show.json?user_id=870812911119347712");
    xhr.setRequestHeader("Authorization", "OAuth oauth_consumer_key=\"ziUG9xZPCKMAH9ggYfrbLRiQE\",oauth_token=\"870812911119347712-tbY6QIJJqMymC58RA1ifINm0MEFYnXn\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1551170182\",oauth_nonce=\"rOTwEAb3A3L\",oauth_version=\"1.0\",oauth_signature=\"xYMMd%2FEU4ZLVbYwtZwZfUK19%2BKs%3D\"");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.onload  = () => {
       var jsonResponse = xhr.response;
       this.setState({data : jsonResponse.name});
    };
    xhr.send(inf);
    console.log("In There!");
  };

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
