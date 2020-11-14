import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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

export const Description = styled.Text`
    font-family: 'Poppins_400Regular';
    color: #5c8599;
    line-height: 24px;
    margin-top: 16px;
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

    color: #3CDC8C;
    font-family: 'Poppins_700Bold';
    font-size: 26px;

    align-items: center;
    justify-content: center;

    height: 56px;
    width: 95%;
`

export const Adopted = styled.Text`
    margin-top: 10%;

    color: #801111;
    font-family: 'Poppins_700Bold';
    font-size: 26px;

    align-items: center;
    justify-content: center;

`