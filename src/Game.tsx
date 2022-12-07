import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"
import purifier from "./assets/imgs/purifier.svg"
import { Button } from "./components/Button"
import { Message } from "./components/Message"

const GameWrap = styled(InnerWrap)`
background-color: #000;
min-height: calc(100vh - 80px);
text-align: center;
`

const MessageStart = styled(Message)`
color: #fff;
`

const MessageEnd = styled(Message)`
display: none;
color: #fff;
`

const SecondaryMessage = styled(Message)`
position: absolute;
top: 50%;
transform: translateY(-40px);
left: 50px;
color: rgba(255,255,255, 0.8);
`

const PurifierWrap = styled("div")`
position: relative;
margin-top: 40px;
min-height: 600px;
text-align: right;
`

const Purifier = styled("img")`
position: absolute;
top: 0;
right: 0;
`
const StyledButton = styled(Button)`
position: absolute;
top: 250px;
right: 184px;
width: 300px;
height: 80px;
color: rgba(0,0,0, 0.7);
&:hover {
    color: #fff;
    background-color: #F7760D;
}
`

function Game() {
    return (
        <GameWrap>
            <MessageStart size="large">Place the Bots in the Purifier</MessageStart>
            <MessageEnd size="large">All Bots purified</MessageEnd>
            <PurifierWrap>
                <SecondaryMessage size="medium">Life can now continue...</SecondaryMessage>
                <Purifier src={purifier} alt="Monov working" />
                <StyledButton href="/game" color="green">Game Over</StyledButton>
            </PurifierWrap>
        </GameWrap>
    )
}

export default Game