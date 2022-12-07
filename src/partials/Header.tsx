import * as React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { logo, mail } from "../assets"
import { InnerWrap } from "./InnerWrap"

const StyledHeader = styled( "header" )`
background-color: #121212;
color: #fff;
`

const HeaderWrap = styled( InnerWrap )`
// display: flex;
// align-items: stretch;
background-color: transparent;

&:after {
    display: block;
    content: "";
    clear: both;
}

.logo-link {
    display: inline-block;
    float: left;
    margin: 16px;
}

.nav-link {
}

.nav-item {
    display: inline-flex;
    // flex-grow: 1;
    align-items: center;
    margin: 0 16px;
    // height: 100%;
    height: 80px;
    vertical-align: middle;
}

.balance-item {
    margin-right: 0;
    padding: 0 16px;
    min-width: 100px;
}
`

const Nav = styled( "nav" )`
flex-grow: 1;
font-size: 18px;
text-align: end;
text-transform: uppercase;
font-weight: bold;
`

const Logo = styled( "img" )`
float: left;
`

const TimeNow = styled( "span" )`
`

const Balance = styled( "span" )`
justify-content: center;
background-color: #61B510;
`

const Mail = styled( "img" )`
opacity: 0.7;
width: 28px;
`

interface Props {
    balance: number
}

export const Header: React.FunctionComponent<Props> = ( { balance } ) => {
    return <>
        <StyledHeader>
            <HeaderWrap>
                <Link className="logo-link" to="/">
                    <Logo src={logo} alt="DK logo" />
                </Link>
                <Nav>
                    <Link className="nav-link nav-item" to="/bots">UA Bots</Link>
                    <Link className="nav-link nav-item" to="/messages">
                        <Mail src={mail} alt="Bot messages" />
                    </Link>
                    <TimeNow className="nav-item">{Date.now()}</TimeNow>
                    <Link className="nav-link nav-item" to="/withdraw">Withdraw</Link>
                    <Balance className="nav-item balance-item">
                        UAH {balance}
                    </Balance>
                </Nav>
            </HeaderWrap>
        </StyledHeader>
    </>
}