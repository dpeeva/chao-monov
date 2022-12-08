import React from "react"
import styled from "styled-components"
import { Message } from "../components"
import { InnerWrap } from "../partials"

const NotFoundWrap = styled(InnerWrap)`
padding-top: 80px;
min-height: calc(100vh - 80px);
text-align: center;
`

function NotFound() {
    return (
        <NotFoundWrap>
            <Message size="large">404: Nothing to be found here...</Message>
        </NotFoundWrap >
    )
}

export default NotFound