import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AlbumDetail from './AlbumDetail';
//Make a Component
export default class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ albums: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderAlbum() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbum()}
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
//export default AlbumList;
//module.exports = AlbumList;
//Make this Component available in other Component
