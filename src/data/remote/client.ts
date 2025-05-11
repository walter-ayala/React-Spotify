import { APIResponse } from '../models/api';
import { useAuthStore } from '../store/authStore';
import { getAccessToken } from './spotifyAuth';

const baseURL: string = import.meta.env.VITE_BASE_URL ?? '';

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

const client = async <T>(url: string, options: RequestInit = {}, isRetry = false): Promise<APIResponse<T>> => {
  const {
    authData: { access_token },
  } = useAuthStore.getState();
  const isFormData = options.body instanceof FormData;
  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      ...(isFormData ? {} : headers),
      ...(options.headers || {}),
      ...(access_token ? { authorization: `Bearer ${access_token}` } : {}),
    },
  };

  try {
    const response = await fetch(`${baseURL}${url}`, fetchOptions);
    const code = response.status;
    const success = response.ok;

    if (!success && (code === 400 || code === 401) && !isRetry) {
      const newToken = await getAccessToken();
      if (newToken) {
        return client<T>(url, options, true);
      }
    }

    const responseBody = await response.json();

    return {
      data: success ? responseBody : null,
      code,
      success,
      error: success ? null : responseBody,
    };
  } catch (error) {
    return {
      data: null,
      code: 500,
      success: false,
      error,
    };
  }
};

export default client;
