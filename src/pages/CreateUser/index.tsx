import React, { useEffect, useState } from 'react';


import axios from 'axios';
import { Container,
  NameContainer,
  Name,
  SecondName,
  CPF,
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
import { ActivityIndicator, Alert } from 'react-native';

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
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState<Uf []>([])
  const [uf, setUf] = useState<string>()
  const [cityUf, setCityUf] = useState<CityUf []>()
  const [cityUfValue, setCityUfValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [ufLoading, setUfLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [alertCpf, setAlertsCpf] = useState(false)

  const {navigate, goBack} = useNavigation()

  async function CPFValidate(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") {
    setAlertsCpf(true)
    await Alert.alert(
      'CPF Inválido',
      'Gentileza, digite um CPF válido para concluir seu cadastro.'
      )
      goBack()
      return false
  };

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) {
      setAlertsCpf(true)
      await Alert.alert(
        'CPF Inválido',
        'Gentileza, digite um CPF válido para concluir seu cadastro.'
      )
      goBack()
      return false
    };

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
      setAlertsCpf(true)
      await Alert.alert(
        'CPF Inválido',
        'Gentileza, digite um CPF válido para concluir seu cadastro.'
      )
      goBack()
      return false
    };
    return true;
}

  
  useEffect(() => {
    (async () => {
      setUfLoading(true)
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      setCity(response.data)
      
      if (uf) {
        const responseUf = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        setCityUf(responseUf.data)
      }
      setUfLoading(false)
    })()
    
  }, [
    uf
  ])
  
  useEffect(() => {
    if (name && second_name && email && password && whatsapp && cityUfValue) {
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
    cityUfValue,
    uf
  ])

  async function handleCreate() {
    setLoading(true)
    setDisabled(true)

    const cpfValue = await cpf.replace('.', '')
    const noPoints = cpfValue.replace('.', '')
    const cleanCpf = noPoints.replace('-', '')

    const whatsappValue = whatsapp.replace('(', '')
    const cleanWhatsapp = whatsappValue.replace(')', '')
    const noSpace = cleanWhatsapp.replace(' ', '')
    const noTabWhatsapp = noSpace.replace('-', '')

    CPFValidate(cleanCpf)

    await api.post('register', {
      name,
      second_name,
      whatsapp: `55${noTabWhatsapp}`,
      email,
      password,
      city: `${cityUfValue}`,
      cpf: cleanCpf,
    }).catch(err => {
      Alert.alert('Erro ao se cadastrar, verifique os dados e tente novamente', `erro: ${err}`)
    })

    setDisabled(false)
    setLoading(false)
    navigate('SuccessUser')
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

          <CPF 
            type={'cpf'}
            value={cpf} onChangeText={setCpf}
            placeholder='CPF'
            keyboardType='numeric'
          />
          <Email value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address' textContentType='emailAddress' placeholder='E-mail' />
          <Password value={password} onChangeText={setPassword} textContentType='password' secureTextEntry={true} placeholder='Senha' />

          <Whatsapp 
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={whatsapp} onChangeText={setWhatsapp}
            placeholder='Whatsapp'
            keyboardType='numeric'
          />

        {ufLoading ? <ActivityIndicator style={{
          marginTop: 10,
          marginBottom: 10,
        }} color='#FFF' size={30} /> : (
          <InfoContainer>
          <Uf>
            <SelectPicker
            selectedValue={uf}
            onValueChange={itemValue => setUf(String(itemValue))}>
              <SelectPicker.Item label="Selecione um Estado" value="" />
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
        )}

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