import * as React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../assets/DK_Logo.svg"

const StyledHeader = styled( "header" )`
display: flex;
background-color: #121212;
color: #fff;
align-items: center;
`

const Nav = styled( "nav" )`
flex-grow: 1;
font-size: 18px;
text-align: end;
text-transform: uppercase;
font-weight: bold;
align-items: stretch;

a {
    margin: 0 16px;
    color: #78CF51;
    text-decoration: none;
}
`

const Logo = styled( "img" )`
margin: 16px;
`

const TimeNow = styled( "span" )`
`

const Balance = styled( "span" )`
background-color: #78CF51;
`

interface Props {
    balance: number
}

export const Header: React.FunctionComponent<Props> = ( { balance } ) => {
    return <>
        <StyledHeader>
            <Link to="/">
                <Logo src={logo} alt="DK logo" />
            </Link>
            <Nav>
                <Link to="/bots">UA Bots</Link>
                <TimeNow>{Date.now()}</TimeNow>
                <Link to="/withdraw">Withdraw</Link>
                <Balance>
                    UAH {balance}
                </Balance>
            </Nav>
        </StyledHeader>
    </>
}