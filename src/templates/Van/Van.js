import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import PagerView  from 'react-native-pager-view';

import { vanBrandsHTTP } from './VanAPI';

export default function Van(){
    const [vanBrands, setVanBrands] = useState([]);
    //const [carModels, setCarModels] = useState([]);

    useEffect(() => {
        vanBrandsHTTP(setVanBrands);
    }, []);

    return(
        <>
            <PagerView style={styles.viewPager} initialPage={0}>
                <View style={styles.page} key="1">
                    <FlatList
                        data={vanBrands}
                        keyExtractor={(brand => brand.name)}
                        renderItem={({ item }) => 
                        <View key={item} style={styles.brandsContainer}>  
                            <Text style={styles.brands}>{item.nome}</Text>
                        </View>
                    }/>
                </View>
            </PagerView>
        </>
    );
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandsContainer: {
        backgroundColor: '#FCF3F3',
        padding: 25,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 10,
        borderBottomColor: '#FF5BB6'
    },
    brands: {
        fontSize: 32,
    }
});