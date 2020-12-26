import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import { Container, ImagesContainer, Image, DetailsContainer, Description, Title, ContactButton, ContactButtonText, City, ReasonAdoptionTitle, ReasonAdoption, Breed, Adoption, Adopted, DescriptionTitle, Modal, ModalCard, ModalHeader, ModalTitle, CloseModal, DeleteButton, DeleteText, DonateButton } from './styles';
import api from '../../services/api';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, Animated, Alert } from 'react-native';

interface Route {
  id: number;
}

interface AnimalImage {
  id: number;
  user_id: number;
  url: string;
}

const MyAnimalInfo: React.FC = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [reason_adoption, setReasonAdoption] = useState('')
  const [breed, setBreed] = useState('')
  const [city, setCity] = useState('')
  const [adopted, setAdopted] = useState(false)
  const [images, setImages] = useState<AnimalImage[]>([])

  const [fadeAnim] = useState(new Animated.Value(0));
  const [top] = useState(new Animated.Value(500));

  
  const [visible, setVisible] = useState(false)
  
  if (visible) {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }),
      
    ]).start();
  }
  
  const route = useRoute();
  const params = route.params as Route;

  useEffect(() => {
    api.get(`animals/${params.id}`).then(response => {
      setName(response.data.name);
      setDescription(response.data.description);
      setReasonAdoption(response.data.reason_adoption);
      setBreed(response.data.breed);
      setCity(response.data.citie);
      setAdopted(response.data.adopted);
      setImages(response.data.images);
    }).catch(err => {
      Alert.alert('Erro ao obter dados', err)
    })

    return () => {
      setName('');
      setDescription('');
      setReasonAdoption('');
      setBreed('');
      setCity('');
      setImages([]);
    }
  }, [params.id])

    function handleDonate() {
    api.patch(`animals/${params.id}`, {
      adopted: true
    }).catch((err) => {
      Alert.alert('Erro ao alterar dados', err)
    })

    setVisible(!visible)
  }

  function handleDelete() {
    api.delete(`animals/${params.id}`).catch(err => {
      Alert.alert('Erro ao deletar pet', 'Não foi possível deletar os dados, não é possível deletar animais doados.')
    })

    setVisible(!visible)
  }

  async function handleCloseModal() {
     Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      setVisible(!visible)
    });

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
        <TouchableOpacity 
          onPress={() => {setVisible(!visible)}}
          style={{
            alignSelf: 'flex-end'
          }}
        >
          <MaterialCommunityIcons name='dots-horizontal' size={30} color='#000' />
        </TouchableOpacity>
        <Title>Nome: {name}</Title>
        <DescriptionTitle>Descrição</DescriptionTitle>
        <Description>{description}</Description>

      <ReasonAdoptionTitle>
        Motivo para adoção
      </ReasonAdoptionTitle>

      <ReasonAdoption>
        {reason_adoption}
      </ReasonAdoption>

      <City>Cidade:{'    '}{city}</City>
      <Breed>Raça:{' '} {breed}</Breed>

      {adopted ? <Adopted>
        Adotado
        <MaterialCommunityIcons name="emoticon-happy" size={36} color="#801111" />
      </Adopted> : (
        <Adoption>
          Em adoção
        <MaterialCommunityIcons name="dog" size={36} color="#3CDC8C" />
        </Adoption>
      )}
      </DetailsContainer>

      {visible ? (
        <Modal as={Animated.View} 
          style={{ opacity: fadeAnim }}
        >
        <ModalCard>
            <ModalHeader>
                <ModalTitle>Opções</ModalTitle>
                <TouchableOpacity onPress={handleCloseModal}>
                    <CloseModal name="close" />
                </TouchableOpacity>
            </ModalHeader>

            <DeleteButton onPress={handleDelete}>
                <DeleteText>Apagar publicação</DeleteText>
            </DeleteButton>

            <DonateButton onPress={handleDonate}>
                <DeleteText>Alterar status para doado</DeleteText>
            </DonateButton>
        </ModalCard>

        </Modal>
      ) : null}
    </Container>
  );
}

export default MyAnimalInfo;