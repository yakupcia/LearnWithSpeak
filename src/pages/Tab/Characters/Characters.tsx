import { View, Text, FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../styles';
import { useFetch } from '../../../hooks'
import { characterService } from '../../../services'
import { Character } from '../../../components';

const Characters = () => {
    const { data } = useFetch({ service: characterService.getCharacters, responseKey: 'data.results', })

    const renderItem: ListRenderItem<any> = ({ item }) => <Character {...{ character: item }} />

    return (
        <View style={globalStyles.container}>
            <FlatList {...{ data, renderItem }} />
        </View>
    );
};

export default Characters;
