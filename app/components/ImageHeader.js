import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Header } from 'react-navigation';

const ImageHeader = props => (
    <View style={{ backgroundColor: '#295d7b' }}>
        <Image
            style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            }}
            source={require('./images/header.png')}
        />
        <Header {...props} />
    </View>
);

export default ImageHeader;