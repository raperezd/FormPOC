
import React, { Component } from 'react';
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

import Carousel from 'react-native-snap-carousel';
import IconEt from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import BizagiGrid from './BizagiGrid';
import BizagiCard from './BizagiCard';

export class MyCarousel extends Component {

    state = {
        entries: [
            {
                image: { uri: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png' },
                productName: 'Headphones',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Julio Ocaña',
                deliverTime: 'Deliver in 8 days'
            },
            {
                image: { uri: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05149188.png' },
                productName: 'Laptop support',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Angela Pinzón',
                deliverTime: 'Deliver in 5 days'
            },
            {
                image: { uri: 'https://acco-product-images.s3.amazonaws.com/mbank41455_w1400_h1400.jpg' },
                productName: 'Foot rest',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Diego Parra',
                deliverTime: 'Deliver in 8 days'
            },
            {
                image: { uri: 'https://http2.mlstatic.com/mesa-base-monitor-pc-altura-5-niveles-1016cm-ancho-34cm-D_NQ_NP_903311-MCO20506525942_122015-F.jpg' },
                productName: 'Monitor base',
                dimensions: '6.4 x 6.7 x 2.1 in',
                deliverTo: 'Jair Hernandez',
                deliverTime: 'Deliver in 13 days'
            },
        ]
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <Image style={{ width: 35, height: 35 }} source={item.image}></Image>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}
