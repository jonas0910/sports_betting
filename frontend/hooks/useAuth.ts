'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

type UserPayload = {
  sub: string;
  name?: string;
  username?: string;
  exp?: number;
};

export function useAuth() {
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      try {
        const decoded = jwtDecode<UserPayload>(token);

        // Verificar expiración
        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          Cookies.remove('access_token');
          setUser(null);
        } else {
          setUser(decoded);
        }
      } catch (error) {
        console.error('Error al decodificar el token', error);
        setUser(null);
      }
    }
  }, []);

  return { user };
}
