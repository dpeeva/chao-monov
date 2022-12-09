import { botsList } from "../context"
import { BotObject } from "../types"

export class BotsState {
    list: BotObject[]

    constructor() {
        this.list = botsList
    }

    setList(list: BotObject[]) {
        this.list = list
    }
}