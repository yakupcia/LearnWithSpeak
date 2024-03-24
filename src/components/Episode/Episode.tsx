import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import type { IEpisodeProps } from './Episode.type'
import { globalStyles } from '../../styles';
import styles from './Episode.style';
import { navigateTo } from '../../router/helper';
import { PAGE_LIST } from '../../pages/PageList';

const Episode = (props: IEpisodeProps) => {
    const { episode } = props

    const navigateToDetail = () => navigateTo(PAGE_LIST.EpisodeDetail.name, { episode })

    return (
        <TouchableOpacity onPress={navigateToDetail} style={globalStyles.cardContainer}>
            <Text style={styles.title}>{episode.name}</Text>
            <Text numberOfLines={1} style={styles.dimension}>{episode.episode} - {episode.air_date}</Text>
        </TouchableOpacity>
    );
};

export default Episode;
