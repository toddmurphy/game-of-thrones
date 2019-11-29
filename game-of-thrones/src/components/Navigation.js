import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 1% 0;
    background: #000;
    color: #fff;
`

const LinkWrapper = styled.div`
    width: 20%;    
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size: 1.4rem; 
    color: #fff;
    padding: 0 2%;
    margin: 0 5%;
    width: 100;
`


const Navigation = () => {
    return (
        <NavigationWrapper>
            <LinkWrapper>
                <LinkStyle to='/'>Home</LinkStyle>
                <LinkStyle to='/Characters'>Characters</LinkStyle>
            </LinkWrapper>
        </NavigationWrapper>
    )
}

export default Navigation;