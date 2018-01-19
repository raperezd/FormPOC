import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    header: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D5',
        backgroundColor: '#E8E8E8',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#28A6DB',
        fontSize: 16,
        fontWeight: '500'
    },
    content: {
        backgroundColor: '#fff',
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
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerText}>{this.props.headerText}</Text>
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
                <Collapsible collapsed={this.state.collapsed} align="center">
                    <View style={styles.content}>
                        {this.props.children}
                    </View>
                </Collapsible>
            </View>
        );
    }
}

export default BizagiGroup;