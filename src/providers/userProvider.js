import React, {useState, useEffect, createContext} from 'react';
import { useData } from '../hooks/helpers';
import { useLocalStorage } from '../hooks/localstorage';

export const UserContext = createContext({
    token: null,
    storeToken: () => {},
    user: null,
    setUser: () => {},
    clear: () => {}
});

export const UserProvider = props => {
    const [user, setUser] = useLocalStorage({});
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const token = await sessionStorage.getItem('token');
            setToken(token);

            console.log(token)
        }
        getSession();
    }, [])

    const storeToken = async (token) => {
        await sessionStorage.setItem('token', token);
        setToken(token)
    }

    const clear = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setToken(null);
        setUser({});
    }

    return (
        <UserContext.Provider value={{token, storeToken, user, setUser, clear}}>
            {props.children}
        </UserContext.Provider>
    );
};