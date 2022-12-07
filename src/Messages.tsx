import React from "react"
import styled from "styled-components"
import { InnerWrap } from "./partials/InnerWrap"

const MessagesWrap = styled(InnerWrap)`
min-height: calc(100vh - 80px);
text-align: center;
`

function Messages() {
    return (
        <MessagesWrap>
            Messages
        </MessagesWrap>
    )
}

export default Messages