import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { APP_THEME } from '../../Constants/Color';
import { HEIGHT } from '../../Constants/AppConstants';

export default class FunctionBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress });
            }, 500);
        }, 1500);
    }

    render() {
        const { container, progress, one, two, three, text, img } = styles;
        return (
            <View style={container}>
                <View style={one}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../Media/appicon/ic_track.png')}
                            style={img}
                        />
                    </TouchableOpacity>
                    <Text style={text}>Run tracker</Text>
                </View>
                
                <View style={two}>
                    <Progress.Circle 
                    style={progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                    direction='clockwise'
                    showsText
                    color='#FFF'
                    size={100}
                    />
                    <Text style={text}>Progress</Text>
                </View>
                
                    <View style={three}>
                        <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../Media/appicon/ic_balance.png')}
                            style={img}
                        />
                        </TouchableOpacity>
                        <Text style={text}>Your Weight</Text>
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: APP_THEME,
        marginHorizontal: HEIGHT * 0.1,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flex: 2.5,
        paddingBottom: 10
    },
    one: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    two: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    three: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        margin: 10,
    },
    img: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center'
    }
});
