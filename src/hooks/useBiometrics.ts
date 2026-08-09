import * as LocalAuthentication from 'expo-local-authentication';
import { useCallback, useEffect, useState } from 'react';

type BiometricType = 'facial' | 'fingerprint' | null;

interface UseBiometricsReturn {
  isAvailable: boolean;
  biometricType: BiometricType;
  authenticate: () => Promise<boolean>;
}

export function useBiometrics(): UseBiometricsReturn {
  const [isAvailable, setIsAvailable] = useState(false);
  const [biometricType, setBiometricType] = useState<BiometricType>(null);

  useEffect(() => {
    async function check() {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) return;

      setIsAvailable(true);

      const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
        setBiometricType('facial');
      } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
        setBiometricType('fingerprint');
      }
    }

    check();
  }, []);

  const authenticate = useCallback(async (): Promise<boolean> => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Autentique-se para acessar o Rick Bank',
      fallbackLabel: 'Usar senha',
      disableDeviceFallback: false,
    });
    return result.success;
  }, []);

  return { isAvailable, biometricType, authenticate };
}
