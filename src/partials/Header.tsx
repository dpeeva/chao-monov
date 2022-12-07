import * as React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../assets/DK_Logo.svg"
import { InnerWrap } from "./InnerWrap"

const StyledHeader = styled("header")`
background-color: #121212;
color: #fff;
`

const HeaderWrap = styled(InnerWrap)`
display: flex;
align-items: stretch;

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
    margin: 0 16px;
}

.nav-item {
    display: inline-flex;
    align-items: center;
    height: 100%;
    flex-grow: 1;
}

.balance-item {
    padding: 0 16px;
    min-width: 100px;
}
`

const Nav = styled("nav")`
flex-grow: 1;
font-size: 18px;
text-align: end;
text-transform: uppercase;
font-weight: bold;

a {
    color: #78CF51;
    text-decoration: none;
}
`

const Logo = styled("img")`
float: left;
`

const TimeNow = styled("span")`
`

const Balance = styled("span")`
background-color: #78CF51;
`

interface Props {
    balance: number
}

export const Header: React.FunctionComponent<Props> = ({ balance }) => {
    return <>
        <StyledHeader>
            <HeaderWrap>
                <Link className="logo-link" to="/">
                    <Logo src={logo} alt="DK logo" />
                </Link>
                <Nav>
                    <Link className="nav-link nav-item" to="/bots">UA Bots</Link>
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