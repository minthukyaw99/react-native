import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Make a Component
class Header extends Component {

  render() {
    return (
      <View style={Styles.viewStyle}>
        <Text style={Styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    //evelation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

module.exports = Header;
//Make this Component available in other Component
