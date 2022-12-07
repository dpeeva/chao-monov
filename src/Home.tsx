import React from "react"
import styled from "styled-components"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { InnerWrap } from "./partials/InnerWrap"
import { Monov_working } from "./assets"
import { useNavigate } from "react-router-dom"

const HomeWrap = styled(InnerWrap)`
padding-top: 60px;
min-height: calc(100vh - 80px);
text-align: center;
`
const Monov = styled("img")`
margin: 20px 0;
`

const StyledButton = styled(Button)`
margin-top: 60px;
`

function Home() {
    const navigate = useNavigate()
    return (
        <HomeWrap>
            <Monov src={Monov_working} alt="Monov working" />
            <Message size="large">Monov, let’s have some fun today!</Message>
            <Message size="medium">It’s your last day...</Message>
            <StyledButton
                onClick={() => navigate("/game")}
                color="orange"
            >Place Bots</StyledButton>
        </HomeWrap>
    )
}

export default Home