import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../styles';
import { ICharacter, } from '../../../types';
import { characterService, } from '../../../services';
import styles from './CharacterDetail.style';
import { Icon } from '../../../components';

const CharacterDetail = ({ route, navigation }: any) => {
    const { character }: { character: ICharacter } = route?.params ?? {}

    const [characterDetail, setCharacterDetail] = React.useState<ICharacter>();


    React.useEffect(() => {
        if (character) getCharacterDetail()
    }, [character])

    const getCharacterDetail = () => {
        characterService.getCharacterDetail(character.id)
            .then((res) => {
                setCharacterDetail(res.data);
            })
            .catch(console.log)
    }

    const navigateToBack = () => navigation.goBack()


    return (
        <View style={[globalStyles.container, styles.container]}>
            <TouchableOpacity onPress={navigateToBack} style={styles.titleContainer}>
                <Icon name='chevron-left' type='entypo' size={30} />
                <Text style={styles.title}>{characterDetail?.name}</Text>
            </TouchableOpacity>

            <Image source={{ uri: characterDetail?.image }} style={styles.image} />
            <Text style={styles.detail}>Durum: {characterDetail?.status}</Text>
            <Text style={styles.detail}>Tür: {characterDetail?.species}</Text>
            <Text style={styles.detail}>Cinsitet: {characterDetail?.gender}</Text>
            <Text style={styles.detail}>Konum: {characterDetail?.location?.name}</Text>
        </View>
    );
};

export default CharacterDetail;
