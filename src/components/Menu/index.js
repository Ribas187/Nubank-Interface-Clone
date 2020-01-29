import React from 'react';
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (props) => {

    return(
        <Container style={{
            opacity: props.translateY.interpolate({
                inputRange:[0, 150],
                outputRange: [0, 1]
            })
        }} >
            <Code>
                <QRCode
                    value="https://github.com/Ribas187"
                    size={80}
                    color="#FFF"
                    backgroundColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configirações do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={()=>{}} >
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}
