import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { background, colleagues } from "../assets"
import { Button, Message } from "../components"
import { InnerWrap } from "../partials"

const BotsWrap = styled(InnerWrap)`
padding-top: 40px;
min-height: calc(100vh - 80px);
text-align: center;
`

const BotsList = styled("ul")`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 40px 0;
`

const BotItem = styled("li")`
display: flex;
flex-direction: column;
margin: 20px 0;
min-width: 20%;
align-items: center;
align-self: baseline;
`

const BotImage = styled("img")`
max-width: 80px;
`

const BotName = styled(Message)`
padding: 10px 0;
font-weight: 700;
`

const BottomSection = styled("div")`
position: relative;
min-height: 340px;
overflow: hidden;
background-color: #000;
color: #fff;
text-align: center;
`

const BackgroundMessage = styled("div")`
position: relative;
z-index: 1;
padding: 60px 0;
`

const StyledMessage = styled(Message)`
font-weight: 700;
`

const BackgroundImg = styled("img")`
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
`

const StyledButton = styled(Button)`
margin-top: 40px;
`

type Bot = {
    name: string
    url: string
}

function Bots() {
    const navigate = useNavigate()
    const bots: Bot[] = Object.entries(colleagues).map(entry => ({
        name: entry[0],
        url: entry[1]
    }))

    return (
        <BotsWrap>
            <Message size="large">Say goodbye to your colleagues</Message>
            <BotsList>
                {bots.map((entry: Bot) => (
                    <BotItem key={entry.name}>
                        <BotImage src={entry.url} alt={entry.name} />
                        <BotName size="small">{entry.name}</BotName>
                    </BotItem>
                ))}
            </BotsList>

            <BottomSection>
                <BackgroundMessage>
                    <StyledMessage size="medium">You missed some chats on #Slack lately...</StyledMessage>
                    <StyledButton
                        onClick={() => navigate("/messages")}
                        color="orange"
                    >Load Messages</StyledButton>
                </BackgroundMessage>
                <BackgroundImg src={background} alt="Playground" />
            </BottomSection>
        </BotsWrap>
    )
}

export default Bots