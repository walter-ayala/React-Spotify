import base64 from 'base-64';
import qs from 'qs';
import { useAuthStore } from '../store/authStore';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID!;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET!;
const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL!;

const auth_token = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`);

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const token_url = `${ACCOUNT_URL}api/token`;
    const data = qs.stringify({ grant_type: 'client_credentials' });

    const response = await fetch(token_url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    });

    if (!response.ok) return null;

    const { access_token, expires_in, token_type } = await response.json();

    useAuthStore.setState({
      authData: {
        access_token,
        expires_in: Date.now() + expires_in * 1000,
        token_type,
      },
    });

    return access_token;
  } catch (err) {
    console.error('Error getting token', err);
    return null;
  }
};
