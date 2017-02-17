/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import AlbumList from './src/components/AlbumList';

const Header = require('./src/components/header');
//const AlbumList = require('./src/components/AlbumList');

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Header headerText='Albums!!!' />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
