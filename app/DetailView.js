import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';
import { SimpleGridItem } from './components/BizagiGridItem';
import BizagiTab from './components/BizagiTab';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';
import BizagiCounter from './components/BizagiCounter';
import BizagiControl from './components/BizagiControl';

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


class DetailView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        this.params = params;
        return {
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerLeft: <TouchableIconBtn style={{ color: '#FFF' }} size={22} name="arrow-left" onPress={() => navigation.goBack(null)}></TouchableIconBtn>,
            headerTitle: <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <Text style={styles.headerTitle}>Supplies</Text>
                <Text style={styles.headerSubTitle}>{params.productName}</Text>
            </View>,
            headerTintColor: 'white',
            header: (props) => <View><ImageHeader {...props} /></View>
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.form}>
                <SimpleGridItem {...params} style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 7, paddingBottom: 7 }} />
                <BizagiCounter></BizagiCounter>
                <BizagiTab />
                <BizagiControl>
                    <View>
                        <Text style={{fontSize: 12}}>
                            <Text style={[styles.bold, {fontSize: 14}]}>Dimensions / weight without the cable{'\n'}</Text>
                            <Text style={[styles.bold]}>Headphones:</Text> 7.1" H x 6.7" W x 3.2" D (8.3 oz){'\n'}
                            <Text style={[styles.bold]}>Audio cable:</Text> 47.2"{'\n'}
                            <Text style={[styles.bold]}>USB cable:</Text> 12"{'\n'}{'\n'}
                        </Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 12}}>
                        <Text style={[styles.bold, {fontSize: 14}]}>What’s in the box{'\n'}</Text>
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
            </ScrollView>
        );
    }
}

export default DetailView;