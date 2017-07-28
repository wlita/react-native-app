import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native'

import Home from './containers/Home'
import About from './containers/About'
import Lists from './containers/Lists';
import Item from './containers/Item';
import Images from './containers/Images'
import Locations from './containers/Locations'

//导入stack导航组件
import { StackNavigator, TabNavigator } from 'react-navigation'


const MainScreenNavigator = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./assgin/imgs/yd1.jpeg')}
                        style={{width:50, height:20}}
                    />
                )
        }
    },
    Images: {
        screen: Images,
        navigationOptions: {
            tabBarLabel: '相册',
            tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./assgin/imgs/1.jpg')}
                        style={{width:50, height:20}}
                    />
                )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: '关于',
            tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('./assgin/imgs/yd1.jpeg')}
                        style={{width:50, height:20}}
                    />
                )
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});


const Router = StackNavigator({
  Home: { screen: MainScreenNavigator},
  About: { screen: About},
  Lists: { screen: Lists},
  Item: { screen: Item},
  Images: { screen: Images},
  Locations: { screen: Locations}
},{
    headerMode: 'none',
});



export default Router
