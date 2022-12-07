import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"

const GameoverWrap = styled(InnerWrap)`
min-height: calc(100vh - 80px);
text-align: center;
`

function Gameover() {
    return (
        <GameoverWrap>
            Game Over
        </GameoverWrap>
    )
}

export default Gameover