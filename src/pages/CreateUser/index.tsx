import React, { useEffect, useState } from 'react';

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
  ButtonText,
  DisabledButton,
  DisabledButtonText, } from './styles';

import dogImg from '../../assets/icons/dog.png'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

const CreateUser: React.FC = () => {
  const [name, setName] = useState('')
  const [second_name, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const {navigate} = useNavigation()

  useEffect(() => {
    if (name && second_name && email && password && whatsapp && city) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [
    name,
    second_name,
    email,
    password,
    whatsapp,
    city,
  ])


  async function handleCreate() {
    setLoading(true)
    setDisabled(true)

    await api.post('register', {
      name,
      second_name,
      email,
      password,
      whatsapp,
      city
    })

    setDisabled(false)
    setLoading(false)
    navigate('AuthUser')
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
          <Name value={name} onChangeText={setName} placeholder='Nome' />
          <SecondName value={second_name} onChangeText={setSecondName} placeholder='Sobrenome' />
        </NameContainer>

        <Email value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address' textContentType='emailAddress' placeholder='E-mail' />
        <Password value={password} onChangeText={setPassword} textContentType='password' secureTextEntry={true} placeholder='Senha' />

        <InfoContainer>
          <Whatsapp 
            value={whatsapp} onChangeText={setWhatsapp}
            placeholder='Whatsapp'
            keyboardType='numeric'
          />
          <City value={city} onChangeText={setCity} autoCapitalize='words' placeholder='Cidade' />
        </InfoContainer>

        {disabled ? (
          <DisabledButton >
            {loading ? <ActivityIndicator color='#fff' size={30} /> : <DisabledButtonText>Cadastrar</DisabledButtonText>}
          </DisabledButton>
        ) : (
          <Button onPress={handleCreate}>
            {loading ? <ActivityIndicator color='#fff' size={30} /> : <ButtonText>Cadastrar</ButtonText>}
          </Button>
        )}
      </KeyboardView>
    </>
  );
}

export default CreateUser;