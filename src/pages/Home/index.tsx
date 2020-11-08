import React from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import kittyImg from '../../assets/icons/catChar.png'

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
 } from './styles';

const ForgotUser: React.FC = () => {
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
                </Card>
            </Content>
        </Background>
      </Container>
  );
}

export default ForgotUser;