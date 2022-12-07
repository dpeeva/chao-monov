import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"

const HiringWrap = styled(InnerWrap)`
min-height: calc(100vh - 80px);
text-align: center;
`

function Hiring() {
    return (
        <HiringWrap>
            Hiring
        </HiringWrap>
    )
}

export default Hiring