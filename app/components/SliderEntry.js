import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles/BizagiCarouselStyles.style';
import IconEt from 'react-native-vector-icons/Entypo';
const stylesModal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerContainer: {
        alignItems: 'center',
        width: 350,
        height: 350,
        margin: 20
    },
    header: {
        flexDirection: "row",
    },
    title: {
        flex: 1,
        height: 50,
        backgroundColor: '#FBFBFB',
        color: "#555555",
        fontSize: 14,
        fontWeight: "bold",
        padding: 15,
        marginLeft: 2,
    },
    closeButton: {
        backgroundColor: '#FBFBFB',
        padding: 18.5,
    }
});
export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    state = {
        modalVisible: false
    }
    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={[styles.image, { width: 100, height: 100 }]}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: illustration }}
                    style={[styles.image, { width: 100, height: 100 }]}
                />
            );
    }

    _openModal(as) {
        this.setState({ modalVisible: true});
    }

    _closeModal() {
        this.setState({ modalVisible: false });
    }

    render() {
        const { data: { title, subtitle }, even } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this._openModal(this.image)}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this._closeModal()}
                >
                    <View style={stylesModal.modalContainer}>
                        <View style={stylesModal.innerContainer}>
                            <View style={stylesModal.header}>
                                <Text style={stylesModal.title}>Alguna joda</Text>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this._closeModal()}
                                        title="X"
                                        style={stylesModal.closeButton}
                                    >
                                        <IconEt name="squared-cross" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Image
                                source={{ uri: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png" }}
                                style={[styles.image, { width: 100, height: 100 }]}
                            />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        );
    }
}
