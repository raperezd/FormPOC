import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    header: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#DEDEDE',
        backgroundColor: '#F8F8F8',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#555555',
        fontSize: 12,
        fontWeight: '600'
    },
    content: {
        backgroundColor: '#FFFFFF',
    }
});

class BizagiGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: this.props.collapsed };
    }

    _toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this._toggleExpanded}>
                    <View style={[styles.header, this.props.headerStyle]}>
                        <View>
                            <Text style={[styles.headerText, this.props.headerTextStyle]}>{this.props.headerText}</Text>
                        </View>
                        <View>
                            {
                                this.state.collapsed ?
                                    <Icon name="chevron-right" size={20} />
                                    :
                                    <Icon name="chevron-down" size={20} />
                            }
                        </View>
                    </View>
                </TouchableHighlight>
                <Collapsible collapsed={this.state.collapsed} collapsedHeight={0} align="center">
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </Collapsible>
            </View>
        );
    }
}

export default BizagiGroup;