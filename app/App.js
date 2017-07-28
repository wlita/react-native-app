import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
// 引导页
import Guide from './containers/Guide'
// Home 首页
import Router from './Router'


// App 首页
class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            data: '',
            isOneIn: false
        }

        // global.storage.set('xxxx', 'xxxxxx')

        // global.storage.get('xxxx', (aa) => { console.log(aa + '+++++++++')})

        // global.storage.set('isOneIn', true)

        global.storage.get('isOneIn', (data) => {
            this.setState({
                isOneIn: data
            })
        })
        
    }

    changeOneIn = () => {
        this.setState({
            isOneIn: false
        })
        global.storage.set('isOneIn', false)
    }

    render () {
        return (
            this.state.isOneIn === true ? 
            <Guide callback={ this.changeOneIn }/> : 
            <Router />
        )
    }
}

export default App
