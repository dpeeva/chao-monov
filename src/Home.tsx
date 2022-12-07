import React from "react"
import styled from "styled-components"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { InnerWrap } from "./partials/InnerWrap"
import Monov_working from "./assets/imgs/Monov_working.svg"

const HomeWrap = styled(InnerWrap)`
padding-top: 60px;
min-height: calc(100vh - 80px);
text-align: center;

.placeBots {
    margin-top: 60px;
}
`
const Monov = styled("img")`
margin: 20px 0;
`

function Home() {
    return (
        <HomeWrap>
            <Monov src={Monov_working} alt="Monov working" />
            <Message size="large">Monov, let’s have some fun today!</Message>
            <Message size="medium">It’s your last day...</Message>
            <Button className="placeBots" color="orange">Place Bots</Button>
        </HomeWrap>
    )
}

export default Home