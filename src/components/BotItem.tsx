import React from "react"
import { useDrag } from "react-dnd"
import styled from "styled-components"
import { BotsContext } from "../context/BotsContext"

const StyledItem = styled("li")`
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0;
border-radius: 50%;
width: 140px;
height: 140px;
background-color: #fff;
`

const BotImg = styled("img")`
background-color: transparent;
`

interface DropResult {
}

interface Props extends React.PropsWithRef<HTMLImageElement & any> {
    url: string
}

export const BotItem: React.FunctionComponent<Props> = ({ id, url }) => {
    const context = React.useContext(BotsContext)
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "image",
        item: { id: id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            console.log(dropResult)
            if (item && dropResult) {
                console.log(`You dropped ${item.id}!`)
                // update context => removeBot(item.id)
                const newList = context.list.filter(bot => item.id !== bot.id)
                context.setList(newList)
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return <StyledItem>
        <BotImg src={url} alt="Bot image" ref={dragRef} className={isDragging ? "isDragging" : "not-dragging"} />
    </StyledItem>
}