import React from "react"
import styled from "styled-components"

type ButtonColor = "green" | "orange"


const StyledButton = styled("button") <{ color: ButtonColor }>`
    ${props => props.color === "green" && `
        background-color: #61B510;
        &:hover {
            background-color: #2D9817;
        }
    `}
    ${props => props.color === "orange" && `
        background-color: #F7760D;
        &:hover {
            background-color: #E25919;
        }
    `}
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 12px;
    min-width: 260px;
    line-height: 70px;
`

interface Props extends React.PropsWithChildren<HTMLButtonElement & any> {
    color: ButtonColor
}

export const Button: React.FunctionComponent<Props> = (props) => {
    return <StyledButton {...props}>
        {props.children}
    </StyledButton>
}