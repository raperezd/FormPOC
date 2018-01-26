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
const slideWidth = wp(28);
const itemHorizontalMargin = wp(0.5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;


const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: 'transparent',
        //height: 81
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '200',
        alignItems: 'center',
    },
    headerSubTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '100'
    },
    headerBackTitle: {
        fontSize: 16,
        padding: 0,
        color: '#FFF'
    },
    bold: {
        fontWeight: '600'
    }
});


class DetailView extends React.Component {

    state = {
        sliderWidth: 100,
        itemWidth: 100
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
        this.entries = this.params.images.map((el)=> {
            return {illustration: el.uri}; 
        });
        return {
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle, 
            headerLeft: null,
            headerRight: <TouchableIconBtn style={{ color: '#FFF' }} size={22} name="x" onPress={() => navigation.goBack(null)}></TouchableIconBtn>,
            headerTitle: <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingLeft: 15, paddingTop: 5, paddingBottom: 5 }}>
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
                <SimpleGridItem {...params} style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 7, paddingBottom: 7 }} />
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={entries} 
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={0}
                    inactiveSlideScale={0.85}
                    inactiveSlideOpacity={0.5}
                    enableMomentum={false}
                    containerCustomStyle={stylesC.slider}
                    contentContainerCustomStyle={stylesC.sliderContentContainer}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <BizagiCounter></BizagiCounter>
                <BizagiTab />
            </ScrollView>
        );
    }
}

export default DetailView;