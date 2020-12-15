import React, { useCallback, useState } from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import { Feather } from '@expo/vector-icons'; 

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
    ViewTitle,
    AddButton,
    CityDescription,
    ImagesContainer,
    Header,
    Loading,

 } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

interface Animals {
    id: number;
    user_id: number;
    name: string;
    description: string;
    breed: string;
    citie: string;
    images: [
        {id: number, url: string, path: string},
    ]
}

const Home: React.FC = () => {
    const [cards, setCards] = useState<Animals[] | null>();
    const [loading, setLoading] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            api.get('animals').then(response => {
                setCards(response.data);
            }).catch(err => {
                alert(err)
            });
            
            setLoading(false);
            return () => setCards(null)
         }, [])
    )
    
    const {navigate} = useNavigation()

    function handleGoCreate() {
        navigate('CreateAnimal')
    }

    if (!cards) return (
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
      >

        <Background source={backgroundImg}>
        <Header>
        <Title>
            Precisa de um amigo?
        </Title>

        </Header>
        <SubTitle>Fique a vontade para procurar!</SubTitle>
      <Loading size={50} color="#fff" />
    </Background>
    </Container>
    </>
    )

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
      >

        <Background source={backgroundImg}>
            <Header>
            <Title>
                Precisa de um amigo?
            </Title>
            </Header>
            <SubTitle>Fique a vontade para procurar!</SubTitle>
        
            {loading ? (
          <Loading size={50} color="#fff" />
            ) : (
            <Content contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {cards.map(card => (
                        <Card key={card.id}>
                            <ImagesContainer horizontal pagingEnabled>
                                {card.images.map(img => (
                                    <AnimalImg
                                    key={img.id}
                                    source={{
                                        uri: img.url
                                    }} />
                                    )
                                )
                                }
                            </ImagesContainer>
                            <TextContainer>
                                <AnimalName>{card.name}</AnimalName>
                                <Description>{card.description}</Description>
                                <CityDescription>Cidade: <City>{card.citie}</City></CityDescription>
                                <Description>Raça: <City>{card.breed}</City></Description>
                            </TextContainer>
                            
                            <ViewMore onPress={() => {
                                navigate('AnimalInfo', {id: card.id})
                            }}>
                                <ViewTitle>Ver mais</ViewTitle>
                                <Feather name="arrow-right" size={24} color="#9871F5" />
                            </ViewMore>
                        </Card>
                ))}
            </Content>
            )}

            <AddButton onPress={handleGoCreate} >
                <Feather name="plus" size={34} color="#FFF" />
            </AddButton>
        </Background>

            
      </Container>
    </>
  );
}

export default Home;