import axios from 'axios';
import { useState, useEffect } from 'react';
import _static from '../static';

export const useData = (url, initData) => {
    const [data, setData] = useState(initData); 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzOTQ0NDEwMywiZXhwIjoxNjM5NDYyMTAzfQ.dzUv5CCrVL09ltOPbQnthqjnAz0e5yLHUgabk6MNiMk";
        axios.get(`${_static.URL}/${url}`, { headers: { Authorization: 'Bearer ' + token } })

            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                setTimeout(() => {
                    setLoading(false)
                }, 500)

                console.alert(JSON.stringify(err))
            })
    }, [url]);

    return { data, loading }
}