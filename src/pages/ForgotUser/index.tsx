import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {ActivityIndicator} from 'react-native'
import backgroundImg from '../../assets/icons/Cat.png'
import kittyImg from '../../assets/icons/catChar.png'
import api from '../../services/api';

import { 
    Container,
    Background,
    Title,
    SubTitle,
    Cat,
    Email,
    Button,
    ButtonTitle,
    DisabledButton,
 } from './styles';

const ForgotUser: React.FC = () => {
  const {navigate} = useNavigation()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGoReset() {
    setLoading(true)

    await api.post('forgot', {
      email
    }).catch(err => {
      alert('Dados inválidos, tente novamente mais tarde.')
      setLoading(false)
    })

    navigate('ResetPassword', {email: email})
  }

  return (
      <Container colors={['#ED4D08', '#ED9108']}
        start={{
            x: 0,
            y: 0
        }}
        end={{
            x: 1,
            y: 1
        }}
      >
        <Background source={backgroundImg}>
            <Title>Esqueceu a senha?</Title>
            <SubTitle>Não se preocupe, basta inserir os dados abaixo.</SubTitle>
            <Cat source={kittyImg} width={100} height={100} />

            <Email value={email} onChangeText={setEmail} placeholder='E-mail' />
            {loading ? (
              <DisabledButton>
                <ActivityIndicator color="#FFF" size={30} />
              </DisabledButton>
            ) : (
              <Button onPress={handleGoReset}>
                <ButtonTitle>Próximo</ButtonTitle>
              </Button>
            )}
        </Background>
      </Container>
  );
}

export default ForgotUser;