import { View, Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../styles';
import { IEpisode } from '../../../types';
import { episodeService } from '../../../services';
import styles from './EpisodeDetail.style';
import { Character } from './components';
import { Icon } from '../../../components';

const EpisodeDetail = ({ route, navigation }: any) => {
    const { episode }: { episode: IEpisode } = route?.params ?? {}

    const [episodeDeatil, setEpisodeDetail] = React.useState<IEpisode>();

    React.useEffect(() => {
        if (episode) getEpisodeDetail()
    }, [episode])

    const getEpisodeDetail = () => {
        episodeService.getEpisodeDetail(episode.id)
            .then((res) => {
                setEpisodeDetail(res.data);
            })
            .catch(console.log)
    }

    const navigateToBack = () => navigation.goBack()

    const renderItem: ListRenderItem<string> = ({ item }) => <Character {...{ character: item }} />

    return (
        <View style={[globalStyles.container, styles.container]}>
            <TouchableOpacity onPress={navigateToBack} style={styles.titleContainer}>
                <Icon name='chevron-left' type='entypo' size={30} />
                <Text style={styles.title}>{episodeDeatil?.name}</Text>
            </TouchableOpacity>
            <Text style={styles.detail}>Bölüm: {episodeDeatil?.episode}</Text>
            <Text style={styles.detail}>Yayın Tarihi: {episodeDeatil?.air_date}</Text>

            <FlatList {...{ data: episodeDeatil?.characters ?? [], renderItem, }} />
        </View>
    );
};

export default EpisodeDetail;
