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

class Locations extends Component {

    static navigationOptions = {
        title: '省份列表',
        gesturesEnabled: false,
    }

    constructor (props) {
        super(props)
    }

    componentDidMount () {
        
    }

    render () {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Text>
                        当前位置
                    </Text>
                    <Text>
                        137182
                    </Text>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Locations)


// const styles = StyleSheet.create({
    
// })
