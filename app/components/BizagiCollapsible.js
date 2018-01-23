
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import IconEt from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import {
    StatusBar,
    AppRegistry,
    PanResponder,
    TouchableOpacity,
    Dimensions,
    NativeModules,
    LayoutAnimation,
    Animated
} from "react-native";

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    header: {
        flex: 1,
        height: 25,
        backgroundColor: "#F8F8F8",
        color: "#555555",
        padding: 20
    },
    content: {
        flex: 1,
        padding: 20,
    }
});

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

class BizagiCollapsible extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        heightContent: 45,
        minHeightContent: 45,
        maxHeightContent: 600,
        label: "Header"
    }
    onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({ heightContent: this.state.heightContent + 450 })
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.container} onPress={this._onPress}>
                    <View style={styles.header} >
                        <Text>{this.state.label}</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.content, { height: this.state.heightContent }]}>
                    <Text>Container</Text>
                </View>
            </View>
        );
    }
}

export default BizagiCollapsible;