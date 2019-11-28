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

const Button = styled.button`
  color: dodgerblue;
  font-size: 1em;
  width: 10%;
  height: 45px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dodgerblue;
  border-radius: 3px; 

  &:hover {
      background: dodgerblue;
      color: #FFF;
  } 
`

const NextButton = styled(Button)`
    color: salmon;
    border-color: salmon;

    &:hover {
        background: salmon;
        columns: #FFF;
    }
`

const FirstButton = styled(Button)`
    background: #000;
    color: #FFF;
    border: #000;

    &:hover {
        background: #FFF;
        border: #000;
    }
`

const LastButton = styled(Button)`
    background: green;
    color: #FFF;
    border: green;
`

const GridDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SearchForm = () => {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState('');
    //Pagination setup --> starts at page 1 --> https://anapioficeandfire.com/Documentation#pagination
    const [page, setPage] = useState(1)

    // 'https://www.anapioficeandfire.com/api/characters?page=2&pageSize=50'

    useEffect(() => {
        axios.get(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`)
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
                setPage(page - 1);
            })
    }, [query, page])


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
            <FirstButton onClick={() => setPage(page === 1)} >First</FirstButton>
            <Button onClick={() => setPage(page - 1)} >Previous</Button>
            <NextButton onClick={() => setPage(page + 1)} >Next</NextButton>
            <LastButton>Last</LastButton>
            <GridDiv>
                {characters.map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))}
            </GridDiv>
            <FirstButton>First</FirstButton>
            <Button >Previous</Button>
            <NextButton>Next</NextButton>
            <LastButton>Last</LastButton>
        </div >
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