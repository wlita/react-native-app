import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from '../commonUI/NavigationBar'

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: () => {
      return <GeolocationExample />;
    },
  }
];

 class Home extends Component {

  constructor (props) {
      super(props)

      this.state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
      }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({initialPosition}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      this.setState({lastPosition});
    });
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render () {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {JSON.stringify(this.state.initialPosition)}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {JSON.stringify(this.state.lastPosition)}
        </Text>
      </View>
    );
  }
}


export default Home


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
    },
    li: {
        borderColor: '#f0f8ff',
        borderBottomWidth: 1,
        height: 150,
        flexDirection:'row',
    },
    logo: {
        width: 110,
        height: 110,
        marginTop: 15,
        marginLeft: 30,
    },
    f: {
        marginTop: 50,
        marginLeft: 30,
    }
})
