import React from "react"
import { useNavigate } from "react-router-dom"
import { DndProvider, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import styled, { keyframes } from "styled-components"
import { arrow, bots, purifier } from "../assets"
import { BotImg, Button, Message } from "../components"
import { InnerWrap } from "../partials"

const GameWrap = styled(InnerWrap)`
position: relative;
padding-top: 20px;
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

&::selection {
    background: transparent;
}
::-moz-selection {
    background: transparent;
}
`

const StyledButton = styled(Button)`
position: absolute;
top: 250px;
right: 224px;
width: 300px;
height: 80px;
color: rgba(0,0,0, 0.7);
opacity: 0;
&:hover {
    color: #fff;
    background-color: #F7760D;
}
`

const BotsWrap = styled("div")`
position: absolute;
z-index: 1;
top: 90px;
left: 60px;
max-height: 580px;
overflow: hidden;
`

const BotsList = styled("ul")`
`

const rotateSpot = keyframes`
from { transform: rotate(0); }
to { transform: rotate(360deg); }
`

const BotsPlacedList = styled("ul")`
position: absolute;
top: 165px;
right: 265px;
border-radius: 50%;
width: 220px;
height: 220px;

&:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 8px dashed #61B510;
    border-radius: 50%;
    width: 204px;
    height: 204px;
    opacity: 0.7;
    animation: ${rotateSpot} 22s linear infinite;
}
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

const moveBackForth = keyframes`
0% { transform: translateX(-40px); }
50% { transform: translateX(100px); }
100% { transform: translateX(-40px); }
`

const ArrowImg = styled("img")`
position: absolute;
top: 360px;
left: 300px;
transform: translateX(0);
opacity: 1;
animation: ${moveBackForth} 2s ease-out infinite;
`

interface BotObject {
    id: string
    url: string
}

function Game() {
    const navigate = useNavigate()
    const source: BotObject[] = Object.entries(bots).map(entry => ({
        id: entry[0],
        url: entry[1]
    }))
    const [spot, setContent] = React.useState<Array<BotObject>>([])

    return (
        <DndProvider backend={HTML5Backend}>
            <GameWrap>
                <MessageStart size="large">Place the Bots in the Purifier, to get some cash</MessageStart>
                <MessageEnd size="large">All Bots purified</MessageEnd>
                <BotsWrap>
                    <BotsList>
                        {source.map(bot => (
                            <BotItem key={bot.id}>
                                <BotImg id={bot.id} url={bot.url} />
                            </BotItem>)
                        )}
                    </BotsList>
                </BotsWrap>
                <ArrowImg src={arrow} alt="Arrow" />
                <PurifierWrap>
                    <SecondaryMessage size="medium">Life can now continue...</SecondaryMessage>
                    <Purifier src={purifier} alt="Purifier" />
                    <BotsPlacedList>
                        {spot.map(bot => (
                            <BotItem key={bot.id}>
                                <BotImg id={bot.id} url={bot.url} />
                            </BotItem>)
                        )}
                    </BotsPlacedList>
                    <StyledButton
                        onClick={() => navigate("/hiring")}
                        color="green"
                    >Game Over</StyledButton>
                </PurifierWrap>
            </GameWrap>
        </DndProvider>
    )
}

export default Game