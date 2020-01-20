import React from 'react';

import {Container, Logo, Top, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default () => {
    return(
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Ribas</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" /> 
        </Container>
    );
}