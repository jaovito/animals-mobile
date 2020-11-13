import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Background = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  
`

export const Container = styled.ScrollView`
    flex: 1;
    width: 90%;
    margin: 10% auto;
`

export const Title = styled.Text`
    color: #5c8599;
    font-size: 24px;
    font-family: 'Archivo_700Bold';
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom-width: 0.8px;
    border-bottom-color: #D3E2E6;
`

export const Label = styled.Text`
    color: #8fa7b3;
    font-family: 'Archivo_500Medium';
    margin-bottom: 9px;
`

export const Input = styled.TextInput`
    background-color: #fff;
    border-width: 1.4px;
    border-color: #d3e2e6;
    border-radius: 20px;
    height: 56px;
    padding-vertical: 18px;
    padding-horizontal: 24px;
    margin-bottom: 16px;
    text-align-vertical: top;
`

export const UploadedImagesContainer = styled.View`
    flex-direction: row;
`

export const UploadedImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 28px;
    margin-bottom: 32px;
    margin-right: 8px;
`

export const ImagesInput = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.5);
    border-style: dashed;
    border-color: #96D2F0;
    border-width: 1.4px;
    border-radius: 20px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`

export const NextButton = styled(RectButton)`
    background-color: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`

export const NextButtonText = styled.Text`
    font-family: 'Archivo_700Bold';
    font-size: 16px;
    color: #FFF;
`

export const DisabledButton = styled.View`
    background-color: #9999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    height: 56px;
    margin-top: 32px;
`