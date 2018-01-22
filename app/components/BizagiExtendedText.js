import React, { Component } from 'react';

import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        padding: 8,
        fontSize: 14,
        lineHeight: 19,
        height: 60,
        color: '#555555'
    }
});

class BizagiExtendedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    _changeValue = () => {
        this.setState({ value: !this.state.value });
    }

    render() {
        return (
            <TextInput
                placeholder='abc'
                multiline={true}
                placeholderTextColor='#E8E8E8'
                style={styles.textInput}
                editable={this.props.editable}
                keyboardType={this.props.keyboardType}
                underlineColorAndroid='transparent'
                value={this.props.value}>
            </TextInput>
        );
    }
}

export default BizagiExtendedText;