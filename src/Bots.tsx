import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"

const BotsWrap = styled(InnerWrap)`
min-height: calc(100vh - 80px);
text-align: center;
`

function Bots() {
    return (
        <BotsWrap>
        </BotsWrap>
    )
}

export default Bots