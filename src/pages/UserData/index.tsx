import React, { useCallback, useContext, useEffect, useState } from 'react';
import backgroundImg from '../../assets/icons/Cat.png'
import { Feather } from '@expo/vector-icons'; 
import {Context} from '../../context/AuthContext';
import {Picker} from '@react-native-community/picker';


import { 
    Container,
    Background,
    Title,
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
    UF
 } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import axios from 'axios';
import { Alert } from 'react-native';

interface UF {
    id: number;
    nome: string;
    sigla: string;
}

interface City {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesoregiao: {};
    };
  }

const UserData: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [second_name, setSecondName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [uf, setUf] = useState<UF []>([]);
    const [ufValue, setUfValue] = useState('');
    const [city, setCity] = useState<City []>([]);
    const [cityValue, setCityValue] = useState('');

    const { handleLogout } = useContext(Context)

    useFocusEffect(
        useCallback(() => {
            setLoading(true);

            api.get('user').then(response => {
                setName(response.data.name);
                setSecondName(response.data.second_name);
                setWhatsapp(response.data.whatsapp);
            })
            
            setLoading(false);
         }, [])
    )

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => setUf(response.data))
            .catch(err => Alert.alert('Erro ao obter Estados', `erro: ${err}`))

        if(ufValue) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
                .then(response => setCity(response.data))
                .catch(err => Alert.alert('Erro ao obter cidades', `erro: ${err}`))
        }
    }, [ufValue])
    
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
            city: cityValue
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

                    <TextContainer>
                        <Label>Whatsapp</Label>
                        <Whatsapp 
                            placeholder="Falou" 
                            value={whatsapp} 
                            onChangeText={setWhatsapp} 
                        />
                    </TextContainer>

                <Row>
                    <TextContainer>
                        <Label>UF</Label>
                        <UF >
                            <Picker
                              selectedValue={ufValue}
                              onValueChange={itemValue => setUfValue(String(itemValue))}
                            >
                                <Picker.Item label='Selecione um Estado' value='' />
                                {uf.map(ufItem => (
                                    <Picker.Item key={ufItem.id} label={ufItem.nome} value={ufItem.sigla} />
                                ))}
                            </Picker>
                        </UF>
                    </TextContainer>
                    
                    <TextContainer>
                        <Label>Cidade</Label>
                        <City >
                            <Picker
                             selectedValue={cityValue}
                             onValueChange={itemValue => setCityValue(String(itemValue))}
                            >
                                <Picker.Item label='Selecione uma cidade' value='' />
                                {city.map(cityItem => (
                                    <Picker.Item key={cityItem.id} label={cityItem.nome} value={cityItem.nome} />
                                ))}
                            </Picker>
                        </City>
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