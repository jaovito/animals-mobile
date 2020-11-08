import React, { useState } from 'react';

import { Container,
  NameContainer,
  Name,
  SecondName,
  Email,
  Password,
  InfoContainer,
  Whatsapp,
  City,
  Title,
  SecretTitle,
  DogImage,
  KeyboardView,
  Button,
  ButtonText, } from './styles';

import dogImg from '../../assets/icons/dog.png'

const CreateUser: React.FC = () => {
  const [focus, setFocus] = useState(false)

  function handleSetFocusTrue() {
    setFocus(true)
  }
  function handleSetFocusFalse() {
    setFocus(false)
  }

  return (
    <>
    <Container colors={['#ED4D08', '#ED9108']}
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }} 
    />
    <KeyboardView contentContainerStyle={{
      alignItems: "center",
      justifyContent: 'center'
    }}>

        <Title>Insira seus dados!</Title>
        <SecretTitle>É de graça (segredo) </SecretTitle>
        <DogImage source={dogImg} />

        <NameContainer>
          <Name placeholder='Nome' />
          <SecondName placeholder='Sobrenome' />
        </NameContainer>

        <Email keyboardType='email-address' textContentType='emailAddress' placeholder='E-mail' />
        <Password textContentType='password' secureTextEntry={true} placeholder='Senha' />

        <InfoContainer>
          <Whatsapp 
            placeholder='Whatsapp'
            keyboardType='numeric'
          />
          <City autoCapitalize='words' placeholder='Cidade' />
        </InfoContainer>

        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </KeyboardView>
    </>
  );
}

export default CreateUser;