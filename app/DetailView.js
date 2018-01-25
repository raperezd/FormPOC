
import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
    },
    header: {
        backgroundColor: 'transparent'
        //height: 81
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '200'
    },
    headerSubTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '100'
    },
    headerBackTitle: {
        fontSize: 16,
        padding: 16,
        color: '#FFF'
    }
});


class DetailView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerLeft: <TouchableIconBtn style={{ color: '#FFF' }} size={22} name="arrow-left" onPress={() => navigation.goBack(null)}></TouchableIconBtn>,
            headerTitle: <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <Text style={styles.headerTitle}>Supplies</Text>
                <Text style={styles.headerSubTitle}>{params.productName}</Text>
            </View>,
            headerTintColor: 'white',
            header: (props) => <View><ImageHeader {...props} /></View>
        }
    }

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