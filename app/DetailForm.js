
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    TouchableNativeFeedback
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/Feather';
import BizagiGroup from './components/BizagiGroup';
import BizagiControl from './components/BizagiControl';
import BizagiExtendedText from './components/BizagiExtendedText';
import BizagiGrid from './components/BizagiGrid';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';
import BizagiCard from './components/BizagiCard';
import BizagiCollapsible from './components/BizagiCollapsible';
import BizagiModal from './components/BizagiModal';
import MyCarousel from './components/BizagiCarousel';
import SliderEntry from './components/SliderEntry';

import { Dimensions, Platform } from 'react-native';
import stylesC from './components/styles/BizagiCarouselStyles.style';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(78);
const itemHorizontalMargin = wp(0.5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;
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

    state = {
        sliderWidth: 100,
        itemWidth: 100,
        entries: [
            {
                illustration: { uri: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png' },
                productName: 'Headphones',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Julio Ocaña',
                deliverTime: 'Deliver in 8 days'
            },
            {
                illustration: { uri: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05149188.png' },
                productName: 'Laptop support',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Angela Pinzón',
                deliverTime: 'Deliver in 5 days'
            },
            {
                illustration: { uri: 'https://acco-product-images.s3.amazonaws.com/mbank41455_w1400_h1400.jpg' },
                productName: 'Foot rest',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Diego Parra',
                deliverTime: 'Deliver in 8 days'
            },
            {
                illustration: { uri: 'https://http2.mlstatic.com/mesa-base-monitor-pc-altura-5-niveles-1016cm-ancho-34cm-D_NQ_NP_903311-MCO20506525942_122015-F.jpg' },
                productName: 'Monitor base',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Jair Hernandez',
                deliverTime: 'Deliver in 13 days'
            },
            {
                illustration: { uri: 'https://acco-product-images.s3.amazonaws.com/mbank41455_w1400_h1400.jpg' },
                productName: 'Foot rest',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Diego Parra',
                deliverTime: 'Deliver in 8 days'
            },
            {
                illustration: { uri: 'https://http2.mlstatic.com/mesa-base-monitor-pc-altura-5-niveles-1016cm-ancho-34cm-D_NQ_NP_903311-MCO20506525942_122015-F.jpg' },
                productName: 'Monitor base',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Jair Hernandez',
                deliverTime: 'Deliver in 13 days'
            },
            {
                illustration: { uri: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png' },
                productName: 'Headphones',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Julio Ocaña',
                deliverTime: 'Deliver in 8 days'
            },
        ]
    }
    _renderItem({ item, index }, parallaxProps) {
        return (
            <View style={stylesC.item}>
                <ParallaxImage
                    source={{ uri: item.illustration.uri }}
                    containerStyle={stylesC.imageContainer}
                    style={stylesC.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={stylesC.title} numberOfLines={2}>
                    {item.productName}
                </Text>
            </View>
        );
    }
    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    _openModal() {
        this.setState({ modalVisible: true });
    }

    _closeModal() {
        this.setState({ modalVisible: false });
    }

    static navigationOptions = ({ navigation }) => ({
        //title: 'Request office supplies',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: <TouchableIconBtn style={{ color: '#FFF' }} size={22} name="arrow-left" onPress={() => navigation.goBack(null)}></TouchableIconBtn>,
        headerRight: <Icon style={styles.headerBackTitle} size={22} name="more-vertical" />,
        headerTitle: <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
            <Text style={styles.headerTitle}>Request office supplies</Text>
            <Text style={styles.headerSubTitle}>CO-6122 Office supplies request</Text>
        </View>,
        headerTintColor: 'white',
        header: (props) => <View><ImageHeader {...props} /></View>
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Carousel
                ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                data={this.state.entries}
                renderItem={this._renderItemWithParallax}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                firstItem={1}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.5}
                enableMomentum={false}
                containerCustomStyle={stylesC.slider}
                contentContainerCustomStyle={stylesC.sliderContentContainer}
                loop={false}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
            />

        );
    }
}

export default DetailView;