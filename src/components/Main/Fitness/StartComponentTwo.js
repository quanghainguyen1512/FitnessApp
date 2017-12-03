import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import icNumberOne from '../../../Media/appicon/one.png';
import icStar from '../../../Media/appicon/starworkout.png';
import icInfo from '../../../Media/appicon/info.png';

 const { width , height } = Dimensions.get('window');

export default class StartComponentTwo extends Component {
    
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
                        <View >
                        <Image
                        source={icNumberOne}
                        style={icon}
                        resizeMode='contain' 
                        />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Cardio</Text>
                            <View style={{ flexDirection: 'row' }}>
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

                        <TouchableOpacity activeOpacity={0.5} >
                            <View style={button} >
                                <Text style={buttonText} >START</Text>
                            </View>
                        </TouchableOpacity>   

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: height * 0.69,
        backgroundColor: '#FFF',
        marginTop: height * 0.01,
        marginBottom: height * 0.02,
        marginHorizontal: height * 0.1,
        borderRadius: 20, 
        paddingHorizontal: 40,      
    },
    title: {
        flex: 1,
        paddingVertical: 40,
        borderColor: 'transparent',
        borderWidth: 2,
        borderBottomColor: '#E5E5E5',
        // shadowColor: '#5f5555'
    },
    titleText1: {
        fontSize: 35,
        fontFamily: 'Cochin',
        color: '#818383'
    },
    titleText2: {
        fontSize: 55,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#505050'
    },
    body: {
        flex: 4
    },
    cardio: {
        flexDirection: 'row',
        paddingVertical: 50
    },
    icon: {
        width: 50,
        height: 50,
    },
    info: {
        flex: 1,
        paddingHorizontal: 20
    },
    infoText: {
        fontFamily: 'Cochin',
        fontSize: 35,
        color: '#505050'
    },
    detailText: {
        fontFamily: 'Cochin',
        fontSize: 25,
        color: '#818383',
        paddingRight: 60
    },
    moreWorkouts: {
        flexDirection: 'row',
        paddingBottom: 100
    },
    button: {
        height: height * 0.09,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#FFF'
    }
});
