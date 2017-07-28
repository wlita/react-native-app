import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'

// App 首页
class Guide extends Component {

    constructor (props) {
        super(props)

        this.state = {
            data: ''
        }
        
    }

    render () {
        const { callback } = this.props
        
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}>
                <Image source={require('../assgin/imgs/yd1.jpeg')} style={styles.backgroundImage} />
                <Image source={require('../assgin/imgs/yd2.jpeg')} style={styles.backgroundImage} />
                <TouchableWithoutFeedback onPress={()=> { callback() }}>
                    <Image 
                        source={require('../assgin/imgs/yd3.jpeg')} style={styles.backgroundImage} 
                    />
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state) {
  return {
    value: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInClick: () => dispatch({ type: 'A' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guide)
