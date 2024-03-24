import { View, Text } from 'react-native';
import React from 'react';
import { ICharacterProps } from './Character.type'
import { ICharacter } from '../../../../../types'
import axios from 'axios';
import { Character as C } from '../../../../../components'


const Character = (props: ICharacterProps) => {
    const { character } = props

    const [char, setChar] = React.useState<ICharacter>()

    React.useEffect(() => {
        axios.get(character)
            .then(res => {
                setChar(res.data);
            })
            .catch(console.log)
    }, [character])

    if (!char) return <></>
    
    return (
        <C  {...{ character: char }} />
    );
};

export default Character;
