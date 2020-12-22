import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import api from '../services/api';

interface User {
    id: number;
    name: string;
    second_name: string;
    whatsapp: string;
    city: string;
}

interface AuthContextData {
    authenticated: boolean;
    handleLogin(email: string, password: string): Promise<void>;
    loading: boolean;
    handleLogout(): void
    user: User | null | undefined;
}

const Context = createContext<AuthContextData>({} as AuthContextData);

const AuthContext: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        (async () => {
        const token = await AsyncStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            const {data} = await api.get('user')
            setUser(data)
            setAuthenticated(true)
        }

        setLoading(false)
        })()
    }, [])

    async function handleLogin(email: string, password: string) {
        const {data} = await api.post('authenticate', {
            email,
            password,
        }).catch(err => {
            Alert.alert(
                "Dados incorretos, verifique seus dados e tente novamente.",
                `erro: ${err}`
              );
        }) as any
        console.log(data)

        AsyncStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;

        const {data: userData} = await api.get('user')
        setUser(userData)
        setAuthenticated(true);

        console.log(user)
    }

    async function handleLogout() {
        setAuthenticated(false);
        AsyncStorage.clear()
        setUser(null)
        api.defaults.headers.Authorization = undefined;
    }

    if (loading) return null

  return (
      <Context.Provider value={{ authenticated, handleLogin, loading, handleLogout, user }}>
          {children}
      </Context.Provider>
  );
}

export {Context, AuthContext};