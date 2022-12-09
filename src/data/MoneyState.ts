import { action, observable } from "mobx"

export class MoneyState {
    @observable sum: number

    constructor() {
        this.sum = 0
    }

    @action
    setSum(sum: number) {
        this.sum = sum
    }
}