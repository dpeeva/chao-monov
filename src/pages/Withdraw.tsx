import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Money } from "../assets"
import { Button, Message } from "../components"
import { MoneyContext } from "../context/MoneyContext"
import { InnerWrap } from "../partials"

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
    const context = React.useContext(MoneyContext)

    return (
        <WithdrawWrap>
            {context.sum !== 0
                ? <StyledMessage id="money-message" size="large">Your money:</StyledMessage>
                : <></>
            }
            {
                // on context change to 0
                false && <StyledMessage id="success-message" size="large">Success!</StyledMessage>
            }
            <Pocket>{context.sum}</Pocket>
            <Label>Available</Label>
            {context.sum === 0 &&
                <Message id="no-money-message" size="medium">No money yet,  place some Bots first.</Message>
            }
            {context.sum !== 0
                ? <StyledButton
                    id="withdrawBtn"
                    onClick={() => context.setSum(0)}
                    color="orange"
                >Withdraw</StyledButton>
                : <StyledButton
                    id="placeBotsBtn"
                    onClick={() => navigate("/game")}
                    color="orange"
                >Place Bots</StyledButton>
            }
            {
                // on context change to 0
                false && <MoneyImg id="money-sack-img" src={Money} alt="Money sack" />
            }
        </WithdrawWrap>
    )
}

export default Withdraw