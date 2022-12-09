import React from "react"
import { bots } from "../assets"
import { BotObject } from "../types"

export const botsList: BotObject[] = Object.entries(bots).map(
    entry => ({
        id: entry[0],
        url: entry[1]
    })
)

export const BotsContext = React.createContext({
    list: botsList,
    setList: (list: BotObject[]) => { },
})
