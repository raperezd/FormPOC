import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';

import {
    StyleSheet,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    icon: {
        color: '#000',
        height: 24,
        width: 24,
        margin: 16
    }
})

class TouchableIconBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        name: PropTypes.string,
        size: PropTypes.number,
        onPress: PropTypes.func
    }

    static defaultProps = {
        name: 'arrow-left',
        size: 22,
        onPress: () => { }
    }

    _onPressButton = () => {
        this.props.onPress();
    }

    render() {
        return (
            <TouchableNativeFeedback style={{borderRadius: 75}}
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{ backgroundColor: 'transparent', borderRadius: 75}}>
                    <Icon name={this.props.name} style={[
                        styles.icon,
                        !!this.props.style && this.props.style
                    ]}
                        size={this.props.size} />
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default TouchableIconBtn;