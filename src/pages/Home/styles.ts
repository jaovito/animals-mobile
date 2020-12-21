import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'


export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
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
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    margin-top: 5%;
`

export const AnimalImg = styled.Image`
    width: ${Dimensions.get('window').width -39}px;
    height: ${Dimensions.get('window').width -80}px;
    resizeMode: cover;

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

export const CityDescription = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_400Regular';

    color: #777;
`

export const City = styled.Text`
    font-size: 16px;
    font-family: 'Poppins_700Bold';

    color: #888;
`
export const ViewMore = styled.TouchableOpacity`
    flex-direction: row;
    align-self: flex-end;

    align-items: center;
    justify-content: center;
    
    padding: 5%;
`

export const ViewTitle = styled.Text`
    font-size: 20px;
    margin-right: 1%;
    color: #9871F5;

    margin-bottom: 3px;
`

export const AddButton = styled(RectButton)`
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    position: absolute;
    bottom: 80px;
    right: 10px;

    padding: 4%;

    background: #15c3d6;
`

export const ImagesContainer = styled.ScrollView`
    height: 240px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`

export const Menu = styled(MaterialCommunityIcons)`
    font-size: 24px;
    color: #000;

    align-self: flex-end;
`

export const ContainerModal = styled.View`
    flex: 1;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    align-self: center;
    justify-content: center;
`

export const ShimmerCard = styled.View`
    background-color: #FFF;
    border-radius: 8px;

    width: 90%;

    margin-top: 5%;
`
export const ShimmerAnimalImg = styled(ShimmerPlaceHolder)`
    width: ${Dimensions.get('window').width -39}px;
    height: ${Dimensions.get('window').width -80}px;
    resizeMode: cover;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-bottom: 5%;
`

export const ShimmerAnimalName = styled(ShimmerPlaceHolder)`
    width: 40%;
    height: 40px;
    margin-bottom: 30px;
`

export const ShimmerDescription = styled(ShimmerPlaceHolder)`
    width: 70%;
    margin-bottom: 10px;
`

export const ShimmerCityDescription = styled(ShimmerPlaceHolder)`
    width: 50%;
    margin-bottom: 10px;
`