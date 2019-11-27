import React from 'react';



const CharacterCard = (props) => {
    console.log(props);

    const { name, born, gender, father, mother, culture, titles } = props.character;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Born: {born}</p>
            <p>Gende: {gender}</p>
            <p>Father: {father}</p>
            <p>Mother: {mother}</p>
            <p>Culture: {culture}</p>
            <p>Titles: {titles}</p>
        </div>
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