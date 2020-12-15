import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  DisabledButtonText,
  SelectPicker,
  Uf,
 } from './styles';

import dogImg from '../../assets/icons/dog.png'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

interface Uf {
  id: number;
  nome: string;
  sigla: string;
}

interface CityUf {
  id: number;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesoregiao: {};
  };
}

const CreateUser: React.FC = () => {
  const [name, setName] = useState('')
  const [second_name, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState<Uf []>([])
  const [uf, setUf] = useState<string>()
  const [cityUf, setCityUf] = useState<CityUf []>()
  const [cityUfValue, setCityUfValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const {navigate} = useNavigation()

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      setCity(response.data)
    }).catch(err => {
      alert(err)
    })

    if (uf) {
      axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(response => {
      setCityUf(response.data)
    }).catch(err => {
      alert(err)
    })
    }

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
    uf
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
      city: `${cityUfValue} - ${uf}`
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

          <Whatsapp 
            value={whatsapp} onChangeText={setWhatsapp}
            placeholder='Whatsapp'
            keyboardType='numeric'
          />
        <InfoContainer>
          <Uf>
            <SelectPicker
            selectedValue={uf}
            onValueChange={itemValue => setUf(String(itemValue))}>
              <SelectPicker.Item label="Selecione uma cidade" value="" />
              {city.map(item => (
                <SelectPicker.Item key={item.id} label={item.nome} value={item.sigla} />
              ))}
            </SelectPicker>
          </Uf>

          {cityUf ? (
            <City>
            <SelectPicker
            selectedValue={cityUfValue}
            onValueChange={itemValue => setCityUfValue(String(itemValue))}>
              <SelectPicker.Item label="Selecione uma cidade" value="" />
              {cityUf.map(item => (
                <SelectPicker.Item key={item.id} label={item.nome} value={item.nome} />
              ))}
            </SelectPicker>
          </City>
          ) : null}
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