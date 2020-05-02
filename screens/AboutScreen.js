import React,{ useState } from 'react';
import { View,StyleSheet,Text,Switch,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import Card from '../components/Card';
import { onDark,offDark } from '../actions/DataActions';
import { connect } from 'react-redux';
const AboutScreen = (props) => {
    const [enable,setEnabled] = useState(false);
    const toggleSwitch = () =>{
        setEnabled(!enable);
    }
    if(enable) {
        props.onDark();
    } else{
        props.offDark();
    }
    const { colors } = useTheme();
    return (
        <ScrollView >
            <View style={styles.container}>
            <View style={styles.headerSection} >
                <Text style={{...styles.header,color: colors.text}} >Made With</Text>
                <Animatable.View animation="pulse" easing="ease-out" iterationCount={20} ><Icon name="heartbeat" size={150} color="red" /></Animatable.View>
                <Text style={{...styles.theme,color:colors.text}} >Change Theme</Text>
                <Switch
                    trackColor={"red"}
                    thumbColor={enable ? "red" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={enable}
                />
            </View>
            <View style={styles.contactInfo} >
                <Card style={{...styles.infoCard,backgroundColor:colors.border}}>
                    <Text style={{...styles.devHeader,color:colors.text}}>Dev Connect</Text>
                    <Text style={styles.email} >praveentechguy@gmail.com</Text>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={async()=>{
                            await WebBrowser.openBrowserAsync('https://github.com/praveenkalady');
                        }}>
                        <SocialIcon type="github"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={async()=>{
                            await WebBrowser.openBrowserAsync('https://www.instagram.com/___.404___/');
                        }} >
                        <SocialIcon type="instagram" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={async()=>{
                            await WebBrowser.openBrowserAsync('https://www.linkedin.com/in/praveen-kv-b6b8871a7/');
                        }} >
                        <SocialIcon type="linkedin" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.version}>Version 1.0.0</Text>
                </Card>
                <Text style={styles.warn} >The Data About The Pandamic Is Grab from https://coronavirus-19-api.herokuapp.com/countries</Text>
            </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        padding:22
    },
    headerSection:{
        alignItems:"center",
        padding:10
    },
    header:{
        fontSize:25,
        fontFamily:"bold",
        paddingBottom:5,
    },
    theme:{
        fontSize:15,
        paddingVertical:10,
        fontFamily:"bold"
    },
    contactInfo:{
        flex:1,
        alignItems:"center",
        padding:28
    },
    infoCard:{
        flex:1,
        width:Dimensions.get('window').width / 1.2,
        height:Dimensions.get('window').height * 0.25,
        alignItems:"center"
    },
    devHeader:{
        fontSize:20,
        paddingVertical:10,
        fontFamily:"bold"
    },
    email:{
        fontFamily:"italic",
        fontSize:15,
        paddingBottom:10,
        color:"grey"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    version:{
        color:"grey"
    },
    warn:{
        fontSize:10,
        color:"grey",
        textAlign:"center",
        paddingTop:10
    }
})
export default connect(null,{ onDark,offDark })(AboutScreen);
