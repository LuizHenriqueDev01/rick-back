import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useBiometrics } from '../../hooks/useBiometrics';
import type { RootStackParamList } from '../../navigation';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isAvailable, biometricType, authenticate } = useBiometrics();

  async function handleBiometricLogin() {
    setLoading(true);
    const success = await authenticate();
    setLoading(false);

    if (success) {
      navigation.replace('Home');
    }
  }

  function handleLogin() {
    if (email && password) {
      navigation.replace('Home');
    }
  }

  const biometricIcon = biometricType === 'facial' ? '🪪' : '👆';
  const biometricLabel = biometricType === 'facial' ? 'Face ID' : 'Digital';

  return (
    <Container>
      <Card>
        <Logo>💳</Logo>
        <Title>Rick Bank</Title>
        <Subtitle>Acesse sua conta</Subtitle>

        <Label>E-mail</Label>
        <Input
          placeholder="seu@email.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Label>Senha</Label>
        <Input
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <ForgotButton>
          <ForgotText>Esqueci minha senha</ForgotText>
        </ForgotButton>

        <LoginButton onPress={handleLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        {isAvailable && (
          <BiometricButton onPress={handleBiometricLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#f5a623" />
            ) : (
              <>
                <BiometricIcon>{biometricIcon}</BiometricIcon>
                <BiometricText>Entrar com {biometricLabel}</BiometricText>
              </>
            )}
          </BiometricButton>
        )}

        <RegisterRow>
          <RegisterText>Não tem conta? </RegisterText>
          <TouchableOpacity>
            <RegisterLink>Cadastre-se</RegisterLink>
          </TouchableOpacity>
        </RegisterRow>
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
`;

const Logo = styled.Text`
  font-size: 48px;
  text-align: center;
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 32px;
`;

const Label = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: #aaa;
  margin-bottom: 6px;
  margin-top: 16px;
`;

const Input = styled.TextInput`
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 15px;
  color: #fff;
  border-width: 1px;
  border-color: #333;
`;

const ForgotButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 24px;
`;

const ForgotText = styled.Text`
  font-size: 13px;
  color: #f5a623;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #f5a623;
  border-radius: 14px;
  padding: 16px;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #0a0a0a;
`;

const BiometricButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 14px;
  border-radius: 14px;
  border-width: 1px;
  border-color: #333;
  background-color: #2a2a2a;
`;

const BiometricIcon = styled.Text`
  font-size: 20px;
  margin-right: 8px;
`;

const BiometricText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #f5a623;
`;

const RegisterRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

const RegisterText = styled.Text`
  font-size: 14px;
  color: #888;
`;

const RegisterLink = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #f5a623;
`;
