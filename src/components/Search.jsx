import React, { useEffect, useEffect, useState } from "react";
import axios from 'axios';
import { Button } from React
import '../css/Header.css';

function Search() {
    useEffect(() => {
        handleInitialLoad() {
            let url;
            if ((window.location.href).split('=')[1] !== undefined) {
                let temp = (window.location.href).split('='[1],
                url = '/*url/${temp}',
            } else {
                url = '/*url';
            }
            let result = await axios({
                method: 'get',
                baseURL: SERVER_URL,
                url: url
            });
            setData(result.data);
        }
    }, []);
    let [query, setQuery] = useState();
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    async function handleSubmit() {
        let url;
        if (query !== undefined) {
            url = query ? '/url/${query}' : 'url';
        } else if ((window.location.href).split('=')[1] !== undefined) {
            let temp = (window.location.href ).split('=')[1];
            url = '/url/${temp}';
        } else {
            url: '/url';
        }
        let result = await axios({
            method: 'get',
            baseURL: SERVER_URL,    
            url: url
        });
        setData(result.data);
    }

    return (
        <div>
            <div>
                <TextField id = "outlined-basic" onChange={handleChange} label="Search" variant="outlined" />
            </div>
            <div>
                <Button onClick={handleSubmit} variant="outlined" > Submit</Button> 
            </div>

        </div>
    )
}

export default Search;