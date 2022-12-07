import React from "react"
import styled from "styled-components"
import { bots } from "../assets"
import { Message } from "../components"
import { InnerWrap } from "../partials"

const MessagesWrap = styled(InnerWrap)`
padding-top: 40px;
min-height: calc(100vh - 80px);
text-align: center;
`

const ChatList = styled("ul")`
`

const ChatItem = styled("li")`
`

const BotImg = styled("img")`
`

function Messages() {
    return (
        <MessagesWrap>
            <Message size="large">Messages</Message>
            <ChatList>
                {Object.values(bots).map(bot => (
                    <ChatItem key={bot} title={bot}>
                        <BotImg src={bot} alt="Bot image" />
                    </ChatItem>
                ))}
            </ChatList>
        </MessagesWrap>
    )
}

export default Messages