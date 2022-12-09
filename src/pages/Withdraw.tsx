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
    const [moneyTaken, setMoneyTaken] = React.useState(false)

    let sum = context.sum

    const handleWithdraw = () => {
        setMoneyTaken(true)
    }

    return <WithdrawWrap>
        {sum !== 0
            ? <>
                {!moneyTaken
                    ? <StyledMessage id="money-message" size="large">Your money:</StyledMessage>
                    : <StyledMessage id="success-message" size="large">Success!</StyledMessage>
                }
                {!moneyTaken && <>
                    <Pocket>{sum}</Pocket>
                    <Label>Available</Label>
                </>}
                {!moneyTaken
                    ? <StyledButton
                        id="withdrawBtn"
                        onClick={() => handleWithdraw()}
                        color="orange"
                    >Withdraw</StyledButton>
                    : <>
                        <MoneyImg id="money-sack-img" src={Money} alt="Money sack" />
                        <StyledButton
                            id="hrBtn"
                            onClick={() => navigate("/hiring")}
                            color="orange"
                        >Go to HR</StyledButton>
                    </>
                }
            </>
            : <>
                <Pocket>{sum}</Pocket>
                <Message id="no-money-message" size="medium">No money yet,  place some Bots first.</Message>
                <StyledButton
                    id="placeBotsBtn"
                    onClick={() => navigate("/game")}
                    color="orange"
                >Place Bots</StyledButton>
            </>
        }
    </WithdrawWrap>
}

export default Withdraw