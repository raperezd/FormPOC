
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
        flex:1,
        maxHeight: 300,
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 25,
        color: "#2C5D79",
        fontWeight: "normal"
    },
    desc: {
        flex: 1,
        textAlign: 'center',
        color: "gray",
        fontWeight: "normal"
    }
});


class BizagiCard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={styles.card}>
                <CardItem>
                    <Body style={styles.body}>
                        <IconEt style={styles.icon} name="circle-with-plus" />
                        <Text style={styles.desc}>{this.props.label}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default BizagiCard;