import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function CardMenu({ item: vehicle }, navigationFunction){
    return (
        <TouchableOpacity onPress={() => navigationFunction(vehicle.screen)}>
            <View style={style.container}>
                <Image source={vehicle.photo} style={style.image}/>
                <Text style={style.title}>{vehicle.information}</Text>
            </View>
        </TouchableOpacity>);
}

const style = StyleSheet.create({
    title: {
      color: 'black',
    },
    image: {
        width: 100 / 768 * width,
        height: 100 / 768 * height
    },
    container: {
        backgroundColor: "#DB4690",
        margin: 10,
        width: 300 / 768 * width,
        height: 150 / 768 * height,
        justifyContent: "center",
        alignItems: "center"
    }

});