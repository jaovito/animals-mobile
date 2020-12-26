import React, { useEffect, useState } from 'react';
import {ActivityIndicator} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { Container, ImagesInput, Input, Label, Title, UploadedImage, UploadedImagesContainer, Background, NextButton, NextButtonText, DisabledButton, MaskedInput, UF, City, SelectPicker } from './styles';
import api from '../../services/api';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

interface Uf {
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
  

const CreateAnimal: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const [reason_adoption, setReasonAdoption] = useState('')
    const [breed, setBreed] = useState('')
    const [citie, setCitie] = useState('')
    const [uf, setUf] = useState('')
    const [images, setImages] = useState<string[]>([])
    const [disabled, setDisabled] = useState(true)

    const [ufs, setUfs] = useState<Uf []>([]);
    const [cities, setCities] = useState<City []>([]);

    const [loading, setLoading] = useState(false)

    const {navigate} = useNavigation()

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => setUfs(response.data))
        
        if (uf) {
          axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => setCities(response.data))
        }
    }, [uf])

    useEffect(() => {
        if (name && description && contact && reason_adoption && breed && citie && images.length > 0) {
            setDisabled(false);
        }
    }, [name,
        description,
        contact,
        reason_adoption,
        breed,
        citie,
        images,])

    async function handleCreateAnimal() {
        setLoading(true)

        const whatsappValue = contact.replace('(', '')
        const cleanWhatsapp = whatsappValue.replace(')', '')
        const noSpace = cleanWhatsapp.replace(' ', '')
        const noTabWhatsapp = noSpace.replace('-', '')

        if (!name || !description || !contact || !reason_adoption || !breed || !citie || !images) {
            alert('Prencha todos os campos')
        } else {
            setDisabled(true)
            console.log(noTabWhatsapp)
            
            const {data} = await api.post('animals', {
                name,
                description,
                contact: `55${noTabWhatsapp}`,
                reason_adoption,
                breed,
                citie,
            }) 
    
            const id = await data.id
    
            const imageData = new FormData()
    
            images.forEach(async (image, index) => {
                 imageData.append('image', {
                    name: `image_${index}.jpg`,
                    type: 'image/jpg',
                    uri: image
                } as any)
            })
    
            await api.post(`animal/${id}`, imageData).catch(err => alert(err))
            setLoading(false)
            setDisabled(false)
            navigate('Home')
        }

    }


    async function handleSelectImages() {
        const {status} = await ImagePicker.requestCameraRollPermissionsAsync()
    
        if( status !== 'granted') {
          alert('Eita, precisamos de acesso às suas fotos...')
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        })
    
        if (result.cancelled) {
          return;
        }
    
        const {uri: image} = result
    
        setImages([...images, image])
      }

  return (
    <>
    <Container>
        <Title>Dados</Title>

        <Label>Nome do animal *</Label>
        <Input 
            value={name}
            onChangeText={setName}
        />

        <Label>Sobre *</Label>
        <Input 
            value={description}
            onChangeText={setDescription}
            multiline
            style={{height: 110}}
            placeholder="Comportamento, idade, vacinação, se é castrado, etc."
        />

        <Label>Contato</Label>
        <MaskedInput 
            type={'cel-phone'}
            options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
            }}
            value={contact}
            keyboardType="numeric"
            onChangeText={setContact}
            placeholder="Ex: (00) 91234-5678" 
        />

        <Label>Fotos</Label>
        <UploadedImagesContainer>
            {images.map(image => (
             <UploadedImage 
             key={image}
             source={{uri: image}} />
            ))}
        </UploadedImagesContainer>

        <ImagesInput onPress={handleSelectImages}>
            <Feather name='plus' size={24} color="#15b6d6" />
        </ImagesInput>

        <Title>Dados de Adoção</Title>

        <Label>Motivo da doação</Label>
        <Input 
            value={reason_adoption}
            onChangeText={setReasonAdoption}
            multiline
            style={{height: 110}}
        />

        <Label>Raça do animal</Label>
        <Input 
            value={breed}
            onChangeText={setBreed}
        />

        <Label>Estado - UF</Label>
        <UF>
        <SelectPicker 
            selectedValue={uf}
            onValueChange={itemValue => setUf(String(itemValue))}
        >
            <SelectPicker.Item label='Selecione um Estado' value='' />
            {ufs.map(uf => (
                <SelectPicker.Item key={uf.id} label={uf.nome} value={uf.sigla} />
            ))}
        </SelectPicker>
        </UF>

        <Label>Cidade onde se encontra</Label>
        <City>
        <SelectPicker 
            selectedValue={citie}
            onValueChange={itemValue => setCitie(String(itemValue))}
        >
            <SelectPicker.Item label='Selecione uma Cidade' value='' />
            {cities.map(city => (
                <SelectPicker.Item key={city.id} label={city.nome} value={city.nome} />
            ))}
        </SelectPicker>
        </City>


        {disabled ? (
            <DisabledButton>
                {loading ? <ActivityIndicator color="#fff" size={30} /> : <NextButtonText>Cadastrar</NextButtonText>}
            </DisabledButton>
        ) : (
            <NextButton onPress={handleCreateAnimal}>
                {loading ? <ActivityIndicator color="#fff" size={30} /> : <NextButtonText>Cadastrar</NextButtonText>}
            </NextButton>
        )}
    </Container>
    </>
  );
}

export default CreateAnimal;