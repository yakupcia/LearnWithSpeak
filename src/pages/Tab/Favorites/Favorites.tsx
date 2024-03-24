import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../styles';
import { useAppSelector } from '../../../redux';
import { ICharacter } from '../../../types';
import { Character } from '../../../components';

const Favorites = () => {
    const favorites = useAppSelector(state => state.favorite);

    const renderItem: ListRenderItem<ICharacter> = ({ item }) => <Character {...{ character: item }} />

    return (
        <View style={globalStyles.container}>
            <FlatList {...{ data: favorites, renderItem }} />
        </View>
    );
};

export default Favorites;
