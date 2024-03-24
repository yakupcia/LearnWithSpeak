import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IShowMoreProps } from './ShowMore.type'
import styles from './ShowMore.style';

const ShowMore = (props: IShowMoreProps) => {
    const { onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>Daha Fazla Görüntüle</Text>
        </TouchableOpacity>
    );
};

export default ShowMore;
