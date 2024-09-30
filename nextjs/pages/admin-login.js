import React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

// Preview providers
const providers = [{ id: 'credentials', name: 'Email and Password' }];

// Mock sign-in function
const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in as admin with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`
      );
      resolve();
    }, 300);
  });
  return promise;
};

export default function AdminLoginPage() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>User? <a href="/login">Login as User</a></p>
      </div>
    </AppProvider>
  );
}
