import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import icNumberOne from '../../../Media/appicon/one.png';
import icStar from '../../../Media/appicon/starworkout.png';
import icInfo from '../../../Media/appicon/info.png';
import { HEIGHT, WIDTH } from '../../Constants/AppConstants';

export default class StartComponentOne extends Component {
    
    render() {
        const { wrapper, title, titleText1, titleText2, body, 
                cardio, moreWorkouts, icon, info, infoText, detailText, button,
                buttonText
        } = styles;      
        return (
            <View style={wrapper} >
                <View style={title} >                   
                    <Text style={titleText1} >Today</Text>
                    <Text style={titleText2} >TRAINING DAY 1</Text>
                </View>
                <View style={body} >
                    <View style={cardio} >
                        <Image
                          source={icNumberOne}
                          style={icon}
                          resizeMode='contain' 
                        />
                        <View style={info}>
                            <Text style={infoText} >Cardio</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={detailText} >6 min</Text>
                                <Text style={detailText} >7 exercises</Text>
                            </View>    
                        </View>
                        <View >
                            <TouchableOpacity activeOpacity={0.5} >
                                <Image 
                                source={icInfo}
                                style={icon}
                                resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>   
                    </View>   

                    <View style={moreWorkouts} >
                        <View >
                        <Image
                          source={icStar}
                          style={icon}
                          resizeMode='contain' 
                        />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Add more Workouts</Text>
                            <View>
                                <Text style={detailText} >
                                To boost your results.</Text>                               
                            </View>    
                        </View>

                    </View>
                    
                    
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity activeOpacity={0.5} style={button} >
                        <Text style={buttonText}>START</Text>
                    </TouchableOpacity>   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: HEIGHT * 0.69,
        backgroundColor: '#FFF',
        marginTop: HEIGHT * 0.01,
        marginBottom: HEIGHT * 0.02,
        marginHorizontal: WIDTH * 0.08,
        borderRadius: 10, 
        paddingHorizontal: 30,      
    },
    title: {
        flex: 1,
        paddingVertical: HEIGHT * 0.05,
        borderColor: 'transparent',
        borderWidth: 2,
        borderBottomColor: 'lightgray',
        // shadowColor: '#5f5555'
    },
    titleText1: {
        fontSize: 25,
        fontFamily: 'Cochin',
        color: '#818383'
    },
    titleText2: {
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#505050'
    },
    body: {
        flex: 4
    },
    cardio: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
    },
    info: {
        flex: 1,
        marginHorizontal: 15
    },
    infoText: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#505050'
    },
    detailText: {
        fontFamily: 'Cochin',
        fontSize: 15,
        color: '#818383'
    },
    moreWorkouts: {
        flexDirection: 'row',
        paddingBottom: HEIGHT * 0.05
    },
    button: {
        height: HEIGHT * 0.05,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    }
});
