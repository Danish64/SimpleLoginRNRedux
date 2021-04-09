import React from 'react';
import styled from 'styled-components';
const CustomTextInput = ({onChangeText, isPassword}) => {
  const keyboardType = isPassword ? 'default' : 'email-address';
  const placeholder = isPassword ? 'Password' : 'Email';

  return (
    <TextInputContainer>
      <Input
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={isPassword}
        keyboardType={keyboardType}
        onChangeText={(text) => onChangeText(text)}
      />
    </TextInputContainer>
  );
};

const TextInputContainer = styled.View`
  width: 80%;
  justify-content: center;
  border-width: 1px;
  border-color: gray;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  height: 50px;
  padding-left: 20px;
`;

const Input = styled.TextInput`
  height: 40px;
  padding: 0px;
  margin: 0px;
  border-width: 0px;
  color: #000000;
`;

export default CustomTextInput;
