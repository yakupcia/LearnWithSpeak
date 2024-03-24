import { View, Text, Image } from 'react-native';
import React from 'react';
import type { ICharacterProps } from './Character.type';
import { globalStyles } from '../../styles';
import styles from './Character.style';

const Character = (props: ICharacterProps) => {
    const { character } = props

    return (
        <View style={globalStyles.cardContainer}>
            <View style={styles.container}>
                <Image source={{ uri: character.image }} style={styles.image} />
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{character.name}</Text>
                    <Text style={styles.gender}>{character.gender}</Text>
                </View>
            </View>
        </View>
    );
};

export default Character;
