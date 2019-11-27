import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const TextIput = styled.input`
    width: 80%;
    font-size: 1.2rem;
    border: 2px solid grey;
    border-radius: 5px;
    padding: .5% 2%;
`


const SearchForm = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50')
            .then(response => {
                console.log(response)
                setCharacters(response)
            })
            .catch(error => {
                console.log('No game of thrones characters returned', error)
            })
    }, [])




    return (
        <div>
            <form>
                <TextIput
                    type='text'
                    name='search'
                    placeholder='Search by name, gender, culture'
                />
            </form>
        </div>
    )
}

export default SearchForm;