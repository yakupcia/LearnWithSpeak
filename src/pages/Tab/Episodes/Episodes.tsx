import { View, Text, FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { colors, globalStyles } from '../../../styles';
import { useFetch } from '../../../hooks'
import { episodeService, } from '../../../services'
import { Episode, ShowMore } from '../../../components';
import type { IEpisode } from '../../../types';
import { TextInput } from 'react-native-paper';
import styles from './Episodes.style';


const Episodes = () => {
    const [filter, setFilter] = React.useState<any>({ page: 1 });
    const [name, setName] = React.useState<string>('');

    const { data } = useFetch({ service: episodeService.getEpisodes, responseKey: 'data.results', filter })

    React.useEffect(() => {
        setFilter({ ...filter, name })
    }, [name])

    const changePage = () => {
        setFilter((filter) => {
            return { ...filter, page: filter?.page + 1 }
        })
    }

    const ListFooterComponent = () => <ShowMore onPress={changePage} />

    const renderItem: ListRenderItem<IEpisode> = ({ item }) => <Episode {...{ episode: item }} />

    return (
        <View style={globalStyles.container}>
            <TextInput style={styles.input} value={name} onChangeText={setName} textColor={colors.text.secondary} />

            <FlatList {...{ data, renderItem, ListFooterComponent }} />
        </View>
    );
};

export default Episodes;
