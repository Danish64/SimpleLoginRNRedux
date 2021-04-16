import React, {useState, useEffect} from 'react';
import {ScreenContainer, LoginContainer} from './components/Containers';
import CustomTextInput from './components/CustomTextInput';
import LoginButton from './components/LoginButton';
import {mockLoginApi} from './services/mockApi';
import {validateEmail, validatePassword} from './utils';
import {LoginTitleText, BodyText, ErrorText} from './components/Text';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest} from './redux/actions/auth';

const SimpleLogin = ({loginRequest, authInfo}) => {
  //   console.log('In the simplelogin screen', authInfo);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateUser = () => {
    return validateEmail(email) && validatePassword(password);
  };

  return (
    <>
      <ScreenContainer>
        <LoginContainer>
          <LoginTitleText>SimpleLogin</LoginTitleText>
          <CustomTextInput
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
          <CustomTextInput
            onChangeText={(password) => {
              setPassword(password);
            }}
            isPassword
          />
          {authInfo.loggedInStatus ? (
            <BodyText>{authInfo.loginResponse.message}</BodyText>
          ) : (
            <ErrorText>Incorrect email or password</ErrorText>
          )}
          <LoginButton
            onPress={() => {
              console.log('Login Button Pressed');
              if (validateUser()) {
                console.log('Email and password validated');
                loginRequest({email: email, password: password});
              }
            }}
          />
          {authInfo.isLoading ? <BodyText>Loading Test...</BodyText> : null}
        </LoginContainer>
      </ScreenContainer>
    </>
  );
};

function mapStatesToProps(state) {
  return {
    authInfo: state.authInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(SimpleLogin);
