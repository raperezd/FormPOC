import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

const styles = StyleSheet.create({
    control: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 4
    },
    label: { 
        paddingTop: 2,
        paddingBottom: 2 
    }
});

class BizagiControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.control, !!this.props.style && this.props.style]}>
                <View>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
                <View>{this.props.children}</View>
            </View>
        );
    }
}

export default BizagiControl;