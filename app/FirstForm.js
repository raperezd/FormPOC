
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
                    <BizagiGroup collapsed={false} headerStyle={{height: 40}} headerTextStyle={{}} headerText="Office supplies request"> 
                        <BizagiGrid/>
                        <BizagiControl label='If you are requesting an asset replacement, please write down the reason' />
                        <BizagiControl label={<Text style={{fontSize: 12, fontWeight: '600'}}>Replacement reason</Text>}>
                            <BizagiExtendedText></BizagiExtendedText>
                        </BizagiControl>
                    </BizagiGroup>
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