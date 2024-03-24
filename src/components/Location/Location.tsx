import { View, Text } from 'react-native';
import React from 'react';
import type { ILocationProps } from './Location.type'
import { globalStyles } from '../../styles';
import styles from './Location.style';

const Location = (props: ILocationProps) => {
    const { location } = props

    return (
        <View style={globalStyles.cardContainer}>
            <Text style={styles.title}>{location.name} - {location.type}</Text>
            <Text style={styles.dimension}>{location.dimension}</Text>
        </View>
    );
};

export default Location;
