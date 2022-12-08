import React from "react"
import { useDrag } from "react-dnd"
import styled from "styled-components"

const StyledImg = styled("img")`
background-color: transparent;
`

interface Props extends React.PropsWithRef<HTMLImageElement & any> {
    url: string
}

export const BotImg: React.FunctionComponent<Props> = ({ id, url }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return <StyledImg src={url} alt="Bot image" ref={dragRef} className={isDragging ? "isDragging" : "not-dragging"} />
}