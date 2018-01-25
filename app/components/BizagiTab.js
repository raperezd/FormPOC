import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";

import {
  StyleSheet,
  Text,
  Dimensions,
  ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
  form: {
      backgroundColor: '#FFFFFF',
  },
  header: {
      backgroundColor: 'transparent'
      //height: 81
  },
  headerTitle: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '200'
  },
  headerSubTitle: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: '100'
  },
  headerBackTitle: {
      fontSize: 16,
      padding: 16,
      color: '#FFF'
  },
  bold: {
      fontWeight: '600'
  }
});

import BizagiControl from './BizagiControl';

const maxHeight = Dimensions.get('window').height;

class RecentChatsScreen extends React.Component {
  render() {
    return <BizagiControl>
      <View>
        <Text style={{ fontSize: 12 }}>
          <Text style={[styles.bold, { fontSize: 14 }]}>Dimensions / weight without the cable{'\n'}</Text>
          <Text style={[styles.bold]}>Headphones:</Text> 7.1" H x 6.7" W x 3.2" D (8.3 oz){'\n'}
          <Text style={[styles.bold]}>Audio cable:</Text> 47.2"{'\n'}
          <Text style={[styles.bold]}>USB cable:</Text> 12"{'\n'}{'\n'}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 12 }}>
          <Text style={[styles.bold, { fontSize: 14 }]}>What’s in the box{'\n'}</Text>
          QC35 wireless headphones II{'\n'}
          USB charging cable{'\n'}
          Audio cable{'\n'}
          Carrying case{'\n'}
          SoundLink® Mini Bluetooth speaker II{'\n'}
          Charging cradle{'\n'}
          Wall charger{'\n'}
          Cable{'\n'}
          Wireless range up to 30 ft (9 m){'\n'}
          Battery life up to 10 hrs{'\n'}
          Power rating: 100 – 240V{'\n'}
          3.5 mm auxiliary{'\n'}
          Micro-B USB port{'\n'}
        </Text>
      </View>
    </BizagiControl>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});


class BizagiTab extends React.Component {
  render() {
    return (
      <View style={{ height: maxHeight - 80 }}>
        <MainScreenNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

BizagiTab.router = MainScreenNavigator.router;

export default BizagiTab;