import * as React from "react"
import { BotsContext, botsList } from "../context"

export const BotsProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    const [list, setList] = React.useState([])
    const initState = {
        list: botsList,
        setList: () => { },
    }

    return <BotsContext.Provider value={initState}>
        {children}
    </BotsContext.Provider>
}