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
    constructor(props) {
        super(props);
        if (props.expanded) {
            this.state = {
                he: new Animated.Value(),
                expanded: props.expanded,
                icon: "chevron-down"
            };
        } else {
            this.state = {
                he: new Animated.Value(0),
                expanded: props.expanded,
                icon: "chevron-right"
            };
        }
    }

    _onPress = () => {
        if (this.state.expanded) {
            this.setState({ expanded: false, icon: "chevron-right" })
            Animated.timing(
                this.state.he,
                {
                    toValue: 0
                }
            ).start();
        } else {
            this.setState({ expanded: true, icon: "chevron-down" })
            Animated.timing(
                this.state.he,
                {
                    toValue: "auto"
                }
            ).start();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={this.props.type == "title" ? styles.principal : styles.secondary}>
                            <Text style={this.props.type == "title" ? styles.title : styles.subTitle}>{this.props.title}</Text>
                        </View>
                        <View>
                            <IconEt style={this.props.type == "title" ? styles.iconExapandPrincipal : styles.iconExapandSecondary} name={this.state.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
                {this.state.expanded && <Animated.View style={[styles.box, { height: this.state.he, backgroundColor: this.props.bgColor }]}>
                    {this.props.children}
                </Animated.View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingBottom: 20
    },
    box: {
        minHeight: "auto"
    },
    title: {
        color: "#555555",
        fontSize: 14,
        fontWeight: "bold",
        padding: 15,
        marginLeft: 2,
    },
    subTitle: {
        color: "#555555",
        fontSize: 12,
        fontWeight: "normal",
        padding: 5,
        marginLeft: 12,
    },
    principal: {
        flex: 1,
        height: 50,
        backgroundColor: '#F8F8F8',
        marginLeft: "auto",
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
    },
    secondary: {
        flex: 1,
        height: 30,
        backgroundColor: '#F8F8F8',
        marginLeft: "auto",
    },
    iconExapandPrincipal: {
        color: '#B7B7B7',
        fontWeight: "200",
        fontSize: 24,
        backgroundColor: '#F8F8F8',
        padding: 11.8,
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
    },
    iconExapandSecondary: {
        color: '#B7B7B7',
        fontWeight: 'normal',
        fontSize: 22,
        backgroundColor: '#F8F8F8',
        padding: 3.5,
        paddingRight: 11
    }
});