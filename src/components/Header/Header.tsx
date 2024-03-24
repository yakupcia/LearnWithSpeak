import { View, Text } from 'react-native';
import React from 'react';
import styles from './Header.style';

const Header = props => {
    const { title } = props?.route?.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header