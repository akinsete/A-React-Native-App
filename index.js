// Import a library to help create a component
// import { AppRegistry } from 'react-native';
//
// // Import a component
// import App from './App';
//
// /// Render a component
// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Album'} />
      <AlbumList />
    </View>
);


AppRegistry.registerComponent('albums', () => App);
