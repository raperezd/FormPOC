import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';
import { SimpleGridItem } from './components/BizagiGridItem';
import BizagiTab from './components/BizagiTab';
import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';
import BizagiCounter from './components/BizagiCounter';
import BizagiControl from './components/BizagiControl';

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
        backgroundColor: '#FFFFFF',
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
    },
    bold: {
        fontWeight: '600'
    }
});


class DetailView extends React.Component {

    state = {
        sliderWidth: 100,
        itemWidth: 100,
        entries: [
            {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'http://i.imgur.com/UYiroysl.jpg'
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
            },
            {
                title: 'White Pocket Sunset',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                illustration: 'http://i.imgur.com/MABUbpDl.jpg'
            },
            {
                title: 'Acrocorinth, Greece',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
            },
            {
                title: 'The lone tree, majestic landscape of New Zealand',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
            },
            {
                title: 'Middle Earth, Germany',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'http://i.imgur.com/lceHsT6l.jpg'
            }
        ]
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

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        this.params = params;
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
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={this.state.entries}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={4}
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
                <BizagiCounter></BizagiCounter>
                <BizagiTab />
                <BizagiControl>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            <Text style={[styles.bold, { fontSize: 14 }]}>Dimensions / weight without the cable{'\n'}</Text>
                            <Text style={[styles.bold]}>Headphones:</Text> 7.1" H x 6.7" W x 3.2" D (8.3 oz){'\n'}
                            <Text style={[styles.bold]}>Audio cable:</Text> 47.2"{'\n'}
                            <Text style={[styles.bold]}>USB cable:</Text> 12"{'\n'}{'\n'}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>
                            <Text style={[styles.bold, { fontSize: 14 }]}>What’s in the box{'\n'}</Text>
                            QC35 wireless headphones II{'\n'}
                            USB charging cable{'\n'}
                            Audio cable{'\n'}
                            Carrying case{'\n'}
                            SoundLink® Mini Bluetooth speaker II{'\n'}
                            Charging cradle{'\n'}
                            Wall charger{'\n'}
                            Cable{'\n'}
                            Wireless range up to 30 ft (9 m){'\n'}
                            Battery life up to 10 hrs{'\n'}
                            Power rating: 100 – 240V{'\n'}
                            3.5 mm auxiliary{'\n'}
                            Micro-B USB port{'\n'}
                        </Text>
                    </View>
                </BizagiControl>
            </ScrollView>
        );
    }
}

export default DetailView;