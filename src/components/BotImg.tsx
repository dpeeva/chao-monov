import React from "react"
import { useDrag } from "react-dnd"
import styled from "styled-components"

const StyledImg = styled("img")`
`

interface Props extends React.PropsWithRef<HTMLImageElement & any> {
    url: string;
}

export const BotImg: React.FunctionComponent<Props> = ({ id, url }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return <StyledImg src={url} alt="Bot image" ref={drag} className={isDragging ? "isDragging" : "not-dragging"} />
}