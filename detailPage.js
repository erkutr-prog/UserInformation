import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Switch,
    useColorScheme,
    View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import MapView, {Marker} from 'react-native-maps';

const detailPage = (props) => {
    const [isHidden, showInfo] = React.useState(false);
    let region = {
        latitude: parseFloat(props.item.address.geo.lat),
        longitude: parseFloat(props.item.address.geo.lng),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.container}>
                <View style={styles.switchContainer}>
                  <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                  <Text style={styles.switchLabel}>More info:</Text>
                    <Switch
                        style={styles.switchStyle}
                        onValueChange={value => showInfo(value)}
                        value={isHidden}/>
                  </View>
                </View>
                <View style={styles.cardcontainer}>
                    <View style={styles.card_template}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Name: {props.item.name}</Text>
                            <Text style={styles.text}>Username: {props.item.username}</Text>
                            <Text style={styles.text}>E-mail: {props.item.email}</Text>
                            <Text style={styles.text}>Address: {props.item.address.street}
                                {props.item.address.suite}
                                {props.item.address.city}</Text>
                        </View>
                    </View>
                </View>
                {isHidden && <View style={styles.cardcontainer}>
                    <View style={styles.card_template}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Phone: {props.item.phone}</Text>
                            <Text style={styles.text}>Website: {props.item.website}</Text>
                            <Text style={styles.text}>Company Name: {props.item.company.name}</Text>
                            <Text style={styles.text}>Company Catch Phrase: {props.item.company.catchPhrase}</Text>
                            <Text style={styles.text}>BS: {props.item.company.bs}</Text>
                        </View>
                    </View>
                </View>
                }
                {isHidden && <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    }}>
                        <Marker coordinate={region}></Marker>
                    </MapView>
                </View>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: '#F5D97E'
    },
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5D97E'
    },
    card_template: {
        width: 350,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        backgroundColor: "#EAFFD0",
        borderRadius: 10
    },
    cardcontainer: {
        flex: 1,
        paddingTop: 10
    },
    text: {
        paddingLeft: 10
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    switchStyle: {
        flex: 1,
    },
    mapContainer: {
        flex: 0.3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 350,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        backgroundColor: "#f9c2ff",
        borderRadius: 10,
        marginTop: 10
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    switchContainer: {
        width: 350,
        height: 50,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1,
    },
    switchLabel: {
        flex: 1,
        fontWeight: 'bold',
    }
})

export default detailPage