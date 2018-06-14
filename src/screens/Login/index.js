import React, { Component } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';


class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
    drawUnderStatusBar: Platform.OS !== 'ios',
    statusBarColor: 'black',
    disabledBackGesture: true
  };

  state = {
    isLoading: false,
    text: null,
    isUser: false
  };


  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.main}>
          <Text>Login AAAAAAA</Text>
        </ScrollView>
      </View>
    );
  }
}

Login.propTypes = {
  navigator: PropTypes.object,
};

export default connect()(Login);
