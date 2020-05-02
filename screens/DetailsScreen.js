import React from 'react';
import { View,StyleSheet,Text,ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import  Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome5';


const DetailsScreen = (props) => {
    const { cd } = props.route.params;
    const filterData = props.data.filter(el => el.country === cd);
    let newObj = {};
    filterData.map((item,key)=>{
        newObj = item;
    })
    const { cases,todayCases,deaths,todayDeaths,active,recovered,critical,totalTests } = newObj;
    return (
        <ScrollView style={styles.container} >
                        <View style={styles.cardContainer} >
                        <Card style={styles.card} >
                            <Text style={styles.title}>Total Cases</Text>
                            <Icon name="thermometer-empty" size={28} color="red" />
                            <Text style={styles.number}>{cases}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Today Cases</Text>
                            <Icon name="ambulance" size={28} color="white" />
                            <Text style={styles.number}>{todayCases}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Total Deaths</Text>
                            <Icon name="male" size={28} color="white" />
                            <Text style={styles.number}>{deaths}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Active Cases</Text>
                            <Icon name="heartbeat" size={28} color="red" />
                            <Text style={styles.number}>{active}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Today Deaths</Text>
                            <Icon name="male" size={28} color="white"/>
                            <Text style={styles.number}>{todayDeaths}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Critical Cases</Text>
                            <Icon name="thermometer" size={28} color="red" />
                            <Text style={styles.number}>{critical}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Total Recovered</Text>
                            <Icon name="gratipay" color="red" size={28} />
                            <Text style={styles.number}>{recovered}</Text>
                        </Card>
                        <Card style={styles.card} >
                            <Text style={styles.title}>Total Tests</Text>
                            <Icon name="flask" color="green" size={28} />
                            <Text style={styles.number}>{totalTests}</Text>
                        </Card>
                        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20
    },
    number:{
        fontSize:35,
        fontWeight:"bold",
        color:"white",
        paddingTop:3
    },
    card:{
        width:Dimensions.get('window').width / 1.2,
        height:Dimensions.get('window').height * 0.2,
        marginVertical:10,
        backgroundColor:"#4C1E7A",
        alignItems:"center",
        justifyContent:"center"
    },
   title:{
       fontSize:20,
       fontFamily:"bold",
       color:"white",
       paddingBottom:5
   },
   cardContainer:{
       flex:1,
       alignItems:"center"
   }
})

const mapStateToProps = state =>({
    data: state.data.data
})
export default connect(mapStateToProps)(DetailsScreen);
