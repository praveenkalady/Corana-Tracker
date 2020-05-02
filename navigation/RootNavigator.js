import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import AboutScreen from '../screens/AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MainScreen" >
            <Stack.Screen name="MainScreen" component={MainScreen} options={{title:"Corona Tracker",headerTitleAlign:"center"}} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={({ route }) => ({ 
                title:route.params.title,
                headerTitleAlign:"center"
            })} />
        </Stack.Navigator>
    )
}
const SearchNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} options={{title:"Search Details",headerTitleAlign:"center"}} />
        </Stack.Navigator>
    )
}
const AboutNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AboutScreen" component={AboutScreen} options={{title:"About",headerTitleAlign:"center"}} />
        </Stack.Navigator>
    )
}

const BottomNavigator = () =>{
    return (
        <Tabs.Navigator tabBarOptions={{activeTintColor:"#4C1E7A"}}>
            <Tabs.Screen name="MainScreen" component={StackNavigator} options={{tabBarLabel:'Home',tabBarIcon:({color,size}) => (
                <Icon name="home" color={color} size={size}/>
            ) }} />
            <Tabs.Screen name="SearchScreen" component={SearchNavigator} options={{tabBarLabel:'Search',tabBarIcon:({color,size}) => (
                <Icon name="search" color={color} size={size}/>
            )}} />
            <Tabs.Screen name="AboutScreen" component={AboutNavigator} options={{tabBarLabel:'About',tabBarIcon:({color,size}) => (
                <Icon name="info-circle" color={color} size={size}/>
            )}} />
        </Tabs.Navigator>
    )
}

export default BottomNavigator;