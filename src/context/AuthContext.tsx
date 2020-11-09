import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import api from '../services/api';

interface AuthContextData {
    authenticated: boolean;
    handleLogin(email: string, password: string): Promise<void>;
    loading: boolean;
    handleLogout(): void
}

const Context = createContext<AuthContextData>({} as AuthContextData);

const AuthContext: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
        const token = await AsyncStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
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
                "Alert Title",
                err
              );
        }) as any

        AsyncStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;
        setAuthenticated(true);
        console.log(data.token)
    }

    async function handleLogout() {
        setAuthenticated(false);
        AsyncStorage.clear()
        api.defaults.headers.Authorization = undefined;
    }

    if (loading) return null

  return (
      <Context.Provider value={{ authenticated, handleLogin, loading, handleLogout }}>
          {children}
      </Context.Provider>
  );
}

export {Context, AuthContext};