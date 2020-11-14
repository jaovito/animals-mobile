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
    Name,
    SecondName,
    Whatsapp,
    City,
    Header,
    LogOut,
    Loading,
    Row,
    TextContainer,
    Label,
    Button,
    ButtonText,
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

const UserData: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [second_name, setSecondName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');

    const { handleLogout } = useContext(Context)

    useFocusEffect(
        useCallback(() => {
            setLoading(true);

            api.get('user').then(response => {
                setName(response.data.name);
                setSecondName(response.data.second_name);
                setWhatsapp(response.data.whatsapp);
                setCity(response.data.city);
            })
            
            setLoading(false);
         }, [])
    )
    
    const {navigate} = useNavigation()

    function handleGoCreate() {
        navigate('CreateAnimal')
    }

    async function handleChangeUserData() {
        setLoading(true);
        await api.put(`user/${Math.random()}`, {
            name,
            second_name,
            whatsapp,
            city
        })
        setLoading(false);
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
      >

        <Background source={backgroundImg}>
            <Header>
            <Title>
                Meus dados
            </Title>
  
            <LogOut style={{
                alignItems: 'center',
                justifyContent: 'center',
            }} onPress={handleLogout}>
                <Feather name='log-out' size={34} color='#FFF' />
            </LogOut>
            </Header>
        
            
            <Content contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Row>

                    <TextContainer>
                        <Label>Nome</Label>
                        <Name 
                            placeholder="Falou" 
                            value={name} 
                            onChangeText={setName} 
                        />
                    </TextContainer>

                    <TextContainer>
                        <Label>Sobrenome</Label>
                        <SecondName 
                            placeholder="Falou" 
                            value={second_name} 
                            onChangeText={setSecondName}
                        />
                    </TextContainer>
                </Row>

                <Row>
                    <TextContainer>
                        <Label>Whatsapp</Label>
                        <Whatsapp 
                            placeholder="Falou" 
                            value={whatsapp} 
                            onChangeText={setWhatsapp} 
                        />
                    </TextContainer>
                    
                    <TextContainer>
                        <Label>Cidade</Label>
                        <City 
                            placeholder="Falou" 
                            value={city} 
                            onChangeText={setCity} 
                        />
                    </TextContainer>
                </Row>
            
                
            </Content>

            <Button onPress={handleChangeUserData}>
                {loading ? <Loading size={50} color="#fff" /> :<ButtonText>Alterar</ButtonText>}
            </Button>

        </Background>
      </Container>
    </>
  );
}

export default UserData;