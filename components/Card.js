import React from 'react';
import { View,StyleSheet } from 'react-native';

const Card = props => {
    return <View {...props} style={{...styles.container,...props.style}} >{props.children}</View>;
}

const styles = StyleSheet.create({
    container:{
        shadowColor:'black',
        shadowRadius:6,
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.26,
        borderRadius:10,
        elevation:8,
        backgroundColor:'white'
    }
})
export default Card;