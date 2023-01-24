import React, { Component } from "react";
import { View, StyleSheet,TouchableOpacity ,Image, Text, StatusBar, Dimensions, ScrollView } from "react-native";
import { Colors } from '../common/colors/Colors';
import { WebUrl } from "../common/webUrl/WebUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HTML from 'react-native-render-html';
import Toast from "react-native-simple-toast";
import Spinner from "react-native-loading-spinner-overlay";
class AboutUs extends Component {

    state={
        desc:'',
        role:'',
        show:false,
    }
   async componentDidMount(){
    Toast.show('Please wait! Loading the data', Toast.Long)
    this.setState({show:true})
  var go= await AsyncStorage.getItem("role")
this.setState({role:go})
        console.log('Hello this is Viren Bhardwaj')
        
            
    
                try {
                    //this.setState({show:true})
                    fetch(WebUrl.BASE_URL+WebUrl.AboutUs).then( (response) => response.json()
                    )
                    .then((responseJSON) => {
                        //this.setState({show:false})
                        this.setState({desc:responseJSON.data.description,show:false})
                        
                        console.log(JSON.stringify(responseJSON))
                    }).catch((error) => {
                        //this.setState({show:false})
                        console.error(error);
                        //ToastAndroid.show(error.m)
                    })
                } catch(error){
    
                } finally {
                    
                }
                
            
           
        
    }
    render() {
        return (
            <View style={styles.containerMain}>
                            <Spinner color={'black'} size={'large'} visible={this.state.show} />

                        {/* {this.state.role!="corporate_employee" &&
                        <View style={styles.headerStyle}>
                   
                         <View style={{ position: 'absolute' }}>
                             <TouchableOpacity>

                                <Image style={styles.backArrowSt1yle} source={require('../assets/icons/back_arrow.png')} />
                             </TouchableOpacity>
                            </View>




                    <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                        <Text style={styles.textStyleHeader}>
                            ABOUT US
                    </Text>
                    </View>


                </View>} */}

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20,marginStart: 20,marginEnd: 20}}>
                    <Image style={{width: '100%', height: 200, borderRadius: 10}} source ={require('../assets/images/aboutUs.png')} resizeMode = 'contain'/>
                </View>

                <ScrollView style={{paddingTop: 20,paddingStart: 20,paddingEnd: 20}}>
                    <HTML style={{color: 'black', fontSize: 15, textAlign: 'justify'}}
                      source= {{html:this.state.desc}}
                    />
                </ScrollView>
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