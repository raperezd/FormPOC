/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


import FirstForm from './app/FirstForm';
import DetailView from './app/DetailView';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native POC',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <Text style={{padding: 20}}>Proof of concept, of the Bizagi forms in react native.</Text>
        <Button 
          title="Work on it!" 
          onPress={() =>
            navigate('FirstForm', {})
          }
        />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  FirstForm: { screen: FirstForm },
  DetailView: { screen: DetailView }
});

export default App;
