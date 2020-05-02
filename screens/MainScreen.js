import React from 'react';
import { View,StyleSheet,Text,Dimensions,TouchableOpacity,FlatList,RefreshControl,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { getData,loadCountries } from '../actions/DataActions';

const MainScreen = (props) => {
    const filter = props.data.filter(el => el.country.startsWith('World'));
    let newObj = {};
    filter.map(item=>{
      newObj = item;   
    });
    const { cases,todayCases,deaths,todayDeaths,recovered,active } = newObj;
    const countries = props.data;
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await props.getData();
    await props.loadCountries();
    setRefreshing(false);
  }, [refreshing]);      
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
    return (
        <SafeAreaView style={styles.container} >
        <View style={styles.row} >
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >Total Confimed</Text>
        <Icon  name="thermometer-empty" size={23} color="red" />
        <Text style={styles.font}>{cases}</Text>
        </Card>
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >Total Deaths</Text>
        <Icon name="male" size={23} color="white" />
        <Text style={styles.font}>{deaths}</Text>
        </Card>
        </View>
        <View style={styles.row}>
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >New Confirmed</Text>
        <Icon name="check" size={23} color="green" />
        <Text style={styles.font}>{todayCases}</Text>
        </Card>
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >New Deaths</Text>
        <Icon name="male" size={23} color="white" />
        <Text style={styles.font}>{todayDeaths}</Text>
        </Card>
        </View>
        <View style={styles.row}>
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >Total Recovered</Text>
        <Icon name="gratipay" size={23} color="red" />
        <Text style={styles.font}>{recovered}</Text>
        </Card>
        <Card style={styles.cardStyle} >
        <Text style={styles.title} >Active Cases</Text>
        <Icon name="heartbeat" size={23} color="red" />
        <Text style={styles.font}>{active}</Text>
        </Card>
        </View>
        <Text style={styles.refresh} >Scroll Up The List To Refresh</Text>
        <View>
            <FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={{width: '100%',marginVertical:15}} keyExtractor={(item)=> item.country} data={countries} renderItem={renderData} />
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cardStyle:{
        flex:1,
        width:Dimensions.get('window').width / 8,
        height:Dimensions.get('window').height / 8,
        backgroundColor:'#4C1E7A',
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:5
    },
    font:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    },
    container:{
        flex:1,
        padding:22
    },
    row:{
        flexDirection:"row",
        marginVertical:8
    },
    title:{
        fontFamily:"bold",
        color:"white",
        fontSize:15
    },
    list:{
        width:"100%",
        height:50,
        backgroundColor:"#696969",
        borderWidth:0.25,
        borderColor:"black",
        marginVertical:10,
        borderRadius:10
    },
    renderFont:{
        paddingTop:10,
        fontFamily:"bold",
        color:"white"
    },
    refresh:{
        color:"grey",
        textAlign:"center",
        paddingTop:5
    }
})
const mapStateToProps = state => ({
    data: state.data.data
})
export default connect(mapStateToProps,{ getData,loadCountries })(MainScreen);
