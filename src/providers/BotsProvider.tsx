import * as React from "react"
import { BotsContext } from "../context"
import { BotsState } from "../data/BotsState"

export const BotsProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <BotsContext.Provider value={new BotsState()}>
        {children}
    </BotsContext.Provider>
)