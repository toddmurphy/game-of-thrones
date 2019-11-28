import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin-top: 3%;
`

const CardContainer = styled.div`
    border: 2px solid lightgrey;
    border-radius: 5px;
    width: 50%;
    padding: 3% 0;
    margin: auto;

    &:hover {
        background: dodgerblue;
        border: none;
        color: #FFF;
    }
`



const CharacterCard = (props) => {
    console.log(props);

    const { name, aliases, born, gender, playedBy, father, mother, culture, titles, } = props.character;
    return (
        <CardWrapper>
            <CardContainer>
                <p>Name: {name}</p>
                <div>Aliases: {aliases.map(alias => {
                    return <div key={alias}>{alias}</div>
                })}</div>
                <p>Born: {born}</p>
                <p>Gende: {gender}</p>
                <p>Played by: {playedBy}</p>
                <p>Father: {father}</p>
                <p>Mother: {mother}</p>
                <p>Culture: {culture}</p>
                <div>Titles: {titles.map(title => {
                    return <div key={title}>{title}</div>
                })}</div>
            </CardContainer>
        </CardWrapper>
    );
}

export default CharacterCard;

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