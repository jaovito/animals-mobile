import React, { useContext } from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import { Feather } from '@expo/vector-icons'; 
import {Context} from '../../context/AuthContext';

import { 
    Container,
    Background,
    Title,
    SubTitle,
    Content,
    Card,
    TextContainer,
    AnimalImg,
    AnimalName,
    Description,
    City,
    ViewMore,
    ViewTitle
 } from './styles';

const ForgotUser: React.FC = () => {
    const {handleLogout} = useContext(Context)

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
            <Title>Precisa de um amigo?</Title>
            <SubTitle>Fique a vontade para procurar!</SubTitle>
            
            <Content contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card>
                    <AnimalImg source={{
                        uri: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
                    }} />
                    <TextContainer>
                        <AnimalName>Princesa</AnimalName>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos iste doloremque itaque dolore est quae, porro ut at dolores debitis incidunt, quia optio. Asperiores unde et minus est nostrum?</Description>
                        <Description>Cidade: <City>Sorocaba</City></Description>
                    </TextContainer>
                    
                    <ViewMore onPress={() => handleLogout()}>
                        <ViewTitle>Ver mais</ViewTitle>
                        <Feather name="arrow-right" size={24} color="#9871F5" />
                    </ViewMore>
                </Card>
            </Content>
        </Background>
      </Container>
  );
}

export default ForgotUser;