import React from "react"
import styled from "styled-components"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import { bots, mail } from "../assets"
import { Message } from "../components"
import { InnerWrap } from "../partials"
import { messages } from "../data/messages"

const MessagesWrap = styled(InnerWrap)`
padding-top: 40px;
min-height: calc(100vh - 80px);
text-align: center;
`

const ChatList = styled("ul")`
display: flex;
flex-wrap: wrap;
padding: 20px 60px;
`

const ChatItem = styled("li")`
position: relative;
margin: 10px;
padding: 30px 0;
width: 220px;
height: 160px;
text-align: center;
box-shadow: -1px 0px 5px 0px rgba(186,186,186,0.75);
`

const BotImg = styled("img")`
`

const MailBtn = styled("a")`
position: absolute;
z-index: 1;
bottom: 100px;
right: 20px;
cursor: pointer;
`

const MailImg = styled("img")`
`

const TooltipContent = styled("div")`
max-width: 200px;
font-size: 18px;
text-align: left;
`

const TooltipAuthor = styled("div")`
font-size: 16px;
text-align: right;
`

function Messages() {
    const botsArray = Object.values(bots)
    return (
        <MessagesWrap>
            <Message size="large">Messages</Message>
            <ChatList>
                {messages.map((m, i) => {
                    const bot = botsArray[i + 1]
                    return <ChatItem key={bot}>
                        <BotImg src={bot} alt="Bot image" />
                        <MailBtn
                            id={`bot-${i}`}
                            onClick={() => { }}
                            data-tooltip-content={m.text}
                        >
                            <Tooltip anchorId={`bot-${i}`}>
                                <TooltipContent>{m.text}</TooltipContent>
                                <TooltipAuthor>— {m.name}</TooltipAuthor>
                            </Tooltip>
                            <MailImg src={mail} alt="Mail" />
                        </MailBtn>
                    </ChatItem>
                })}
            </ChatList>
        </MessagesWrap >
    )
}

export default Messages