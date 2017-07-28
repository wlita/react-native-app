import React, {Component} from 'react'
import {
  View,
  Text,
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import Guide from './containers/Guide'

// 数据持久化
import stroage from './store/stroageData'

// 入口文件处理 数据初始化 版本升级 弹框
class Entry extends Component {

  constructor(){
    super()

    // 初始数据
    const store = configureStore()

    this.state = {
      store : store
    }

  }

  componentDidMount () {

    // this.state.store.dispatch({
    //   type: 'RED_locations',
    //   data: {
    //     '12':'12'
    //   }
    // })

    // 调用定位数据
    navigator.geolocation.getCurrentPosition(
        (initialPosition) => {
          const data = JSON.stringify(initialPosition)
          global.storage.set('selfAddress', null)
        },
        (error) => {
          console.log(error.message)
          global.storage.set('selfAddress', null)
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (<Provider store={this.state.store}>
            <App />
        </Provider>)
  }
}

export default Entry