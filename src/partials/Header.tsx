import * as React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { logo, slack } from "../assets"
import { InnerWrap } from "./InnerWrap"
import { Clock } from "../components"

const StyledHeader = styled("header")`
background-color: #121212;
color: #fff;
`

const HeaderWrap = styled(InnerWrap)`
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

.nav-item {
    display: inline-flex;
    align-items: center;
    margin: 0 16px;
    height: 80px;
    vertical-align: middle;
}

.balance-item {
    margin-right: 0;
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
`

const Logo = styled("img")`
float: left;
`

const TimeNow = styled("span")`
`

const Balance = styled("span")`
justify-content: center;
background-color: #61B510;
`

const Mail = styled("img")`
width: 22px;
&:hover {
    transform: scale(1.4);
}
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
                    <Link className="nav-item" to="/bots">UA Bots</Link>
                    <Link className="nav-item" to="/messages">
                        <Mail src={slack} alt="Bot messages" />
                    </Link>
                    <TimeNow className="nav-item">
                        <Clock />
                    </TimeNow>
                    <Link className="nav-item" to="/withdraw">Withdraw</Link>
                    <Balance className="nav-item balance-item">
                        UAH {balance}
                    </Balance>
                </Nav>
            </HeaderWrap>
        </StyledHeader>
    </>
}