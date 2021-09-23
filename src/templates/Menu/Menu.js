import React, { useState, useEffect } from 'react';

import { StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { data } from "../../../mock/mock";
import CardMenu from './components/CardMenu';

export default function Menu({ navigation }){
    const [vehicleOnApplication, setVehicleOnApplication] = useState([]);

    useEffect(() => {
        setVehicleOnApplication(data);
    }, []);

    const navigationFunction = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <SafeAreaView style={style.container}>
            <FlatList
                numColumns={2}
                horizontal={false}
                data={vehicleOnApplication}
                renderItem={(vehicle) => CardMenu(vehicle, navigationFunction.bind(this))}
                keyExtractor={(vehicle) => vehicle.id+""}
            />
        </SafeAreaView>);
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});