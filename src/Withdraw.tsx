import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"

const WithdrawWrap = styled(InnerWrap)`
min-height: calc(100vh - 80px);
text-align: center;
`

function Withdraw() {
    return (
        <WithdrawWrap>
            Withdraw
        </WithdrawWrap>
    )
}

export default Withdraw