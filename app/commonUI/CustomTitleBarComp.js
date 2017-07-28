import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';

class CustomTitleBarComp extends Component {

  static propTypes = {
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);
    
    this.state = {
      opacity: typeof this.props.defBackgroundOpacity === 'undefined' ? 1 : this.props.defBackgroundOpacity,
    }
  }

  render() {
    let titleBarBackgoundRgba = `rgba(156, 151, 139, ${this.props.opacity})`;
    return (
      <View style={[{backgroundColor: titleBarBackgoundRgba}, styles.container, this.props.titleBarStyle]}>
        <View style={styles.titleBarContainer}>
          <Text style={styles.titleBarTitle} numberOfLines={1}>{this.props.title}</Text>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'android' && Platform.Version < 19) ? 0 : (Platform.OS === 'android' ? 24 : 20),
  },
  titleBarContainer: {
    flexDirection: 'row',
    height: 60,
  },
  titleBarTitle: {
    flex: 1,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
  },
  bothBtnContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBarRightText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 15,
  },
  placeholderView: {
    width: 60,
  },
});


export default CustomTitleBarComp;


// 调用方法
//  <CustomTitleBarComp
//   title="关于"
//   opacity={ this.state.opacity }
// />