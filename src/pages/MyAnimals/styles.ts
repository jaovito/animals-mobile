import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`

export const Loading = styled.ActivityIndicator`
`

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
`
export const Header = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content:  center;
`

export const LogOut = styled.TouchableOpacity`
    position: relative;
    top: ${Dimensions.get('window').height / 20}px;
    right: ${Dimensions.get('window').width / 11}px;
`

export const Title = styled.Text`
    margin-top: 10%;

    color: #EEE;
    font-size: 31px;
    font-family: 'Archivo_700Bold';

    text-align: center;

    margin-left: 5%;
`

export const SubTitle = styled.Text`
    color: #EEE;
    font-size: 20px;
    font-family: 'Archivo_400Regular';

    text-align: center;

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

    width: 25%;

    margin-bottom: 5%;
    margin-left: 2%;
    margin-top: 5%;
`

export const AnimalImg = styled.Image`
    width: ${Dimensions.get('window').width -290}px;
    height: ${Dimensions.get('window').width -290}px;
    resizeMode: cover;

    border-top-left-radius: 8px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`

export const TextContainer = styled.View`
    padding: 5%;
`

export const AnimalName = styled.Text`
    font-size: 16px;
    font-family: 'Archivo_700Bold';

    color: #888
`

export const Description = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_400Regular';

    color: #777;
    margin-bottom: 10%;
`
export const ViewMore = styled.TouchableOpacity`
    flex-direction: row;
    align-self: flex-end;

    align-items: center;
    justify-content: center;
    
    padding: 5%;
`

export const ViewTitle = styled.Text`
    font-size: 16px;
    margin-right: 1%;
    color: #9871F5;

    margin-bottom: 3px;
`

export const ImagesContainer = styled.ScrollView`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`