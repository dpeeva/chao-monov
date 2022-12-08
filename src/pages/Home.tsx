import React from "react"
import { useNavigate } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { Monov_working } from "../assets"
import { Button, Message } from "../components"
import { InnerWrap } from "../partials"

const HomeWrap = styled(InnerWrap)`
padding-top: 60px;
min-height: calc(100vh - 80px);
text-align: center;
`

const Monov = styled("img")`
margin: 20px 0;
`

const typing = keyframes`
from { width: 0; }
to { width: 100%; }
`
const blinkCaret = keyframes`
from { border-color: transparent; }
to { border-color: transparent; }
50% { border-color: orange; }
`
const showText = keyframes`
from { opacity: 0; }
to { opacity: 1; }
`

const FunMessage = styled(Message)`
margin: 0 auto;
width: 460px;
max-width: 460px;
overflow: hidden; // Ensures the content is not revealed during the animation
border-right: 3px solid #F7760D;// The typwriter cursor
white-space: nowrap; // Keeps the content on a single line
animation: ${typing} 8s steps(30, end), ${blinkCaret} .8s step-end infinite;
`

const LastDayMessage = styled(Message)`
animation: ${showText} 4s 3s 3;
opacity: 0;
`

const StyledButton = styled(Button)`
margin-top: 60px;
`

function Home() {
    const navigate = useNavigate()
    return (
        <HomeWrap>
            <Monov src={Monov_working} alt="Monov working" />
            <FunMessage size="large">Monov, let’s have some fun today!</FunMessage>
            <LastDayMessage size="medium">It’s your last day...</LastDayMessage>
            <StyledButton
                onClick={() => navigate("/game")}
                color="orange"
            >Place Bots</StyledButton>
        </HomeWrap>
    )
}

export default Home