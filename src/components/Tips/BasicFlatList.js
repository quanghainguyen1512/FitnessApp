import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text, Image, RefreshControl } from 'react-native';
// import flatListData from './flatListData';
import { getTipsFromServer } from '../../../networking/Server';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{ 
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato' 
                    }}
                >
                    <Image
                        source={{ uri: 'http://' + this.props.item.imageURL }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    >
                    </Image>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.flatListItem}>{this.props.item.Name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.NoiDung}</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'white' }}>

                </View>
            </View>    
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
            tipsFromServer: [], //data save all in this state. each data saved so render dc call lai
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        this.setState({ refreshing: true });
        getTipsFromServer().then((tips) => {
            this.setState({ tipsFromServer: tips }); //call this function after finished getTipsFromServer().
            this.setState({ refreshing: false });
        }).catch((error) => {
            this.setState({ tipsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }
    onRefresh = () => {
        this.refreshDataFromServer();
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>
                <FlatList
                data={this.state.tipsFromServer}
                renderItem={({ item, index }) => {
                    // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                keyExtractor={(item,index) => item.Id}
                refreshControl={
                    <RefreshControl 
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                }
                >

                </FlatList>
            </View>
        );
    }
}