import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import background from "./assets/imgs/background.jpg"
import Robot_Agop from "./assets/imgs/Robot_Agop.svg"
import Robot_Boyan from "./assets/imgs/Robot_Boyan.svg"
import Robot_Bozho from "./assets/imgs/Robot_Bozho.svg"
import Robot_Dimitar from "./assets/imgs/Robot_Dimitar.svg"
import Robot_Georgi from "./assets/imgs/Robot_Georgi.svg"
import Robot_Maxim from "./assets/imgs/Robot_Maxim.svg"
import Robot_Simon from "./assets/imgs/Robot_Simon.svg"
import Robot_Svetlin from "./assets/imgs/Robot_Svetlin.svg"
import Robot_Vadym from "./assets/imgs/Robot_Vadym.svg"
import Robot_Yuriy from "./assets/imgs/Robot_Yuriy.svg"
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
                <BotItem>
                    <BotImage src={Robot_Boyan} alt="Robot_Boyan" />
                    <BotName size="medium">Boyan</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Bozho} alt="Robot_Bozho" />
                    <BotName size="medium">Bozho</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Agop} alt="Robot_Agop" />
                    <BotName size="medium">Agop</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Yuriy} alt="Robot_Yuriy" />
                    <BotName size="medium">Yuriy</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Maxim} alt="Robot_Maxim" />
                    <BotName size="medium">Maxim</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Svetlin} alt="Robot_Svetlin" />
                    <BotName size="medium">Svetlin</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Vadym} alt="Robot_Vadym" />
                    <BotName size="medium">Vadym</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Dimitar} alt="Robot_Dimitar" />
                    <BotName size="medium">Dimitar</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Georgi} alt="Robot_Georgi" />
                    <BotName size="medium">Georgi</BotName>
                </BotItem>
                <BotItem>
                    <BotImage src={Robot_Simon} alt="Robot_Simon" />
                    <BotName size="medium">Simon</BotName>
                </BotItem>
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