import React, { Component } from 'react';
import { StyleSheet, ListView, View, Image } from 'react-native';
import { Container, Grid, Col, Row, Header, Content, Button, List, ListItem, Text, Card } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import IconEt from 'react-native-vector-icons/Entypo';
import BizagiCard from './BizagiCard';

const datas = [
    {
        image: { uri: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png' },
        productName: 'Headphones',
        dimensions: '6.4 x 6.7 x 2.1 in',
        deliverTo: 'Julio Ocaña',
        deliverTime: 'Deliver in 8 days'
    },
    {
        image: { uri: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05149188.png' },
        productName: 'Laptop support',
        dimensions: '6.4 x 6.7 x 2.1 in',
        deliverTo: 'Angela Pinzón',
        deliverTime: 'Deliver in 5 days'
    },
    {
        image: { uri: 'https://acco-product-images.s3.amazonaws.com/mbank41455_w1400_h1400.jpg' },
        productName: 'Foot rest',
        dimensions: '6.4 x 6.7 x 2.1 in',
        deliverTo: 'Diego Parra',
        deliverTime: 'Deliver in 8 days'
    },
    {
        image: { uri: 'https://http2.mlstatic.com/mesa-base-monitor-pc-altura-5-niveles-1016cm-ancho-34cm-D_NQ_NP_903311-MCO20506525942_122015-F.jpg' },
        productName: 'Monitor base',
        dimensions: '6.4 x 6.7 x 2.1 in',
        deliverTo: 'Jair Hernandez',
        deliverTime: 'Deliver in 13 days'
    },
];

const styles = StyleSheet.create({
    deleteButton: {
        margin: 2,
        backgroundColor: '#d04454',
        borderRadius: 4,
        elevation: 0
    },
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
        fontWeight: '200'
    }
});

export default class BizagiGrid extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Container style={{ backgroundColor: '#DEDEDE', height: 300, maxHeight:600 }}>
                <Content style={{ backgroundColor: 'transparent' }}>
                    <List style={{ backgroundColor: 'transparent', padding: 12, zIndex: 0 }}
                        swipeRowStyle={{ backgroundColor: 'transparent' }}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={data =>
                            <ListItem style={styles.listItem}>
                                <Content>
                                    <Grid>
                                        <Col style={{ width: 35, marginRight: 10 }}>
                                            <Image style={{ width: 35, height: 35 }} source={data.image}></Image>
                                        </Col>
                                        <Col style={{ flex: 2 }}>
                                            <Row>
                                                <Text style={styles.listItemTitle}>{data.productName}</Text>
                                            </Row>
                                            <Row>
                                                <Text style={styles.listItemSubTitleBold}>Dimensions: </Text>
                                                <Text style={styles.listItemSubTitle}>{data.dimensions}</Text>
                                            </Row>
                                            <Row>
                                                <Text style={styles.listItemSubTitleBold}>Deliver to: </Text>
                                                <Text style={styles.listItemSubTitle}>{data.deliverTo}</Text>
                                            </Row>
                                        </Col>
                                        <Col style={{ flex: 1 }}>
                                            <Text style={styles.listItemText}>{data.deliverTime}</Text>
                                        </Col>
                                    </Grid>
                                </Content>
                            </ListItem>
                        }

                        /*  renderLeftHiddenRow={data => 
                           <Button full onPress={() => alert(data)}>
                             <Icon active name="information-circle" />
                           </Button>} */
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button style={styles.deleteButton} full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                                <Icon active style={{ color: '#FFF', fontWeight: '200' }} size={22} name="x" />
                            </Button>}
                        /* leftOpenValue={75} */
                        rightOpenValue={-50}
                        List />
                </Content>
            </Container>
        );
    }
}