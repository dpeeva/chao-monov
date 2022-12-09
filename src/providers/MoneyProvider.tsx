import * as React from "react"
import { MoneyContext } from "../context/MoneyContext"

export const MoneyProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    const [sum, setSum] = React.useState(MoneyContext)
    const initState = {
        sum: 100,
        setSum: (sum: number) => {
            console.log(sum)
        }
    }

    return <MoneyContext.Provider value={initState}>
        {children}
    </MoneyContext.Provider>
}