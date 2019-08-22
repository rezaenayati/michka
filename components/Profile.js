import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';


const {height, width} = Dimensions.get('window');

export default class Profile extends React.Component {

  state = {
    name: this.props.name,
    username: this.props.username,
    avatarUrl: this.props.avatarUrl,
    follower: this.props.follower,
  };

  render(){
    return(
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{uri : this.props.avatarUrl}}
        />
        <TouchableOpacity style={styles.usernameContainer} onPress={this._handlePress}>
          <Text style={styles.usernameText}>@{this.props.username}        followers:{this.props.follower}</Text>
          <Text style={styles.nameText}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _handlePress = () => {
    WebBrowser.openBrowserAsync('');
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
