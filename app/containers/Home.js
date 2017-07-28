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
import Locations from './Locations'

// Home 首页
class Home extends Component {

    constructor (props) {
        super(props)

        this.state = {
            addressMark: false
        }
    }

    componentWillMount () {
        // 判断定位是否有选
        global.storage.get('selfAddress', (data) => {
            if (!data) {
                this.setState({
                    addressMark: true
                })
            }
        })
    }

    componentDidMount () {
        
    }

    render () {
        const { navigate } = this.props.navigation;
        return (
                this.state.addressMark ? navigate('Locations') : (
                    <View>
                        <NavigationBar
                            title='首页'
                        />
                        <ScrollView style={styles.body}>
                            <Text>
                                {'12312asdasd'}
                            </Text>
                        </ScrollView>
                    </View>
                )
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
