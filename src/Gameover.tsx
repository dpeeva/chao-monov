import React from "react"
import styled from "styled-components"
import { chao, Monov } from "./assets"
import { Message } from "./components/Message"
import { InnerWrap } from "./partials/InnerWrap"
import { requirements } from "./data/requirements"

const GameoverWrap = styled(InnerWrap)`
padding: 40px 80px;
min-height: calc(100vh - 80px);
`

const FeaturesList = styled("ul")`
padding: 20px 40px 40px 80px;
max-width: 65%;
`

const PositionRequirements = styled("div")`
display: flex;
`

const FeatureItem = styled("li")`
position: relative;
margin: 16px 0;
font-size: 20px;

&:before {
    position: absolute;
    top: 11px;
    left: -24px;
    display: block;
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #61B510;
}
`

const ImageWrap = styled("div")`
padding: 40px 0;
font-family: "Saira Condensed", "Open Sans Condensed", sans-serif;
text-align: right;
max-width: 35%;
`

const MonovImg = styled("img")`
width: 100%;
`

const MonovName = styled(Message)`
text-transform: uppercase;
`

const MonovPosition = styled("div")`
color: #61B510;
font-size: 24px;
font-weight: 600;
text-transform: uppercase;
line-height: 1;
`

const GoodbyeWrap = styled("div")`
text-align: center;
`

const GoodbyeMessage = styled("div")`
color: #61B510;
font-size: 48px;
font-weight: 700;
`

const ChaoImg = styled("img")`
margin-top: 30px;
`

function Gameover() {
    return (
        <GameoverWrap>
            <Message size="large">Position Requirements</Message>
            <PositionRequirements>
                <FeaturesList>
                    {requirements.map((item, i) => (
                        <FeatureItem key={i}>{item}</FeatureItem>
                    ))}
                </FeaturesList>

                <ImageWrap>
                    <MonovImg src={Monov} alt="Nikolay Monov" />
                    <MonovName size="large">Nikolay MOnov</MonovName>
                    <MonovPosition>Senior Lead Software Engineer</MonovPosition>
                </ImageWrap>
            </PositionRequirements>
            <GoodbyeWrap>
                <GoodbyeMessage>Chao, Monov!</GoodbyeMessage>
                <ChaoImg src={chao} alt="Chao, Nikolay Monov!" />
            </GoodbyeWrap>
        </GameoverWrap>
    )
}

export default Gameover