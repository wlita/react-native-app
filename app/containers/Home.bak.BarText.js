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

// Home 首页
class Home extends Component {

    static navigationOptions = {
        title: 'Wanmoon',
    };

    constructor (props) {
        super(props)

        console.log(props)

        this.state = {
            data: '',
            opacity: 0,
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

    onScroll = (event) => {
        console.log("scrolling",event.nativeEvent.contentOffset.y);
		const offsetY = event.nativeEvent.contentOffset.y;
		if (offsetY > 5) {
			this.setState({
				opacity: (offsetY - 5)/150
			});
		}else{
			this.setState({
				opacity: 0
			});
		};
    }

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <NavigationBar style={{opacity: this.state.opacity}} title={'图文详情'} leftImage={'返回'} leftAction={ () => navigate() }/>
                <ScrollView style={styles.body}
                    onScroll={this.onScroll}
                >
                    {
                        this.state.dataSource.map((t, i) => {
                            return (
                                <View style={styles.li}>
                                    <Image 
                                        style={styles.logo}
                                        source={require('../assgin/imgs/1.jpg')}
                                    />
                                    <Text style={styles.f}> {t.title} </Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        position: 'relative',
        top: -40,
        left: 0,
        zIndex: -1,
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
