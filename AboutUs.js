import React, { Component } from "react";
import { View, StyleSheet,TouchableOpacity ,Image, Text, StatusBar, Dimensions, ScrollView } from "react-native";
class AboutUs extends Component {

   
        
    
    render() {
        return (
        <View style={{backgroundColor:"red"}}>

        </View>
        );
    }

}

export default AboutUs;

const styles = StyleSheet.create({
    backArrowSt1yle: {
        width: 25,
        height: 25,
        marginStart: 10
    },

    containerMain: {
        flex: 1,
        backgroundColor: 'white'
    },
    textStyleHeader: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
    },
    headerStyle: {
        flexDirection: 'row',
        marginTop: 20,

    },

    buttonStyle: {
        backgroundColor: Colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 50,
        marginStart: 20,
        marginEnd: 20,

    },

    textStyleBlack: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'
    },

})