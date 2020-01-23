import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin:0 30px;  
`;
export const Code = styled.View`
  background:#FFF;
  padding:10px;
  align-self:center;
`;
export const Nav = styled.View`
  margin-top:30px;
  border-top-width: 1px;
  border-top-color:rgba(255, 255, 255, 0.8);
`;
export const NavItem = styled.View`
  flex-direction:row;
  align-items:center;
  padding:12px 0;
  border-bottom-width: 1px;
  border-bottom-color:rgba(255, 255, 255, 0.8);
`;
export const NavText = styled.Text`
  font-size:15px;
  color:#FFF;
  margin-left:20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color:rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content:center;
  align-items:center;
  padding:12px;
  margin-top:15px;
`;
export const SignOutButtonText = styled.Text`
  color:#FFF;
  font-weight:bold;
  font-size: 13px;
`;