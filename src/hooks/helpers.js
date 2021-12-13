import axios from 'axios';
import { useState, useEffect } from 'react';
import _static from '../static';

export const useData = (url, initData) => {
    const [data, setData] = useState(initData); 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);

        axios.get(`${_static.URL}/${url}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.alert(JSON.stringify(err))
            })
    }, [url]);

    return { data, loading }
}