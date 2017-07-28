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

class Images extends Component {

    static navigationOptions = {
        title: 'PhotoS',
    }

    constructor (props) {
        super(props)

        console.log(props)

        this.state = {
            data: '',
            dataSource: [
                {
                    title: '空气净化器',
                    url: 'http://img.muji.com.cn/img/item/4547315820665_400.jpg'
                },
                {
                    title: '棉不均匀染色开衫',
                    url: 'http://img.muji.com.cn/img/item/4549738656746_400.jpg'
                },
                {
                    title: '硅胶球形制冰器',
                    url: 'http://img.muji.com.cn/img/item/4549738306771_400.jpg'
                },
                {
                    title: '组合柜',
                    url: 'http://img.muji.com.cn/img/item/4549337263215_400.jpg'
                },
                {
                    title: '牛奶巧克力',
                    url: 'http://img.muji.com.cn/img/item/4549738664512_400.jpg'
                },
                {
                    title: '棉法兰绒被套 ',
                    url: 'http://img.muji.com.cn/img/item/4549738391210_400.jpg'
                }
            ]
        }
    }

    render () {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.body}>
                <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                {
                    this.state.dataSource.map((t, i) => {
                        return (
                            <Image 
                                key={i}
                                style={styles.logo}
                                source={require('../assgin/imgs/1.jpg')}
                            />
                        )
                    })
                }
                </View>
            </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Images)


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff'
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 15,
        marginLeft: 30,
    },
})
