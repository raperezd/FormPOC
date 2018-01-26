
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import IconEt from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
    card: {
        height: 60,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        borderRadius: 5
    },
    icon: {
        fontSize: 25,
        color: "#2C5D79",
        fontWeight: "normal",
        marginTop:5,
    },
    desc: {
        flex: 1,
        textAlign: 'center',
        color: "gray",
        fontWeight: "normal",
        marginBottom:5,
    }
});


class BizagiCard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.card}>
                <IconEt style={styles.icon} name="circle-with-plus" />
                <Text style={styles.desc}>{this.props.label}</Text>
            </View>
        );
    }
}

export default BizagiCard;