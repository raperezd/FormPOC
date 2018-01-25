import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import { ListItem, Content, Grid, Col, Row } from 'native-base';

const styles = StyleSheet.create({
    listItem: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        margin: 2,
        backgroundColor: '#FFF',
        borderRadius: 4,
        elevation: 2
    },
    listItemTitle: {
        color: '#555555',
        fontSize: 14,
        fontWeight: '600'
    },
    listItemSubTitle: {
        color: '#555555',
        fontSize: 10,
        fontWeight: '200'
    },
    listItemSubTitleBold: {
        color: '#555555',
        fontSize: 10,
        fontWeight: '400'
    },
    listItemText: {
        color: '#B7B7B7',
        fontSize: 10,
        fontWeight: '200',
        marginLeft:25,
    }
});


export default BizagiGridItem = props => (
    <ListItem style={styles.listItem} onPress={props.onPress}>
        <Content>
            <Grid>
                <Col style={{ width: 35, marginRight: 10 }}>
                    <Image style={{ width: 35, height: 35 }} source={props.image}></Image>
                </Col>
                <Col style={{ flex: 2 }}>
                    <Row>
                        <Text style={styles.listItemTitle}>{props.productName}</Text>
                    </Row>
                    <Row>
                        <Text style={styles.listItemSubTitleBold}>Dimensions: </Text>
                        <Text style={styles.listItemSubTitle}>{props.dimensions}</Text>
                    </Row>
                    <Row>
                        <Text style={styles.listItemSubTitleBold}>Deliver to: </Text>
                        <Text style={styles.listItemSubTitle}>{props.deliverTo}</Text>
                    </Row>
                </Col>
                <Col style={{ flex: 1 }}>
                    <Text style={styles.listItemText}>{props.deliverTime}</Text>
                </Col>
            </Grid>
        </Content>
    </ListItem>
)
