import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { Button, List } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { BizagiGridItem } from './BizagiGridItem';
import datas from '../data/grid_data';
import BizagiCollapsible from './BizagiCollapsible';
import BizagiCard from './BizagiCard';

const styles = StyleSheet.create({
    deleteButton: {
        margin: 2,
        backgroundColor: '#d04454',
        borderRadius: 4,
        elevation: 0,
    },
});

export default class BizagiGrid extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // basic: true,
            listViewData: datas,
        };
    }

    static propTypes = {
        onItemSelected: PropTypes.func
    }

    static defaultProps = {
        onItemSelected: (item) => { }
    }

    addNewItem(){
        let randNumber =  Math.floor(Math.random() * this.state.listViewData.length);
        const newData = [...this.state.listViewData];

        newData.unshift(this.state.listViewData[randNumber]);
        this.setState({ listViewData: newData });
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <BizagiCollapsible expanded={true} bgColor={"#DEDEDE"} title={"Supplies to request"} type={"subTitle"}>
                <TouchableHighlight onPress={_ => this.addNewItem()}>
                    <BizagiCard label="Add suplies to request." />
                </TouchableHighlight>
                <List
                    style={{ backgroundColor: 'transparent', padding: 12, zIndex: 0 }}
                    swipeRowStyle={{ backgroundColor: 'transparent' }}
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data => <BizagiGridItem {...data} onPress={_ => this.props.onItemSelected(data)} />}

                    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                        (
                            <Button style={styles.deleteButton} full danger
                                onPress={_ => this.deleteRow(secId, rowId, rowMap)} >
                                <Icon active name="x" size={22}
                                    style={{ color: '#FFF', fontWeight: '200' }}
                                />
                            </Button>
                        )
                    }
                    rightOpenValue={-50}
                />
            </BizagiCollapsible>
        );
    }
}
