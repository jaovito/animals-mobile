import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';


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

export const Cat = styled.Image`
    width: 100px;
    height: 100px;
    
    align-self: flex-end;
    margin-right: 5%;
`

export const Email = styled.TextInput`
    background-color: #EEE;
    width: 90%;
    min-height: 50px;
    border-radius: 8px;
    padding: 10px;
`

export const Button = styled(RectButton)`
    background-color: #1C9209;
    width: 90%;
    height: 50px;

    margin-top: 5%;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`


export const ButtonTitle = styled.Text`
    font-size: 20px;
    font-family: 'Poppins_700Bold';

    color: #EEE;
`

export const DisabledButton = styled.View`
    background-color: #999;
    width: 90%;
    height: 50px;

    margin-top: 5%;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`
