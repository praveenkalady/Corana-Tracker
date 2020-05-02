import React,{ useState } from 'react';
import { SafeAreaView,View,StyleSheet,Text,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,FlatList,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchBar } from 'react-native-elements';
import { searchData,loadCountries } from '../actions/DataActions';
const SearchScreen = (props) => {
    const [search,setSearch] = useState('');
    let countries = props.countries;
    const updateSearchText = (text) =>{
        setSearch(text);
        props.searchData(search);

    }
    if(search.length === 0 && countries.length <=3){
        props.loadCountries();
    }
    const renderData = (renderData) => {
        return (
            <TouchableOpacity style={styles.list} onPress={()=>{
                props.navigation.navigate('DetailsScreen',{title:renderData.item.country,cd:renderData.item.country});
            }} >
                <View style={{...styles.row,justifyContent: 'space-around'}}>
                <Text style={styles.renderFont} >{renderData.item.country}</Text>
                <Icon name="globe" size={23} color="white" />
                </View>
            </TouchableOpacity>
        )
    }
    const { colors } = useTheme();
    return (
        <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.searchContainer}>
                <Text style={{...styles.question,color:colors.text}} >Find Your Country ?</Text>
                <View style={styles.searchBar}><SearchBar  lightTheme placeholder="Type here..." onChangeText={updateSearchText} value={search} /></View>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.listContainer}>
                <FlatList style={{width: '100%',marginVertical:15}} keyExtractor={(item)=> item.country} data={countries} renderItem={renderData} />
            </View>  
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:22
    },
    font:{
        fontFamily:"bold",
        fontSize:20
    },
    question:{
        fontSize:18,
        fontFamily:"bold",
        paddingBottom:10
    },
    searchContainer:{
        alignItems:"center",
        padding:8,
        paddingBottom:20
    },
    searchBar:{
        width:"100%",
    },
    list:{
        width:"100%",
        height:50,
        backgroundColor:"#696969",
        borderWidth:0.25,
        borderColor:"black",
        marginVertical:10,
        borderRadius:10,
    },
    renderFont:{
        paddingTop:10,
        fontFamily:"bold",
        color:"white"
    },
    row:{
        flexDirection:"row",
        marginVertical:8
    },
    title:{
        fontFamily:"bold",
        color:"white",
        fontSize:15
    }
})
const mapStateToProps = state => ({
    countries: state.data.countries,
})
export default connect(mapStateToProps,{ searchData,loadCountries })(SearchScreen);
