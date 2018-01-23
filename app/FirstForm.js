
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';


import BizagiGroup from './components/BizagiGroup';
import BizagiControl from './components/BizagiControl';
import BizagiExtendedText from './components/BizagiExtendedText';
import BizagiGrid from './components/BizagiGrid';
import BizagiCard from './components/BizagiCard';
import BizagiCollapsible from './components/BizagiCollapsible';
import { Card, CardItem, Body, List, ListItem } from 'native-base';

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
    }
});


/* <BizagiGroup collapsed={false} headerStyle={{height: 30}} headerTextStyle={{fontSize: 10, fontWeight: '300'}} headerText="SUPLIES TO REQUEST">
    <Text>Hi 2</Text>
</BizagiGroup> */
class FirstForm extends React.Component {
    static navigationOptions = {
        title: 'Request office supplies'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>

                <ScrollView style={styles.form}>
                    <BizagiCollapsible bgColor={"#fff"} title={"Office supplies request"} type={"title"}>
                        <BizagiCollapsible bgColor={"#DEDEDE"} title={"Supplies to request"} type={"subTitle"}>
                            <BizagiCard label="Add suplies to request." />
                            <BizagiGrid />
                        </BizagiCollapsible>
                        <BizagiControl label='If you are requesting an asset replacement, please write down the reason' />
                        <BizagiControl label={<Text style={{ fontSize: 12, fontWeight: '600' }}>Replacement reason</Text>}>
                            <BizagiExtendedText></BizagiExtendedText>
                        </BizagiControl>
                    </BizagiCollapsible>

                </ScrollView>
                <View>
                    <Button color='#295d7b'
                        title="Request office supplies"
                        onPress={() =>
                            navigate('DetailView', {})
                        }
                    />
                </View>
            </View>
        );
    }
}

export default FirstForm;