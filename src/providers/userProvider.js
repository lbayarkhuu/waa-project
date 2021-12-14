import React, {useState, useEffect, createContext} from 'react';
import { useData } from '../hooks/helpers';
import { useLocalStorage } from '../hooks/localstorage';

export const UserContext = createContext({
    token: null,
    storeToken: () => {},
    user: null,
    setUser: () => {},
    clear: () => {},
    role: "",
});

export const UserProvider = props => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const token = await sessionStorage.getItem('token');
            const user = await sessionStorage.getItem('user');

            console.log(user)

            setToken(token);
            setUser(JSON.parse(user));

            if (user == null || Object.keys(user).length == 0) return

            setRole(user.role.role);
        }
        getSession();
    }, [])

    useEffect(() => {
        if (user == null || Object.keys(user).length == 0) return

        setRole(user.role.role);
    }, [user])

    const storeToken = async (token, user) => {
        await sessionStorage.setItem('token', token);
        await sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token)
        setUser(user)
    }

    const clear = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setToken(null);
        setUser({});
    }

    return (
        <UserContext.Provider value={{token, storeToken, user, setUser, clear, role}}>
            {props.children}
        </UserContext.Provider>
    );
};