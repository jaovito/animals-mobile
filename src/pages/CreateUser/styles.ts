import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';


export const KeyboardView = styled.ScrollView`
  flex: 1;
  height: 100%;
`

export const Title = styled.Text`
  margin-top: 10%;
  color: #fff;
  font-family: 'Poppins_700Bold';
  font-size: 26px;

  margin-left: 10%;

  align-self: flex-start;

`
export const SecretTitle = styled.Text`

  color: #D7D7D7;
  font-family: 'Poppins_400Regular';
  font-size: 16px;

  margin-left: 10%;

  align-self: flex-start;


`

export const DogImage = styled.Image`
  height: 200px;
  width: 200px;

  align-self: center;

  z-index: 0;
`

export const Container = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: -1;
`

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  
`

export const Name = styled.TextInput`
  flex: 2;
  background-color: #eee;
  height: 50px;

  text-align: center;
  margin-right: 5%;
  border-radius: 8px
`

export const SecondName = styled.TextInput`
  flex: 2;
  background-color: #eee;
  height: 50px;

  text-align: center;
  border-radius: 8px;

`

export const Email = styled.TextInput`
  margin-top: 5%;

  background-color: #eee;
  height: 50px;

  width: 80%;
  border-radius: 8px;
  padding-left: 10px;
`

export const Password = styled.TextInput`
  margin-top: 5%;

  background-color: #eee;
  height: 50px;

  width: 80%;
  border-radius: 8px;
  padding-left: 10px;

`

export const InfoContainer = styled.View`
  margin-top: 5%;
  margin-bottom: 5%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80%;
`

export const Whatsapp = styled.TextInput`
  flex: 2;
  background-color: #eee;
  height: 50px;

  text-align: center;
  margin-right: 5%;
  border-radius: 8px
`

export const City = styled.TextInput`
  flex: 2;
  background-color: #eee;
  height: 50px;

  text-align: center;
  border-radius: 8px
`
export const Button = styled.TouchableOpacity`
  background-color: #1C9209;
  width: 80%;
  height: 50px;

  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`

export const ButtonText = styled.Text`
  font-size: 21px;
  color: #EEE;
  font-family: 'Poppins_700Bold'
`

export const DisabledButton = styled.View`
  background-color: #999;
  width: 80%;
  height: 50px;

  border-radius: 8px;

  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`

export const DisabledButtonText = styled.Text`
  font-size: 21px;
  color: #EEE;
  font-family: 'Poppins_700Bold'
`