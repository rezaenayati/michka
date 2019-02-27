import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import {fetchUser , test} from '../logics';


const {height, width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    name: "null",
    username: null,
    avatarUrl: null,
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
    var timestamp = Math.floor(Date.now() / 1000);
    xhr.responseType = 'json';
    //TODO need to set timestamp from Date.now() and work for every user_id
    xhr.open("GET", "https://api.twitter.com/1.1/users/show.json?user_id=870812911119347712");
    xhr.setRequestHeader("Authorization", "OAuth oauth_consumer_key=\"ziUG9xZPCKMAH9ggYfrbLRiQE\",oauth_token=\"870812911119347712-tbY6QIJJqMymC58RA1ifINm0MEFYnXn\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1551284679\",oauth_nonce=\"gTdTAgKdvfs\",oauth_version=\"1.0\",oauth_signature=\"f2dEo8ZLMwR4D%2B3PhuXX25PmDXU%3D\"");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.onload  = () => {
       var jsonResponse = xhr.response;
       console.log(jsonResponse);
       this.setState({name : jsonResponse.name});
       this.setState({username : jsonResponse.screen_name});
       this.setState({avatarUrl : jsonResponse.profile_image_url});

       console.log("Yes");
    };
    xhr.send(inf);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{uri : this.state.avatarUrl}}
          />
          <TouchableOpacity style={styles.usernameContainer} onPress={this._handlePress}>
            <Text style={styles.usernameText}>@{this.state.username}</Text>
            <Text style={styles.nameText}>{this.state.name}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.test}>
          <View></View>
        </ScrollView>
      </View>
    );
  }
  _handlePress = () => {
    WebBrowser.openBrowserAsync('https:twitter.com/rezam_6');
  };
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: '#abacad',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderColor: 'black',
    width: width,
    height: height / 8,
    backgroundColor: '#c5d8f7',
    flexDirection: 'row',

  },
  avatar: {
    width: width / 4,
    height: height / 10,
    resizeMode: 'contain',
    borderRadius: 60,
    marginTop: height / 128,
  },
  usernameContainer: {
    marginTop: height/80 ,
  },
  usernameText: {
    // marginTop: height/100 + height/128,
    fontSize: 15,
  },
  nameText: {
    fontSize: 35,
  },
});
