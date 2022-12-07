import * as React from "react"
import styled from "styled-components"

type MessageSize = "large" | "medium"

const StyledMessage = styled("div") <{ size: MessageSize }>`
    ${props => props.size === "large" && `
        font-weight: 800; // Extra Bold
        font-size: 36px;
    `}
    ${props => props.size === "medium" && `
        font-size: 28px;
    `}
`

interface Props extends React.PropsWithChildren<HTMLDivElement & any> {
    size: MessageSize
}

export const Message: React.FunctionComponent<Props> = (props) => {
    return <StyledMessage {...props}>
        {props.children}
    </StyledMessage>
}