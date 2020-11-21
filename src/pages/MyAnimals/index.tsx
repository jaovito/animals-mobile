import React, { useCallback, useContext, useEffect, useState } from 'react';
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
    ViewMore,
    ViewTitle,
    ImagesContainer,
    Header,
    Loading
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

const MyAnimals: React.FC = () => {
    const [cards, setCards] = useState<Animals[] | null>();
    const [loading, setLoading] = useState(false);

    const {handleLogout} = useContext(Context)

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            api.get('animal').then(response => {
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
            Animais doados.
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
                Meus Animais
                </Title>
                <SubTitle>Todos seus animais apareceram abaixo!</SubTitle>
            </Header>
        
            {loading ? (
          <Loading size={50} color="#fff" />
            ) : (
            <Content contentContainerStyle={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignSelf: 'flex-start',
            }}>
               
                {cards.map(card => (
                    <Card key={card.id}>
                        <ImagesContainer horizontal pagingEnabled>
                                <AnimalImg
                                    source={{
                                        uri: card.images[0].url
                                    }} 
                                />
                        </ImagesContainer>
                        <TextContainer>
                            <AnimalName>{card.name}</AnimalName>
                        </TextContainer>
                        
                        <ViewMore onPress={() => {
                            navigate('MyAnimalInfo', {id: card.id})
                        }}>
                            <ViewTitle>Ver mais</ViewTitle>
                            <Feather name="arrow-right" size={24} color="#9871F5" />
                        </ViewMore>
                    </Card>
                ))}
            
            </Content>
            )}
        </Background>
      </Container>
    </>
  );
}

export default MyAnimals;