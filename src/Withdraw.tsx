import React from "react"
import styled from "styled-components"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { InnerWrap } from "./partials/InnerWrap"
import Money from "./assets/imgs/Money.svg"
import { useNavigate } from "react-router-dom"

const WithdrawWrap = styled(InnerWrap)`
padding-top: 80px;
min-height: calc(100vh - 80px);
text-align: center;
`

const StyledMessage = styled(Message)`
font-weight: 600;
font-size: 40px;
`

const Pocket = styled("div")`
font-size: 128px;
font-weight: 800;
`

const Label = styled("div")`
font-size: 48px;
font-weight: 700;
`

const StyledButton = styled(Button)`
margin: 40px 0;
`

const MoneyImg = styled("img")`
display: block;
margin: 0 auto;
`

function Withdraw() {
    const navigate = useNavigate()
    return (
        <WithdrawWrap>
            <StyledMessage id="money-message" size="large">Your money:</StyledMessage>
            <StyledMessage id="success-message" size="large">Success!</StyledMessage>
            <Pocket>0</Pocket>
            <Label>Available</Label>
            <Message id="no-money-message" size="medium">No money yet,  place some Bots first.</Message>
            <StyledButton
                id="withdrawBtn"
                onClick={() => { }}
                color="orange"
            >Withdraw</StyledButton>
            <StyledButton
                id="placeBotsBtn"
                onClick={() => navigate("/game")}
                color="orange"
            >Place Bots</StyledButton>
            <MoneyImg id="money-sack-img" src={Money} alt="Money sack" />
        </WithdrawWrap>
    )
}

export default Withdraw