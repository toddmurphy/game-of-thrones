import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavigationWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1% 0;
    background: #000;
    color: #fff;
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    margin-right: 15%;
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
                <LinkStyle to='/Home'>Home</LinkStyle>
                <LinkStyle to='/Characters'>Characters</LinkStyle>
            </LinkWrapper>
        </NavigationWrapper>
    )
}

export default Navigation;