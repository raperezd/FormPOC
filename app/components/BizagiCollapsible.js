import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    View,
    Animated
} from 'react-native';

import IconEt from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import BizagiGrid from './BizagiGrid';
import BizagiCard from './BizagiCard';
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class BizagiCollapsible extends React.Component {
    state = {
        h: 0,
        w: 100,
        he: new Animated.Value(0),
        expanded: false,
        icon: "chevron-right"
    };

    _onPress = () => {
        if (this.state.expanded) {
            this.setState({ h: 0, expanded: false, icon: "chevron-right" })
            Animated.timing(
                this.state.he,
                {
                    toValue: 0
                }
            ).start();
        } else {
            this.setState({ h: "auto", expanded: true, icon: "chevron-down" })
            Animated.timing(
                this.state.he,
                {
                    toValue: 500
                }
            ).start();
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.button}>
                            <Text style={this.props.type == "title" ? styles.title : styles.subTitle}>{this.props.title}</Text>
                        </View>
                        <View>
                            <IconEt style={styles.iconExapand} name={this.state.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.box, { height: this.state.he, backgroundColor: this.props.bgColor }]}>
                    {this.props.children}
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    title: {
        color: "#555555",
        fontSize: 14,
        fontWeight: "bold",
        padding: 15,
    },
    subTitle: {
        color: "#555555",
        fontSize: 12,
        fontWeight: "normal",
        padding: 15,
    },
    button: {
        flex: 1,
        height: 50,
        backgroundColor: '#F8F8F8',
        marginLeft: "auto"
    },
    buttonText: {
        color: '#B7B7B7',
        fontWeight: 'normal',
        padding: 15,
        fontSize: 12,
        backgroundColor: "transparent"
    },
    iconExapand: {
        color: '#B7B7B7',
        fontWeight: 'normal',
        fontSize: 20,
        backgroundColor: '#F8F8F8',
        padding: 15,
    }
});
