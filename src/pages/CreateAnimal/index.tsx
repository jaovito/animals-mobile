import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import { Container, ImagesInput, Input, Label, Title, UploadedImage, UploadedImagesContainer, Background, NextButton, NextButtonText } from './styles';
import api from '../../services/api';
import * as ImagePicker from 'expo-image-picker';

const CreateAnimal: React.FC = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const [reason_adoption, setReasonAdoption] = useState('')
    const [breed, setBreed] = useState('')
    const [citie, setCitie] = useState('')
    const [uf, setUf] = useState('')
    const [images, setImages] = useState<string[]>([])

    const {navigate} = useNavigation()

    async function handleCreateAnimal() {
        const data = new FormData()

        data.append('name', name)
        data.append('description', description)
        data.append('contact', contact)
        data.append('reason_adoption', reason_adoption)
        data.append('breed', breed)
        data.append('citie', String(citie + uf))

        images.forEach((image, index) => {
            data.append('image[]', {
                name: `image[]_${index}.jpg`,
                type: 'image/jpg',
                uri: image
            } as any)
        })

        await api.post('animals', data).catch(err => alert(err))
        navigate('Home')
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
            placeholder="Comportamento, idade, etc."
        />

        <Label>Contato</Label>
        <Input 
            value={contact}
            keyboardType="numeric"
            onChangeText={setContact}
            placeholder="Ex: 5500123456789" 
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

        <Label>Cidade onde se encontra</Label>
        <Input 
            value={citie}
            onChangeText={setCitie}
        />

        <Label>Estado - UF</Label>
        <Input 
            value={uf}
            onChangeText={setUf}
        />

        <NextButton onPress={handleCreateAnimal}>
            <NextButtonText>Cadastrar</NextButtonText>
        </NextButton>
    </Container>
    </>
  );
}

export default CreateAnimal;