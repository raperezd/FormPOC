
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, View
} from 'react-native';

import { Button, Card, CardItem, Body, List, ListItem } from 'native-base';

import Icon from 'react-native-vector-icons/Feather';
import BizagiGroup from './components/BizagiGroup';
import BizagiControl from './components/BizagiControl';
import BizagiExtendedText from './components/BizagiExtendedText';
import BizagiGrid from './components/BizagiGrid';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';
import BizagiCollapsible from './components/BizagiCollapsible';


const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
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
    }
});

class FirstForm extends React.Component {
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
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.form}>
                    <View style={{ height: "auto" }}>
                        <BizagiCollapsible expanded={true} bgColor={"#fff"} title={"Office supplies request"} type={"title"}>
                            <View>
                                <BizagiGrid
                                    onItemSelected={(item) => navigate('DetailView', { ...item })}
                                />
                            </View>
                            <BizagiControl label='If you are requesting an asset replacement, please write down the reason' />
                            <BizagiControl label={<Text style={{ fontSize: 12, fontWeight: '600' }}>Replacement reason</Text>}>
                                <BizagiExtendedText></BizagiExtendedText>
                            </BizagiControl>
                        </BizagiCollapsible>
                    </View>
                </ScrollView>
                <View>
                    <Button full style={{ backgroundColor: '#295d7b' }}>
                        <Text style={{ color: '#FFF' }}>Request office supplies</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default FirstForm;