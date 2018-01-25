import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

import TouchableIconBtn from './TouchableIconBtn';
import BizagiControl from './BizagiControl';

const styles = StyleSheet.create({
    icon: {
        borderRadius: 75,
        color: '#B7B7B7'
    }
});


class BizagiCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value || 0 };
    }

    _minusOne = () => {
        let val = this.state.value == 0 ? 0 : this.state.value - 1;
        this.setState({ value: val });
    }
    _plusOne = () => {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <BizagiControl style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#DEDEDE', paddingTop: 5,  paddingBottom: 0}} label={<Text style={{ fontSize: 12, fontWeight: '600' }}>Quantity request</Text>}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: -16}}>
                    <TouchableIconBtn size={25} style={styles.icon} name='minus' onPress={this._minusOne} />
                    <Text style={{ fontSize: 36, fontWeight: '600', color: '#295d7b' }}>{this.state.value}</Text>
                    <TouchableIconBtn size={25} style={styles.icon} name='plus' onPress={this._plusOne} />
                </View>
            </BizagiControl>
        );
    }
}

export default BizagiCounter;