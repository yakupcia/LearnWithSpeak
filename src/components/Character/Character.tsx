import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import type { ICharacterProps } from './Character.type';
import { colors, globalStyles } from '../../styles';
import styles from './Character.style';
import { navigateTo } from '../../router/helper';
import { PAGE_LIST } from '../../pages/PageList';
import Icon from '../Icon';
import { useAppDispatch, useAppSelector } from '../../redux';
import { addToFavorite } from '../../redux/slices/favorite-slice';

const Character = (props: ICharacterProps) => {
    const { character } = props

    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.favorite)

    const [fav, setFav] = React.useState<boolean>(!!favorites.find(x => x.id === character.id))

    const navigateToDetail = () => navigateTo(PAGE_LIST.CharacterDetail.name, { character })

    const addToFav = () => {
        dispatch(addToFavorite(character))
        setFav(!fav);
    }

    return (
        <TouchableOpacity onPress={navigateToDetail} style={globalStyles.cardContainer}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: character.image }} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{character.name}</Text>
                        <Text style={styles.gender}>{character.gender}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={addToFav} style={styles.favContainer}>
                    <Icon name={fav ? 'favorite' : 'favorite-outline'} type='mat' color={colors.foreground.tertiarry} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default Character;