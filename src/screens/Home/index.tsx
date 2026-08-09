import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import type { RootStackParamList } from '../../navigation';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  function handleLogout() {
    navigation.replace('Login');
  }

  return (
    <Container>
      <Card>
        <Logo>💳</Logo>
        <Title>Bem-vindo ao Rick Bank</Title>
        <Subtitle>Você está autenticado com sucesso</Subtitle>

        <BalanceLabel>Saldo disponível</BalanceLabel>
        <Balance>R$ 12.450,00</Balance>

        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Card>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #0a0a0a;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Card = styled.View`
  width: 100%;
  background-color: #1a1a1a;
  border-radius: 24px;
  padding: 32px 24px;
  align-items: center;
`;

const Logo = styled.Text`
  font-size: 48px;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 32px;
`;

const BalanceLabel = styled.Text`
  font-size: 13px;
  color: #aaa;
  margin-bottom: 6px;
`;

const Balance = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: #f5a623;
`;

const LogoutButton = styled.TouchableOpacity`
  margin-top: 32px;
  padding: 14px;
  border-radius: 14px;
  border-width: 1px;
  border-color: #333;
  background-color: #2a2a2a;
  align-items: center;
  align-self: stretch;
`;

const LogoutButtonText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #f5a623;
`;
