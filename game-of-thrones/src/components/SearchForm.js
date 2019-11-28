import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
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
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get('https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50')
            .then(response => {
                console.log(response)
                const characterData = response.data;

                //search query filters --> name, gender culture
                const result = characterData.filter(character => {
                    return (
                        character.name.toLowerCase().includes(query.toLowerCase()) ||
                        character.gender.toLowerCase().includes(query.toLowerCase()) ||
                        character.culture.toLowerCase().includes(query.toLowerCase())
                    )
                })
                console.log(result);
                setCharacters(result);
            })
            .catch(error => {
                console.log('No game of thrones characters returned', error)
            })
    }, [query])


    //add 'onInputChange' handler to watch for input changes
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <form>
                <TextIput
                    type='text'
                    name='search'
                    placeholder='Search by name, gender, culture'
                    onChange={handleInputChange}
                    value={query}
                />
            </form>
            {characters.map((character, index) => (
                <CharacterCard key={index} character={character} />
            ))}
        </div>
    )
}

export default SearchForm;

// aliases: [""]
// allegiances: ["https://www.anapioficeandfire.com/api/houses/83"]
// books: ["https://www.anapioficeandfire.com/api/books/3"]
// born: ""
// culture: ""
// died: ""
// father: ""
// gender: "Male"
// mother: ""
// name: "Aemon Costayne"
// playedBy: [""]
// povBooks: []
// spouse: ""
// titles: [""]
// tvSeries: [""]
// url: "https://www.anapioficeandfire.com/api/characters/51"