import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    margin-top: 10%;

    color: #EEE;
    font-size: 31px;
    font-family: 'Archivo_700Bold';
    align-self: flex-start;

    margin-left: 5%;
`

export const SubTitle = styled.Text`
    color: #EEE;
    font-size: 20px;
    font-family: 'Archivo_400Regular';
    align-self: flex-start;

    margin-left: 5%;
`
export const Content = styled.ScrollView`
    flex: 1;
    height: 100%;
    width: 100%;

`

export const Card = styled.View`
    background-color: #FFF;
    border-radius: 8px;

    width: 90%;

    margin-bottom: 5%;
    margin-top: 10%;
`

export const AnimalImg = styled.Image`
    width: 100%;
    height: 200px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`

export const TextContainer = styled.View`
    padding: 5%;
`

export const AnimalName = styled.Text`
    font-size: 26px;
    font-family: 'Archivo_700Bold';
`

export const Description = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_400Regular';

    color: #777;

    margin-bottom: 10%;
`

export const City = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_700Bold';

    color: #888;
`
