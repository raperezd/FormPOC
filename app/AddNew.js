
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, View
} from 'react-native';

import { Button, Card, CardItem, Body, List, ListItem } from 'native-base';


class AddNew extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        //title: 'Request office supplies',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: <TouchableIconBtn style={{ color: '#FFF' }} size={22} name="arrow-left" onPress={() => navigation.goBack(null)}></TouchableIconBtn>,
        headerRight: <Icon style={styles.headerBackTitle} size={22} name="more-vertical" />,
        headerTitle: <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
            <Text style={styles.headerTitle}>Request office supplies</Text>
            <Text style={styles.headerSubTitle}>CO-6122 Office supplies request</Text>
        </View>,
        headerTintColor: 'white',
        header: (props) => <View><ImageHeader {...props} /></View>
    });

    render() {
        const { navigate } = this.props.navigation;
        return (<View></View>)
    }
}

export default AddNew;