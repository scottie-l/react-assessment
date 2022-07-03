import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent } from 'React';

const SERVER_URL = proces.env.REACT_APP_SERVER_URL;

function results() {

    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults();
    }, []);

    async function getResults() {
        let serverURL = `${serverURL}/Cats`; // API Url here
        let gottenResults = await axios.get(serverURL);
        setResults(gottenResults.data);
    };

    return (
        <>
            <div>
                <h2>Title</h2>
            </div>
            {results.length > 0 ? (
                <Form 
                {
                    results.slice().map((result, idx) => (
                        <div key={idx}>
                        ))
                )
            }            
            )
      </>
    )
}
