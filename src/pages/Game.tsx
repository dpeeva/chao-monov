import React from "react"
import { useNavigate } from "react-router-dom"
import { useDrop } from "react-dnd"
import styled, { keyframes } from "styled-components"
import { arrow, purifier } from "../assets"
import { BotItem, Button, Message } from "../components"
import { InnerWrap } from "../partials"
import { BotsContext } from "../context"
import { BotObject } from "../types"

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
display: none;
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
display: flex;
justify-content: center;
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

function Game() {
    const navigate = useNavigate()
    const context = React.useContext(BotsContext)

    const [droppedList, setContent] = React.useState<Array<BotObject>>([])

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "image",
        drop: (item: BotObject) => addToSpotList(item.id), // function to execute on drop
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addToSpotList = (id: string) => {
        console.log(id)
        const list = context.list.filter((bot: BotObject) => id == bot.id)
        setContent(spotList => [list[0]])
    }

    return (
        <GameWrap>
            <MessageStart size="large">Place the Bots in the Purifier, to get some cash</MessageStart>
            <MessageEnd size="large">All Bots purified</MessageEnd>
            <BotsWrap>
                <BotsList>
                    {context.list.map(bot => (
                        <BotItem key={bot.id} id={bot.id} url={bot.url}>
                        </BotItem>
                    ))}
                </BotsList>
            </BotsWrap>
            <ArrowImg src={arrow} alt="Arrow" />
            <PurifierWrap>
                <SecondaryMessage size="medium">Life can now continue...</SecondaryMessage>
                <Purifier src={purifier} alt="Purifier" />
                <BotsPlacedList ref={dropRef}>
                    {droppedList.map((bot: BotObject) => (
                        <BotItem key={bot.id} id={bot.id} url={bot.url}></BotItem>
                    ))}
                </BotsPlacedList>
                <StyledButton
                    onClick={() => navigate("/hiring")}
                    color="green"
                >Game Over</StyledButton>
            </PurifierWrap>
        </GameWrap >
    )
}

export default Game