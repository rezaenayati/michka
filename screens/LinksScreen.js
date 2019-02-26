import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {fetchUser} from '../logics';

const importantData = null;


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    data: null,
  };
  componentWillMount(){
    fetchUser();
  }

  componentDidMount() {
    console.log("A log full of love!");
    temp = "Hello World!!";
    // fetchUser();
    fetchUser();
    console.log(temp);
    this.setState({data : temp});
    // console.log(fetchUser2());
  }



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
