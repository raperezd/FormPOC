import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 100,
  width: Dimensions.get('window').width,
};

const Overview = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const Specs = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const Reviews = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

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
    labelStyle={{color: '#295D7B'}}
    pressColor='#DEDEDE' pressOpacity={0.3} 
    indicatorStyle={{backgroundColor: '#295D7B'}} 
    style={{backgroundColor: '#FFF', borderColor: '#DEDEDE', borderBottomWidth: 1}}
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
  },
});