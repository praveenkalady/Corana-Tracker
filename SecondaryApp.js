import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import * as Font from 'expo-font';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import Navigations from './navigation/RootNavigator';
import { connect } from 'react-redux';
import { getData,loadCountries } from './actions/DataActions';
import Icon from 'react-native-vector-icons/FontAwesome5';

 function SecondaryApp (props){
    const [assetsLoaded,setAssetLoaded] = useState(false);
    useEffect(()=>{
               async function fetchData(){
                await Font.loadAsync({
                    'normal':require('./assets/Fonts/Raleway-Regular.ttf'),
                    'bold':require('./assets/Fonts/Raleway-Bold.ttf'),
                    'italic':require('./assets/Fonts/Roboto-Italic.ttf')
                  });
                  await props.getData();
                  await  props.loadCountries();
                setAssetLoaded(true);
             }
           fetchData();
    },[props.dark]);
    if( assetsLoaded ) {
        return (
            <AppearanceProvider>
            <NavigationContainer theme={props.dark ? DarkTheme : DefaultTheme } >
              <Navigations />
            </NavigationContainer>
            </AppearanceProvider>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Text style={styles.stay}>STAY  <Icon name="home" size={35} color="black" /></Text>
                <Text style={styles.stay} >STAY SAFE</Text>
                <Text style={styles.break}>Let's Break The   <Icon name="link" size={35} color="grey" /></Text>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
const mapStateToProps = state =>({
    dark: state.data.dark
})
export default connect(mapStateToProps,{ getData,loadCountries })(SecondaryApp);
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center'
          },
          stay:{
              fontSize:22,
              paddingBottom:5
          },
          break:{
              fontSize:18,
              paddingBottom:5,
              fontWeight:"bold"
          }
});