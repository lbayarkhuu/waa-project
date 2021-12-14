import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../providers/userProvider';
import _static from '../static';

export const useData = (url, initData) => {
    const [data, setData] = useState(initData);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UserContext)

    useEffect(() => {
        setLoading(true);

        if (!token) return

        axios.get(`${_static.URL}${url}`, {
            headers: { Authorization: 'Bearer ' + token },
        })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                setTimeout(() => {
                    setLoading(false)
                }, 500)

                // alert(JSON.stringify(err))
            })
    }, [url, token]);

    return { data, loading }
}

export const useMethods = () => {
    const { token } = useContext(UserContext)

    const post = async (url, data) => {
        try {
            const res = await axios.post(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })
            
            return [null, res]
        } catch (error) {
            return [error, null]
        }
    }

    const put = async (url, data) => {
        try {
            const res = await axios.put(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })

            return [null, res]
        } catch (error) {
            return [null, error]
        }
    }

    const remove = async (url, data) => {
        try {
            const res = await axios.delete(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })

            return [null, res]
        } catch (error) {
            return [null, error]
        }
    }

    return { post, put, remove };
}