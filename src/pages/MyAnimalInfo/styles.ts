import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {FontAwesome} from '@expo/vector-icons'

export const Container = styled.ScrollView`
    flex: 1;
`

export const ImagesContainer = styled.ScrollView`
    height: 100%;
`

export const Image = styled.Image`
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').width -80}px;
    resizeMode: cover;
`

export const DetailsContainer = styled.View`
    padding: 24px;
`

export const Title = styled.Text`
    color: #4D6F80;
    font-size: 30px;
    font-family: 'Archivo_700Bold';
`
export const DescriptionTitle = styled.Text`
    font-family: 'Poppins_700Bold';
    color: #5c8599;
    font-size: 20px;
    margin-top: 16px;
`

export const Description = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #5c8599;
    line-height: 24px;
    margin-top: 5px;
`

export const City = styled.Text`
    color: #5c8599;
    font-size: 20px;
    font-family: 'Poppins_700Bold';

    margin-top: 10%;
`

export const ContactButton = styled(RectButton)`
    background-color: #3CDC8C;
    border-radius: 20px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 56px;
    width: 95%;
    margin: 0 auto 40px auto;
`

export const ContactButtonText = styled.Text`
    font-family: 'Archivo_700Bold';
    color: #FFF;
    font-size: 16px;
    margin-left: 16px;
`

export const ReasonAdoptionTitle = styled.Text`
    color: #4D6F80;
    font-size: 20px;
    font-family: 'Archivo_700Bold';
    margin-top: 20px;
`

export const ReasonAdoption = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
`

export const Breed = styled.Text`
    color: #5c8599;
    font-size: 18px;
    font-family: 'Poppins_700Bold';

`

export const Adoption = styled.Text`
    margin-top: 10%;

    align-self: center;

    color: #3CDC8C;
    font-family: 'Poppins_700Bold';
    font-size: 26px;

    align-items: center;
    justify-content: center;

    border: 3px dashed #3CDC8C;

    padding: 5%;

    border-radius: 100px;
`

export const Adopted = styled.Text`
    margin-top: 10%;

    align-self: center;

    color: #801111;
    font-family: 'Poppins_700Bold';
    font-size: 26px;

    align-items: center;
    justify-content: center;

    border: 3px dashed #801111;

    padding: 5%;

    border-radius: 100px;
`

export const Modal = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    align-items: center;

    margin: 0 auto;

`

export const ModalCard = styled.View`
    position: relative;
    top: 20%;

    align-self: center;
    background-color: #e5e5e5;
    
    width: 90%;
    min-height: 50%;

    border-radius: 8px;
    border-width: 6px;
    border-color: #3339;
    padding: 5%;
`
export const ModalHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ModalTitle = styled.Text`
    font-size: 30px;
    font-family: 'Poppins_700Bold';
    color: #444;
`

export const CloseModal = styled(FontAwesome)`
    font-size: 30px;
    color: rgba(160, 0, 0, 0.65);
`

export const DeleteButton = styled(RectButton)`
    width: 90%;
    background-color: rgba(160, 0, 0, 0.65);

    align-self: center;
    margin-top: 10%;

    padding: 5%;

    border-radius: 8px;
`

export const DeleteText = styled.Text`
    font-size: 20px;
    font-family: 'Poppins_400Regular';
    color: #FFF;
`
export const DonateButton = styled(RectButton)`
    width: 90%;
    background-color: rgba(0, 160, 16, 0.65);

    align-self: center;
    margin-top: 10%;

    padding: 5%;

    border-radius: 8px;
`