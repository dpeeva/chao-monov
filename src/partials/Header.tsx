import * as React from 'react'
import styled from 'styled-components'

const StyledHeader = styled( "header" )`
display: flex;
padding: 16px;
background-color: #121212;
color: #fff;
`

const Nav = styled( "nav" )`
flex-grow: 1;
texta-lign: end;
`

const TimeNow = styled( "span" )`
`

const Balance = styled( "span" )``

interface Props {
    balance: number
}

export const Header: React.FunctionComponent<Props> = ( { balance } ) => {
    return <StyledHeader>
        <a href="#">
            <img src="../assets/DK_Logo.svg" />
        </a>
        <Nav>
            <a href="#">UA Bots</a>
            <TimeNow>{Date.now()}</TimeNow>
            <a href="#">Withsraw</a>
            <Balance>
                UAH {balance}
            </Balance>
        </Nav>
    </StyledHeader>
}