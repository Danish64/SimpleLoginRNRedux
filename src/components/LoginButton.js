import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Component = ({onPress, label}) => {
  return (
    <LoginButton onPress={onPress}>
      <ButtonText>Login</ButtonText>
    </LoginButton>
  );
};

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;
const LoginButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  border-radius: 4px;
  background-color: #4169e1;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export default Component;
