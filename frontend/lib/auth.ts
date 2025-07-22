import axios from 'axios';
import Cookies from 'js-cookie';

export async function login({ username, password }: { username: string; password: string }) {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    username,
    password,
  });

  const token = res.data.access_token;
  Cookies.set('access_token', token); // guarda el token en cookie
}


export function isAuthenticated(): boolean {
  return !!Cookies.get('access_token');
}