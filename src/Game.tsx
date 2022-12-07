import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"
import { arrow, purifier } from "./assets"
import { bots } from "./assets"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { useNavigate } from "react-router-dom"

const GameWrap = styled(InnerWrap)`
position: relative;
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
display: none;
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
right: 40px;
`

const StyledButton = styled(Button)`
position: absolute;
top: 250px;
right: 224px;
width: 300px;
height: 80px;
color: rgba(0,0,0, 0.7);
&:hover {
    color: #fff;
    background-color: #F7760D;
}
`

const BotsWrap = styled("div")`
position: absolute;
top: 90px;
left: 60px;
max-height: 580px;
overflow: hidden;
`

const BotsList = styled("ul")`
`

const BotItem = styled("li")`
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0;
border-radius: 50%;
width: 140px;
height: 140px;
background-color: #fff;
`

const BotImg = styled("img")`
`

const ArrowImg = styled("img")`
position: absolute;
top: 360px;
left: 300px;
`

function Game() {
    const navigate = useNavigate()
    return (
        <GameWrap>
            <MessageStart size="large">Place the Bots in the Purifier</MessageStart>
            <MessageEnd size="large">All Bots purified</MessageEnd>
            <BotsWrap>
                <BotsList>
                    {Object.values(bots).map(value => (
                        <BotItem key={value}>
                            <BotImg src={value} alt="Bot image" />
                        </BotItem>)
                    )}
                </BotsList>
            </BotsWrap>
            <ArrowImg src={arrow} alt="Arrow" />
            <PurifierWrap>
                <SecondaryMessage size="medium">Life can now continue...</SecondaryMessage>
                <Purifier src={purifier} alt="Monov working" />
                <StyledButton
                    onClick={() => navigate("/hiring")}
                    color="green"
                >Game Over</StyledButton>
            </PurifierWrap>
        </GameWrap>
    )
}

export default Game