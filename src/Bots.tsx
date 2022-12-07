import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { background, colleagues } from "./assets"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { InnerWrap } from "./partials/InnerWrap"

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
max-width: 90px;
`

const BotName = styled(Message)`
padding: 10px 0;
font-weight: 700;
`

const BottomSection = styled("div")`
position: relative;
min-height: 350px;
overflow: hidden;
color: #fff;
text-align: center;
`

const BackgroundMessage = styled("div")`
position: relative;
z-index: 1;
padding: 80px 0;
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

function Bots() {
    const navigate = useNavigate()
    return (
        <BotsWrap>
            <Message size="large">Say goodbye to your colleagues</Message>
            <BotsList>
                {Object.entries(colleagues).map(entry => (
                    <BotItem key={entry[0]}>
                        <BotImage src={entry[1]} alt={`${entry[1]}`} />
                        <BotName size="medium">{entry[0]}</BotName>
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