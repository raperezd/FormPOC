
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
    }
});


class DetailView extends React.Component {
    static navigationOptions = {
        title: 'Detalle'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.form}>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mi iaculis, ultricies tellus nec, tincidunt lectus.
                            Sed tempus lectus eget tristique cursus. Fusce porttitor, metus id finibus elementum, erat odio eleifend ante, non scelerisque
                            lorem neque scelerisque elit. In euismod nisi elementum lorem pharetra, eu malesuada nulla hendrerit. In hac habitasse platea dictumst.
                            Aliquam quis faucibus mauris. Integer eleifend erat purus, quis porttitor justo blandit non. Nulla ornare, nunc id ultrices tincidunt,
                            mauris purus eleifend justo, sed consectetur velit neque quis metus. Ut sed volutpat mauris.
                            </Text>

            </ScrollView>
        );
    }
}

export default DetailView;