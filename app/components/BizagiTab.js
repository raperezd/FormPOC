import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import BizagiControl from './BizagiControl';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const maxHeigth = Dimensions.get('window').height;

const Overview = () => <BizagiControl>
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
</BizagiControl>;

const Specs = () => <BizagiControl>
  <View style={[styles.container, {}]} >
    <Text style={{ fontSize: 12 }}>
      <Text style={[styles.bold, { fontSize: 14 }]}>Dimensions / weight without the cable{'\n'}</Text>
      <Text style={[styles.bold]}>Headphones:</Text> 7.1" H x 6.7" W x 3.2" D (8.3 oz){'\n'}
      <Text style={[styles.bold]}>Audio cable:</Text> 47.2"{'\n'}
      <Text style={[styles.bold]}>USB cable:</Text> 12"{'\n'}{'\n'}
    </Text>
  </View>
</BizagiControl>;

const Reviews = () => <BizagiControl>
  <View style={[styles.container, {}]} >
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
</BizagiControl>;

export default class BizagiTab extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'overview', title: 'Overview' },
      { key: 'specs', title: 'Specs' },
      { key: 'reviews', title: 'Reviews' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
    labelStyle={{ color: '#295D7B' }}
    pressColor='#DEDEDE' pressOpacity={0.3}
    indicatorStyle={{ backgroundColor: '#295D7B' }}
    style={{ backgroundColor: '#FFF', borderColor: '#DEDEDE', borderBottomWidth: 1 }}
    {...props} />;

  _renderScene = SceneMap({
    overview: Overview,
    specs: Specs,
    reviews: Reviews,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: maxHeigth - 80
  },
});