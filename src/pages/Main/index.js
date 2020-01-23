import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default () =>{

  let offSet = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event([
    {
      nativeEvent:{
        translationY: translateY
      }
    }
  ],{
    useNativeDriver: true
  });

  const onHandlerStateChanged = (event) => {
    let opened = false;

    if (event.nativeEvent.oldState == State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      offSet += translationY;

      if (translationY >= 100) {
        opened = true;

      }else{
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration:200,
        useNativeDriver: true
      }).start(()=>{
        offSet = opened ? 380 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      });
      
    }
  }

  return(
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform:[{
            translateY: translateY.interpolate({
              inputRange:[-350, 0, 380],
              outputRange:[-50, 0, 380],
              extrapolate:'clamp'
            }),
          }],
          }} 
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 348.347,95</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$230,00 recebida de Adriano Gomes ontem às 18:35h.
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
