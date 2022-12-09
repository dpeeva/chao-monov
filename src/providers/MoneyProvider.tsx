import * as React from "react"
import { MoneyContext } from "../context/MoneyContext"
import { MoneyState } from "../data/MoneyState"

export const MoneyProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <MoneyContext.Provider value={new MoneyState()}>
        {children}
    </MoneyContext.Provider>
)