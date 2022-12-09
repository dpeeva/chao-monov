import React from "react"
import { useDrag } from "react-dnd"
import styled from "styled-components"
import { BotsContext, MoneyContext } from "../context"

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
    const contextMoney = React.useContext(MoneyContext)

    const [{ isDragging, isOver }, dragRef] = useDrag(() => ({
        type: "image",
        item: { id: id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult) {
                const newList = context.list.filter(bot => item.id !== bot.id)
                context.setList(newList)
                contextMoney.setSum(contextMoney.sum + 76)
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            isOver: !!monitor.didDrop(),
        })
    }))

    const isDraggingClass = isDragging ? "isDragging" : "not-dragging"
    const isOverClass = isOver ? "isDropped" : "isOver"
    const classNames = [isDraggingClass, isOverClass]

    return <StyledItem ref={dragRef}>
        <BotImg src={url} alt="Bot image" className={classNames.join(" ")} />
    </StyledItem>
}