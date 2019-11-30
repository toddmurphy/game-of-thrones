import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardWrapper = styled.div`
    margin-top: 3%;
    width: 50%;
`

const CardContainer = styled.div`
    border: 2px solid lightgrey;
    border-radius: 5px;
    width: 80%;
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

    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');

    //Father useEffect to get url father name
    useEffect(() => {
        axios
            .get(props.character.father)
            .then(response => {
                // console.log(response.data.name)
                const fatherData = response.data.name;
                console.log(fatherData)
                const filteredFatherData = fatherData.filter(dad => dad !== "")

                setFatherName(filteredFatherData)
                // setFatherName(response.data.name)
            })
            .catch(error => {
                console.log('No father name data returned', error)
            })
    }, [props.character.father])

    //Father useEffect to get url mother name
    useEffect(() => {
        axios
            .get(props.character.mother)
            .then(response => {
                console.log(response.data.name)
                setMotherName(response.data.name)
            })
            .catch(error => {
                console.log('No mother name data returned', error)
            })
    }, [props.character.mother])


    const { name, aliases, born, gender, playedBy, culture, titles } = props.character;
    return (
        <CardWrapper>
            <CardContainer>
                <p>Name: {name}</p>
                <div>Aliases: {aliases.map(alias => {
                    return <div key={alias}>{alias}</div>
                })}</div>
                <p>Born: {born}</p>
                <p>Gender: {gender}</p>
                <p>Played by: {playedBy}</p>
                {/* <p>Father: {father}</p> */}
                <p>Father: {fatherName}</p>
                <p>Mother: {motherName}</p>
                {/* <div>Mother: {mother}</div> */}
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