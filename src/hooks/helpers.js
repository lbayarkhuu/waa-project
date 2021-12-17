import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../providers/userProvider';
import _static from '../static';

export const useData = (url, initData, fail = []) => {
    const [data, setData] = useState(initData);
    const [loading, setLoading] = useState(null);
    const { token } = useContext(UserContext)

    useEffect(() => {
        setLoading(true);

        if (!token) return

        if (url.includes("undefined")) return

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
                    setData(fail)
                }, 500)

                // alert(JSON.stringify(err))
            })
    }, [url, token]);

    return { data, loading }
}

export const useMethods = () => {
    const { token } = useContext(UserContext)

    const get = async (url, data) => {
        try {
            const res = await axios.get(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })

            return [null, res.data]
        } catch (error) {
            return [error, null]
        }
    }

    const post = async (url, data) => {
        try {
            const res = await axios.post(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })

            console.log(res)
            
            return [null, res.data]
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                return [error.response.data, null];
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                return [error.request, null];
            } else {
                // The request was made but no response was received
                console.log(error.message);
                return [error.message, null];
            }
        }
    }

    const put = async (url, data) => {
        try {
            const res = await axios.put(`${_static.URL}${url}`, data, {
                headers: { Authorization: 'Bearer ' + token },
            })

            return [null, res]
        } catch (error) {
            return [error, null]
        }
    }

    const remove = async (url, data) => {
        try {
            const res = await axios.delete(`${_static.URL}${url}`, {
                headers: { Authorization: 'Bearer ' + token },
            })

            return [null, res]
        } catch (error) {
            return [error, null]
        }
    }

    return { get, post, put, remove };
}