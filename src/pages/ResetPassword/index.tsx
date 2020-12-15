import React, { useState } from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import searchImg from '../../assets/icons/search.png'
import catImg from '../../assets/icons/catChar.png'

import { 
    Container,
    Background,
    Title,
    SubTitle,
    SearchImg,
    Cat,
    Email,
    Button,
    ButtonTitle,
    ImageContainer,
    NewPassword
 } from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const ResetUser: React.FC = () => {
  const [token, setToken] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const {navigate} = useNavigation()

  async function handleResetPassword() {
    await api.post('reset', {
      token,
      password: newPassword
    }).catch(err => {
      alert('Erro ao alterar senha, tente novamente')
      navigate('ForgotUser')

    })

    navigate('Success')
    
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
            <Title>Quase lá!</Title>
            <SubTitle>Digite o código recebido em seu e-mail abaixo e sua nova senha.</SubTitle>
            <ImageContainer>
              <SearchImg source={searchImg} width={100} height={100} />
              <Cat source={catImg} width={100} height={100} />
            </ImageContainer>

            <Email placeholder='Código' value={token} onChangeText={setToken} />
            <NewPassword 
              placeholder='Nova senha' 
              value={newPassword} 
              onChangeText={setNewPassword} 
              textContentType='password' 
              secureTextEntry={true}
            />
            <Button onPress={handleResetPassword}>
                <ButtonTitle>Alterar senha</ButtonTitle>
            </Button>
        </Background>
      </Container>
  );
}

export default ResetUser;