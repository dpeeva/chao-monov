import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Oksana } from "../assets"
import { Button, Message } from "../components"
import { InnerWrap } from "../partials"

const HiringWrap = styled(InnerWrap)`
position: relative;
padding-top: 80px;
min-height: calc(100vh - 80px);
background-color: #0B2A3C;
color: #fff;
text-align: center;
`

const StyledMessage = styled(Message)`
font-weight: normal;
`

const StyledButton = styled(Button)`
margin: 40px 0;
`

const HRWrap = styled("div")`
position: absolute;
left: 0;
bottom: 0;
width: 100%;
`

const OksanaImg = styled("img")`
position: absolute;
left: 20%;
bottom: 0;
`

const HRInfo = styled("div")`
position: absolute;
right: 0;
bottom: 0;
padding-left: 50%;
padding-bottom: 80px;
width: 100%;
text-align: left;
`

const AddressLine = styled("div")`
color: rgba(255,255,255, 0.7);
font-size: 26px;
font-weight: 700;
`

const Name = styled("div")`
font-size: 36px;
font-weight: 700;
`

const Position = styled("div")`
font-size: 28px;
font-weight: 700;
`

function Hiring() {
    const navigate = useNavigate()
    return (
        <HiringWrap>
            <StyledMessage size="large">Are you the new Monov?</StyledMessage>
            <StyledButton
                onClick={() => navigate("/gameover")}
                color="orange"
            >Now Hiring</StyledButton>
            <HRWrap>
                <OksanaImg src={Oksana} alt="Oksana hiring" />
                <HRInfo>
                    <AddressLine>careers.draftkings.com</AddressLine>
                    <Name>OKSANA KORNIIENKO</Name>
                    <Position>Talent Acquisition Specialist</Position>
                </HRInfo>
            </HRWrap>
        </HiringWrap>
    )
}

export default Hiring