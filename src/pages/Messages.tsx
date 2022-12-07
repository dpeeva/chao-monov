import React from "react"
import styled from "styled-components"
import { bots, mail } from "../assets"
import { Message } from "../components"
import { InnerWrap } from "../partials"

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
box-shadow: -1px 0px 5px 0px rgba(96,181,16,1);
`

const BotImg = styled("img")`
`

const MailBtn = styled("a")`
position: absolute;
bottom: 100px;
right: 25px;
cursor: pointer;
`

const MailImg = styled("img")`
`

function Messages() {
    return (
        <MessagesWrap>
            <Message size="large">Messages</Message>
            <ChatList>
                {Object.values(bots).map(bot => (
                    <ChatItem key={bot} title={bot}>
                        <BotImg src={bot} alt="Bot image" />
                        <MailBtn onClick={() => { }}>
                            <MailImg src={mail} alt="Mail" />
                        </MailBtn>
                    </ChatItem>
                ))}
            </ChatList>
        </MessagesWrap>
    )
}

export default Messages