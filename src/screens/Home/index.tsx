import styled from 'styled-components/native';

export default function HomeScreen() {
  return (
    <Container>
      <Card>
        <Logo>💳</Logo>
        <Title>Bem-vindo ao Rick Bank</Title>
        <Subtitle>Você está autenticado com sucesso</Subtitle>

        <BalanceLabel>Saldo disponível</BalanceLabel>
        <Balance>R$ 12.450,00</Balance>
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
