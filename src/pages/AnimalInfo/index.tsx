import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Container, ImagesContainer, Image, DetailsContainer, Description, Title, ContactButton, ContactButtonText, City, ReasonAdoptionTitle, ReasonAdoption, Breed } from './styles';
import api from '../../services/api';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

interface Route {
  id: number;
}

interface AnimalImage {
  id: number;
  user_id: number;
  url: string;
}

const AnimalInfo: React.FC = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [reason_adoption, setReasonAdoption] = useState('')
  const [breed, setBreed] = useState('')
  const [city, setCity] = useState('')
  const [contact, setContact] = useState('')
  const [images, setImages] = useState<AnimalImage[]>([])

  const route = useRoute();
  const params = route.params as Route;


  useEffect(() => {
    api.get(`animals/${params.id}`).then(response => {
      setName(response.data.name);
      setDescription(response.data.description);
      setReasonAdoption(response.data.reason_adoption);
      setBreed(response.data.breed);
      setCity(response.data.citie);
      setContact(response.data.contact);
      setImages(response.data.images);
    }).catch(err => {
      alert(err)
    })

    return () => {
      setName('');
      setDescription('');
      setReasonAdoption('');
      setBreed('');
      setCity('');
      setContact('');
      setImages([]);
    }
  }, [params.id])

  function handleGoWhatsapp() {
    Linking.openURL(`https://wa.me/${contact}/?text=Olá, gostaria de informações sobre o(a) ${name}`)
  }

  return (
    <Container>
      <ImagesContainer horizontal pagingEnabled>
        {images.map(image => (
          <Image 
          key={image.id}
          source={{
            uri: image.url
          }} />
        ))}
      </ImagesContainer>

      <DetailsContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>

      <ReasonAdoptionTitle>
        Motivo para adoção
      </ReasonAdoptionTitle>

      <ReasonAdoption>
        {reason_adoption}
      </ReasonAdoption>

      <City>Cidade:{'    '}{city}</City>
        <Breed>Raça:{' '} {breed}</Breed>
      </DetailsContainer>


      <ContactButton onPress={handleGoWhatsapp}>
        <MaterialCommunityIcons name='whatsapp' size={24} color='#FFF' />
        <ContactButtonText>Whatsapp</ContactButtonText>
      </ContactButton>
    </Container>
  );
}

export default AnimalInfo;