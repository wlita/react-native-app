import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native'
import { connect } from 'react-redux'


class Lists extends Component {
     static navigationOptions = {
        title: '列表',
    };

    constructor (props) {
        super(props)

        console.log(props)

        this.state = {
            data: ''
        }

        // global.storage.set('xxxx', 'xxxxxx')

        // global.storage.get('xxxx', (aa) => { console.log(aa + '+++++++++')})
        
    }

    render () {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View>
                <Text>
                    Lists
                </Text>
                <Button
                onPress={() => goBack()}
                title="Lists Lists Lists ~~~"
                />
            </View>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
